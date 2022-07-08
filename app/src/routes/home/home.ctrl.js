"use strict";

const { response } = require("../../../app");
const UserStorage = require("../../models/UserStorage");




const output = {
    home : (req, res) => {
        res.render("home/index");
    },
    
    login : (request, res) => {
        res.render("home/login");
    },
};


// console.log(id, psword);
const process = {
    login : (req, res) => {
        const id = req.body.id,
        psword = req.body.psword;
    console.log(UserStorage.getUsers("id", "psword"));
        
         const response = {};
        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                response.success = true;
                return res.json(response);
                }
            }

        response.success = false;
        response.msg = "로그인에 실패하셨습니다.";
        return res.json(response);
    },
};

// 다른 프로그램에서 사용 가능하도록 공유
module.exports = {
    output,
    process,
    // users,
};