const express = require("express");
const userSignUp = require("../Controller/userSignUp");
const getAlluser = require("../Controller/getalluser");
const singIn = require("../Controller/userSignIn");

const router = express.Router();

router.post("/singup", userSignUp);
router.post("/singin", singIn);
router.get("/users", getAlluser);

module.exports = router;
