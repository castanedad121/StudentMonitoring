const { Qualification } = require("../../DB_connection");
const deletedQualificaition = async (id) => {
  if (id) {
    const qualificationDeleted = await Qualification.findByPk(id);
    if (!qualificationDeleted) {
      return { deleted: false, message: "The qualification no exists" };
    }
    const course = await qualificationDeleted.getCourse();
    if (course && course.length > 0) {
      // Elimino la relación con el course
      await qualificationDeleted.setCourse(null);
    }
    const user = await qualificationDeleted.getUser();
    if (user && user.length > 0) {
      // Elimino la relación con el user
      await qualificationDeleted.setUser(null);
    }
    const student = await qualificationDeleted.getStudent();
    if (student && student.length > 0) {
      // Elimino la relación con el student
      await qualificationDeleted.setStudent(null);
    }
    await qualificationDeleted.destroy();
    return { deleted: true, message: "Qualifications deleted" };
  } else {
    return { deleted: false, message: "Missing data for deleted course" };
  }
};

module.exports = deletedQualificaition;
