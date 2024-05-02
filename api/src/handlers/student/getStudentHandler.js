const getStudent = require("../../controllers/student/getStudent");

const getStudentHandler = async (req, res) => {
  try {
    console.log("getStudentHandler");
    const { id } = req.params;
    const findStudent = await getStudent(id);
    if (findStudent.find) {
      res.status(200).json(findStudent);
    } else {
      res.status(400).json(findStudent);
    }
  } catch (error) {
    console.log(`getStudentHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getStudentHandler;
