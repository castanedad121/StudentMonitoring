const deleteCourse = require("../../controllers/course/deleteCourse");

const deleteCourseHandler = async (req, res) => {
  try {
    console.log("deleteCourseHandler");
    const { id } = req.params;
    const deletedCourse = await deleteCourse(id);
    if (deletedCourse.deleted) {
      res.status(200).json(deletedCourse);
    } else {
      res.status(400).json(deletedCourse);
    }
  } catch (error) {
    console.log(`deleteCourseHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteCourseHandler;
