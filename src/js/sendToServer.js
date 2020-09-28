/*
 * ONE AMONG THE FENCE
 *
 * Atlas : sendToServer.js
 *
 * Copyright (c) Cupertino Development 2020
 *
*/

// Consts and Requires
const fetch = require('node-fetch');

// Main source code
async function sendToServer(data, type) {
  if (!type) { return console.error("[ATLAS] No type provided.") }
  if (arguments[2]) { return console.error("[ATLAS] Unexpected argument.") }
  console.log(data)
  fetch(`<cupertino-url>/${TYPE}/create`, {
    method: 'POST',
    body: data,
    headers: { 
      'Authorization': 'Bearer <user_token>',
      'Content-Type': 'application/json' 
    },
  }).then(raw => raw.json()).then(data => {
    // TODO: Insert response parsing code
  })
};

// Exports
exports.sendToServer = sendToServer
