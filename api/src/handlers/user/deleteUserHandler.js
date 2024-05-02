const deleteUser = require("../../controllers/user/deleteUser");

const deleteUserHandler = async (req, res) => {
  try {
    console.log("deleteUserHandler");
    const { id } = req.params;
    const deletedUser = await deleteUser(id);
    if (deletedUser.deleted) {
      res.status(200).json(deletedUser);
    } else {
      res.status(400).json(deletedUser);
    }
  } catch (error) {
    console.log(`deleteUserHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = deleteUserHandler;
