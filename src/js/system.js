/*
 * ONE AMONG THE FENCE
 *
 * Atlas : System.js
 *
 * Copyright (c) Cupertino Development 2020
 *
*/

"use strict";

// Consts and Requires
const fetch = require("node-fetch");

// Main source code
class System {
    
    constructor() {}
    
    ping() {
        fetch("http://cupertino-api.herokuapp.com/ping", {
            method: "Get",
        }).then((res) => res.json()).then((json) => {
            return console.log(json)
        });
    }

}

// Exports
module.exports = System;
