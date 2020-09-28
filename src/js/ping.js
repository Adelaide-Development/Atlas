/*
 * ONE AMONG THE FENCE
 *
 * Atlas : Ping.js
 *
 * Copyright (c) Cupertino Development 2020
 *
 */

// Consts and Requires
const fetch = require("node-fetch")

// Main source code
async function ping(result) {
    fetch('http://cupertino-api.herokuapp.com/ping', { method: "Get" })
    .then(res => res.json())
    .then(json => {
        return result(json)
    })
}

// Exports
exports.ping = ping;
