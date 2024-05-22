const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const Router = require("./Routes");

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());
app.use("/api", Router);

const PORT = 8080 || process.env.PORT;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("connnect to DB server");
    console.log("Server is running " + PORT);
  });
});
