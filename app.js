var TelegramBot = require('node-telegram-bot-api');
var token = '331299898:AAFdMVnEqW2t4b5MqU0J861HRWj061WgbIU';
var bot = new TelegramBot(token, {polling: true});

var notes = [];

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
bot.onText(/\/напомни (.+) в (.+)/, function (msg, match) {
  var userId = msg.from.id;
  var text = match[1];
  var time = match[2];

  notes.push( { 'uid':userId, 'time':time, 'text':text } );

  bot.sendMessage(userId, 'Отлично! Я обязательно напомню, если буду жив :)');
});
setInterval(function(){
  for (var i = 0; i < notes.length; i++){
    var curDate = new Date().getHours() + ':' + new Date().getMinutes();
    if ( notes[i]['time'] == curDate ) {
      bot.sendMessage(notes[i]['uid'], 'Напоминаю, что вы должны: '+ notes[i]['text'] + ' сейчас.');
      notes.splice(i,1);
    }
  }
},1000);

