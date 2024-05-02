const geteQualification = require("../../controllers/qualification/getQualification");

const getQualificaitionHandler = async (req, res) => {
  try {
    console.log("getQualificaitionHandler");
    const { id } = req.params;
    const findQualification = await geteQualification(id);
    if (findQualification.find) {
      res.status(200).json(findQualification);
    } else {
      res.status(400).json(findQualification);
    }
  } catch (error) {
    console.log(`getQualificaitionHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getQualificaitionHandler;
