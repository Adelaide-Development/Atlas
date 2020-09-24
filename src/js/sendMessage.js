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

function sendMessage(channel, content, extra) {
  if (!channel) { return console.log(`[ATLAS] No valid channel provided.`); }
  if (!content) { return console.log(`[ATLAS] No content provided.`); }
  if (extra) { return console.log(`[ATLAS] Unexpected identifier: "` + extra + `"`); }
  const output = JSON.stringify({ CHANNEL: channel, MESSAGE_CONTENT: content });
  sendToServer(output);
};

exports.sendMessage = sendMessage;
