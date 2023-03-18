const { SlashCommandBuilder } = require('discord.js');
const DB = require('../structure/DbHandler');
const db = new DB('afk');


module.exports = {
	data: new SlashCommandBuilder()
		.setName('afk')
		.setDescription('AFK USER')
        .addStringOption(option => option.setName('reason').setDescription('Reason').setRequired(true)),
        
	async execute(interaction) {
		const reason = interaction.options.getString('reason');
		// check if user is afk if yes remove afk and delete [AFK] from nickname
		if(await db.has(interaction.user.id)){
			await console.log(db.get(interaction.user.id));
			interaction.member.setNickname(interaction.member.nickname.replace('[AFK]', ''));
			db.delete(interaction.user.id);
			interaction.reply({ content: 'You are no longer AFK'});
		} else {
			// if user is not afk add [AFK] to nickname
			interaction.member.setNickname(`[AFK] ${interaction.member.displayName}`);
			db.set(interaction.user.id, reason);
			interaction.reply({ content: `You are now AFK with reason: ${reason}`});
		}
	},
};