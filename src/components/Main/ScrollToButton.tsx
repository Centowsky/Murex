import React from "react";

const ScrollToButton: React.FC = () => {
  const handleScrollToDiv = () => {
    const targetDiv = document.getElementById("kontakt");

    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      className="text-2xl bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded w-40 hover:shadow-lg transform hover:scale-105 transition duration-500 ease-in-out"
      onClick={handleScrollToDiv}
    >
      Kontakt
    </button>
  );
};

export default ScrollToButton;
