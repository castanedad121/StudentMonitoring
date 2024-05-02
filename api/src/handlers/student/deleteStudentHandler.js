const deleteStudent = require("../../controllers/student/deleteStudent");

const deleteStudentHandler = async (req, res) => {
  try {
    console.log("deleteStudentHandler");
    const { id } = req.params;
    const deletedStudent = await deleteStudent(id);
    if (deletedStudent.deleted) {
      res.status(200).json(deletedStudent);
    } else {
      res.status(400).json(deletedStudent);
    }
  } catch (error) {
    console.log(`deleteStudentHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteStudentHandler;
