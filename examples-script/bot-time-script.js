const TelegramBot = require('node-telegram-bot-api');
const token = require('../token')
const bot = new TelegramBot(token, { polling: true });


bot.onText(/\/quehoras/, (msg, match) => {
   const chatId = msg.chat.id;
   const now = new Date();
   const time = now.toLocaleTimeString();
   bot.sendMessage(chatId, `São ${time} agora!`);
 });

 if(bot) {
   console.log('Bot running.. type a command!');
 }
