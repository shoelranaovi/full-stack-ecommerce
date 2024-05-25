async function singout(req, res) {
  try {
    res.clearCookie("token");

    res.status(200).json({
      message: "SIGN out COMPLETE",
      data: [],
      success: true,
      error: false,
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      message: err.message,
      success: false,
      error: true,
    });
  }
}

module.exports = singout;
