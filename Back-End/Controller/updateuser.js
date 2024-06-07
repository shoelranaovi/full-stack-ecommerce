const usermodel = require("../models/userModel");

async function userupdate(req, res) {
  try {
    const { userId, email, name, role } = req.body;
    console.log(role);

    const payload = {
      ...(email && { email: email }),
      ...(name && { name: name }),
      ...(role && { role: role }),
    };

    const update = await usermodel.findByIdAndUpdate(userId, payload);

    res.status(200).json({
      data: update,
      error: false,
      success: true,
      message: "user details",
    });
  } catch (error) {
    console.log(error);

    res.json({
      message: error.message,
      error: true,
      success: false,
    });
  }
}
module.exports = userupdate;
