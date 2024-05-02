const { Student, Qualification } = require("../../DB_connection");
const deleteStudent = async (id) => {
  if (id) {
    const usedQualifications = await Qualification.findOne({
      where: { StudentId: id },
    });
    if (usedQualifications)
      return { deleted: false, message: "Student used for qualification." };
    const studentDeleted = await Student.findByPk(id);
    if (!studentDeleted) {
      return { deleted: false, message: "The student no exists" };
    }

    await studentDeleted.removeUsers();
    await studentDeleted.removeCourses();

    await studentDeleted.destroy();
    return { deleted: true, message: "Student deleted" };
  } else {
    return { deleted: false, message: "Missing data for deleted student" };
  }
};

module.exports = deleteStudent;
