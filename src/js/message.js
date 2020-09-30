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

    create(channelId, content, token, result) {
        if (!channelId) return console.error("No channel provided.")
        if (!content) return console.error("No content provided.")
        if (!token) return console.error("No token provided.")
        const output = JSON.stringify({ content, channelId })
        fetch(`http://cupertino-api.herokuapp.com/msg/new`, {
            method: "POST",
            body: output,
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }).then((res) => res.json()).then((json) => {
            if (json.error_code) {
                console.error(`Error code: ${json.error_code} | ${json.msg}`)
            } else {
                console.log("Success! Message sent.")
            }
            return result(json)
        })
    }
    
}

// Exports
module.exports = Message
