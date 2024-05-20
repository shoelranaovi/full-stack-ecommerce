const usermodel = require("../models/userModel");

async function getAlluser(req, res, next) {
  let users;
  try {
    users = await usermodel.find();
  } catch (error) {
    // return console.log(error);
    res.json({
      massage: error,
      error: true,
      success: false,
    });
  }
  if (!users) {
    return res.status(400).json({ message: "no user are found" });
    // throw new Error("provide your Email address")
  }
  return res.status(200).json({ users });
}
module.exports = getAlluser;
