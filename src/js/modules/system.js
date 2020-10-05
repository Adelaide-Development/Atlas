/*
 * ONE AMONG THE FENCE
 *
 * Atlas : System.js
 *
 * Copyright (c) Cupertino Development 2020
 *
*/

"use strict"

// Consts and Requires
const { Base, fetch } = require("./base")

// Main source code
class System extends Base {
    
    constructor() {
        super(Base)
    }
    
    /**
     * Send Ping Request to Server
     * @param String result 
    */
    ping(result) {
        fetch("https://cupertino-api.herokuapp.com/ping", {
            method: "Get",
        }).then((res) => res.json()).then((json) => {
            if (result) {
                return result(json)
            } else {
                return console.log(json)
            }
        })
    }

}

// Exports
module.exports = System
