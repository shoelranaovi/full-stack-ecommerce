const express = require("express");
const userSignUp = require("../Controller/userSignUp");
const getAlluser = require("../Controller/getalluser");
const singIn = require("../Controller/userSignIn");
const authtoken = require("../Middleware/authtoken");
const userDetail = require("../Controller/userDetail");
const signout = require("../Controller/userSignout");
const userupdate = require("../Controller/updateuser");

const router = express.Router();

router.post("/singup", userSignUp);
router.post("/singin", singIn);
router.get("/users", getAlluser);
router.get("/user-detail", authtoken, userDetail);
router.get("/signout", signout);
router.post("/updateuser", authtoken, userupdate);

module.exports = router;
