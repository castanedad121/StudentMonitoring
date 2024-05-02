import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions";
import getParamsEnv from "../functions/getParamsEnv";
import { validation } from "../functions/validation";
const { HOME } = getParamsEnv();
import { PiStudentBold } from "react-icons/pi";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state?.userLogin);
  const error = useSelector((state) => state?.error);
  const theme = JSON.parse(localStorage.getItem("darkMode"))
    ? JSON.parse(localStorage.getItem("darkMode"))
    : "light";
  const [buttonLogin, setButtonLogin] = useState(false);
  const [errors, setErrors] = useState({});
  const [userLogin, setUserLogin] = useState({
    identDocument: "",
    password: "",
  });

  const handlerLogin = (e) => {
    if (buttonLogin) {
      const dataUser = { ...userLogin };
      setErrors(validation(dataUser));
    }
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    setButtonLogin(true);
    const dataUser = { ...userLogin };
    setErrors(validation(dataUser));
    Object.entries(errors).length === 0 && dispatch(login(userLogin));
  };
  const probando = () => {
    setButtonLogin(true);
    const dataUser = { ...userLogin };
    setErrors(validation(dataUser));
  };

  useEffect(() => {
    if (theme === "light" || !theme) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }

    if (
      user?.role === "Administrador" ||
      user?.role === "Docente" ||
      user?.role === "Apoderado"
    ) {
      navigate(HOME);
    } else {
      navigate("/login");
    }
  }, [theme, user?.role, navigate, user?.identDocument]);
  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-900 h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <PiStudentBold className="mr-3 size-9 sm:h-9 text-yellow-500" />
            Student Monitoring
          </a>
          <form
            className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
            onSubmit={handlerSubmit}
          >
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Bienvenido
              </h1>
              <div className="space-y-4 md:space-y-6" action="#">
                <div>
                  <input
                    type="text"
                    name="identDocument"
                    id="identDocument"
                    className="bg-yellow-50 border border-yellow-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                    placeholder="Documento"
                    value={userLogin.identDocument}
                    onChange={handlerLogin}
                  />
                  <span className="text-sm text-red-500 dark:text-red-700">
                    {errors.identDocument && errors.identDocument}
                  </span>
                </div>
                <div>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="on"
                    placeholder="Contraseña"
                    className="bg-yellow-50 border border-yellow-300 text-gray-900 sm:text-sm rounded-lg focus:ring-yellow-600 focus:border-yellow-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                    value={userLogin.password}
                    onChange={handlerLogin}
                  />
                  <span className="text-sm text-red-500 dark:text-red-700">
                    {errors.password && errors.password}
                  </span>
                  <span className="text-sm text-red-500 dark:text-red-700">
                    {error === 400 && "Usuario y/o contraseña incorrecta"}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5"></div>
                    <div className="ml-3 text-sm"></div>
                  </div>
                  <span
                    onClick={() =>
                      window.alert("Comuniquese con el administrador")
                    }
                    className="cursor-pointer text-sm font-medium text-yellow-600 hover:underline dark:text-yellow-500"
                  >
                    ¿Olvidó su contraseña?
                  </span>
                </div>
                <button
                  type="submit"
                  onClick={probando}
                  className="w-full text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
                >
                  Iniciar sesión
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
