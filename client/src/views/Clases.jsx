/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import {
  SideBar,
  NavBar,
  Cards,
  Pagination,
  FilterCourses,
} from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import { getCourses, cleanCourses } from "../redux/actions";
const Clases = (props) => {
  const { setSerialNumber, setIdCourseSelect } = props && props;
  const dispatch = useDispatch();
  const token = useSelector((state) => state?.token);
  const countCourses = useSelector((state) => state?.countCourses);
  const userLogin = useSelector((state) => state?.userLogin);

  const [textsearch, setTextsearch] = useState("");
  const [attribute, setAttribute] = useState("nameCourse");
  const [attribute2, setAttribute2] = useState("period");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(9);
  const [createDateStart, setCreateDateStart] = useState("");
  const [createDateEnd, setCreateDateEnd] = useState("");
  const [state, setState] = useState("");
  const [user, setUser] = useState(
    userLogin?.role === "Docente" ? userLogin?.identDocument : ""
  );
  const [student, setStudent] = useState(
    userLogin?.role === "Apoderado" ? userLogin?.Students[0].identDocument : ""
  );
  const [division, setDivision] = useState("");
  const [period, setPeriod] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    dispatch(
      getCourses(
        textsearch,
        attribute,
        attribute2,
        order,
        page,
        size,
        createDateStart,
        createDateEnd,
        state,
        user,
        student,
        division,
        period,
        year,
        token
      )
    );
    return () => {
      dispatch(cleanCourses());
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
    state,
    user,
    student,
    division,
    period,
    year,
    token,
  ]);

  return (
    <div className="flex">
      <SideBar />

      <div className="grow flex flex-col">
        <NavBar title={"Clases"} />
        <FilterCourses
          textsearch={textsearch}
          setTextsearch={setTextsearch}
          order={order}
          setOrder={setOrder}
          division={division}
          setDivision={setDivision}
          period={period}
          setPeriod={setPeriod}
          year={year}
          setYear={setYear}
        />
        <Cards
          setSerialNumber={setSerialNumber}
          setIdCourseSelect={setIdCourseSelect}
        />
        <div className="grow flex justify-center items-end pb-8">
          <Pagination
            page={page}
            size={size}
            setPage={setPage}
            count={countCourses}
          />
        </div>
      </div>
    </div>
  );
};

export default Clases;
