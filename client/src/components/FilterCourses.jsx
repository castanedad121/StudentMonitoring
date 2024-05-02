import { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoFilterOutline } from "react-icons/io5";

const FilterCourses = (props) => {
  const { setTextsearch, order, setOrder, setDivision, setPeriod, setYear } =
    props && props;

  const [show, setShow] = useState(false);
  const [valueSearch, setValueSearch] = useState("");
  const [rotate, setRotate] = useState(false);

  const handleSearch = (e) => {
    setValueSearch(e.target.value);
    setTextsearch(e.target.value);
  };
  const handlekey = (e) => {
    if (e.keyCode === 27) {
      setShow(false);
      setValueSearch("");
      setTextsearch("");
    }
  };
  const handlerOrder = () => {
    if (order === "asc") {
      setOrder("desc");
    } else {
      setOrder("asc");
    }
    setRotate(!rotate);
  };
  return (
    <>
      <div className="flex pt-6 justify-between items-center mx-1 sm:mx-6 w-full sm:w-auto flex-col md:flex-row gap-2">
        <div className="flex md:justify-start justify-center items-center w-full sm:w-auto mr-2 md:flex-col">
          <div className="grid-cols-2 grid ">
            <IoFilterOutline
              className={
                rotate
                  ? "rotate-180 size-6 text-[#A4B0BE] mr-3 hover:text-[#ECCC68] hover:scale-125 hover:cursor-pointer"
                  : "size-6 text-[#A4B0BE] mr-3 hover:text-[#ECCC68] hover:scale-125 hover:cursor-pointer"
              }
              onClick={handlerOrder}
            />
            <IoSearchOutline
              className="size-6 text-[#A4B0BE]  hover:text-[#ECCC68] hover:scale-125 hover:cursor-pointer"
              onClick={() => setShow(true)}
            />
          </div>
          <input
            type="text"
            name=""
            id="inputSearch"
            value={valueSearch}
            onChange={handleSearch}
            className={
              show
                ? " bg-white border border-[#ECCC68] text-base rounded-lg h-6 md:h-10 lg:w-72"
                : "hidden"
            }
            onKeyDown={handlekey}
          />
        </div>
        <div className="flex sm:gap-4 sm:justify-between justify-center items-center flex-col sm:flex-row w-full sm:w-auto">
          <h3 className="text-base font-semibold">Planilla:</h3>
          <select
            id="division"
            className="bg-white border border-[#A4B0BE] text-[#A4B0BE] text-base  rounded-lg focus:ring-[#ECCC68] focus:border-[#ECCC68] h-8  xl:w-48 "
            onChange={(e) => {
              setPeriod(e.target.value);
            }}
          >
            <option defaultValue={""} value={""}>
              Periodo
            </option>
            <option value="1">Primero</option>
            <option value="2">Segundo</option>
            <option value="3">Tercero</option>
            <option value="4">Cuarto</option>
            <option value="5">Quinto</option>
            <option value="6">Sexto</option>
          </select>
          <select
            id="division"
            className="bg-white border border-[#A4B0BE] text-[#A4B0BE] text-base   rounded-lg focus:ring-[#ECCC68] focus:border-[#ECCC68] h-8  w-32 xl:w-48"
            onChange={(e) => setDivision(e.target.value)}
          >
            <option defaultValue={""} value={""}>
              División
            </option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
          </select>
          <select
            id="division"
            className="bg-white border border-[#A4B0BE] text-[#A4B0BE] text-base   rounded-lg focus:ring-[#ECCC68] focus:border-[#ECCC68] h-8  w-32 xl:w-48"
            onChange={(e) => setYear(e.target.value)}
          >
            <option defaultValue={""} value={""}>
              Año
            </option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default FilterCourses;
