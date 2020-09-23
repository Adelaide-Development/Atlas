/*
 * ONE AMONG THE FENCE
 * 
 * Atlas : Atlas.js
 * 
 * Copyright (c) Cupertino Development 2020
 * 
*/

let LOGNAME = "ATLAS";

// Main source code
try {
    console.log(`[${LOGNAME}] COPYRIGHT CUPERTINO DEVELOPMENT 2020 \n[${LOGNAME}] ATTEMPTING STARTUP`);

    // "Import" external files
    require("./src/js/handler.js");
} catch (e) {
    console.log(`[${LOGNAME}] ${e}`);
}