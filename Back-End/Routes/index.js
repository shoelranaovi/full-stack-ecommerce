const express = require("express");
const userSignUp = require("../Controller/userSignUp");
const getAlluser = require("../Controller/getalluser");

const router = express.Router();

router.post("/singup", userSignUp);
router.get("/users", getAlluser);

module.exports = router;
