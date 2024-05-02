import React, { useEffect } from "react";
import { RxButton } from "react-icons/rx";
import {
  cleanCourses,
  getCourse,
  getCourses,
  getStudents,
  selectCourse,
} from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import getParamsEnv from "../functions/getParamsEnv";
const { HOME_COURSE } = getParamsEnv();

const Cards = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const courses = useSelector((state) => state?.courses);
  const countCourses = useSelector((state) => state?.countCourses);
  const handlerCourse = (courseRow) => {
    const parsedCourse = JSON.parse(courseRow);

    dispatch(selectCourse(parsedCourse));

    navigate(HOME_COURSE);
  };
  return (
    <div className="grid grid-cols-3 mx-1 sm:mx-6 gap-4 pt-4">
      {countCourses !== "loader" ? (
        courses?.map((courseRow, index) => (
          <div
            className={
              courseRow.nameCourse === "Lenguaje"
                ? `bg-Lenguaje h-32 overflow-hidden rounded-lg border shadow-sm  flex justify-between cursor-pointer hover:scale-95`
                : courseRow.nameCourse === "Matemáticas"
                ? `bg-Matematicas h-32 overflow-hidden rounded-lg border shadow-sm  flex justify-between cursor-pointer hover:scale-95`
                : courseRow.nameCourse === "Ciencias Sociales"
                ? `bg-CienciasSociales h-32 overflow-hidden rounded-lg border shadow-sm  flex justify-between cursor-pointer hover:scale-95`
                : courseRow.nameCourse === "Música"
                ? `bg-Musica h-32 overflow-hidden rounded-lg border shadow-sm  flex justify-between cursor-pointer hover:scale-95`
                : courseRow.nameCourse === "Ciencias Naturales"
                ? `bg-CienciasNaturales h-32 overflow-hidden rounded-lg border shadow-sm  flex justify-between cursor-pointer hover:scale-95`
                : courseRow.nameCourse === "Plástica"
                ? `bg-Plastica h-32 overflow-hidden rounded-lg border shadow-sm  flex justify-between cursor-pointer hover:scale-95`
                : "bg-[#B9DAFF] h-32 overflow-hidden rounded-lg border shadow-sm  flex justify-between cursor-pointer hover:scale-95"
            }
            key={index}
            onClick={() => handlerCourse(JSON.stringify(courseRow))}
          >
            <div className="flex flex-col justify-between m-2">
              <div>
                <h1 className="text-lg font-semibold">
                  {courseRow.nameCourse}
                </h1>
                <h2 className="text-base font-medium">
                  {courseRow.User &&
                    `Docente: ${courseRow.User.name} ${courseRow.User.lastName}`}
                </h2>
                <h2 className="text-base font-medium">
                  {courseRow.Students.length > 0 &&
                    `${courseRow.Students.length} Estudiantes`}
                </h2>
              </div>
              <span className="text-sm font-light">
                {courseRow.serialNumber}
              </span>
            </div>
            <div className="w-32 h-32 flex mx-5">
              <img
                src={
                  courseRow.image
                    ? courseRow.image
                    : "https://res.cloudinary.com/desaac6ma/image/upload/v1713673373/samples/Student-monitoring/coursedefault_cas4h3.png"
                }
                alt=""
                className="m-auto h-[120px]"
              />
            </div>
          </div>
        ))
      ) : (
        <span>No tienes cursos disponibles</span>
      )}
      {countCourses === 0 && (
        <span>No tienes cursos que coincidan con tu búsqueda</span>
      )}
    </div>
  );
};

export default Cards;
