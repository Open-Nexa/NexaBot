const { Events } = require('discord.js');

module.exports = {
	name: Events.InteractionCreate,
	async execute(interaction) {
		let roleMan = interaction.guild.roles.cache.find(
			r => r.name === "Man"
		);
		let rolePC = interaction.guild.roles.cache.find(
			r => r.id === "910806292317216768"
		);
		let roleMobile = interaction.guild.roles.cache.find(
			r => r.id === "910752088802345010"
		);
		if (interaction.isChatInputCommand()) {
			const command = interaction.client.commands.get(interaction.commandName);

			try {
				await command.execute(interaction);
			} catch (error) {
				console.error(`Error executing ${interaction.commandName}`);
				console.error(error);
			}
		} else if (interaction.isButton()) {
			var button = interaction.customId;


			switch (button) {
				case "man":
					await interaction.member.roles.add(roleMan);
					interaction.reply({ content: 'role selected', ephemeral: true });
					break;
				case "pc":
					await interaction.member.roles.add(rolePC);
					interaction.reply({ content: 'role selected', ephemeral: true });
					break;
				case "mobile":
					await interaction.member.roles.add(roleMobile);
					interaction.reply({ content: 'role selected', ephemeral: true });
					break;
				default:
					break;
			}
		} else if (interaction.isStringSelectMenu()) {
			// respond to the select menu
			switch (interaction.values[0]) {
				case 'remoman':
					await interaction.member.roles.remove(roleMan);
					interaction.reply({ content: 'role removed', ephemeral: true });
					break;
				case 'remopc':
					await interaction.member.roles.remove(rolePC);
					interaction.reply({ content: 'role removed', ephemeral: true });
					break;
				case 'remomobile':
					await interaction.member.roles.remove(roleMobile);
					interaction.reply({ content: 'role removed', ephemeral: true });
					break;
				default:
					break;
			}
		}
		console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
	}
};