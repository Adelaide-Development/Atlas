/** * 
 * Atlas : Atlas.js
 * 
 * Copyright (c) Helselia Development and Atlas' Authors / Contributors 2020-
 * 
**/

// Consts and Requires
const { Base, fetch } = require("./base");

// Main source code
class System extends Base {
    
    constructor() {
        super(Base);
    }
    
    /**     * Send Ping Request to Server
     * @param Function result 
    **/
    ping(result) {
        fetch("http://108.54.245.184/ping", {
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