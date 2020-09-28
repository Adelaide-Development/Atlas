/*
 * ONE AMONG THE FENCE
 * 
 * Atlas : Atlas.js
 * 
 * Copyright (c) Cupertino Development 2020
 * 
*/

// Consts and Requires
const { post } = require("./src/js/post.js")
const { sendMessage } = require("./src/js/sendMessage.js")

// Arg Handler
if (process.argv[2]) {
    return console.log("[ATLAS] Unexpected argument.")
}

// Exports
exports.post = post
exports.sendMessage = sendMessage