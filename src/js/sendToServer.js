/*
 * ONE AMONG THE FENCE
 *
 * Atlas : sendToServer.js
 *
 * Copyright (c) Cupertino Development 2020
 *
*/

// Main source code
function sendToServer(data, type) {
  if (!type) { return console.error("[ATLAS] No type provided."); }
  if (arguments[2]) { return console.error("[ATLAS] Unexpected argument."); }
  console.log(data);
  /*
  fetch(`<cupertino_url>/${TYPE}/create`, {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer <user_token>',
      'Content-Type': 'application/json'
    },
    body: data
  })
  */
};

// Exports
exports.sendToServer = sendToServer;
