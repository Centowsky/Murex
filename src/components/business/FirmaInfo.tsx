import React from "react";
import info1 from "../../assets/info1.webp";
import info2 from "../../assets/info2.webp";
import info3 from "../../assets/info3.webp";

const FirmaInfo: React.FC = () => {
  return (
    <div className="w-screen min-h-screen max-w-full flex flex-col md:flex-row items-center">
      <div className="mx-auto w-2/3 p-2 grid grid-rows-1/3 1/3 1/3">
        <div>
          <h1 className="text-3xl font-bold">Nasza firma</h1>
          <p className="text-xl">
            Unde ea architecto qui eveniet sapiente eius eius. Impedit sint
            error illum sunt aperiam et quisquam. Aspernatur cum sit. Esse
            laborum veniam. Sed possimus quos aut quia repudiandae
            necessitatibus cupiditate incidunt vel. Quia ipsa odit debitis ipsum
            ut ut ad qui. Numquam itaque id ea atque facere justo explicabo
            illo. Consequatur quo consequatur molestias. Enim quis quo rem.
            Temporibus neque accusamus voluptatibus sunt unde. Tenetur velit
            molestias iure saepe ea est et est. Molestiae consectetur pariatur
            recusandae in iste hic. Vel animi temporibus.
          </p>
          <p className="text-xl text-right font-bold p-2">
            Jarosław{" "}
            <span className="border-b-2 border-orange-500">Organista</span>
          </p>
        </div>
        <div className="grid md:grid-cols-3 grid-rows-1 md:grid-rows-none">
          <img
            src={info1}
            alt="Zdjęcie Informacyjne nr 1"
            className="object-cover w-full h-64 p-1"
          />
          <img
            src={info2}
            alt="Zdjęcie Informacyjne nr 2"
            className="object-cover w-full h-64 p-1"
          />
          <img
            src={info3}
            alt="Zdjęcie Informacyjne nr 3"
            className="object-cover w-full h-64 p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default FirmaInfo;
