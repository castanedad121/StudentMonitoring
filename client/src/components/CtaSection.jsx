import React from "react";


const CtaSection = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          
        <img
            className="w-full dark:hidden"
            src="./src/assets/educar.jpg" 
            alt="imagen"
          />

          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Monitoreo de aprendizaje a través del seguimiento escolar
            </h2>
            <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
            El seguimiento escolar de estudiantes es una modalidad 
            pedagógica que tiene como objetivo el acompañamiento a los alumnos. 

            A través del seguimiento escolar no solo se monitorean y revisan la entrega de tareas, notas. Sino que tambien Permite
             propiciar comunicación oportuna con la familia y generar así mayor empatía.
            </p>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default CtaSection;
