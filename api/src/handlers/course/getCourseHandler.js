const getCourse = require("../../controllers/course/getCourse");

const getCourseHandler = async (req, res) => {
  try {
    console.log("getCourseHandler");
    const { id } = req.params;
    const findCourse = await getCourse(id);
    if (findCourse.find) {
      res.status(200).json(findCourse);
    } else {
      res.status(400).json(findCourse);
    }
  } catch (error) {
    console.log(`getCourseHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getCourseHandler;
