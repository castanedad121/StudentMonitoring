import { useDispatch, useSelector } from "react-redux";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import getParamsEnv from "../functions/getParamsEnv";
import { useNavigate } from "react-router-dom";

const { HOME_COURSE_QUALIFICATION } = getParamsEnv();

const CoursesTable = () => {
  const courses = useSelector((state) => state?.courses);
  const countCourses = useSelector((state) => state?.countCourses);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerStudent = (student) => {
    const parsedStudent = JSON.parse(student);
  };

  return (
    <>
      {countCourses !== "loader" &&
        (countCourses > 0 ? (
          <div className="w-auto mx-6 text-sm font-semibold text-center table-auto overflow-hidden">
            <div className="w-full border rounded-2xl text-center flex my-0 h-min">
              <p className="w-1/5 text-wrap">Periodo</p>
              <p className="w-1/5 text-wrap ">División</p>
              <p className="w-1/5 text-wrap">Clase</p>
              <p className="w-1/5 text-wrap">Serial</p>
              <p className="w-1/5 text-wrap">Acciones</p>
            </div>

            {courses?.map((course, index) => (
              <div
                key={index}
                className="flex w-full border font-normal rounded-md text-center my-2 py-2  hover:bg-gray-200 shadow-[inset_12px_0px_0px_-5px_rgba(179,177,179,1)] "
              >
                <p className="w-1/5 text-wrap">{`${course.period}°`}</p>
                <p className="w-1/5 text-wrap ">{course.division}</p>
                <p className="w-1/5 text-wrap">{course.nameCourse}</p>
                <p className="w-1/5 text-wrap">{course.serialNumber}</p>
                <div className="w-1/5 ">
                  <PiDotsThreeOutlineVerticalFill
                    className="size-6 m-auto cursor-pointer hover:text-[#FFC107] hover:scale-125"
                    onClick={() => handlerStudent(JSON.stringify(course))}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <span>No se encontraron usuarios</span>
        ))}
    </>
  );
};

export default CoursesTable;
