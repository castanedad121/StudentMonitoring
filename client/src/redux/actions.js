import {
  LOGIN,
  SET_TOKEN_ERROR,
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
  SELECT_UNIT,
  CLEAN_QUALIFICATION,
  SET_USERS,
} from "./actionsTypes";
import axios from "axios";
import getParamsEnv from "../functions/getParamsEnv";

const { API_URL_BASE } = getParamsEnv();

export const login = (userLogin) => {
  return async function (dispatch) {
    try {
      const response = await axios.post(API_URL_BASE + "login", userLogin);
      return dispatch({
        type: LOGIN,
        payload: response.data,
      });
    } catch (error) {
      // Errores 401 son para quitar al usuario de la sesión:
      if (error.request.status === 401) {
        return dispatch({
          type: SET_TOKEN_ERROR,
          payload: error.request.status,
        });
      } else {
        return dispatch({ type: SET_ERROR, payload: error.request.status });
      }
    }
  };
};

export const setLogout = () => {
  return async function (dispatch) {
    try {
      // const response = await axios.post(API_URL_BASE + "/logoutuser", {
      //   token,
      // });
      return dispatch({
        type: USER_LOGOUT,
      });
    } catch (error) {
      //throw Error(error.message);
      // Aunque falle la red, registro la salida del usuario lo mismo:
      return dispatch({
        type: USER_LOGOUT,
      });
    }
  };
};

export const cleanStudent = () => ({
  type: CLEAN_STUDENT,
  payload: {},
});

export const cleanCourse = () => ({
  type: CLEAN_COURSE,
  payload: {},
});
export const cleanStudents = () => ({
  type: CLEAN_STUDENTS,
  payload: [],
});
export const cleanCourses = () => ({
  type: CLEAN_COURSES,
  payload: [],
});
export const cleanQualifications = () => ({
  type: CLEAN_QUALIFICATIONS,
  payload: [],
});
export const selectCourse = (selectCourse) => ({
  type: SELECT_COURSE,
  payload: selectCourse,
});
export const selectStudent = (selectStudent) => ({
  type: SELECT_STUDENTS,
  payload: selectStudent,
});
export const selectQualification = (selectQualification) => ({
  type: SELECT_QUALIFICATION,
  payload: selectQualification,
});
export const cleanQualification = () => ({
  type: CLEAN_QUALIFICATION,
  payload: {},
});
export const selectUnit = (selectUnit) => ({
  type: SELECT_UNIT,
  payload: selectUnit,
});

export const getCourses = (
  textsearch = "",
  attribute = "createdAt",
  attribute2 = "nameCourse",
  order = "asc",
  page = 0,
  size = 99999999,
  createDateStart = "",
  createDateEnd = "",
  state = "",
  user = "",
  student = "",
  division = "",
  period = "",
  year = "",
  token
) => {
  const endPoint = API_URL_BASE + "courses?";
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `${endPoint}textsearch=${textsearch}&attribute=${attribute}&attribute2=${attribute2}&order=${order}&page=${page}&size=${size}&createDateEnd=${createDateEnd}&createDateStart=${createDateStart}&state=${state}&user=${user}&student=${student}&division=${division}&period=${period}&year=${year}&token=${token}`
      );

      return dispatch({
        type: GET_COURSES,
        payload: data.existingCourses,
      });
    } catch (error) {
      // Errores 401 son para quitar al usuario de la sesión:
      if (error?.request?.status === 401) {
        return dispatch({
          type: SET_TOKEN_ERROR,
          payload: error,
        });
      } else {
        return dispatch({ type: SET_ERROR, payload: error });
      }
    }
  };
};

export const getStudents = (
  textsearch = "",
  attribute = "name",
  attribute2 = "lastName",
  order = "asc",
  page = 0,
  size = 99999999,
  createDateEnd = "",
  createDateStart = "",
  user = "",
  course = "",
  division = "",
  period = "",
  year = "",
  token
) => {
  const endPoint = API_URL_BASE + "students?";
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `${endPoint}textsearch=${textsearch}&attribute=${attribute}&attribute2=${attribute2}&order=${order}&page=${page}&size=${size}&createDateEnd=${createDateEnd}&createDateStart=${createDateStart}&user=${user}&course=${course}&division=${division}&period=${period}&year=${year}&token=${token}`
      );

      return dispatch({
        type: GET_STUDENTS,
        payload: data.existingStudents,
      });
    } catch (error) {
      // Errores 401 son para quitar al usuario de la sesión:
      if (error?.request?.status === 401) {
        return dispatch({
          type: SET_TOKEN_ERROR,
          payload: error,
        });
      } else {
        return dispatch({ type: SET_ERROR, payload: error });
      }
    }
  };
};

