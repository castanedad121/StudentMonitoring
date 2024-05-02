//! Unico lugar donde obtengo las variables de entorno. Ya cambié el apiKey porque consumí los del mes.
require("dotenv").config();

const DB_USER = process.env.DB_USER || "postgres";
const DB_PASSWORD = process.env.DB_PASSWORD || "admin";
const DB_HOST = process.env.DB_HOST || "localhost";
const DB_PORT = process.env.DB_PORT || 5432;
const DB_NAME = process.env.DB_NAME || "student";
const SECURE = process.env.SECURE || false;
const PORT = process.env.PORT || 3001;
const SECRET_KEY =
  process.env.SECRET_KEY || "a220b4d7260705074710c8042f8bb950243a4115 ";
module.exports = {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  SECURE,
  PORT,
  SECRET_KEY,
};
