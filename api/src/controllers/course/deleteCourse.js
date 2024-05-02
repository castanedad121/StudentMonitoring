const { Course, Qualification } = require("../../DB_connection");
const deleteCourse = async (id) => {
  if (id) {
    const usedQualifications = await Qualification.findOne({
      where: { CourseId: id },
    });
    if (usedQualifications)
      return { deleted: false, message: "Course used for qualification." };
    const courseDeleted = await Course.findByPk(id);
    if (!courseDeleted) {
      return { deleted: false, message: "The course no exists" };
    }
    await courseDeleted.removeStudents();

    const user = await courseDeleted.getUser();
    if (user && user.length > 0) {
      // Elimino la relación con el user
      await courseDeleted.setUser(null);
    }
    await courseDeleted.destroy();
    return { deleted: true, message: "Course deleted" };
  } else {
    return { deleted: false, message: "Missing data for deleted course" };
  }
};

module.exports = deleteCourse;
