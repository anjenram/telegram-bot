var TelegramBot = require('node-telegram-bot-api');
var token = '331299898:AAFdMVnEqW2t4b5MqU0J861HRWj061WgbIU';
var bot = new TelegramBot(token, {polling: true});
var http = require("http");
var https = require("https");


bot.on('message', function (msg) {
  var chatId = msg.chat.id;
  console.log(msg);
  switch (msg.text){
    case "Hello":
      return bot.sendMessage(chatId, "Hello!", {caption: "I'm a bot!"});
          break;
    case "Привет!":
      return bot.sendMessage(chatId, "Привет!", {caption: "I'm a bot!"});
      break;
    case "Привет":
      return bot.sendMessage(chatId, "Привет Привет!", {caption: "I'm a bot!"});
      break;
    default:
      return bot.sendMessage(chatId, "Hello! I am NodeJS bot! Soon I'll be ready", {caption: "I'm a bot!"});
      break;
  }
});