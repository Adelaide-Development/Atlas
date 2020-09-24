/*
 * ONE AMONG THE FENCE
 *
 * Atlas : sendToServer.js
 *
 * Copyright (c) Cupertino Development 2020
 *
*/

// Main source code
function sendToServer(data) {
  if (arguments[1]) { return console.log("[ATLAS] Unexpected argument."); }
  console.log(data);
};

// Exports
exports.sendToServer = sendToServer;
