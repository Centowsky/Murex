import React from "react";
import murex1 from "../../assets/podnosnik.webp";
import Wizytowka from "../main/Wizytowka";

const Onas: React.FC = () => {
  return (
    <>
      <div className="bg-white w-5/6 mx-auto">
        <div className="text-center">
          <h1 className="text-black text-3xl font-bold mt-8">
            Wycinka drzew, podnośniki koszowe,{" "}
            <span className="border-b-2 border-orange-500">
              koparko-ładowarki
            </span>
          </h1>
          <p className="py-2 text-3xl font-light">
            Świadczymy usługi w szerokim zakresie na terenie Myśliborza i
            okolic.
          </p>
          <div className="flex flex-col md:flex-row py-10">
            <div className="w-full md:w-1/2">
              {" "}
              <img
                src={murex1}
                alt="Firma Murex"
                className="object-cover w-full"
              />
            </div>
            <div className="w-full md:w-1/2 text-left p-8">
              <h1 className="text-2xl font-bold">Murex - Jarosław Organista</h1>
              <p className="font-normal text-xl mt-8">
                Nasza firma specjalizuje się w profesjonalnych pracach w
                szerokim zakresie. Zdobyte przez te lata doświadczenie pozwala
                nam spełniać oczekiwania naszych klientów, dostarczając
                kompleksowe rozwiązania.
              </p>
              <ul className="list-disc list-inside mt-10 text-lg">
                <li className="font-bold">
                  Montaż reklam, banerów, billboardów
                </li>
                <li className="font-bold">Mycie fasad budynków</li>
                <li className="font-bold">
                  Czyszczenie okien i okolicznych elementów
                </li>
                <li className="font-bold">Malowanie elewacji</li>
                <li className="font-bold">Naprawy dachów i rynien</li>
                <li className="font-bold">Konserwacja konstrukcji stalowych</li>
                <li className="font-bold">Prace rozbiórkowe</li>
                <li className="font-bold">Montaż oświetlenia na wysokości</li>
                <li className="font-bold">Wycinanie i przycinanie gałęzi</li>
                <li className="font-bold">
                  Oczyszczanie dachów z liści i odpadków
                </li>
                <li className="font-bold">
                  Wynajem podnośników do prac na wysokości
                </li>
                <li className="font-bold">Wynajem maszyn do prac ziemnych</li>
                <li className="font-bold">
                  Kopanie i prace ziemne na różnych terenach
                </li>
                <li className="font-bold">Wykopy pod fundamenty</li>
                <li className="font-bold">
                  Prace ziemne na terenach budowlanych
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <Firma />
      <FirmaInfo /> */}
      <Wizytowka />
    </>
  );
};

export default Onas;
