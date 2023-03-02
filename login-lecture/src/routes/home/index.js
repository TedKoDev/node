"user strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl");

router.get("/", ctrl.home);

router.get("/login", ctrl.login);

//외부에서 사용할수 있도록 해줌 app.js에서 받는코드 작성하기
module.exports = router;
