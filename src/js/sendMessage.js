/*
 * ONE AMONG THE FENCE
 *
 * Atlas : sendMessage.js
 *
 * Copyright (c) Cupertino Development 2020
 *
 */

// Consts and Requires
const fetch = require('node-fetch');

// Main source code
function sendMessage(channelId, content, token) {
  const output = JSON.stringify({ content, channelId })
  fetch(`http://cupertino-api.herokuapp.com/msg/new`, {
    method: 'POST',
    body: output,
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
  }).then(res => res.json()).then(json => {
    if (json.error_code) {
      return console.error(`Error code: ${json.error_code} | ${json.msg}`)
    } else {
      return console.log("Success! Message sent.")
    }
  })
};

// Exports
exports.sendMessage = sendMessage
