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

function post(name, content, extra) {
  if (!name) { return console.log(`[ATLAS] No name provided.`); }
  if (!content) { return console.log(`[ATLAS] No content provided.`); }
  if (extra) { return console.log(`[ATLAS] Unexpected identifier: "` + extra + `"`); }
  const output = JSON.stringify({ POST_NAME: name, POST_CONTENT: content });
  sendToServer(output);
};

exports.post = post;
