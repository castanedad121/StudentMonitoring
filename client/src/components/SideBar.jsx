import React from "react";
import { PiStudentBold } from "react-icons/pi";
import { IoCalendarOutline } from "react-icons/io5";
import { IoReaderOutline } from "react-icons/io5";
import { IoStatsChartOutline } from "react-icons/io5";
import { IoKeyOutline } from "react-icons/io5";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5"; 
import { IoHelpCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import getParamsEnv from "../functions/getParamsEnv";
import { useSelector } from "react-redux";
const { HOME, CALENDAR, ADMIN, MESSAGES, HELP, ACADEMIC_MANAGEMET, CLASES } =
  getParamsEnv();

const SideBar = () => {
  const roleUser = useSelector((state) => state?.userLogin.role);
  return (
    <>
      <div className="flex flex-col justify-around text-center items-center px-4  w-16  h-screen  bg-amber-300  group sm:hover:w-[278px] hover:w-5/6">
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "flex flex-col items-center text-white"
              : "flex flex-col items-center"
          }
          to={HOME}
        >
          <PiStudentBold className="size-12 group-hover:size-16  hover:text-white" />
          <label className="hidden group-hover:block text-sm pt-1">
            Stundent Monitoring
          </label>
        </NavLink>
        <div className="flex flex-col items-center">
          <NavLink
            to={CLASES}
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center text-white"
                : "flex flex-col items-center"
            }
          >
            <IoReaderOutline className="size-8 mt-14 hover:cursor-pointer hover:text-white" />
            <label className="hidden group-hover:block text-sm">Clases</label>
          </NavLink>
          <NavLink
            to={CALENDAR}
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center text-white"
                : "flex flex-col items-center"
            }
          >
            <IoCalendarOutline className="size-8 mt-6 group-hover:mt-4 hover:cursor-pointer hover:text-white " />
            <label className="hidden group-hover:block text-sm pt-1">
              Calendario
            </label>
          </NavLink>
          <NavLink
            to={ACADEMIC_MANAGEMET}
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center text-white"
                : "flex flex-col items-center"
            }
          >
            <IoStatsChartOutline className="size-8 mt-6 group-hover:mt-4  hover:cursor-pointer hover:text-white" />
            <label className="hidden group-hover:block text-sm">
              Gestión académica
            </label>
          </NavLink>
          {roleUser === "Administrador" && (
            <NavLink
              to={ADMIN}
              className={({ isActive }) =>
                isActive
                  ? "flex flex-col items-center text-white"
                  : "flex flex-col items-center"
              }
            >
              <IoKeyOutline className="size-8 mt-6 group-hover:mt-4  hover:cursor-pointer hover:text-white" />
              <label className="hidden group-hover:block text-sm">
                Administrador
              </label>
            </NavLink>
          )}
          <NavLink
            to={MESSAGES}
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center text-white"
                : "flex flex-col items-center"
            }
          >
            <IoChatboxEllipsesOutline className="size-8 mt-6 group-hover:mt-4 hover:cursor-pointer hover:text-white" />
            <label className="hidden group-hover:block text-sm">Mensajes</label>
          </NavLink>
        </div>
        <div className="flex flex-col items-center">
          <NavLink
            to={HELP}
            className={({ isActive }) =>
              isActive
                ? "flex flex-col items-center text-white"
                : "flex flex-col items-center"
            }
          >
            <IoHelpCircleOutline className="size-8 mt-16 hover:cursor-pointer hover:text-white" />
            <label className="hidden group-hover:block text-sm">Ayuda</label>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default SideBar;
