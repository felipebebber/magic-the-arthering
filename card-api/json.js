import schedule from 'node-schedule';
import fs from 'fs';
import { default as cfgColors } from '../config/colors.js';
import { default as cfgFilters } from '../config/filters.js';

// Create pack of cards for each color
async function generatejSON(prep = true) {
  console.log('generateStarted');

  const objPromisesList = {};

  cfgColors.map(function (item) {
    objPromisesList[item] = Array(4)
      .fill()
      .map(async function () {
        return fetch(`https://api.scryfall.com/cards/random?q=${cfgFilters[item]}`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
            return Promise.reject();
          })
          .then(function (json) {
            if (item === 'random') {
              console.log(json.id);
            }
            return json;
          })
          .catch(function (error) {
            console.log(error);
          });
      });
  });

  // Rewrite json file that will be used on api
  for (const [key, value] of Object.entries(objPromisesList)) {
    await Promise.allSettled(value).then((result) => {
      const refValue = result.map((i) => i.value);
      objPromisesList[key] = refValue;
    });

    let FILE = `./public/json/card-${key}-prep.json`;

    if (!prep) {
      FILE = `./public/json/card-${key}.json`;
    }

    fs.writeFile(
      FILE,
      JSON.stringify(JSON.stringify({ cards: objPromisesList[key] })),
      (err) => err && console.error(err),
    );
  }
}

// Create list every 5 minutes on the day
const schedulejSON = schedule.scheduleJob('5/10 * * * *', async function () {
  await generatejSON();
  console.log('create list after 5 minutes - ', new Date());
});

// Copy new list 10s before changing to user
const schedulejSON2 = schedule.scheduleJob('*/10 * * * *', async function () {
  console.log('will copy new list 10s before - ', new Date());

  cfgColors.map(function (key) {
    fs.readFile(`./public/json/card-${key}-prep.json`, function (error, content) {
      var data = JSON.parse(content);
      let FILE = `./public/json/card-${key}.json`;
      fs.writeFile(FILE, JSON.stringify(data), (err) => err && console.error(err));
    });
  });

  console.log('copied new list - ', new Date());
});

// Generate list when theres none
const customGenerateJSON = async function () {
  await generatejSON();
  cfgColors.map(function (key) {
    fs.readFile(`./public/json/card-${key}-prep.json`, function (error, content) {
      var data = JSON.parse(content);
      let FILE = `./public/json/card-${key}.json`;
      fs.writeFile(FILE, JSON.stringify(data), (err) => err && console.error(err));
    });
  });
  console.log('custom generated');
};

export { schedulejSON, schedulejSON2, customGenerateJSON };
