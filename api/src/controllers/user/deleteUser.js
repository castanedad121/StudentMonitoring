const { User, Qualification, Course } = require("../../DB_connection");
const deleteUser = async (id) => {
  if (id) {
    const usedQualifications = await Qualification.findOne({
      where: { UserId: id },
    });
    if (usedQualifications) {
      return { deleted: false, message: "User used for qualification." };
    }
    const usedCourses = await Course.findOne({
      where: { UserId: id },
    });
    if (usedCourses) {
      return { deleted: false, message: "User used for course." };
    }
    const userDeleted = await User.findByPk(id);
    if (!userDeleted) {
      return { deleted: false, message: "The user no exists" };
    }

    const userAdmin = userDeleted.role === "Administrador";

    if (userAdmin) {
      return {
        deleted: false,
        message: "The user is Admin, permise denied",
      };
    }

    await userDeleted.removeStudents();

    await userDeleted.destroy();
    return { deleted: true, message: "User deleted" };
  } else {
    return { deleted: false, message: "Missing data for deleted user" };
  }
};

module.exports = deleteUser;
