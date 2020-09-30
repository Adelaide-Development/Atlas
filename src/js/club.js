/*
 * ONE AMONG THE FENCE
 *
 * Atlas : Club.js
 *
 * Copyright (c) Cupertino Development 2020
 *
*/

"use strict";

// Consts and Requires
const fetch = require("node-fetch")

// Main source code
class Club {

    constructor() {}

    create(name, description, token, result) {
        if (!name) return console.error("No name provided.")
        if (!description) return console.error("No description provided.")
        if (!token) return console.error("No token provided.")
        const output = JSON.stringify({ name, description })
        fetch(`http://cupertino-api.herokuapp.com/club/new`, {
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
                console.log(`Success! Club "` + name + `" has been created with the id "` + json.id + `".`)
            }
            return result(json)
        });
    }

    /*
    join(clubId, token, result) {
        if (!clubId) return console.error("No description provided.")
        if (!token) return console.error("No token provided.")
        const output = JSON.stringify({ clubId })
        fetch(`http://cupertino-api.herokuapp.com/club/join/@me`, {
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
                return console.log(`Success! Club "` + name + `" has been created.`)
            }
            return result(json)
        });
    }
    */
}

// Exports
module.exports = Club;
