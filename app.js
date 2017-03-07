var TelegramBot = require('node-telegram-bot-api');
var token = '331299898:AAFdMVnEqW2t4b5MqU0J861HRWj061WgbIU';
var bot = new TelegramBot(token, {polling: true});

bot.setMainMenuText(function (chat) { return "What do you want to do?"; });

bot.setMainMenuOptions(function (chat) {
  return { "Hi": hiOption, "Bye": byeOption };
});

bot.onCommand("start", false, function (msg) { bot.sendMainMenu(msg.chat); })

function hiOption(msg) {
  bot.sendText(msg.chat, "Hi!");
}

function byeOption(msg) {
  bot.sendText(msg.chat, "Bye!");
}

