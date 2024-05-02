const postCourse = require("../../controllers/course/postCourse");

const postCourseHandler = async (req, res) => {
  try {
    console.log("postCourseHandler");
    const newCourse = await postCourse(req.body);
    if (newCourse.created) {
      res.status(200).json(newCourse);
    } else {
      res.status(400).json(newCourse);
    }
  } catch (error) {
    console.log(`postCourseHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postCourseHandler;
