const putCourse = require("../../controllers/course/putCourse");

const putCoursenHandler = async (req, res) => {
  try {
    console.log("putCoursenHandler");
    const { id } = req.params;
    const updateCourse = await putCourse(id, req.body);
    if (updateCourse.update) {
      res.status(200).json(updateCourse);
    } else {
      res.status(400).json(updateCourse);
    }
  } catch (error) {
    console.log(`putCoursenHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = putCoursenHandler;
