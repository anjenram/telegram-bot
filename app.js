var TelegramBot = require('node-telegram-bot-api');
var token = '331299898:AAFdMVnEqW2t4b5MqU0J861HRWj061WgbIU';
var bot = new TelegramBot(token, {polling: true});
var request = require('request');
var emoji = require('node-emoji').emoji;

// var optionKeys = {
//     "parse_mode": "Markdown",
//     "reply_markup": {  "keyboard": [["Starships"],["Planets"]]  }
// }

var starships = []
request('https://noderestapi.herokuapp.com/api/starships/', function (err, res, body) {

    return starships = JSON.parse(body)
})
var infoClass = []
request('https://noderestapi.herokuapp.com/api/starships/class', function (err, res, body) {

    return infoClass = JSON.parse(body)
})
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
// bot.on('message', function (msg) {
//     var state = {
//         on: false
//     }
//     var chatId = msg.chat.id;
//     request('https://noderestapi.herokuapp.com/api/starships/', function (err, res, body) {
//
//         return starships = JSON.parse(body)
//     })
//     var keysShips = [];
//     for (var i = 0; i < starships.length; i++) {
//
//         var tmp = starships[i].class_starship + " " + starships[i].name + " " + starships[i].model;
//         keysShips[i] = [tmp]
//         state.on = true
//     }
//
//     var optionShips = {
//         "parse_mode": "Markdown",
//         "reply_markup": {
//             "keyboard": keysShips
//
//         }
//     }
//     if(state.on) {
//         bot.sendMessage(chatId, "Greetings! Choose yourself a star ship", optionShips);
//         state.on = false
//     }
//     console.log(msg)
//     if (msg.text != '/start'){
//         bot.sendMessage(chatId, "Congratulations! "+ msg.text + " Excellent choice", {});
//     }
//     if(msg.sticker){
//         bot.sendMessage(chatId, "You really think your sticker is very funny?!", {});
//     }
//
// });
bot.onText(/\/start/, function (msg, match) {
    var fromId = msg.from.id;
    bot.sendMessage(fromId, "Welcome! For the beginning we recommend using the /help team for getting help,"+ '\n' + "after acquaintance you can use the command /getship to get starship", {
        "parse_mode": "Markdown",
        "reply_markup": {
            "keyboard": [
                ["/getship"],
                ["/help"]
            ]

        }
    });
})
bot.onText(/\/getship/, function (msg, match) {
    console.log(msg, match)
    var fromId = msg.from.id;
    var keysShips = [];
    for (var i = 0; i < starships.length; i++) {

        var tmp = starships[i].class_starship + " " + starships[i].name + " " + starships[i].model;
        keysShips[i] = [tmp]
    }

    var optionShips = {
        "parse_mode": "Markdown",
        "reply_markup": {
            "keyboard": keysShips

        }
    }

    bot.sendMessage(fromId, "Greetings! Choose yourself a star ship", optionShips);
});
bot.onText(/\/starships/, function (msg, match) {
    var fromId = msg.from.id;
    console.log(msg, match)
    for (var i = 0; i < infoClass.length; i++) {
        var tmpName = "Name: " + " " + infoClass[i].name + '\n';
        var tmpDesc = "Description: " + " " + infoClass[i].description;
        bot.sendMessage(fromId, tmpName + tmpDesc);
    }
});
bot.onText(/\/help/, function (msg, match) {
    var fromId = msg.from.id;
    console.log(msg, match)
    bot.sendMessage(fromId, "FAQ:", {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{ text: '\u{1F680}', callback_data: 'starships' },{ text: '\u{1F30F}', callback_data: 'planets' }],
                [{ text: '\u{1F464}', callback_data: 'user' },{ text: '\u{1F3B2}', callback_data: 'gameinfo' }]
            ]
        })
    });
});


