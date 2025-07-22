import fs from 'fs';

const cardsController = function(color, req, res) {
     fs.readFile(`./public/json/card-${color}.json`, function (error, content) {
        var data = JSON.parse(content);

        res.header('Access-Control-Allow-Origin','*').send(data)
    });
}

export default cardsController;