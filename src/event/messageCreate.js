const { Events } = require('discord.js');
const DB = require('../structure/DbHandler');
const db = new DB('afk');

module.exports = {
	name: Events.MessageCreate,
	async execute( message) {
        if (message.author.bot) return 
		// check if mentioned user is afk   
        console.log(message.content)
        if(message.mentions.members.first()){
            if(await db.has(message.mentions.members.first().id)){
                message.channel.send(`${message.mentions.members.first()} is AFK with reason: ${await db.get(message.mentions.members.first().id)}`);
            }
        }
	},
};