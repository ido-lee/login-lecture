"use strict";

class UserStorage {
    static #users = {
        id : ["이동건", "sirius", "karina"],
        psword : ["1234", "1234", "love"],
        name : ["이동건", "sirius", "karina"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            console.log(newUsers, field);
        });
        return;
    }
}

module.exports = UserStorage