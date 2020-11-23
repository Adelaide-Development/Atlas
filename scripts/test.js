const atlas = require("../src/js/Atlas")

console.log("Attempting to send a ping request to test Atlas...\n")

atlas.sys.ping(function(result) {
    console.log(`Message: ${result.msg}\nNonce: ${result.nonce}`)
});