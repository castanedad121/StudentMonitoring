require("pg"); // requerido por Vercel para el deploy
const { Sequelize } = require("sequelize");
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  SECURE,
} = require("./functions/paramsEnv");

// Definición de modelos:

const UserModel = require("../src/models/User");
const StudentModel = require("../src/models/Student");
const CourseModel = require("../src/models/Course");
const QualificationModel = require("../src/models/Qualification");

// Determino la conexión según el entorno:
let strConn = "";
if (SECURE) {
  // conexión segura (para BD remota):
  strConn = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?sslmode=require&dialect=postgres-co`;
} else {
  // conexión no segura (para BD local):
  strConn = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
}

const database = new Sequelize(strConn, { logging: false, native: false });

UserModel(database);
StudentModel(database);
CourseModel(database);
QualificationModel(database);

// Relacionar modelos:
const { User, Student, Course, Qualification } = database.models;

// Relaciones:
// belongsTo: establece una relación de pertenencia entre dos modelos, donde un modelo "pertenece a" otro.
// hasOne: establece una relación uno a uno entre dos modelos.
// hasMany: establece una relación uno a muchos entre dos modelos.
// belongsToMany: establece una relación muchos a muchos entre dos modelos.

Student.belongsToMany(User, { through: "user_student" });
User.belongsToMany(Student, { through: "user_student" });

Student.belongsToMany(Course, { through: "course_student" });
Course.belongsToMany(Student, { through: "course_student" });

User.belongsToMany(Course, { through: "user_course" });

Course.belongsTo(User);
Qualification.belongsTo(Student);
Qualification.belongsTo(User);
Qualification.belongsTo(Course);

module.exports = {
  User,
  Student,
  Course,
  Qualification,
  conn: database,
};
