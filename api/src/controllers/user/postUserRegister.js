const bcrypt = require("bcrypt");
const { User } = require("../../DB_connection");
const postUserRegister = async (data) => {
  const {
    identDocument,
    email,
    password,
    name,
    lastName,
    birthdate,
    image,
    role,
    students,
    courses,
  } = data;
  if (
    identDocument &&
    email &&
    password &&
    name &&
    lastName &&
    birthdate &&
    role
  ) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const [userNew, created] = await User.findOrCreate({
      where: { identDocument },
      defaults: {
        email,
        password: hashedPassword,
        name,
        lastName,
        birthdate,
        image,
        role,
      },
    });
    if (created) {
      students && (await userNew.setStudents(students));
      courses && (await userNew.setCourses(courses));

      return { created: true, userNew };
    } else {
      return { created: false, message: "The user already exists" };
    }
  } else {
    return { created: false, message: "Missing data for creating user" };
  }
};

module.exports = postUserRegister;
