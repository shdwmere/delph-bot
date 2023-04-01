const TelegramBot = require('node-telegram-bot-api');
const token = require('../token');
const bot = new TelegramBot(token, { polling: true });

const messages = ['TESTE SINAL : SINAL A', 'TESTE SINAL : SINAL B'];

function getRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

function sendMessage() {
  const message = getRandomMessage();
  bot.sendMessage('-981765663', message)
    .then((response) => {
      console.log(`Message sent successfully: ${response.text}`);
    })
    .catch((error) => {
      console.error(`Something went wrong: ${error}`);
    });
}

setInterval(sendMessage, 2000);
