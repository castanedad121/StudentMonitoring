const { Student, User, Course } = require("../../DB_connection");
const putStudent = async (id, data) => {
  const { identDocument, name, lastName, birthdate, image, users, courses } =
    data;
  if (id && identDocument && name && lastName && birthdate) {
    const existingStudent = await Student.findByPk(id, {
      include: [
        { model: User, attributes: ["id", "name", "lastName", "email"] },
        { model: Course },
      ],
    });
    existingStudent.identDocument = identDocument;
    existingStudent.name = name;
    existingStudent.lastName = lastName;
    existingStudent.birthdate = birthdate;
    existingStudent.image = image || null;
    existingStudent.save();

    users && (await existingStudent.setUsers(users));
    courses && (await existingStudent.setCourses(courses));

    const updateStudent = await Student.findByPk(id, {
      include: [
        { model: User, attributes: ["id", "name", "lastName", "email"] },
        { model: Course },
      ],
    });
    return { update: true, updateStudent };
  } else {
    return { update: false, message: "Missing data for creating student" };
  }
};

module.exports = putStudent;
