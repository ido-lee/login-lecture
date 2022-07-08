"use strict";



const output = {
    home : (req, res) => {
        res.render("home/index");
    },
    
    login : (request, res) => {
        res.render("home/login");
    },
}

const users = {
    id : ["이동건", "sirius", "karina"],
    psword : ["1234", "1234", "love"],
};


// console.log(id, psword);
const process = {
    login : (req, res) => {
        const id = req.body.id,
        psword = req.body.psword;

        if (users.id.includes(id)) {
            const idx = users.id.indexOf(id);
            if (users.psword[idx] === psword) {
                return res.json({
                    success : true,
                });
            }
        }

        return res.json({
            success : false,
            msg : "로그인에 실패하셨습니다."
        });
    },
};

// 다른 프로그램에서 사용 가능하도록 공유
module.exports = {
    output,
    process,
    // users,
};