/**
 * ONE AMONG THE FENCE
 *
 * Atlas : Message.js
 *
 * Copyright (c) Cupertino Development 2020
 *
*/

// Consts and Requires
const { Base, fetch } = require("./base")

// Main source code
class Message extends Base {

    constructor() {
        super(Base)
    }

    /**
     * Create Message
     * @param String content 
     * @param String channel_id 
     * @param String token 
     * @param String result 
    */
    create(content, channel_id, token, result) {
        if (!content) return console.error("No content provided.")
        if (!channel_id) return console.error("No channel provided.")
        if (!token) return console.error("No token provided.")
        const output = JSON.stringify({ content, channel_id })
        fetch(`https://cupertino-api.herokuapp.com/msg/new`, {
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
            if (result) {
                return result(json)
            } else {
                return console.log(json)
            }
        })
    }
    
}

// Exports
module.exports = Message
