import React from "react";
import { SideBar, NavBar } from "../components/index";
const Help = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="grow">
        <NavBar title={"Ayuda"} />
        <h1>HELP</h1>
      </div>
    </div>
  );
};

export default Help;
