const { Events, EmbedBuilder } = require('discord.js');
module.exports = {
    name: Events.GuildMemberRemove,
    async execute(member) {
        const LeaveEmbed = new EmbedBuilder()
            .setDescription(`Goodbye <@${member.id}>!`)
            .setColor('FF0000')
            .setTimestamp()
            .setFooter({ text: 'OpenNexa Auto Welcome' });
        const channel = member.guild.channels.cache.find(ch => ch.id === "1086626232180936725");
        if (!channel) return;
        await channel.send({ embeds: [LeaveEmbed] });
    }
};