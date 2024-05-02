import {
  LOGIN,
  USER_LOGOUT,
  SET_ERROR,
  GET_COURSES,
  GET_STUDENTS,
  GET_QUALIFICATIONS,
  GET_COURSE,
  GET_STUDENT,
  CLEAN_COURSE,
  CLEAN_STUDENT,
  CLEAN_STUDENTS,
  CLEAN_COURSES,
  CLEAN_QUALIFICATIONS,
  SELECT_COURSE,
  SELECT_STUDENTS,
  POST_QUALIFICATION,
  PUT_QUALIFICATION,
  SELECT_QUALIFICATION,
  CLEAN_QUALIFICATION,
  SELECT_UNIT,
  SET_USERS,
} from "./actionsTypes";

const initialState = {
  userLogin: {},
  userDetail: {},
  tokenError: 0,
  token: "",
  courses: [],
  countCourses: "loader",
  course: {},
  students: [],
  countStudents: "loader",
  student: {},
  qualifications: [],
  countQualifications: "loader",
  selectCourse: {},
  selectStudent: {},
  createQualification: {},
  updateQualification: {},
  selectQualification: {},
  selectUnit: {},
  error: {},
  users: [],
  countUsers: "loader",
};

const rootReducer = (state = initialState, { type, payload }) => {
  let userLoginState = {};
  let setError = {};
  let setCourses = {};
  let setStudents = {};
  let setQualifications = {};
  let setCourse = {};
  let setStudent = {};
  let cleanCourse = {};
  let cleanStudent = {};
  let cleanStudents = {};
  let cleanCourses = {};
  let cleanQualifications = {};
  let selectCourse = {};
  let selectStudent = {};
  let createQualification = {};
  let updateQualification = {};
  let selectQualification = {};
  let selectUnit = {};
  let cleanQualification = {};
  let setUsers = [];
  switch (type) {
    //! Login of the user
    case LOGIN:
      userLoginState = {
        ...state,
        userLogin: payload.loginUser,
        token: payload.token,
      };
      localStorage.setItem("myAppReduxState", JSON.stringify(userLoginState));
      return userLoginState;

    case POST_QUALIFICATION:
      createQualification = {
        ...state,
        createQualification: payload,
      };
      localStorage.setItem(
        "myAppReduxState",
        JSON.stringify(createQualification)
      );
      return createQualification;

    case PUT_QUALIFICATION:
      updateQualification = {
        ...state,
        updateQualification: payload,
      };
      localStorage.setItem(
        "myAppReduxState",
        JSON.stringify(updateQualification)
      );
      return updateQualification;

    case SELECT_COURSE:
      selectCourse = {
        ...state,
        selectCourse: payload,
      };
      localStorage.setItem("myAppReduxState", JSON.stringify(selectCourse));
      return selectCourse;

    case SELECT_STUDENTS:
      selectStudent = {
        ...state,
        selectStudent: payload,
      };
      localStorage.setItem("myAppReduxState", JSON.stringify(selectStudent));
      return selectStudent;

    case SELECT_QUALIFICATION:
      selectQualification = {
        ...state,
        selectQualification: payload,
      };
      localStorage.setItem(
        "myAppReduxState",
        JSON.stringify(selectQualification)
      );
      return selectQualification;
    case SELECT_UNIT:
      selectUnit = {
        ...state,
        selectUnit: payload,
      };
      localStorage.setItem("myAppReduxState", JSON.stringify(selectUnit));
      return selectUnit;

    case CLEAN_COURSE:
      cleanCourse = {
        ...state,
        course: payload,
      };
      localStorage.setItem("myAppReduxState", JSON.stringify(cleanCourse));
      return cleanCourse;

    case CLEAN_STUDENT:
      cleanStudent = {
        ...state,
        student: payload,
      };
      localStorage.setItem("myAppReduxState", JSON.stringify(cleanStudent));
      return cleanStudent;

    case CLEAN_STUDENTS:
      cleanStudents = {
        ...state,
        students: payload,
        countStudents: "loader",
      };
      localStorage.setItem("myAppReduxState", JSON.stringify(cleanStudents));
      return cleanStudents;

    case CLEAN_COURSES:
      cleanCourses = {
        ...state,
        courses: payload,
        countStudents: "loader",
      };
      localStorage.setItem("myAppReduxState", JSON.stringify(cleanCourses));
      return cleanCourses;

    case CLEAN_QUALIFICATIONS:
      cleanQualifications = {
        ...state,
        qualifications: payload,
        countQualifications: "loader",
      };
      localStorage.setItem(
        "myAppReduxState",
        JSON.stringify(cleanQualifications)
      );
      return cleanQualifications;
    case CLEAN_QUALIFICATION:
      cleanQualification = {
        ...state,
        selectQualification: payload,
      };
      localStorage.setItem(
        "myAppReduxState",
        JSON.stringify(cleanQualification)
      );
      return cleanQualification;

    case USER_LOGOUT:
      console.log("llegue aqui");
      localStorage.removeItem("myAppReduxState");
      localStorage.removeItem("dispatchPerformed");
      localStorage.removeItem("showRed");
      return initialState;

    case SET_ERROR:
      setError = {
        ...state,
        error: payload,
      };
      return setError;
    case GET_COURSES:
      setCourses = {
        ...state,
        courses: payload.rows,
        countCourses: payload.count,
      };
      localStorage.setItem("myAppReduxState", JSON.stringify(setCourses));
      return setCourses;

    case SET_USERS:
      setUsers = {
        ...state,
        users: payload.rows,
        countUsers: payload.count,
      };
      localStorage.setItem("myAppReduxState", JSON.stringify(setUsers));
      return setUsers;

    case GET_STUDENTS:
      setStudents = {
        ...state,
        students: payload.rows,
        countStudents: payload.count,
      };
      localStorage.setItem("myAppReduxState", JSON.stringify(setStudents));
      return setStudents;

    case GET_QUALIFICATIONS:
      setQualifications = {
        ...state,
        qualifications: payload.rows,
        countQualifications: payload.count,
      };
      localStorage.setItem(
        "myAppReduxState",
        JSON.stringify(setQualifications)
      );
      return setQualifications;

    case GET_COURSE:
      setCourse = {
        ...state,
        course: payload,
      };
      localStorage.setItem("myAppReduxState", JSON.stringify(setCourse));
      return setCourse;

    case GET_STUDENT:
      setStudent = {
        ...state,
        student: payload,
      };
      localStorage.setItem("myAppReduxState", JSON.stringify(setStudent));
      return setStudent;

    default:
      return state;
  }
};

export default rootReducer;
