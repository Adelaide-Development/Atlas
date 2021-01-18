/**
 * 
 * Atlas : Atlas.js
 * 
 * Copyright (c) Helselia Development and Atlas' Authors / Contributors 2020-
 * 
**/

// Consts and Requires
const { Base, fetch, url } = require("../util/base");

// Main source code
class Message extends Base {

    constructor() {
        super(Base);
        this.name = "MESSAGE";
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
        fetch(url + `/msg/new`, {
            method: "POST",
            body: output,
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }).then((res) => res.json()).then((json) => {
            this.sendResult(json);
        });
    }
    
}

// Exports
module.exports = Message
