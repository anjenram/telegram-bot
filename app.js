var TelegramBot = require('node-telegram-bot-api');
var token = '331299898:AAFdMVnEqW2t4b5MqU0J861HRWj061WgbIU';
var bot = new TelegramBot(token, {polling: true});
var request = require('request');



bot.on('message', function (msg) {
  var chatId = msg.chat.id;

      return bot.sendMessage(chatId, "Hello! I am NodeJS bot! Soon I'll be ready", {caption: "I'm a bot!"});


});


