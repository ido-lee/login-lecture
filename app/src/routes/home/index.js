"use strict";

//모듈 사용
const express = require("express");
const router = express.Router();

// ctrl 사용경로 선언
const ctrl = require("./home.ctrl");

// get 방식으로 요청이 '/'로 오면 ctrl에 home를 실행 (렌더링)
router.get("/", ctrl.output.home);
router.get("/login", ctrl.output.login);

//post 방식으로 /login 요청이 오면 
router.post("/login", ctrl.process.login);
    
// 공유
module.exports = router;