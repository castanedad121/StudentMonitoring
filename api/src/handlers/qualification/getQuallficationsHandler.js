const geteQualifications = require("../../controllers/qualification/getQualifications");

const getQualificaitionsHandler = async (req, res) => {
  try {
    console.log("getQualificaitionsHandler");

    const findQualifications = await geteQualifications(req.query);
    if (findQualifications.geted) {
      res.status(200).json(findQualifications);
    } else {
      res
        .status(400)
        .json({ geted: false, message: "Qualifications not found" });
    }
  } catch (error) {
    console.log(`getQualificaitionsHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getQualificaitionsHandler;
