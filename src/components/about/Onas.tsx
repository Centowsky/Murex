import React from "react";
import murex1 from "../../assets/info1.webp";
import murex2 from "../../assets/info2.webp";
import Wizytowka from "../main/Wizytowka";

const Onas: React.FC = () => {
  return (
    <>
      <div className="bg-white w-5/6 mx-auto">
        <div className="text-center">
          <h1 className="text-black text-3xl font-bold mt-8">
            Wycinka drzew{" "}
            <span className="border-b-2 border-orange-500">Myślibórz</span>
          </h1>
          <p className="py-2 text-2xl font-light">
            Od 1996 roku pracujemy na zaufanie naszych klientów. Przewozimy
            towary, świadczymy usługi dźwigowe, wynajmujemy podnośniki koszowe
          </p>
          <div className="flex flex-col md:flex-row py-10">
            <div className="w-full md:w-1/2">
              {" "}
              <img
                src={murex1}
                alt="Firma Murex"
                className="object-cover w-full h-1/2"
              />
              <img
                src={murex2}
                alt="Firma Murex"
                className="object-cover w-full h-1/2"
              />
            </div>
            <div className="w-full md:w-1/2 text-left p-8">
              <h1 className="text-2xl font-bold">12 lat doświadczenia</h1>
              <p className="font-normal mt-8">
                Od ponad 12 lat pracujemy na zaufanie naszych klientów.
                Świadczymy usługi dla firm, osób prywatnych i instytucji
                państwowych. Od kluczowych dla regionu inwestycji po wycinkę
                drzew na posesjach. Szybko i profesjonalnie. Wystarczy jeden
                telefon, aby ustalić termin, zakres i szacowany koszt wykonania
                zlecenia. Potrzebujesz pilnej pomocy? Na nas zawsze możesz
                polegać.
              </p>
              <ul className="list-disc list-inside mt-10">
                <li className="font-bold">Przewozimy towary</li>
                <li className="font-bold">Stawiamy konstrukcje stalowe</li>
                <li className="font-bold">Świadczymy usługi dźwigowe</li>
                <li className="font-bold">Wynajmujemy podnośniki koszowe</li>
                <li className="font-bold">
                  Prowadzimy naprawy dachów i rynien
                </li>
                <li className="font-bold">Czyścimy i malujemy elewacje</li>
                <li className="font-bold">Karczujemy tereny pod inwestycje</li>
                <li className="font-bold">
                  Opiekujemy się parkami miejskimi i cmentarzami
                </li>
                <li className="font-bold">Usuwamy głazy i korzenie</li>
                <li className="font-bold">Wywozimy gałęzie, ziemię i gruz</li>
                <li className="font-bold">Wycinamy i pielęgnujemy drzewa</li>
                <li className="font-bold">
                  Wykonujemy wszelkiego rodzaju prace na wysokości
                </li>
                <li className="font-bold">
                  Podejmujemy się nietypowych zleceń
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
