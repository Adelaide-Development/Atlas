/*
 * ONE AMONG THE FENCE
 *
 * Atlas : User.js
 *
 * Copyright (c) Cupertino Development 2020
 *
*/

"use strict";

// Consts and Requires
const fetch = require("node-fetch")

// Main source code
class User {

    constructor() { }
    
    clubs(token, result) {
        if (!token) { return console.error("No token provided.") }
        fetch(`https://cupertino-api.herokuapp.com/user/@me/clubs`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }).then(res => res.json()).then(json => {
            if (json.error_code) {
                console.error(`Error Code: ${json.error_code} | ${json.msg}`)
            } 
            if (result) {
                return result(json)
            } else {
                return console.log(json)
            }
        })
    }

    new(username, email, password, isBot) {
        if (!username) { return console.error("No username provided.") }
        if (!email || !email.includes("@")) { return console.error("No valid email provided.") }
        if (!password) { return console.error("No password provided.") }
        if (!isBot) { isBot = FALSE }
        const output = JSON.stringify({ username, email, password, isBot })
        fetch(`https://cupertino-api.herokuapp.com/user/@me/clubs`, {
            method: "POST",
            body: output,
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }).then(res => res.json()).then(json => {
            if (json.error_code) {
                console.error(`Error Code: ${json.error_code} | ${json.msg}`)
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
module.exports = User;