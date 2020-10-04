/*
 * ONE AMONG THE FENCE
 *
 * Atlas : Post.js
 *
 * Copyright (c) Cupertino Development 2020
 *
*/

"use strict"

// Consts and Requires
const fetch = require("node-fetch")

// Main source code
class Post {

    constructor() {}

    create(name, content, token, result) {
        const output = JSON.stringify({ name, content })
        fetch(`https://cupertino-api.herokuapp.com/post/new`, {
            method: "POST",
            body: output,
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }).then((res) => res.json()).then((json) => {
            if (json.error_code) {
                console.error(`${json.msg}`)
            } else {
                console.log("Success! Post created.")
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
module.exports = Post
