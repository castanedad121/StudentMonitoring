const server = require("./src/app");
const createBasicData = require("./src/functions/createBasicData");
const { conn } = require("./src/DB_connection");
const { PORT, SECURE } = require("./src/functions/paramsEnv");

let conSegura = "";
SECURE ? (conSegura = "SECURE") : (conSegura = "NOT SECURE");

(async () => {
  try {
    await conn.authenticate();
    await conn.sync({ alter: true });
    await createBasicData();
    server.listen(PORT, () => {
      console.log(
        `Server running into ${PORT} Port. DB Connection: ${conSegura}`
      );
    });
  } catch (err) {
    console.log(
      "Error connecting to the database (was it created?). Please check and restart"
    );
  }
})();
