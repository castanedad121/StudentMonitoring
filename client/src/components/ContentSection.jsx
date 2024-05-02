import React from "react";

const ContentSection = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
          <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              El seguimiento estudiantil en la era digital.
            </h2>
            <p className="mb-4">
              La evolución de las tecnologías de la información ha afectado casi
              todas las áreas de la sociedad, siendo la industria educativa una
              de ellas. Con <b>Student Monitoring</b>, docentes y/o
              administradores pueden optimizar la gestión digital de los datos
              de los estudiantes, dejando atrás las tediosas tareas manuales con
              el fin de garantizar que el instituto tenga control total y fácil
              sobre unos datos completos, seguros y en un solo lugar.
            </p>
            <p>
              Nuestro sistema no está pensado únicamente para ayudar al
              instituto a monitorear el desempeño escolar de cada estudiante,
              sino, antes bien, para que padres o tutores se involucren en el
              proceso educativo de sus niños, obteniendo información sobre el
              rendimiento académico, las actividades que se realizan en clase o
              gestion de tareas. Así, padres, docentes y administrativos podrán
              tomar decisiones para mejorar el rendimiento escolar de los
              estudiantes.
            </p>
          </div>
          <div>
            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">
                Beneficios
              </h2>
              <div className="grid grid-cols-2 grid-flow-row gap-4">
              <div className="bg-gray-50 rounded-lg p-4 ">
                <h1 className="text-xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">Docentes</h1>
                <ul className="list-disc items-center ps-5 leading-7 font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  <li className="">Lorem ipsum dolor sit amet consectetur</li>
                  <li>Lorem ipsum dolor sit amet </li>
                  <li>Por ipsum dolor sit  consectetur</li>
                  <li>Lorem ipsum amet docente</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4">
                <h1 className="text-xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">Administrativos</h1>
                <ul className="list-disc ps-5 leading-7 font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  <li>Lorem ipsum dolor sit amet consectetur</li>
                  <li>Lorem ipsum dolor sit amet </li>
                  <li>Por ipsum dolor sit</li>
                  <li>Lorem ipsum amet docente</li>
                </ul>
              </div>
              <div className="bg-gray-50 rounded-lg p-4 col-span-2">
                <h1 className="text-xl tracking-tight text-center font-extrabold text-gray-900 dark:text-white">Familia</h1>
                <ul className="list-disc ps-5 ms-16 leading-7 font-light text-gray-500 sm:text-lg dark:text-gray-400">
                  <li>Lorem ipsum dolor sit amet consectetur</li>
                  <li>Family ipsum dolor sit amet </li>
                  <li>Lorem ipsum amet familiaris columbus nonetura amnestia colegatur</li>
                  <li>Lorem ipsum dolor sit amet </li>
                  <li>Por ipsum dolor sit  consectetur</li>
                  <li>Formel ipsum amet kid</li>
                </ul>
              </div>
          </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentSection;
