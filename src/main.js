const dotenv = require('dotenv');

dotenv.config();
const { GatewayIntentBits } = require('discord.js');
const Bot = require('./structure/NexaBot');

const bot = new Bot({ intents: [GatewayIntentBits.Guilds] });

bot.init(process.env.TOKEN);

// error handling
process.on('unhandledRejection', (error) => {
    console.error('Unhandled promise rejection:', error);
})