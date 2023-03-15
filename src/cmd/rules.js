const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');

const embed = new EmbedBuilder()
    .setTitle('Rules')
    .setDescription('PAY ATTENTION TO THE RULES BELOW')
    .setColor('1E4B9C')
    
    .setImage('https://cdn.discordapp.com/attachments/901042319652962344/1085570363406176307/Banner_Rules.png');


const embed2 = new EmbedBuilder()
    .setColor('1E4B9C')
    .setFooter({ text: 'OPEN NEXA'})
    .setDescription(`
1. No NSFW (Image, Video, Link)
1.a This means no content that is sexually explicit, graphically violent, or otherwise inappropriate for the workplace or public spaces.
1.b If you share NSFW content in any channel, you will receive a warning.
1.c If you continue to share NSFW content after receiving a warning, you will be banned from the server for 7 days.
1.d If you share NSFW content for the third time, you will be permanently banned.

2. Member Conduct
2.a All members are expected to treat each other with respect and dignity.
2.b Doxing, which means sharing someone's personal information without their consent, is strictly prohibited and will result in a 7-day ban.
2.c Using an alternate account to bypass a ban or enter the server while banned is also prohibited and will result in a permanent ban.
2.d Hate speech, or language that is intended to demean, insult, or marginalize individuals based on their identity, is not allowed. If found using hate speech, you will be muted for 24 hours.
2.e Causing chaos or drama in public with personal issues will result in a 1-hour mute.
2.f Members must follow the rules or face the consequences, including mutes or bans.

3. Links
3.a Sharing dangerous links such as viruses or phishing scams is not allowed and will result in a 1-day mute if sent in the #sharelink channel.
3.b Sharing dangerous links in #general, where it can be harmful to members, will result in a permanent ban.

4. Spam
4.a Spamming text with more than 10 lines and ignoring warnings from the bot will result in a 1-hour mute.
4.b Spamming text with more than 10 lines in #general will result in a 1-day mute.

5. Threads
5.a If you want to have a private conversation, it's best to use DMs.
5.b If you want to have a conversation with only one other person in a crowded #general channel, it's best to create a thread. Continuously doing so will result in a warning.

6. Content
6.a Do not post content that is not related to the topic of the channel.
6.b Sending memes in #general will result in a warning and a 1-hour mute.

7. Advertising
7.a Advertising is not allowed in any channel.
7.b If you advertise in #general, you will receive a 1-day mute.
7.c Post in #sharelink if you want to share a link.

8. Admin conduct
8.a All members must follow the rules and respect the admins.
8.b If you have a problem with an admin, please contact the owner or another admin.
8.c Members are not allowed to argue with the admins, even if the rules are not explicitly written.

9. Server
9.a Enjoy your stay in the server.
    `)

    

module.exports = {
	data: new SlashCommandBuilder()
		.setName('rules')
		.setDescription('show rules this server'),
	async execute(interaction) {
		
        await interaction.reply({ embeds: [embed, embed2] });
	},
};