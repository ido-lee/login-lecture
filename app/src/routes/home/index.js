"use strict";

//모듈 사용
const express = require("express");
const router = express.Router();

// ctrl 사용경로 선언
const ctrl = require("./home.ctrl");

// 요청이 '/'로 오면 ctrl에 hello를 실행
router.get("/", ctrl.hello)
router.get("/login", ctrl.login);
    
// 공유
module.exports = router;