const bcrypt = require("bcrypt");
const { User, Student, Course } = require("../../DB_connection");
const { generateAccessToken } = require("../../functions/generateAccessToken");

const postLogin = async (data) => {
  const { identDocument, password } = data;
  if (!identDocument || !password) {
    return { message: "Missing data for login user" };
  } else {
    const user = await User.findOne({
      where: { identDocument },
      include: [{ model: Student }, { model: Course }],
    });
    console.log("llegue aqui");
    if (!user) {
      return { message: "Invalid credentials" };
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log(`el match: ${passwordMatch}`);
    if (!passwordMatch) {
      return { message: "Invalid credentials" };
    }
    if (passwordMatch) {
      const loginUser = user.dataValues;
      delete loginUser.password;
      const accessToken = generateAccessToken(loginUser);
      console.log(accessToken);

      return { message: "User authenticated", loginUser, token: accessToken };
    }
  }
};

module.exports = postLogin;
