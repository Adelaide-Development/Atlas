/**
 * 
 * Atlas : Atlas.js
 * 
 * Copyright (c) Helselia Development and Atlas' Authors / Contributors 2020-
 * 
**/

// Consts and Requires
const { Base, fetch, url } = require("../util/base");

// Main source code
class Post extends Base {

    constructor() {
        super(Base);
        this.name = "POST";
    }

    /**     * Create Post
     * @param String name 
     * @param String content 
     * @param String token 
     * @param String result 
    **/
    create(name, content, token, result) {
        const output = JSON.stringify({ name, content });
        fetch(url + `post/new`, {
            method: "POST",
            body: output,
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }).then((res) => res.json()).then((json) => {
            this.sendResult(json);
        });
    }
    
}

// Exports
module.exports = Post