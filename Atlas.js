/*
 * ONE AMONG THE FENCE
 * 
 * Atlas : Atlas.js
 * 
 * Copyright (c) Cupertino Development 2020
 * 
*/

// Requires
require('mongoose');

// Main source code
console.log("[ATLAS] ATTEMPTING STARTUP");

try {
    require("./src/js/handler.js");
} catch (error) {
    console.log(`[ATLAS] ${error}`);
    return;
}