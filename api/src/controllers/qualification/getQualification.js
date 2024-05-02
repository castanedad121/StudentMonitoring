const { Qualification, Student, Course, User } = require("../../DB_connection");
const getQualification = async (id) => {
  if (id) {
    const existingQualification = await Qualification.findByPk(id, {
      include: [
        { model: Student },
        { model: Course },
        { model: User, attributes: ["id", "name", "lastName", "email"] },
      ],
    });
    if (!existingQualification) {
      return { find: false, message: "Qualification no exists" };
    }

    return { find: true, existingQualification };
  } else {
    return { find: false, message: "Missing data for get qualification" };
  }
};

module.exports = getQualification;
