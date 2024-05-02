import React, { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

function Slider() {
  const slides = [
    {
      url: "https://www.ui1.es/sites/default/files/blog/images/187547722_m_normal_none_retocada.jpg",
      num: 0,
    },
    {
      url: "https://media.istockphoto.com/id/140094148/es/foto/ni%C3%B1os-y-su-profesor-en-clase-de-escuela-secundaria.jpg?s=612x612&w=0&k=20&c=cePUVfaPMOzF7QLf-Jgtn_uodXdnwcRS8fpcPPSSu9Q=",
      num: 1,
    },
    {
      url: "https://media.istockphoto.com/id/839297420/es/foto/maestro-trabaja-con-colegiala-joven-en-su-escritorio-en-clase.jpg?s=612x612&w=0&k=20&c=XTLlJjEcUbUNooNgeKK62UzZZ4wfFr0hv7WdUbbWwbc=",
      num: 2,
    },
    {
      url: "https://www.telemundo.com/sites/nbcutelemundo/files/images/gallery/2017/05/02/maestra-con-grupo-4.jpg",
      num: 3,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [active, setActive] = useState(true);

  let timer;
  const runTimer = () => {
    timer = window.setTimeout(() => {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    }, 8000);
  };

  if (active) {
    runTimer();
  }

  const prevSlide = () => {
    clearInterval(timer);
    setActive(false);
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    clearInterval(timer);
    setActive(false);
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    clearInterval(timer);
    setActive(false);
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="w-full h-[500px] m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      ></div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxDotFilled
              className={`${
                currentIndex == slideIndex
                  ? "text-yellow-600 dark:text-yellow-600 scale-125"
                  : "text-black dark:text-white"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
