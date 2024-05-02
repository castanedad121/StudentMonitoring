import React, { useState } from "react";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { IoFilterOutline } from "react-icons/io5";
import { IoLogOut } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogout } from "../redux/actions";
import getParamsEnv from "../functions/getParamsEnv";
const { ROOT } = getParamsEnv();

const NavBar = (props) => {
  const { title, serialNumber, division, period, docente } = props && props;
  const userLogin = useSelector((state) => state?.userLogin);
  const periodo = period && period + "°";
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handlerLogout = () => {
    dispatch(setLogout());
    navigate(ROOT);
  };
  return (
    <>
      <div className="flex h-28 border-0 border-b-[2.5px] border-[#A4B0BE] mx-1 sm:mx-6 justify-between items-center flex-wrap-reverse">
        <h1 className="sm:text-3xl sm:font-bold text-2xl font-semibold sm:pt-4">
          {title} {periodo} {division} {docente}
          <br />
          {serialNumber && (
            <span className="text-base font-light text-[#A4B0BE]">
              {serialNumber}
            </span>
          )}
        </h1>
        <div className="flex sm:justify-between  justify-end items-center  sm:pb-2 sm:w-auto w-full">
          <IoNotificationsOutline className="size-7 text-[#A4B0BE] mr-2 sm:mr-4 hover:cursor-pointer hover:text-[#ECCC68] hover:scale-125" />
          <img
            src={
              userLogin.image
                ? userLogin.image
                : "https://cdn-icons-png.flaticon.com/512/5953/5953496.png"
            }
            alt=""
            className="size-10 sm:size-12 border-2 border-[#A4B0BE]  rounded-full mr-2 sm:mr-4 hover:cursor-pointer hover:border-[#ECCC68] hover:scale-125"
          />
          <div>
            <h2 className="sm:text-base sm:font-semibold text-sm">
              {userLogin.name} {userLogin.lastName}
            </h2>
            <span className="sm:text-sm text-[#A4B0BE] font-medium text-xs">
              {userLogin.role}
            </span>
          </div>
          <IoLogOut
            onClick={handlerLogout}
            className="size-10 text-[#A4B0BE] ml-2 sm:ml-4 hover:cursor-pointer hover:text-[#ECCC68] hover:scale-125"
          />
        </div>
      </div>
    </>
  );
};

export default NavBar;
