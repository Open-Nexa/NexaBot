const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('partnernew')
        .setDescription('Add new partnerlist')
        .setDefaultMemberPermissions(268435456)
        .addUserOption(option => option.setName('member').setDescription('Select a partnermanager'))
        .addStringOption(option => option.setName('name').setDescription('Name Server'))
        .addStringOption(option => option.setName('link').setDescription('Link Server')),
    async execute(interaction) {
        const members = interaction.options.getMember('member');
        const member = `<@${members.id}>`
        const nameserver = interaction.options.getString('name');
        const link = interaction.options.getString('link');
        const PartnerEmbed = new EmbedBuilder()
            .setTitle('NEW PARTNER DETECTED')
            .setDescription(`Say hello to our new partner ${member} with server name ${nameserver}`)
            .setColor('1E4B9C')
            .addFields(
                { name: 'Name Server', value: nameserver, inline: true },
                { name: 'Representative', value: member, inline: true },
                { name: 'Link Server', value: link, inline: true },
            )
            .setTimestamp()
            .setFooter({ text: 'OPEN NEXA' })
        await interaction.reply({ embeds: [PartnerEmbed] });
    },
};