const putUser = require("../../controllers/user/putUser");

const putUserHandler = async (req, res) => {
  try {
    console.log("putUserHandler");
    const updateUser = await putUser(req);

    delete updateUser.userUpdate.dataValues.password;
    console.log(updateUser.userUpdate);
    if (updateUser.update) {
      res.status(200).json(updateUser);
    } else {
      res.status(400).json(updateUser);
    }
  } catch (error) {
    console.log(`putUserHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = putUserHandler;
