/**
 * 
 * Atlas : Atlas.js
 * 
 * Copyright (c) Helselia Development and Atlas' Authors / Contributors 2020-
 * 
**/

// Consts and Requires
const fetch = require("node-fetch");
const url = require("../../json/config.json");

// Main source code
class Base {

    constructor() {
        "use strict";
    }

    sendResult(res) {
        if (this.result) { return this.result(res); } else { return console.log(res); }
    }

}

// Exports
module.exports = {
    Base,
    fetch,
    url
}
