import "./App.css";
// hooks, routers, reducers:
import { Route, Routes } from "react-router-dom";
import getParamsEnv from "./functions/getParamsEnv.js";
import {
  Landing,
  Login,
  Home,
  Calendar,
  Admin,
  Messages,
  Help,
  Academic,
  Course,
  Qualification,
  QualificationUnidad,
  Clases,
  Students,
  Courses,
  Register,
} from "./views/index.js";

function App() {
  const {
    ROOT,
    LOGIN,
    HOME,
    CALENDAR,
    ADMIN,
    MESSAGES,
    HELP,
    ACADEMIC_MANAGEMET,
    HOME_COURSE,
    HOME_COURSE_QUALIFICATION,
    HOME_COURSE_QUALIFICATION_IUNIDAD,
    HOME_COURSE_QUALIFICATION_IIUNIDAD,
    HOME_COURSE_QUALIFICATION_IIIUNIDAD,
    HOME_COURSE_QUALIFICATION_IVUNIDAD,
    CLASES,
    ADMIN_COURSES,
    ADMIN_STUDENTS,
    ADMIN_REGISTER,
  } = getParamsEnv();

  return (
    <div>
      <Routes>
        <Route path={ROOT} element={<Landing />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={HOME} element={<Home />} />
        <Route path={CLASES} element={<Clases />} />
        <Route path={HOME_COURSE} element={<Course />} />
        <Route path={HOME_COURSE_QUALIFICATION} element={<Qualification />} />
        <Route
          path={HOME_COURSE_QUALIFICATION_IUNIDAD}
          element={<QualificationUnidad />}
        />
        <Route
          path={HOME_COURSE_QUALIFICATION_IIUNIDAD}
          element={<QualificationUnidad />}
        />
        <Route
          path={HOME_COURSE_QUALIFICATION_IIIUNIDAD}
          element={<QualificationUnidad />}
        />
        <Route
          path={HOME_COURSE_QUALIFICATION_IVUNIDAD}
          element={<QualificationUnidad />}
        />
        <Route path={CALENDAR} element={<Calendar />} />
        <Route path={ADMIN} element={<Admin />} />
        <Route path={ADMIN_REGISTER} element={<Register />} />
        <Route path={ADMIN_STUDENTS} element={<Students />} />
        <Route path={ADMIN_COURSES} element={<Courses />} />
        <Route path={MESSAGES} element={<Messages />} />
        <Route path={ACADEMIC_MANAGEMET} element={<Academic />} />
        <Route path={HELP} element={<Help />} />
      </Routes>
    </div>
  );
}

export default App;
