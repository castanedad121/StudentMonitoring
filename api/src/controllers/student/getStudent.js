const { Student, User, Course } = require("../../DB_connection");
const putStudent = async (id) => {
  if (id) {
    const existingStudent = await Student.findByPk(id, {
      include: [
        { model: User, attributes: ["id", "name", "lastName", "email"] },
        { model: Course },
      ],
    });

    return { find: true, existingStudent };
  } else {
    return { find: false, message: "Missing data for get student" };
  }
};

module.exports = putStudent;
