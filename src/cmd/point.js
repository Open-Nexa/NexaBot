const { SlashCommandBuilder } = require('discord.js');
const {roles} = require('../config.json');
const { EmbedBuilder } = require('discord.js');

const verfyembed = new EmbedBuilder()
    .setTitle('Verify')
    .setDescription('Send command /verify to verify your account')
    .setColor('1E4B9C')
    .setFooter({ text: 'OPEN NEXA'})
    .setImage('https://cdn.discordapp.com/attachments/901042319652962344/1086212441672798288/verify.png');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('point')
		.setDescription('Add roles point')
        .setDefaultMemberPermissions(268435456)
        .addRoleOption(option => option.setName('role').setDescription('Select a role').setRequired(true)),
	async execute(interaction) {
        // if option = member role
        if(interaction.options.getRole('role').id == roles.member){
            // send verify embed
            await interaction.reply({ embeds: [verfyembed] });
        }
	},
};