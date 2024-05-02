/* eslint-disable react-hooks/exhaustive-deps */

import { PiStudentBold } from "react-icons/pi";
import { SideBar, NavBar } from "../components/index";

const Register = () => {
  return (
    <>
      <div className="flex">
        <SideBar />

        <div className="grow flex flex-col">
          <NavBar title={"Registrar"} />

          <div className="flex flex-col justify-center items-center pt-1 hover:text-[#FCD34D] ">
            <div className=" flex w-full mx-6">
              <img
                className="w-[60%] mx-6 mb-[153px]"
                src="https://res.cloudinary.com/desaac6ma/image/upload/v1714153349/Imagen1_ppdyl8.png"
                alt=""
              />
            </div>
            <div className="grow flex w-full justify-end  bg-[#DCDDE1] ">
              <img
                className="w-[70%]"
                src="https://res.cloudinary.com/desaac6ma/image/upload/v1714153349/Imagen2_szl88l.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
