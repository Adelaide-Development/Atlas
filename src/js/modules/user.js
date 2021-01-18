/**
 *
 * Atlas : User.js
 *
 * Copyright (c) Helselia Development 2020
 *
**/

// Consts and Requires
const { Base, fetch, url } = require("../util/base");

// Main source code
class User extends Base {

    constructor() {
        super(Base);
        this.name = "USER";
    }
    
    /**     * Get User Clubs
     * @param String token 
     * @param String result 
    */
    clubs(token, result) {
        if (!token) { return console.error("No token provided."); }
        fetch(url + `/user/@me/clubs`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }).then(res => res.json()).then(json => {
            this.sendResult(json);
        });
    }

    /**     * Create User
     * @param String username 
     * @param String email 
     * @param String password 
     * @param String isBot 
    **/
    create(username, email, password, isBot) {
        if (!username) { return console.error("No username provided."); }
        if (!email || !email.includes("@")) { return console.error("No valid email provided."); }
        if (!password) { return console.error("No password provided."); }
        if (!isBot) { isBot = FALSE; }
        const output = JSON.stringify({ username, email, password, isBot });
        fetch(url + `/user/@me/clubs`, {
            method: "POST",
            body: output,
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }).then(res => res.json()).then(json => {
            this.sendResult(json);
        });
    }

}

// Exports
module.exports = User
