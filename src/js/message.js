/*
 * ONE AMONG THE FENCE
 *
 * Atlas : Message.js
 *
 * Copyright (c) Cupertino Development 2020
 *
*/

"use strict";

// Consts and Requires
const fetch = require("node-fetch");

// Main source code
class Message {

    constructor() {}

    create(content, channel_id, token) {
        const output = JSON.stringify({ content, channel_id })
        fetch(`http://cupertino-api.herokuapp.com/msg/new`, {
            method: "POST",
            body: output,
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }).then((res) => res.json()).then((json) => {
            if (json.error_code) {
                return console.error(`Error code: ${json.error_code} | ${json.msg}`)
            } else {
                return console.log("Success! Message sent.")
            }
        })
    }
    
}

// Exports
module.exports = Message
