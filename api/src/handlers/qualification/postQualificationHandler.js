const postQualification = require("../../controllers/qualification/postQualification");

const postQualificationHandler = async (req, res) => {
  try {
    console.log("postQualificationHandler");
    const newQualification = await postQualification(req.body);
    if (newQualification.created) {
      res.status(200).json(newQualification);
    } else {
      res.status(400).json(newQualification);
    }
  } catch (error) {
    console.log(`postQualificationHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postQualificationHandler;
