const { Student } = require("../../DB_connection");
const postStudent = async (data) => {
  const { identDocument, name, lastName, birthdate, image, users, courses } =
    data;
  if (identDocument && name && lastName && birthdate) {
    const [studentNew, created] = await Student.findOrCreate({
      where: { identDocument },
      defaults: {
        name,
        lastName,
        birthdate,
        image,
      },
    });
    if (created) {
      users && (await studentNew.setUsers(users));
      courses && (await studentNew.setCourses(courses));

      return { created: true, studentNew };
    } else {
      return { created: false, message: "The student already exists" };
    }
  } else {
    return { created: false, message: "Missing data for creating student" };
  }
};

module.exports = postStudent;
