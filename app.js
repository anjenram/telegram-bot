var TelegramBot = require('node-telegram-bot-api');
var token = '331299898:AAFdMVnEqW2t4b5MqU0J861HRWj061WgbIU';
var bot = new TelegramBot(token, {polling: true});
var request = require('request');

// var optionKeys = {
//     "parse_mode": "Markdown",
//     "reply_markup": {  "keyboard": [["Starships"],["Planets"]]  }
// }

var starships = []

// function GetStarships() {
//
//     request('https://noderestapi.herokuapp.com/api/starships/', function (err, res, body) {
//
//
//         return starships = JSON.parse(body)
//
//     })
//     return starships;
// }
// function MyFnc(starships) {
//     for (var i = 0; i < starships.length; i++) {
//         console.log(starships[i].name)
//         bot.sendMessage(chatId, starships[i].name, {});
//     }
// }
bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    request('https://noderestapi.herokuapp.com/api/starships/', function (err, res, body) {
        return starships = JSON.parse(body)
    })
    var keysShips = [];
    for (var i = 0; i < starships.length; i++) {
        console.log(starships[i].name)
        var tmp = starships[i].class_starship + " " + starships[i].name + " " + starships[i].model;
        keysShips[i] = [tmp]
    }
    console.log(keysShips)
    var optionShips = {
        "parse_mode": "Markdown",
        "reply_markup": {
            "keyboard": keysShips

        }
    }
    bot.sendMessage(chatId, "Greetings! Choose yourself a star ship", optionShips);


});


