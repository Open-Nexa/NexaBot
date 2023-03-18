const Keyv = require('keyv');

class DB {
    constructor(table) {
        this.db = new Keyv('sqlite://./db/database.sqlite', {
            table: table
          });
    }

    async get(key) {
        return await this.db.get(key);
    }

    async set(key, value) {
        return await this.db.set(key, value);
    }

    async delete(key) {
        return await this.db.delete(key);
    }

    async has(key) {
        return await this.db.has(key);
    }
}

module.exports = DB;