export const getUsers = (
  textsearch = "",
  attribute = "role",
  attribute2 = "createdAt",
  order = "asc",
  page = 0,
  size = 99999999,
  createDateEnd = "",
  createDateStart = "",
  role = "",
  student = "",
  course = "",
  division = "",
  period = "",
  year = "",
  token
) => {
  const endPoint = API_URL_BASE + "users?";
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `${endPoint}textsearch=${textsearch}&attribute=${attribute}&attribute2=${attribute2}&order=${order}&page=${page}&size=${size}&createDateEnd=${createDateEnd}&createDateStart=${createDateStart}&role=${role}&student=${student}&course=${course}&division=${division}&period=${period}&year=${year}&token=${token}`
      );

      return dispatch({
        type: SET_USERS,
        payload: data.existingUsers,
      });
    } catch (error) {
      // Errores 401 son para quitar al usuario de la sesión:
      if (error?.request?.status === 401) {
        return dispatch({
          type: SET_TOKEN_ERROR,
          payload: error,
        });
      } else {
        return dispatch({ type: SET_ERROR, payload: error });
      }
    }
  };
};

export const getQualifications = (
  attribute = "unit",
  order = "asc",
  page = 0,
  size = 99999999,
  createDateEnd = "",
  createDateStart = "",
  user = "",
  student = "",
  course = "",
  division = "",
  period = "",
  year = "",
  unit,
  token
) => {
  const endPoint = API_URL_BASE + "qualifications?";
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `${endPoint}attribute=${attribute}&order=${order}&page=${page}&size=${size}&createDateEnd=${createDateEnd}&createDateStart=${createDateStart}&user=${user}&student=${student}&course=${course}&division=${division}&period=${period}&year=${year}&unit=${unit}&token=${token}`
      );

      return dispatch({
        type: GET_QUALIFICATIONS,
        payload: data.existingQualifications,
      });
    } catch (error) {
      // Errores 401 son para quitar al usuario de la sesión:
      if (error?.request?.status === 401) {
        return dispatch({
          type: SET_TOKEN_ERROR,
          payload: error,
        });
      } else {
        return dispatch({ type: SET_ERROR, payload: error });
      }
    }
  };
};

export const getCourse = (id, token) => {
  const endPoint = API_URL_BASE + "course/";
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${endPoint}${id}?token=${token}`);

      return dispatch({
        type: GET_COURSE,
        payload: data.existingCourse,
      });
    } catch (error) {
      // Errores 401 son para quitar al usuario de la sesión:
      if (error?.request?.status === 401) {
        return dispatch({
          type: SET_TOKEN_ERROR,
          payload: error,
        });
      } else {
        return dispatch({ type: SET_ERROR, payload: error });
      }
    }
  };
};

export const getStudent = (id, token) => {
  const endPoint = API_URL_BASE + "student/";
  return async function (dispatch) {
    try {
      const { data } = await axios.get(`${endPoint}${id}?token=${token}`);

      return dispatch({
        type: GET_STUDENT,
        payload: data.existingStudent,
      });
    } catch (error) {
      // Errores 401 son para quitar al usuario de la sesión:
      if (error?.request?.status === 401) {
        return dispatch({
          type: SET_TOKEN_ERROR,
          payload: error,
        });
      } else {
        return dispatch({ type: SET_ERROR, payload: error });
      }
    }
  };
};

export const postQualification = (qualification, token) => {
  const endPoint = API_URL_BASE + "qualification?";
  return async function (dispatch) {
    try {
      const { data } = await axios.post(
        `${endPoint}token=${token}`,
        qualification
      );

      return dispatch({
        type: POST_QUALIFICATION,
        payload: data.qualificationNew,
      });
    } catch (error) {
      // Errores 401 son para quitar al usuario de la sesión:
      if (error?.request?.status === 401) {
        return dispatch({
          type: SET_TOKEN_ERROR,
          payload: error,
        });
      } else {
        return dispatch({ type: SET_ERROR, payload: error });
      }
    }
  };
};

export const putQualification = (idqualification, qualification, token) => {
  const endPoint = API_URL_BASE + "qualificationupdate/";
  return async function (dispatch) {
    try {
      const { data } = await axios.put(
        `${endPoint}${idqualification}?token=${token}`,
        qualification
      );

      return dispatch({
        type: PUT_QUALIFICATION,
        payload: data.updateQualification,
      });
    } catch (error) {
      // Errores 401 son para quitar al usuario de la sesión:
      if (error?.request?.status === 401) {
        return dispatch({
          type: SET_TOKEN_ERROR,
          payload: error,
        });
      } else {
        return dispatch({ type: SET_ERROR, payload: error });
      }
    }
  };
};
