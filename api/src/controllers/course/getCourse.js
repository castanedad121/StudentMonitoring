const { Course, User, Student } = require("../../DB_connection");
const getCourse = async (id) => {
  if (id) {
    const existingCourse = await Course.findByPk(id, {
      include: [
        {
          model: User,
          attributes: ["id", "name", "lastName", "email", "role"],
        },
        { model: Student },
      ],
    });
    if (!existingCourse) {
      return { find: false, message: "Course no exists" };
    }

    return { find: true, existingCourse };
  } else {
    return { find: false, message: "Missing data for find course" };
  }
};

module.exports = getCourse;
