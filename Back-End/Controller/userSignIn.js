var bcrypt = require("bcrypt");
const usermodel = require("../models/userModel");
const jwt = require("jsonwebtoken");

async function singIn(req, res) {
  const { email, password } = req.body;

  try {
    if (!email) {
      throw new Error("plz provide email address");
    }
    if (!password) {
      throw new Error("plz provide password");
    }
    const user = await usermodel.findOne({ email });

    if (!user) {
      throw new Error("user not found");
    }

    const comparepass = await bcrypt.compareSync(password, user.password);

    if (comparepass) {
      const tokendata = {
        _id: user._id,
        email: user.email,
      };
      const token = await jwt.sign(tokendata, process.env.SECRET_KEY, {
        expiresIn: 60 * 60 * 8,
      });
      const tokenoption = {
        httpOnly: true,
        securce: true,
      };
      res.cookie("token", token, tokenoption).json({
        message: "SIGN IN COMPLETE",
        data: token,
        success: true,
        error: false,
      });
    } else {
      throw new Error("Kindly check your pass");
    }
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
      success: false,
      error: true,
    });
  }
}

module.exports = singIn;
