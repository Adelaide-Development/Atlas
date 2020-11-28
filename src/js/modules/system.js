/** * 
 * Atlas : Atlas.js
 * 
 * Copyright (c) Helselia Development and Atlas' Authors / Contributors 2020-
 * 
**/

// Consts and Requires
const { Base, fetch, url } = require("../util/base");

// Main source code
class System extends Base {
    
    constructor() {
        super(Base);
    }
    
    /**     * Send Ping Request to Server
     * @param Function result 
    **/
    ping(result) {
        fetch(url + `/ping`, {
            method: "GET",
        }).then((res) => res.json()).then((json) => {
            if (result) {
                return result(json);
            } else {
                return console.log(json);
            }
        });
    }

    /**     * Get API URL
     * @param Function result
    */
    url(result) {
        if (result) {
            return result(url);
        } else {
            return console.log(url);
        }
    }

}

// Exports
module.exports = System