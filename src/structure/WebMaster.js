const express = require('express');
const app = express();
const port = 3000;

class WebMaster {
    constructor() {
        this.app = app;
        this.port = port;
    }

    async init() {
        this.app.get('/', (req, res) => {
            res.send('Hello World!');
        });

        this.app.listen(this.port, () => {
            console.log(`WebMaster listening at port ${this.port}`);
        });
    }
}

module.exports = WebMaster;