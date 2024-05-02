const { User, Student, Course } = require("../../DB_connection");
const getUser = async (id) => {
  if (id) {
    const existingUser = await User.findByPk(id, {
      include: [{ model: Student }, { model: Course }],
    });
    delete existingUser.dataValues.password;
    return { find: true, existingUser };
  } else {
    return { find: false, message: "Missing data for get user" };
  }
};

module.exports = getUser;
