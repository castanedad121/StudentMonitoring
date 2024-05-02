import React from "react";

const Contact = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">

        
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">


          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contacto
          </h2>


          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          En este espacio educativo, busca facilitar la comunicación e interacción con la comunidad educativa en su conjunto,
           generando una conversación fluida con docentes y familias.
          </p>


          <form action="#" className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Email
              </label>

              <input
                type="email" id="email"
                className="shadow-sm bg-yellow-100 border border-yellow-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 dark:shadow-sm-light"
                placeholder="" required/>
            </div>


            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                Asunto
              </label>

              <input
                type="text" id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-yellow-100 rounded-lg border border-yellow-300 shadow-sm focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500 dark:shadow-sm-light"
                placeholder="" required/>
            </div>


            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                Mensaje
              </label>

              <textarea
                id="message" rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-yellow-100 rounded-lg shadow-sm border border-yellow-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500"
                placeholder=""
              ></textarea>
            </div>


            <button
              type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-yellow-600 sm:w-fit hover:bg-yellow-700 focus:ring-4 focus:outline-none focus:ring-yellow-300 dark:bg-yellow-500 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800">
              Enviar 
            </button>


          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
