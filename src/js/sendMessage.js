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
  if (!channel) { return console.error(`[ATLAS] No valid channel provided.`); }
  if (!content) { return console.error(`[ATLAS] No content provided.`); }
  if (arguments[2]) { return console.error(`[ATLAS] Unexpected argument.`); }
  const output = JSON.stringify({ channelId: channel, content: content });
  sendToServer(output);
};

// Exports
exports.sendMessage = sendMessage;
