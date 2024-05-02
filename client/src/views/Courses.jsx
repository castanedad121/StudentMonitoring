/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { SideBar, NavBar, Pagination, CoursesTable } from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../redux/actions";
import UsersTable from "../components/UsersTable";
import FilterAdmin from "../components/FilterAdmin";
import getParamsEnv from "../functions/getParamsEnv";
import { useNavigate } from "react-router-dom";
const { ADMIN, ADMIN_STUDENTS, ADMIN_REGISTER } = getParamsEnv();

const Courses = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state?.token);
  const countCourses = useSelector((state) => state?.countCourses);
  const [textsearch, setTextsearch] = useState("");
  const [attribute, setAttribute] = useState("createdAt");
  const [attribute2, setAttribute2] = useState("nameCourse");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(7);
  const [createDateStart, setCreateDateStart] = useState("");
  const [createDateEnd, setCreateDateEnd] = useState("");
  const [state, setState] = useState("");
  const [user, setUser] = useState("");
  const [student, setStudent] = useState("");
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
        <NavBar title={"Administrador"} />
        <div className="flex justify-between mx-6">
          <div className="flex justify-around items-center gap-20">
            <button
              className="font-medium text-xl border-b-2 border-gray-300 text-gray-500 hover:text-[#407BFF] hover:border-[#407BFF]"
              onClick={() => navigate(ADMIN)}
            >
              Usuarios
            </button>
            <button
              className="font-medium text-xl border-b-2 border-gray-300 text-gray-500 hover:text-[#407BFF] hover:border-[#407BFF]"
              onClick={() => navigate(ADMIN_STUDENTS)}
            >
              Estudiantes
            </button>
            <button className="font-medium text-xl border-b-2 text-[#407BFF] border-[#407BFF]">
              Clases
            </button>
          </div>
          <div className="flex pb-8">
            <FilterAdmin
              setTextsearch={setTextsearch}
              setOrder={setOrder}
              order={order}
              setCreateDateStart={setCreateDateStart}
              setCreateDateEnd={setCreateDateEnd}
            />
          </div>
        </div>
        <CoursesTable />
        <div className="grow flex justify-end items-end pb-2 mx-6">
          <Pagination
            page={page}
            size={size}
            setPage={setPage}
            count={countCourses}
          />
        </div>
        <button
          onClick={() => navigate(ADMIN_REGISTER)}
          type="button"
          className="w-min text-nowrap ml-6 rounded-2xl bg-[#ECCC68] text-base font-medium text-white shadow-sm hover:bg-yellow-600 mb-4 py-2 px-20 flex justify-center items-center gap-2"
        >
          <span className="text-3xl font-light">+</span> <span>Registrar</span>
        </button>
      </div>
    </div>
  );
};

export default Courses;
