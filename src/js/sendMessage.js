/*
 * ONE AMONG THE FENCE
 *
 * Atlas : sendMessage.js
 *
 * Copyright (c) Cupertino Development 2020
 *
 */

// Consts and Requires
const { sendToServer } = require("./sendToServer.js");

// Main source code
function sendMessage(channel, content) {
  if (!channel) { return console.log(`[ATLAS] No valid channel provided.`); }
  if (!content) { return console.log(`[ATLAS] No content provided.`); }
  if (arguments[2]) { return console.log(`[ATLAS] Unexpected argument.`); }
  const output = JSON.stringify({ CHANNEL: channel, MESSAGE_CONTENT: content });
  sendToServer(output);
};

// Exports
exports.sendMessage = sendMessage;
