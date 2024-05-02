const postStudent = require("../../controllers/student/postStudent");

const postStudentHandler = async (req, res) => {
  try {
    console.log("postStudentHandler");
    const newStudent = await postStudent(req.body);
    if (newStudent.created) {
      res.status(200).json(newStudent);
    } else {
      res.status(400).json(newStudent);
    }
  } catch (error) {
    console.log(`postStudentHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postStudentHandler;
