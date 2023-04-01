const TelegramBot = require('node-telegram-bot-api');
const puppeteer = require('puppeteer');
const token = require('./token');

const bot = new TelegramBot(token, { 
  polling: true,
  suppressDeprecationWarnings: true
});


bot.onText(/\/sinais/, async (msg, match) => {
  const chatId = msg.chat.id;
  const url = 'http://localhost:3000';

  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(url);
    const screenshotBuffer = await page.screenshot();

    await bot.sendPhoto(chatId, screenshotBuffer) && console.log('\x1b[32mSinal enviado com sucesso!');

    await browser.close();
  } catch (err) {
    console.error(err);
    bot.sendMessage(chatId, 'An error occurred while trying to render the webpage.');
  }
});

if(bot) {
  console.log('\x1b[32mUhul, Delphbot is running. Please run command \x1b[33m/sinais\x1b[32m in Telegram to send a new bet hint.\x1b[0m');

}

// To delete all images..

// function deleteImageMessages() {
//   const groupChatId = chatId; // replace with the ID of your group chat
//   const interval = 3 * 60 * 1000; // delete images every 3 minutes in milliseconds ( 3 minutes )
  
//   setInterval(() => {
//     const messages = await client.getChatById(groupChatId).getMessages();
//     for (const message of messages) {
//       if (message.type === 'image') {
//         await message.delete();
//       }
//     }
//   }, interval);
// }
