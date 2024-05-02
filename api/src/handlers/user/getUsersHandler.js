const getUsers = require("../../controllers/user/getUsers");

const getUsersHandler = async (req, res) => {
  try {
    console.log("getUsersHandler");
    const findUsers = await getUsers(req.query);
    if (findUsers.geted) {
      res.status(200).json(findUsers);
    } else {
      res.status(400).json({ geted: false, message: "No users found" });
    }
  } catch (error) {
    console.log(`getUsersHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = getUsersHandler;
