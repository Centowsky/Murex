import React, { useState, useEffect } from "react";
import s1 from "../../assets/slider/1.webp";
import s2 from "../../assets/slider/2.webp";
import s3 from "../../assets/slider/3.webp";
import s4 from "../../assets/slider/4.webp";
import s5 from "../../assets/slider/5.webp";
import s6 from "../../assets/slider/6.webp";
import s7 from "../../assets/slider/7.webp";
import s8 from "../../assets/slider/8.webp";
import s9 from "../../assets/slider/9.webp";

const images = [s1, s2, s3, s4, s5, s6, s7, s8, s9];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Zmiana co 5 sekund

    // Wyczyszczenie interwału po opuszczeniu komponentu
    return () => clearInterval(interval);
  }, [currentIndex]); // Uruchomienie efektu przy zmianie currentIndex

  return (
    <div className="relative min-w-screen min-h-screen bg-gray-200 flex items-center justify-center">
      <div className="relative h-3/4 sm:h-4/5 lg:h-3/5 xl:h-2/3 overflow-hidden rounded-lg">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${
              index === currentIndex ? "block" : "hidden"
            } duration-700 ease-in-out w-full h-full flex items-center justify-center`}
          >
            <img
              src={image}
              className="max-h-screen max-w-full object-cover"
              alt={`Slide ${index + 1}`}
            />
          </div>
        ))}
      </div>
      <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-orange-500" : "bg-blue-300"
            }`}
            aria-current={index === currentIndex ? "true" : "false"}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => setCurrentIndex(index)}
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        onClick={prevSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        onClick={nextSlide}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray_800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
