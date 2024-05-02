/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import {
  SideBar,
  NavBar,
  Pagination,
  FilterSudents,
  StudentsTable,
} from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import { cleanCourse, cleanStudents, getStudents } from "../redux/actions";

const Course = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.token);
  const selectCourse = useSelector((state) => state?.selectCourse);
  const countStudents = useSelector((state) => state?.countStudents);
  const userLogin = useSelector((state) => state?.userLogin);
  const [textsearch, setTextsearch] = useState(
    userLogin?.role === "Apoderado" ? userLogin?.Students[0].identDocument : ""
  );
  console.log(userLogin.Students.identDocument);
  const [attribute, setAttribute] = useState("lastName");
  const [attribute2, setAttribute2] = useState("name");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(7);
  const [createDateStart, setCreateDateStart] = useState("");
  const [createDateEnd, setCreateDateEnd] = useState("");
  const [user, setUser] = useState("");
  const [course, setCourse] = useState(selectCourse?.serialNumber);
  const [division, setDivision] = useState("");
  const [period, setPeriod] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    dispatch(
      getStudents(
        textsearch,
        attribute,
        attribute2,
        order,
        page,
        size,
        createDateStart,
        createDateEnd,
        user,
        course,
        division,
        period,
        year,
        token
      )
    );

    return () => {
      dispatch(cleanStudents());
      dispatch(cleanCourse());
    };
  }, [
    textsearch,
    attribute,
    attribute2,
    order,
    page,
    size,
    createDateStart,
    createDateEnd,
    user,
    course,
    division,
    period,
    year,
    token,
  ]);

  return (
    <div className="flex">
      <SideBar />

      <div className="grow flex flex-col">
        <NavBar
          title={selectCourse?.nameCourse}
          serialNumber={selectCourse?.serialNumber}
          division={selectCourse?.division}
          period={selectCourse?.period}
          docente={`- Docente: ${selectCourse?.User.name} ${selectCourse?.User.lastName}`}
        />

        <div className="flex w-full px-6">
          <div className="w-[84%] flex flex-col justify-between">
            <div>
              <h1 className="text-3xl absolute font-bold pl-16 pt-4">
                {countStudents}
              </h1>
              <img
                src="https://res.cloudinary.com/desaac6ma/image/upload/v1714024515/samples/Student-monitoring/Frame_208_w4mhay.png"
                alt=""
                className="h-24"
              />
              <FilterSudents
                setTextsearch={setTextsearch}
                setOrder={setOrder}
                order={order}
              />
              <StudentsTable />
            </div>
            <div className="grow flex justify-end items-end pb-2 mx-6">
              <Pagination
                page={page}
                size={size}
                setPage={setPage}
                count={countStudents}
              />
            </div>
          </div>
          <div className="w-[15%]">
            <img
              src="https://res.cloudinary.com/desaac6ma/image/upload/v1714024516/samples/Student-monitoring/Frame_188_d0sun2.png"
              alt=""
              className="w-60 h-max"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
