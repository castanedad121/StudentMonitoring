//! Unico lugar donde obtengo las variables de entorno.
export default function getParamsEnv() {
  const ROOT = import.meta.env.VITE_ROOT || "/";
  const LOGIN = import.meta.env.VITE_LOGIN || "/login";
  const HOME = import.meta.env.VITE_HOME || "/home";
  const CLASES = import.meta.env.VITE_CLASES || "/clases";
  const HOME_COURSE = import.meta.env.VITE_HOME_COURSE || "/clases/course";
  const HOME_COURSE_QUALIFICATION =
    import.meta.env.VITE_HOME_COURSE_QUALIFICATION ||
    "/clases/course/qualification";
  const HOME_COURSE_QUALIFICATION_IUNIDAD =
    import.meta.env.VITE_HOME_COURSE_QUALIFICATION_IUNIDAD ||
    "/clases/course/qualification/IUnidad";
  const HOME_COURSE_QUALIFICATION_IIUNIDAD =
    import.meta.env.VITE_HOME_COURSE_QUALIFICATION_IIUNIDAD ||
    "/clases/course/qualification/IIUnidad";
  const HOME_COURSE_QUALIFICATION_IIIUNIDAD =
    import.meta.env.VITE_HOME_COURSE_QUALIFICATION_IIIUNIDAD ||
    "/clases/course/qualification/IIIUnidad";
  const HOME_COURSE_QUALIFICATION_IVUNIDAD =
    import.meta.env.VITE_HOME_COURSE_QUALIFICATION_IVUNIDAD ||
    "/clases/course/qualification/IVUnidad";
  const CALENDAR = import.meta.env.VITE_CALENDAR || "/calendar";
  const ADMIN = import.meta.env.VITE_ADMIN || "/admin";
  const ADMIN_REGISTER =
    import.meta.env.VITE_ADMIN_REGISTER || "/admin/register";
  const ADMIN_STUDENTS =
    import.meta.env.VITE_ADMIN_STUDENTS || "/admin/estudiantes";
  const ADMIN_COURSES = import.meta.env.VITE_ADMIN_COURSES || "/admin/courses";
  const MESSAGES = import.meta.env.VITE_MESSAGES || "/messages";
  const HELP = import.meta.env.VITE_HELP || "/help";
  const ACADEMIC_MANAGEMET =
    import.meta.env.VITE_ACADEMIC_MANAGEMET || "/academic-management";
  const API_URL_BASE =
    import.meta.env.VITE_URL_BASE ||
    "http://localhost:3001/student-monitoring/";
  return {
    ROOT,
    LOGIN,
    HOME,
    CALENDAR,
    ADMIN,
    MESSAGES,
    HELP,
    ACADEMIC_MANAGEMET,
    API_URL_BASE,
    HOME_COURSE,
    HOME_COURSE_QUALIFICATION,
    HOME_COURSE_QUALIFICATION_IUNIDAD,
    HOME_COURSE_QUALIFICATION_IIUNIDAD,
    HOME_COURSE_QUALIFICATION_IIIUNIDAD,
    HOME_COURSE_QUALIFICATION_IVUNIDAD,
    CLASES,
    ADMIN_STUDENTS,
    ADMIN_COURSES,
    ADMIN_REGISTER,
  };
}
