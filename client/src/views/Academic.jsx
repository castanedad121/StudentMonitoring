import React from "react";
import { SideBar, NavBar } from "../components/index";
const Academic = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="grow">
        <NavBar title={"Gestión Académica"} />
        <h1>ACADEMIC MANAGEMENT</h1>
      </div>
    </div>
  );
};

export default Academic;
