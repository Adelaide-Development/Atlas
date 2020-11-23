/**
 * 
 * Atlas : Atlas.js
 * 
 * Copyright (c) Helselia Development and Atlas' Authors / Contributors 2020-
 * 
**/

// Consts and Requires
const { Base, fetch } = require("./base");

// Main source code
class Club extends Base {

    constructor() {
        super(Base);
    }

    /**     * Create Club
     * @param String name 
     * @param String description 
     * @param String token 
     * @param String result 
    **/
    create(name, description, token, result) {
        if (!name) return console.error("No name provided.");
        if (!description) return console.error("No description provided.");
        if (!token) return console.error("No token provided.");
        const output = JSON.stringify({ name, description });
        fetch(`http://108.54.245.184/club/new`, {
            method: "POST",
            body: output,
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }).then((res) => res.json()).then((json) => {
            if (result) {
                return result(json);
            } else {
                return console.log(json);
            }
        });
    }

    /**     * Join Club
     * @param String club_id 
     * @param String token 
     * @param String result 
    **/
    join(club_id, token, result) {
        if (!club_id) return console.error("No club ID provided.");
        if (!token) return console.error("No token provided.");
        const output = JSON.stringify({ club_id });
        fetch(`http://108.54.245.184/club/join/@me`, {
            method: "PATCH",
            body: output,
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        }).then(res => res.json()).then(json => {
            if (result) {
                return result(json);
            } else {
                return console.log(json);
            }
        });
    }

}

// Exports
module.exports = Club
