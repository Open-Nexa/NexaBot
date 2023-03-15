const fs = require('node:fs');
const path = require('node:path');

module.exports = class CmdLoader {
    constructor(client, paths) {
        this.client = client;
        this.path = paths;
    }

    load() {
        const eventFiles = fs.readdirSync(this.path).filter(file => file.endsWith('.js'));
        
        for (const file of eventFiles) {
            const filePath = path.join(this.path, file);
            const event = require(filePath);
            if (event.once) {
                this.client.once(event.name, (...args) => event.execute(...args));
            } else {
                this.client.on(event.name, (...args) => event.execute(...args));
            }
        }
    }
};