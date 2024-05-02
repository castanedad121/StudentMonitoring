const { Course, User, Student } = require("../../DB_connection");
const putCourse = async (id, data) => {
  const { nameCourse, division, period, image, state, year, students, user } =
    data;
  if (id && nameCourse && division && period && state && year) {
    const serialNumber = `${nameCourse
      .substr(0, 3)
      .toUpperCase()}${period}${division}${year}`;
    const existingCourse = await Course.findByPk(id, {
      include: [
        { model: User, attributes: ["id", "name", "lastName", "email"] },
        { model: Student },
      ],
    });
    if (!existingCourse) {
      return { update: false, message: "Course no exists" };
    }
    existingCourse.serialNumber = serialNumber;
    existingCourse.nameCourse = nameCourse;
    existingCourse.division = division;
    existingCourse.period = period;
    existingCourse.image = image || null;
    existingCourse.state = state;
    existingCourse.year = year;
    existingCourse.save();

    students && (await existingCourse.setStudents(students));
    user && (await User.findByPk(user)) && (await existingCourse.setUser(user));

    const updateCourse = await Course.findByPk(id, {
      include: [
        { model: User, attributes: ["id", "name", "lastName", "email"] },
        { model: Student },
      ],
    });
    return { update: true, updateCourse };
  } else {
    return { update: false, message: "Missing data for update course" };
  }
};

module.exports = putCourse;
