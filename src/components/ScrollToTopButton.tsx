import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${
        showButton
          ? "visible fixed right-4 bottom-4 z-10 bg-orange-500 p-3 rounded-full"
          : "hidden"
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="text-white text-2xl" />
    </button>
  );
};

export default ScrollToTopButton;
