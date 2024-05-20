const bcrypt = require("bcrypt");
const usermodel = require("../models/userModel");

async function userSignUp(req, res, next) {
  try {
    const { email, password, name } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email is required" });
      // throw new Error("provide your Email address")
    }
    if (!password) {
      return res.status(400).json({ message: "password is required" });
      // throw new Error("provide your Email address")
    }
    if (!name) {
      return res.status(400).json({ message: "name is required" });
      // throw new Error("provide your Email address")
    }
    if (usermodel) {
      return res.status(400).json({ message: "already " });
      // throw new Error("provide your Email address")
    }

    const salt = bcrypt.genSaltSync(10);
    const hashpass = await bcrypt.hashSync(password, salt);
    if (!hashpass) {
      return res.status(400).json({ message: "something wrong" });
      // throw new Error("provide your Email address")
    }

    // const payload = {
    //   ...req.body,
    //   password: hashpass,
    // };
    // const user = new usermodel(payload);
    const user = new usermodel({
      email,
      password: hashpass,
      name,
    });
    const savedata = await user.save();
    res.status(200).json({
      data: savedata,
      success: true,
      error: false,
      massage: "user Create succesfully",
    });
  } catch (error) {
    console.log(error);
    // return console.log(error);
    res.json({
      massage: error,
      error: true,
      success: false,
    });
  }
}
module.exports = userSignUp;
