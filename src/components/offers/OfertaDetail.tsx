import React from "react";
import Header from "../main/Header";
import Navbar from "../main/Navbar";
import { useParams } from "react-router-dom";
import wycinka from "../../assets/info1.webp";
import podnosniki from "../../assets/info2.webp";
import koparki from "../../assets/info3.webp";
import wysokosc from "../../assets/info3.webp";
import Wizytowka from "../main/Wizytowka";

const OfertaDetail: React.FC = () => {
  const { offerId } = useParams<{ offerId: string }>();

  const ofertaList = [
    {
      id: "wycinka",
      title: "Wycinka i pielęgnacja drzew",
      content:
        "Specjalizujemy się w pielęgnacji i wycince drzew. Także w miejscach trudno dostępnych, budynków, na terenach pod inwestycje, cmentarzach oraz parkach.",
      description:
        "Nasza firma oferuje usługi wycinania i pielęgnacji drzew, w tym trudno dostępnych miejscach oraz na terenach publicznych.",
      img: wycinka,
    },

    {
      id: "podnosniki",
      title: "Wynajem Podnośników Koszowych",
      content:
        "Prowadzimy wynajem podnośników koszowych o maksymalnej wysokości roboczej do 28 metrów. Nasze podnośniki umożliwiają bezpieczne i komfortowe wykonywanie prac.",
      description:
        "Oferujemy wynajem podnośników koszowych z dużym zasięgiem, zapewniających bezpieczne warunki pracy na wysokości.",
      img: podnosniki,
    },
    {
      id: "koparki",
      title: "Wynajem koparko-ładowarki",
      content:
        "Oferujemy kompleksową gamę usług wynajmu koparko-ładowarki i nie tylko.",
      description:
        "Nasza firma oferuje wynajem różnych maszyn budowlanych, w tym koparko-ładowarek, dostępnych na różne cele budowlane.",
      img: koparki,
    },

    {
      id: "wysokosc",
      title: "Prace na wysokości",
      content:
        "Wykonujemy prace na wysokości. Czyścimy rynny, montujemy siatki oraz reklamy, myjemy dachy i wymieniamy dachówki. Oferujemy szeroki zakres usług.",
      description:
        "Specjalizujemy się w pracach na wysokości, takich jak montaż siatek, reklam, mycie dachów i inne usługi związane z pracami na wysokości.",
      img: wysokosc,
    },
  ];

  const selectedOffer = ofertaList.find((offer) => offer.id === offerId);

  if (!selectedOffer) {
    return (
      <>
        <Navbar />
        <Header currentPage="Oferta" />
        <div className="text-3xl font-bold ">Nie znaleziono oferty</div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Header currentPage="Oferta" />
      <div className="min-h-[50vh] bg-gray-100 w-11/12 mx-auto p-4 rounded-lg shadow-lg my-10">
        <h2 className="text-5xl font-bold p-2 text-center">
          {selectedOffer.title}
        </h2>
        <div className="flex flex-row p-8">
          <div className="w-1/2 flex items-center">
            <p className="text-2xl p-2">{selectedOffer.content}</p>
          </div>
          <div className="w-1/2">
            <img src={selectedOffer.img} alt={selectedOffer.title}></img>
          </div>
        </div>
        <div className="w-full text-center">
          <p className="text-xl">{selectedOffer.description}</p>
        </div>
      </div>
      <Wizytowka />
    </>
  );
};

export default OfertaDetail;
