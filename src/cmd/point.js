const { SlashCommandBuilder } = require('discord.js');
const { roles } = require('../config.json');
const { EmbedBuilder } = require('discord.js');

const verfyembed = new EmbedBuilder()
    .setTitle('Verify')
    .setDescription('Send command /verify to verify your account')
    .setColor('1E4B9C')
    .setFooter({ text: 'OPEN NEXA' })
    .setImage('https://cdn.discordapp.com/attachments/901042319652962344/1086212441672798288/verify.png');
const partnerembed = new EmbedBuilder()
    .setTitle('Partnership Info')
    .setDescription(`
    1)Minimum of 50 members (bot count is allowed, but do not have all 50 members be bots)
    2)No NSFW content
    3)Must not violate Discord's terms of service
    4)Must be mutually beneficial
    `)
    .setColor('1E4B9C')
    .setFooter({ text: 'OPEN NEXA' })
    .setImage('https://cdn.discordapp.com/attachments/915520195253129246/1106896897827934208/partnership.png');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('point')
        .setDescription('Add roles point')
        .setDefaultMemberPermissions(268435456)
        .addRoleOption(option => option.setName('role').setDescription('Select a role')),
    async execute(interaction) {
        // if option = member role
        if (interaction.options.getRole('role').id == roles.member) {
            // send verify embed
            await interaction.reply({ embeds: [verfyembed] });
        } else if (interaction.options.getRole('role').id == roles.partner) {
            // send partner embed
            await interaction.reply({ embeds: [partnerembed] });
        }
    },
};