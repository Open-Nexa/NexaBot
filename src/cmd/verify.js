const { SlashCommandBuilder } = require('discord.js');
const { roles } = require('../config.json');
const { EmbedBuilder } = require('discord.js');

const verfyembed = new EmbedBuilder()
    .setTitle('Done')
    .setDescription('You have been verified')
    .setColor('1E4B9C')
    .setFooter({ text: 'OPEN NEXA'})

module.exports = {
	data: new SlashCommandBuilder()
		.setName('verify')
		.setDescription('Add role member'),
        
	async execute(interaction) {
            await interaction.member.roles.add(roles.member);
            await interaction.reply({ embeds: [verfyembed], ephemeral: true });
	},
};