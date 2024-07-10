const bcrypt = require("bcrypt");
const  Register  = require("../../models/registerModel");
const { JwtServices } = require("../../../services");


const loginController = {
  async login(req, res) {
    let user;
    try {
      const { email, password } = req.body;
      user = await Register.findOne({ email });
      console.log(user)

      if (!user) {
        console.log("Invalid email");

        return res.json({ status: 401, error: "Invalid email" });
      }
      // console.log(userLog);
      const passwordValidate = await bcrypt.compare(password, user.password);
      if (!passwordValidate) {
        return res.json({ status: 401, error: "Invalid Password" });
      }
      console.log(passwordValidate);

      const accessToken =JwtServices.sign(
        {
          _id:user._id
        },
        "30m"
      );
      console.log(accessToken);

      const refreshToken =JwtServices.sign(
        {
          _id:user._id
        },
        "1y",
        REFRESH_SECRET
      );
      return res.json({status:200,accessToken,refreshToken,user})

    } catch (error) {
      return res.json({ status: 500, error: "server error from login", serverError: error });
    }
    // console.log("this person is loged in", userLog);
    // res.json({ status: 200, user: userLog });
  },
};
module.exports = loginController;
