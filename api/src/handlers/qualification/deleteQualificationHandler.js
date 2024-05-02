const deleteQualification = require("../../controllers/qualification/deleteQualification");

const deleteQualificaitionHandler = async (req, res) => {
  try {
    console.log("deleteQualificaitionHandler");
    const { id } = req.params;
    const deletedQualificaition = await deleteQualification(id);
    if (deletedQualificaition.deleted) {
      res.status(200).json(deletedQualificaition);
    } else {
      res.status(400).json(deletedQualificaition);
    }
  } catch (error) {
    console.log(`deleteCourseHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteQualificaitionHandler;
