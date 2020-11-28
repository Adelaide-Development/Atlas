/**
 * 
 * Atlas : Atlas.js
 * 
 * Copyright (c) Helselia Development and Atlas' Authors / Contributors 2020-
 * 
**/

"use strict";

// Consts and Requires
const Club = require("./modules/club");
const Message = require("./modules/message");
const Post = require("./modules/post");
const System = require("./modules/system");
const User = require("./modules/user");

// Arg Handler
if (process.argv[2]) {
    return console.log("[ATLAS] Unexpected argument.");
}

// Exports
module.exports = {
    club: new Club(),
    // The following is commented out because it is not present in Helselia's API
    // message: new Message(),
    // msg: new Message(),
    // post: new Post(), (commented out for lack of support)
    system: new System(),
    sys: new System(),
    user: new User(),
    usr: new User()
}