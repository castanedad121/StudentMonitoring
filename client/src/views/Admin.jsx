/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { SideBar, NavBar, Pagination } from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/actions";
import UsersTable from "../components/UsersTable";
import FilterAdmin from "../components/FilterAdmin";
import { useNavigate } from "react-router-dom";
import getParamsEnv from "../functions/getParamsEnv";
const { ADMIN_COURSES, ADMIN_STUDENTS, ADMIN_REGISTER } = getParamsEnv();

const Admin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state?.token);
  const countUsers = useSelector((state) => state?.countUsers);
  const [textsearch, setTextsearch] = useState("");
  const [attribute, setAttribute] = useState("role");
  const [attribute2, setAttribute2] = useState("lastName");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(7);
  const [createDateStart, setCreateDateStart] = useState("");
  const [createDateEnd, setCreateDateEnd] = useState("");
  const [role, setRole] = useState("");
  const [student, setStudent] = useState("");
  const [course, setCourse] = useState("");
  const [division, setDivision] = useState("");
  const [period, setPeriod] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    dispatch(
      getUsers(
        textsearch,
        attribute,
        attribute2,
        order,
        page,
        size,
        createDateEnd,
        createDateStart,
        role,
        student,
        course,
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
    createDateEnd,
    createDateStart,
    role,
    student,
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
        <NavBar title={"Administrador"} />
        <div className="flex justify-between mx-6">
          <div className="flex justify-around items-center gap-20">
            <button className="font-medium text-xl border-b-2 text-[#407BFF] border-[#407BFF]">
              Usuarios
            </button>
            <button
              className="font-medium text-xl border-b-2 border-gray-300 text-gray-500 hover:text-[#407BFF] hover:border-[#407BFF]"
              onClick={() => navigate(ADMIN_STUDENTS)}
            >
              Estudiantes
            </button>
            <button
              className="font-medium text-xl border-b-2 border-gray-300 text-gray-500 hover:text-[#407BFF] hover:border-[#407BFF]"
              onClick={() => navigate(ADMIN_COURSES)}
            >
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
        <UsersTable />
        <div className="grow flex justify-end items-end pb-2 mx-6">
          <Pagination
            page={page}
            size={size}
            setPage={setPage}
            count={countUsers}
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

export default Admin;
