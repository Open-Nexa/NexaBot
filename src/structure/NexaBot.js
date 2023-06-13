const { Client } = require('discord.js');
const CmdLoader = require('./CmdLoader');
const EventLoader = require('./EventLoader');
const { resolve } = require('path');
const WebMaster = require('./WebMaster');
const DB = require('./DbHandler');


class NexaBot extends Client {
    constructor(options) {
        super(options);
        this.Cmdloader = new CmdLoader(this, resolve(__dirname, '../cmd'));
        this.Eventloader = new EventLoader(this, resolve(__dirname, '../event'));
        this.WebMaster = new WebMaster();
        this.db = new DB('system');
        this.invites = {}

    }


    async init(token) {
        this.login(token);

        this.on('ready', async () => {
            await this.Cmdloader.load();
            await this.Eventloader.load();
            await this.WebMaster.init();
            console.log(`Ready! Logged in as ${this.user.tag}`);
            this.guilds.cache.each(guild => {
                guild.invites.fetch().then(guildInvites => {
                    guildInvites.each(guildInvite => {
                        console.log(guildInvite.code)
                        this.invites[guildInvite.code] = guildInvite.uses
                    })
                })
            })
        })
    }
}


module.exports = NexaBot;