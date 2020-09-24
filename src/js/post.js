/*
 * ONE AMONG THE FENCE
 *
 * Atlas : Post.js
 *
 * Copyright (c) Cupertino Development 2020
 *
 */

// Consts and Requires
const { sendToServer } = require("./sendToServer.js");

// Main source code
function post(name, content) {
  if (!name) { return console.log(`[ATLAS] No name provided.`); }
  if (!content) { return console.log(`[ATLAS] No content provided.`); }
  if (arguments[2]) { return console.log(`[ATLAS] Unexpected argument.`); }
  const output = JSON.stringify({ POST_NAME: name, POST_CONTENT: content });
  sendToServer(output);
};

// Exports
exports.post = post;
