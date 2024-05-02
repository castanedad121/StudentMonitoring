import React from "react";
import { SideBar, NavBar } from "../components/index";
const Calendar = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="grow">
        <NavBar title={"Calendario"} />

        {/*  HEADER */}
        <div className="flex  flex-col mx-6 scale-95 ">
          <header className="flex items-center justify-between border-b border-gray-200 px-6 py-4 lg:flex-none">
            <h1 className="text-base font-semibold leading-30 text-gray-900">
              <time dateTime="2022-01">Abril 2024</time>
            </h1>
            <div className="flex items-center">
              <div className="hidden md:ml-4 md:flex md:items-center">
                <button
                  type="button"
                  className="ml-6 rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-yellow-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
                >
                  Agregar evento
                </button>
              </div>
            </div>
          </header>

          {/* NOMBRES DE LA SEMANA */}
          <div className="lg:flex-auto lg:flex-col">
            <div className="grid grid-cols-7 gap-px border-b border-gray-300 bg-gray-200 text-center text-xs font-semibold leading-6 text-gray-700 lg:flex-none">
              <div className="flex justify-center bg-white py-2">
                <span>dom</span>
              </div>
              <div className="flex justify-center bg-white py-2">
                <span>lun</span>
              </div>
              <div className="flex justify-center bg-white py-2">
                <span>mar</span>
              </div>
              <div className="flex justify-center bg-white py-2">
                <span>mie</span>
              </div>
              <div className="flex justify-center bg-white py-2">
                <span>jue</span>
              </div>
              <div className="flex justify-center bg-white py-2">
                <span>vie</span>
              </div>
              <div className="flex justify-center bg-white py-2">
                <span>sab</span>
              </div>
            </div>

            {/* NUMEROS DEL MES */}
            <div className="flex bg-gray-200 text-xs leading-10 text-gray-700 lg:flex-auto">
              <div className="hidden w-full lg:grid lg:grid-cols-7 lg:grid-rows-5 lg:gap-px">
                <div className="relative bg-gray-200 px-3 py-2 text-gray-600">
                  <time dateTime="2021-12-27">31</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2021-12-28">1</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2021-12-29">2</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2021-12-30">3</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2021-12-31">4</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2022-01-01">5</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2022-01-01">6</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2022-01-03">7</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2022-01-04">8</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2022-01-05">9</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2022-01-06">10</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2022-01-07">11</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2022-01-08">12</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2022-01-09">13</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2022-01-10">14</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2022-01-11">15</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2022-01-13">16</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2022-01-14">17</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2022-01-15">18</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2022-01-16">19</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2022-01-17">20</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2022-01-18">21</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2022-01-19">22</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2022-01-20">23</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2022-01-21">24</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2022-01-22">25</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time
                    dateTime="2022-01-12"
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-amber-500 font-semibold text-white"
                  >
                    26
                  </time>
                  <ol className="mt-2">
                    <li>
                      <a href="#" className="group flex">
                        <p className="flex-auto truncate font-medium text-gray-900 group-hover:text-indigo-600">
                          Demo Day
                        </p>
                        <time
                          dateTime="2022-01-25T14:00"
                          className="ml-3 hidden flex-none text-gray-500 group-hover:text-indigo-600 xl:block"
                        >
                          4PM
                        </time>
                      </a>
                    </li>
                  </ol>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2022-01-24">27</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2022-01-25">28</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2022-01-26">29</time>
                </div>
                <div className="relative bg-white px-3 py-2">
                  <time dateTime="2022-01-27">30</time>
                </div>
                <div className="relative bg-gray-200 px-3 py-2 text-gray-600">
                  <time dateTime="2022-01-28">1</time>
                </div>

                <div className="relative bg-gray-200 px-3 py-2 text-gray-600">
                  <time dateTime="2022-01-29">2</time>
                </div>

                <div className="relative bg-gray-200 px-3 py-2 text-gray-600">
                  <time dateTime="2022-01-30">3</time>
                </div>
                <div className="relative bg-gray-200 px-3 py-2 text-gray-600">
                  <time dateTime="2022-01-31">4</time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
