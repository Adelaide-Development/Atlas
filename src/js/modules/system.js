/**
 * ONE AMONG THE FENCE
 * 
 * Atlas : Atlas.js
 * 
 * Copyright (c) Adelaide Development and Atlas' Authors / Contributors 2020-
 * 
**/

// Consts and Requires
const { Base, fetch } = require("./base");

// Main source code
class System extends Base {
    
    constructor() {
        super(Base);
    }
    
    /**
     * Send Ping Request to Server
     * @param Function result 
    **/
    ping(result) {
        fetch("https://adelaide-api.herokuapp.com/ping", {
            method: "Get",
        }).then((res) => res.json()).then((json) => {
            if (result) {
                return result(json);
            } else {
                return console.log(json);
            }
        });
    }

}

// Exports
module.exports = System