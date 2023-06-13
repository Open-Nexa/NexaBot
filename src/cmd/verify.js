const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

const verfyembed = new EmbedBuilder()
    .setTitle('Done')
    .setDescription('You have been verified')
    .setColor('1E4B9C')
    .setFooter({ text: 'OPEN NEXA' })

module.exports = {
    data: new SlashCommandBuilder()
        .setName('verify')
        .setDescription('Add role member'),

    async execute(interaction) {
        let roleMember = interaction.guild.roles.cache.find(
            r => r.id === "901041302601367583"
        );
        await interaction.member.roles.add(roleMember);
        await interaction.reply({ embeds: [verfyembed], ephemeral: true });
    },
};