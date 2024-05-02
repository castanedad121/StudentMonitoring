const { Course, User } = require("../../DB_connection");
const postCourse = async (data) => {
  const { nameCourse, division, period, image, state, year, students, user } =
    data;
  if (nameCourse && division && period && state && year) {
    const courseName = nameCourse.split(" ").join("").toUpperCase();
    const serialNumber = `${courseName}${period}${division}${year}`;
    const [courseNew, created] = await Course.findOrCreate({
      where: { serialNumber },
      defaults: {
        nameCourse,
        division,
        period,
        image,
        state,
        year,
      },
    });
    if (created) {
      students && (await courseNew.setStudents(students));
      user && (await User.findByPk(user)) && (await courseNew.setUser(user));

      return { created: true, courseNew };
    } else {
      return { created: false, message: "The course already exists" };
    }
  } else {
    return { created: false, message: "Missing data for creating course" };
  }
};

module.exports = postCourse;
