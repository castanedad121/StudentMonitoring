/* eslint-disable react-hooks/exhaustive-deps */

import { PiStudentBold } from "react-icons/pi";
import { SideBar, NavBar } from "../components/index";

const Home = () => {
  return (
    <>
      <div className="flex">
        <SideBar />

        <div className="grow flex flex-col">
          <NavBar title={"Bienvenidos"} />
          <div className="flex flex-col justify-center items-center pt-24 hover:text-[#FCD34D] ">
            <PiStudentBold className="size-64 hover:scale-105 shadow-[#FCD34D] drop-shadow-2xl" />
            <label className="font-extrabold text-5xl pt-1 hover:scale-125 shadow-black drop-shadow-xl">
              Stundent Monitoring
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
