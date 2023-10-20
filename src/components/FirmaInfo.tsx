import React from "react";
import Murex from "../assets/murex.webp";
import info1 from "../assets/info1.webp";
import info2 from "../assets/info2.webp";
import info3 from "../assets/info3.webp";

const FirmaInfo: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <img src={Murex} alt="Firma Murex" className="object-cover h-96 p-2" />
      </div>
      <div className="w-full md:w-1/2 h-96 p-2 flex flex-wrap flex-row items-center">
        <h2 className="text-3xl font-bold">Nie boimy się wyzwań</h2>
        <p className="text-xl font-light">
          Cum veniam amet nihil reprehenderit quis iure molestiae eveniet. Ipsam
          vel sunt impedit. Ducimus quia laboriosam et consequatur quos et
          iusto. Quo laborum libero ut eos in nulla commodi voluptatibus
          exercitationem. Laboriosam quo voluptate sapiente porro aut. Sint
          quaerat consequatur odit ut repellat voluptas inventore
        </p>
        <p className="text-xl font-bold p-2">
          Jarosław{" "}
          <span className=" border-b-2 border-orange-500">Organista</span>
        </p>
        <div className="flex flex-row">
          <img
            src={info1}
            alt="Zdjęcie Informacyjne nr 1"
            className="object-cover w-1/3 h-32 mr-2"
          />
          <img
            src={info2}
            alt="Zdjęcie Informacyjne nr 2"
            className="object-cover w-1/3 h-32 mr-2"
          />
          <img
            src={info3}
            alt="Zdjęcie Informacyjne nr 3"
            className="object-cover w-1/3 h-32 mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FirmaInfo;
