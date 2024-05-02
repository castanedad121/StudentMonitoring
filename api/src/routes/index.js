//! Handlers
const router = require("express").Router();
const { validateToken } = require("../functions/validateToken");
//Deployment
const getMain = require("../handlers/user/getMain");
//post
const postUserRegisterHandler = require("../handlers/user/postUserRegisterHandler");
const postLoginHandler = require("../handlers/user/postLoginHandler");
const postStudentHandler = require("../handlers/student/postStudentHandler");
const postCourseHandler = require("../handlers/course/postCourseHandler");
const postQualificationHandler = require("../handlers/Qualification/postQualificationHandler");
//delete
const deleteCourseHandler = require("../handlers/course/deleteCourseHandler");
const deleteQualificaitionHandler = require("../handlers/qualification/deleteQualificationHandler");
const deleteStudentHandler = require("../handlers/student/deleteStudentHandler");
const deleteUserHandler = require("../handlers/user/deleteUserHandler");
//put
const putQualificationHandler = require("../handlers/qualification/putQualificationHandler");
const putCoursenHandler = require("../handlers/course/putCourseHandler");
const putStudentHandler = require("../handlers/student/putStudentHandler");
const putUserHandler = require("../handlers/user/putUserHandler");
//get detail
const getQualificaitionHandler = require("../handlers/qualification/getQuallficationHandler");
const getCourseHandler = require("../handlers/course/getCourseHandler");
const getStudentHandler = require("../handlers/student/getStudentHandler");
const getUserHandler = require("../handlers/user/getUserHandler");
//get all
const getUsersHandler = require("../handlers/user/getUsersHandler");
const getStudentsHandler = require("../handlers/student/getStudentsHandler");
const getCoursesHandler = require("../handlers/course/getCoursesHandler");
const getQualificaitionsHandler = require("../handlers/qualification/getQuallficationsHandler");

//! Rutas
// Login
router.post("/login", postLoginHandler);

// Users
router.post("/user", validateToken, postUserRegisterHandler);
router.delete("/user/:id", validateToken, deleteUserHandler);
router.put("/user/:id", validateToken, putUserHandler);
router.get("/user/:id", validateToken, getUserHandler);
router.get("/users", validateToken, getUsersHandler);

// Student
router.post("/student", validateToken, postStudentHandler);
router.delete("/student/:id", validateToken, deleteStudentHandler);
router.put("/student/:id", validateToken, putStudentHandler);
router.get("/student/:id", validateToken, getStudentHandler);
router.get("/students", validateToken, getStudentsHandler);

// Course
router.post("/course", validateToken, postCourseHandler);
router.delete("/course/:id", validateToken, deleteCourseHandler);
router.put("/course/:id", validateToken, putCoursenHandler);
router.get("/course/:id", validateToken, getCourseHandler);
router.get("/courses", validateToken, getCoursesHandler);

// Qualification
router.post("/qualification", validateToken, postQualificationHandler);
router.delete("/qualification/:id", validateToken, deleteQualificaitionHandler);
router.put("/qualificationupdate/:id", validateToken, putQualificationHandler);
router.get("/qualification/:id", validateToken, getQualificaitionHandler);
router.get("/qualifications", validateToken, getQualificaitionsHandler);

// Otras:
router.get("/", getMain);
module.exports = router;
