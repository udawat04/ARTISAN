const { JwtServices } = require("../services");
const Register = require("../User/models/registerModel");
// const Register =require("../User/models/registerModel");

const auth = async (req, res, next) => {
  try {
    let authHeader = req.headers.authorization;
    console.log("token", authHeader);

    if (!authHeader) {
      return res.json({ status: 401, message: "Unauthorized Request" });
    }
    const token = authHeader.split(" ")[1];
    const { _id } = await JwtServices.verify(token);

    const user = await Register.findOne({ _id });

    if (user) {
      req.user = user;
      next();
    } else {
      return res.json({ status: 401, message: "invalid token" });
    }
  } catch (error) {
    if (error?.name) {
      return res.json({
        status: 500,
        message: error?.name,
      });
    } else {
      return res.json({
        status: 500,
        message: "internal server Error from authjs",
        error: error,
      });
    }
  }
};

module.exports = auth;
