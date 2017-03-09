var TelegramBot = require('node-telegram-bot-api');
var token = '331299898:AAFdMVnEqW2t4b5MqU0J861HRWj061WgbIU';
var bot = new TelegramBot(token, {polling: true});
var request = require('request');

var optionKeys = {
    "parse_mode": "Markdown",
    "reply_markup": {  "keyboard": [["Starships"],["Planets"]]  }
}

bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    bot.sendMessage(chatId, "Hi! Do your choose:", optionKeys);

});


