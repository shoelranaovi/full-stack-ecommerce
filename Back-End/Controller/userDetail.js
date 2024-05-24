const usermodel = require("../models/userModel");

async function userDetail(req, res) {
  try {
    const user = await usermodel.findById(req.user._id);
    res.status(200).json({
      data: user,
      error: false,
      success: true,
      message: "user details",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
}

module.exports = userDetail;
