"use strict";


const hello = (req, res) => {
    res.render("home/index");
};

const login = (request, res) => {
    res.render("home/login");
};

// 다른 프로그램에서 사용 가능하도록 공유
module.exports = {
    hello,
    login,
};