/* eslint-disable react-hooks/exhaustive-deps */
import { SideBar, NavBar, SetCalifications } from "../components/index";
import { useSelector } from "react-redux";

const QualificationUnidad = () => {
  const selectCourse = useSelector((state) => state?.selectCourse);
  const selectStudent = useSelector((state) => state?.selectStudent);

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

        <SetCalifications />
      </div>
    </div>
  );
};

export default QualificationUnidad;
