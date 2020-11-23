/**
 * 
 * Atlas : Atlas.js
 * 
 * Copyright (c) Helselia Development and Atlas' Authors / Contributors 2020-
 * 
**/

// Consts and Requires
const { Base, fetch } = require("./base");

// Main source code
class Message extends Base {

    constructor() {
        super(Base);
    }

    /**     * Create Message
     * @param String content 
     * @param String channel_id 
     * @param String token 
     * @param String result 
    **/
    create(content, channel_id, token, result) {
        if (!content) return console.error("No content provided.");
        if (!channel_id) return console.error("No channel provided.");
        if (!token) return console.error("No token provided.");
        const output = JSON.stringify({ content, channel_id });
        fetch(`http://108.54.245.184/msg/new`, {
            method: "POST",
            body: output,
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }).then((res) => res.json()).then((json) => {
            if (result) {
                return result(json);
            } else {
                return console.log(json);
            }
        });
    }
    
}

// Exports
module.exports = Message
