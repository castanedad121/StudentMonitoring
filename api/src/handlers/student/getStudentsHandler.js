const getStudents = require("../../controllers/student/getStudents");

const getStudentsHandler = async (req, res) => {
  try {
    console.log("getStudentsHandler");
    const findStudents = await getStudents(req.query);
    if (findStudents.geted) {
      res.status(200).json(findStudents);
    } else {
      res.status(400).json({ geted: false, message: "No students found" });
    }
  } catch (error) {
    console.log(`getStudentsHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getStudentsHandler;
