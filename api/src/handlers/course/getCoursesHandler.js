const getCourses = require("../../controllers/course/getCourses");

const getCoursesHandler = async (req, res) => {
  try {
    console.log("getCoursesHandler");
    const findCourses = await getCourses(req.query);
    if (findCourses.geted) {
      res.status(200).json(findCourses);
    } else {
      res.status(400).json({ geted: false, message: "No courses found" });
    }
  } catch (error) {
    console.log(`getCoursesHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getCoursesHandler;
