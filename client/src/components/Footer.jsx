import React from "react";
import { PiStudentBold } from "react-icons/pi";

const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
        <div className="mx-auto max-w-screen-xl text-center">
          <a
            href="/"
            className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <PiStudentBold className="mr-3 size-9 sm:h-9 text-yellow-500" />
            Student Monitoring
          </a>
          <p className="my-6 text-gray-500 dark:text-gray-400">
            
          </p>
          <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
            <li>
              <a href="#about" className="mr-4 hover:underline md:mr-6 ">
                Quienes somos
              </a>
            </li>
            <li>
              <a href="#contact" className="mr-4 hover:underline md:mr-6">
                Contacto
              </a>
            </li>
            <li>
              <a href="#community" className="mr-4 hover:underline md:mr-6 ">
                Comunidad
              </a>
            </li>
          </ul>
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024{" "}
            <a href="#" className="hover:underline">
              Student Monitoring™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
