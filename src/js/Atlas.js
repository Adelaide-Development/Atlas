/**
 * ONE AMONG THE FENCE
 * 
 * Atlas : Atlas.js
 * 
 * Copyright (c) Cupertino Development 2020
 * 
*/

"use strict"

// Consts and Requires
const Club = require("./modules/club")
const Message = require("./modules/message")
const Post = require("./modules/post")
const System = require("./modules/system")
const User = require("./modules/user")

// Arg Handler
if (process.argv[2]) {
    return console.log("[ATLAS] Unexpected argument.")
}

// Exports
module.exports = {
    club: new Club(),
    message: new Message(),
    msg: new Message(),
    post: new Post(),
    system: new System(),
    sys: new System(),
    user: new User(),
    usr: new User()
}