import schedule from 'node-schedule';
import fs from 'fs';
import { default as cfgColors } from '../config/colors.js';
import { default as cfgFilters } from '../config/filters.js';

async function generatejSON(prep = false) {
    console.log('generateStarted');
          
    const objPromisesList = {};
    
    cfgColors.map(function(item) {
        objPromisesList[item] = Array(4).fill().map(async function() {
          return fetch(`https://api.scryfall.com/cards/random?q=${cfgFilters[item]}`).then(response => {
              if (response.ok) {
                  return response.json();
              }
              return Promise.reject();
          }).then(function(json) {
              return json;
          });
      });
    });
    
    for (const [key, value] of Object.entries(objPromisesList)) {
        
      await Promise.allSettled(value).then((result) => {
        const refValue = result.map(i => i.value);
        objPromisesList[key] = refValue;
      });

      let FILE = `./public/json/card-${key}.json`;
  
      if(prep) {
         FILE = `./public/json/card-${key}-prep.json`;
      }
      
      fs.writeFile(FILE, JSON.stringify(JSON.stringify({ "cards": objPromisesList[key]})), (err) => err && console.error(err))
    };
}

const schedulejSON = schedule.scheduleJob('5/10 * * * *', async function() {
    const jonCreated = await generatejSON(true);
    console.log('gerou novo - ', new Date());
});

const schedulejSON2 = schedule.scheduleJob('*/10 * * * *', async function() {
    console.log('var copiar - ', new Date());

    cfgColors.map(function(key) {
        fs.readFile(`./public/json/card-${key}-prep.json`, function (error, content) {
            var data = JSON.parse(content);
            let FILE = `./public/json/card-${key}.json`;
            fs.writeFile(FILE, JSON.stringify(data), (err) => err && console.error(err));
        });
    });
    
    console.log('copiou - ', new Date());
});

const customGenerateJSON = async function() {
    await generatejSON(true);
    cfgColors.map(function(key) {
        fs.readFile(`./public/json/card-${key}-prep.json`, function (error, content) {
            var data = JSON.parse(content);
            let FILE = `./public/json/card-${key}.json`;
            fs.writeFile(FILE, JSON.stringify(data), (err) => err && console.error(err));
        });
    });
    console.log('custom generated');
}


export {schedulejSON, schedulejSON2, customGenerateJSON}