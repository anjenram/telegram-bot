var TelegramBot = require('node-telegram-bot-api');
var token = '331299898:AAFdMVnEqW2t4b5MqU0J861HRWj061WgbIU';
var bot = new TelegramBot(token, {polling: true});
var telegraf = require('telegraf');
var app = new telegraf(process.env.token);

app.command('start', (ctx) => {
  console.log('start', ctx.from)
ctx.reply('Welcome!')
})

app.command('start', function (ctx) {
  console.log('start', ctx)
ctx.reply('Welcome!')
})


app.startPolling()