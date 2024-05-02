const putStudent = require("../../controllers/student/putStudent");

const putStudentHandler = async (req, res) => {
  try {
    console.log("putStudentHandler");
    const { id } = req.params;
    const updateStudent = await putStudent(id, req.body);
    if (updateStudent.update) {
      res.status(200).json(updateStudent);
    } else {
      res.status(400).json(updateStudent);
    }
  } catch (error) {
    console.log(`putStudentHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = putStudentHandler;
