const bcrypt = require("bcrypt");
const { User, Student, Course } = require("../../DB_connection");
const postUserRegister = async (data) => {
  const { id } = data.params;
  const {
    identDocument,
    email,
    password,
    newpassword,
    name,
    lastName,
    birthdate,
    image,
    role,
    students,
    courses,
  } = data.body;
  if (id && identDocument && email && name && lastName && birthdate && role) {
    const existingUser = await User.findByPk(id, {
      include: [{ model: Student }, { model: Course }],
    });
    if (password && newpassword) {
      const hashedNewPassword = await bcrypt.hash(newpassword, 10);
      if (await bcrypt.compare(password, existingUser.password)) {
        existingUser.password = hashedNewPassword;
      } else {
        return { update: false, message: "Password incorrect" };
      }
    }
    existingUser.identDocument = identDocument;
    existingUser.email = email;
    existingUser.name = name;
    existingUser.lastName = lastName;
    existingUser.birthdate = birthdate;
    existingUser.role = role;
    existingUser.image = image || null;
    existingUser.save();

    students && (await existingUser.setStudents(students));
    courses && (await existingUser.setCourses(courses));

    const userUpdate = await User.findByPk(id, {
      include: [{ model: Student }, { model: Course }],
    });

    return { update: true, userUpdate };
  } else {
    return { update: false, message: "Missing data for updated user" };
  }
};

module.exports = postUserRegister;
