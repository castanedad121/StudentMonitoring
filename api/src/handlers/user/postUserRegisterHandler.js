const postUserRegister = require("../../controllers/user/postUserRegister");

const postUserRegisterHandler = async (req, res) => {
  try {
    console.log("postUserRegisterHandler");
    const userCreated = await postUserRegister(req.body);
    delete userCreated.userUpdate.dataValues.password;
    if (userCreated.created) {
      res.status(200).json(userCreated);
    } else {
      res.status(400).json(userCreated);
    }
  } catch (error) {
    console.log(`postUserRegisterHandler ERROR-> ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = postUserRegisterHandler;
