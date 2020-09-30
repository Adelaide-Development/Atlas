/*
 * ONE AMONG THE FENCE
 * 
 * Atlas : Atlas.js
 * 
 * Copyright (c) Cupertino Development 2020
 * 
*/

"use strict";

const Club = require("./src/js/club")
const Message = require("./src/js/message");
const Post = require("./src/js/post")
const System = require("./src/js/system")

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
    sys: new System()
}