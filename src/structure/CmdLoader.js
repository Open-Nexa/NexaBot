const { Collection } = require('discord.js');
const fs = require('node:fs');
const path = require('node:path');
const { REST, Routes } = require('discord.js');
const { clientId } = require('../config.json');
const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

module.exports = class CmdLoader {
    constructor(client, paths) {
        this.client = client;
        this.path = paths;
        this.client.commands = new Collection();
    }

    async load() {
        const commands = [];
        const commandFiles = fs.readdirSync(this.path).filter(file => file.endsWith('.js'));
        for (const file of commandFiles) {
            const filePath = path.join(this.path, file);
            const command = require(filePath);
            // Set a new item in the Collection with the key as the command name and the value as the exported module
            if ('data' in command && 'execute' in command) {
                this.client.commands.set(command.data.name, command);
            }
            else {
                console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
            }
            console.log(`[INFO] Loaded event ${file}`);
            commands.push(command.data.toJSON());
            this.register(commands, command.data.name);
        }
    }

    async register(command, name) {
        try {
            console.log(`[INFO] Registering ${name} command`);
            await rest.put(
                Routes.applicationCommands(clientId),
                { body: command },
            );
            console.log(`[INFO] Registered ${name} command`);
        } catch (error) {
            console.error(error);
        }
    }
};