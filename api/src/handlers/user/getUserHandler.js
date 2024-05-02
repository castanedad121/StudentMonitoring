const getUser = require("../../controllers/user/getUser");

const getUserHandler = async (req, res) => {
  try {
    console.log("getUserHandler");
    const { id } = req.params;
    const findUser = await getUser(id);
    if (findUser.find) {
      res.status(200).json(findUser);
    } else {
      res.status(400).json(findUser);
    }
  } catch (error) {
    console.log(`getUserHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getUserHandler;
