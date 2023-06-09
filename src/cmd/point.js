const { ActionRowBuilder, ButtonBuilder, ButtonStyle, SlashCommandBuilder } = require('discord.js');

const { EmbedBuilder } = require('discord.js');


const man = new ButtonBuilder()
    .setCustomId('man')
    .setLabel('Man')
    .setStyle(ButtonStyle.Primary);
const pc = new ButtonBuilder()
    .setCustomId('pc')
    .setLabel('PC')
    .setStyle(ButtonStyle.Primary);
const mobile = new ButtonBuilder()
    .setCustomId('mobile')
    .setLabel('Mobile')
    .setStyle(ButtonStyle.Danger);

const gender = new ActionRowBuilder()
    .addComponents(man);

const device = new ActionRowBuilder()
    .addComponents(pc, mobile);



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
const genderembed = new EmbedBuilder()
    .setTitle('ROLE GENDER')
    .setDescription('What is your gender? | If you want Woman role, please verify')
    .setColor('1E4B9C')
    .setFooter({ text: 'OPEN NEXA' })
const deviceembed = new EmbedBuilder()
    .setTitle('ROLE DEVICE')
    .setDescription('Select what device you use')
    .setColor('1E4B9C')
    .setFooter({ text: 'OPEN NEXA' })

module.exports = {
    data: new SlashCommandBuilder()
        .setName('point')
        .setDescription('Add roles point')
        .setDefaultMemberPermissions(268435456)
        .addStringOption(option =>
            option.setName('type')
                .setDescription('Select type')
                .setRequired(true)
                .addChoices(
                    { name: 'Verify', value: 'verify' },
                    { name: 'PartnershipInfo', value: 'partner' },
                    { name: 'GenderRole', value: 'gender' },
                    { name: 'DeviceRole', value: 'device' },
                )),


    async execute(interaction) {
        const type = interaction.options.getString('type');

        switch (type) {
            case 'verify':
                await interaction.reply({ embeds: [verfyembed] })
                break;
            case 'partner':
                await interaction.reply({ embeds: [partnerembed] })
                break;
            case 'gender':
                await interaction.reply({ embeds: [genderembed], components: [gender] })
                break;
            case 'device':
                await interaction.reply({ embeds: [deviceembed], components: [device] })
                break;
            default:
                await interaction.reply({ content: 'Please select type', ephemeral: true })
                break;

        }
    }
}