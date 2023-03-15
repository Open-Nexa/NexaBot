const { Client } = require('discord.js');
const CmdLoader = require('./CmdLoader');
const EventLoader = require('./EventLoader');
const { resolve } = require('path');
class NexaBot extends Client {
	constructor(options) {
		super(options);
        this.Cmdloader = new CmdLoader(this, resolve(__dirname, '../cmd'));
        this.Eventloader = new EventLoader(this, resolve(__dirname, '../event'));
	}
    

    async init(token) {
		this.login(token);
        
        this.on('ready', async () => {
            await this.Cmdloader.load();
            await this.Eventloader.load();
        })
    }
}


module.exports = NexaBot;