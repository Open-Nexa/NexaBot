const { Events, EmbedBuilder } = require('discord.js');
module.exports = {
    name: Events.GuildMemberAdd,
    async execute(member) {
        const JoinEmbed = new EmbedBuilder()
            .setDescription(`Welcome to OpenNexa <@${member.id}>! pls run command /verify to unlock all channel and don't forget to read <#901041846900359249>`)
            .setColor('1E4B9C')
            .setTimestamp()
            .setFooter({ text: 'OpenNexa Auto Welcome' });
        const channel = member.guild.channels.cache.find(ch => ch.id === "1086626232180936725");
        if (!channel) return;
        await channel.send({ embeds: [JoinEmbed] });
    }
}