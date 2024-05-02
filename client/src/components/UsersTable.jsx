import { useDispatch, useSelector } from "react-redux";
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import getParamsEnv from "../functions/getParamsEnv";
import { useNavigate } from "react-router-dom";

const { HOME_COURSE_QUALIFICATION } = getParamsEnv();

const UsersTable = () => {
  const users = useSelector((state) => state?.users);
  const countUsers = useSelector((state) => state?.countUsers);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlerStudent = (student) => {
    const parsedStudent = JSON.parse(student);
  };

  return (
    <>
      {countUsers !== "loader" &&
        (countUsers > 0 ? (
          <div className="w-auto mx-6 text-sm font-semibold text-center table-auto overflow-hidden">
            <div className="w-full border rounded-2xl text-center flex my-0 h-min">
              <p className="w-1/5 text-wrap">Tipo</p>
              <p className="w-1/5 text-wrap ">Nombre y Apellido</p>
              <p className="w-1/5 text-wrap">Documento de identidad</p>
              <p className="w-1/5 text-wrap">Correo</p>
              <p className="w-1/5 text-wrap">Acciones</p>
            </div>

            {users?.map((user, index) => (
              <div
                key={index}
                className="flex w-full border font-normal rounded-md text-center my-2 py-2  hover:bg-gray-200 shadow-[inset_12px_0px_0px_-5px_rgba(179,177,179,1)] "
              >
                <p className="w-1/5 text-wrap">{user.role}</p>
                <p className="w-1/5 text-wrap ">
                  {user.name} {user.lastName}
                </p>
                <p className="w-1/5 text-wrap">{user.identDocument}</p>
                <p className="w-1/5 text-wrap">
                  <a
                    href={`mailto:${user.email}`}
                    className="text-[#407BFF] underline   "
                  >
                    {user.email}
                  </a>
                </p>
                <div className="w-1/5 ">
                  <PiDotsThreeOutlineVerticalFill
                    className="size-6 m-auto cursor-pointer hover:text-[#FFC107] hover:scale-125"
                    onClick={() => handlerStudent(JSON.stringify(user))}
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <span>No se encontraron usuarios</span>
        ))}
    </>
  );
};

export default UsersTable;
