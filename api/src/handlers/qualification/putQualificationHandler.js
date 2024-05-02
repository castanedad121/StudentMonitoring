const putQualification = require("../../controllers/qualification/putQualification");

const putQualificationHandler = async (req, res) => {
  try {
    console.log("putQualificationHandler");
    const { id } = req.params;
    const updateQualification = await putQualification(id, req);
    if (updateQualification.update) {
      res.status(200).json(updateQualification);
    } else {
      res.status(400).json(updateQualification);
    }
  } catch (error) {
    console.log(`putQualificationHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = putQualificationHandler;
