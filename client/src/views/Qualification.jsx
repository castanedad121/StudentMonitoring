/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { SideBar, NavBar } from "../components/index";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanQualification,
  cleanQualifications,
  getQualifications,
  selectQualification,
  selectUnit,
} from "../redux/actions";
import getParamsEnv from "../functions/getParamsEnv";
import { useNavigate } from "react-router-dom";
import { TbArrowBackUp } from "react-icons/tb";
const {
  HOME_COURSE_QUALIFICATION_IUNIDAD,
  HOME_COURSE_QUALIFICATION_IIUNIDAD,
  HOME_COURSE_QUALIFICATION_IIIUNIDAD,
  HOME_COURSE_QUALIFICATION_IVUNIDAD,
} = getParamsEnv();

const Qualification = () => {
  const selectCourse = useSelector((state) => state?.selectCourse);
  const selectStudent = useSelector((state) => state?.selectStudent);
  const token = useSelector((state) => state?.token);
  const qualifications = useSelector((state) => state?.qualifications);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [attribute, setAttribute] = useState("unit");
  const [order, setOrder] = useState("asc");
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(20);
  const [createDateStart, setCreateDateStart] = useState("");
  const [createDateEnd, setCreateDateEnd] = useState("");
  const [user, setUser] = useState("");
  const [division, setDivision] = useState("");
  const [period, setPeriod] = useState("");
  const [year, setYear] = useState("");

  const handlerUnit = (e) => {
    const valor = e.target.value;
    const color = e.target.name;
    dispatch(selectUnit({ unidad: valor, color: color }));
    const probando = dispatch(
      getQualifications(
        attribute,
        order,
        page,
        size,
        createDateEnd,
        createDateStart,
        user,
        selectStudent?.identDocument,
        selectCourse?.serialNumber,
        division,
        period,
        year,
        valor,
        token
      )
    );
    probando.then(() => {
      if (valor === "I Unidad") navigate(HOME_COURSE_QUALIFICATION_IUNIDAD);
      if (valor === "II Unidad") navigate(HOME_COURSE_QUALIFICATION_IIUNIDAD);
      if (valor === "III Unidad") navigate(HOME_COURSE_QUALIFICATION_IIIUNIDAD);
      if (valor === "IV Unidad") navigate(HOME_COURSE_QUALIFICATION_IVUNIDAD);
    });
    console.log(probando);
    console.log({ unidad: valor, color: color });
  };
  useEffect(() => {
    if (qualifications) {
      dispatch(selectQualification(qualifications[0]));
    }
  }, [qualifications]);
  return (
    <div className="flex">
      <SideBar />

      <div className="grow flex flex-col">
        <NavBar
          title={selectCourse?.nameCourse}
          serialNumber={selectCourse?.serialNumber}
          division={selectCourse?.division}
          period={selectCourse?.period}
        />
        <div className="w-auto my-4 mx-6">
          <div className="flex gap-6">
            <h1 className="text-lg font-semibold">
              {selectStudent?.name} {selectStudent?.lastName}
            </h1>
            <p className="text-lg text-[#A4B0BE]">
              {selectStudent?.identDocument}
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <TbArrowBackUp
            className="size-10 text-[#A4B0BE]  hover:text-[#ECCC68] hover:scale-125 hover:cursor-pointer"
            onClick={() => navigate(-1)}
          />
        </div>
        <div className="flex flex-col w-[400px] h-[400px] m-auto">
          <div className="flex w-[400px] h-[200px]">
            <button
              onClick={(e) => handlerUnit(e)}
              name="bg-amber-500"
              value="I Unidad"
              className="w-[200px] h-[200px] text-3xl text-gray-800 font-shadow-5 font-bold   bg-amber-500 text-center m-auto hover:bg-amber-600 hover:focus:ring-amber-500 hover:focus:ring-4 hover:scale-90 hover:text-white"
            >
              I Unidad
            </button>
            <button
              onClick={(e) => handlerUnit(e)}
              name="bg-yellow-300"
              value="II Unidad"
              className="text-3xl text-gray-800 font-shadow-5 font-bold w-[200px] h-[200px] bg-yellow-300 text-center m-auto hover:bg-yellow-500 hover:focus:ring-yellow-300 hover:focus:ring-4 hover:scale-90 hover:text-white"
            >
              II Unidad
            </button>
          </div>
          <div className="flex w-[400px] h-[200px]">
            <button
              onClick={(e) => handlerUnit(e)}
              name="bg-sky-300"
              value="III Unidad"
              className="hover:text-white text-3xl text-gray-800 font-shadow-5 font-bold w-[200px] h-[200px] bg-sky-300 text-center m-auto hover:bg-sky-500 hover:focus:ring-sky-500 hover:focus:ring-4 hover:scale-90"
            >
              III Unidad
            </button>
            <button
              onClick={(e) => handlerUnit(e)}
              name="bg-green-300"
              value="IV Unidad"
              className="hover:text-white text-3xl text-gray-800 font-shadow-5 font-bold w-[200px] h-[200px] bg-green-300 text-center m-auto hover:bg-green-500 hover:focus:ring-green-500 hover:focus:ring-4 hover:scale-90"
            >
              IV Unidad
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
