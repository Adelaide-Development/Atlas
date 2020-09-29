/*
 * ONE AMONG THE FENCE
 *
 * Atlas : Post.js
 *
 * Copyright (c) Cupertino Development 2020
 *
 */

// Consts and Requires
const fetch = require("node-fetch")

// Main source code
function post(name, content) {
  if (!name) { return console.error(`[ATLAS] No name provided.`) }
  if (!content) { return console.error(`[ATLAS] No content provided.`) }
  if (arguments[2]) { return console.error(`[ATLAS] Unexpected argument.`) }
  const output = JSON.stringify({ content, name })
};

// Exports
exports.post = post
