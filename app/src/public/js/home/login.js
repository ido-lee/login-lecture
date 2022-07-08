"use strict";

// login.ejs input태그의 id를 가져옴
const id  = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");
    // login.ejs button을 가져옴 

// console.log(id); --확인

// login 버튼이 눌리고 click 이벤트 발생시 loging함수 실행
loginBtn.addEventListener("click", login);

// login 함수 실행
// function login () { console.log("hello")} -- 확인 

// console.log(id.value); -- 확인 id란에 입력한 정보가 들어옴
function login( ) {
    const req = {
        id : id.value,
        psword : psword.value
    };
    

    // console.log(req); -- 확인  
    // console.log(JSON.stringify(req)); -- 확인

    // fetch 서버와 프론트와 어떤 경로에서 정보를 주고 받을지 정해줌
    fetch("/login", {
        method : "post",
        headers : {
            "content-Type" : "application/json"
        },
        // json 방식으로 전송 
        // stringify : 문자 열로 바꿈
        body : JSON.stringify(req)
    })
    .then((res) => res.json())
    // res를 json으로 받고 

    // res에서 res.success라면 "/"로 이동해라
    .then((res) => {
        if (res.success) {
            location.href = "/";
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error(new Error("로그인 중 에러 발생"));
    })
}