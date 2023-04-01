const TelegramBot = require('node-telegram-bot-api');
const token = require('../token')
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/getgroupid/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, `O ID do grupo eh: ${chatId}`);
});

if(bot) {
  console.log(`Bot listening for command.. type /getgroupid`);
}
