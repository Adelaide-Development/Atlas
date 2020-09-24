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

exports.post = function () {
  let name = arguments[0];
  let content = arguments[1];
  if (!name) { return console.log(`[ATLAS] No name provided.`); }
  if (!content) { return console.log(`[ATLAS] No content provided.`); }
  if (arguments[2]) { return console.log(`[ATLAS] Unexpected identifier: "` + arguments[2] + `"`); }
  const output = JSON.stringify({ POST_NAME: name, POST_CONTENT: content });
  sendToServer(output);
};
