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
function post(name, content, token) {
  const output = JSON.stringify({ name, content })
  fetch(`http://cupertino-api.herokuapp.com/post/new`, {
    method: 'POST',
    body: output,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
  }).then(res => res.json()).then(json => {
    if (json.error_code) {
      return console.error(`${json.msg}`)
    } else {
      return console.log("Success! Post created.")
    }
  })
};

// Exports
exports.post = post
