import React from "react";
import { useParams } from "react-router-dom";
import drzewo from "../../assets/cards/drzewo.webp";
import koparka from "../../assets/cards/koparka.webp";
import podnosniki from "../../assets/info2.webp";
import wysokosc from "../../assets/info3.webp";
import Header from "../main/Header";
import Navbar from "../main/Navbar";
import Wizytowka from "../main/Wizytowka";

const OfertaDetail: React.FC = () => {
  const { offerId } = useParams<{ offerId: string }>();

  const ofertaList = [
    {
      id: "wycinka",
      title: "Wycinka i pielęgnacja drzew",
      content: (
        <div>
          <p>
            Specjalizujemy się w profesjonalnej wycince drzew. Nasza firma
            oferuje wysokiej jakości usługi, obejmujące zarówno standardowe
            prace, jak i trudno dostępne tereny inwestycyjne oraz miejsca
            publiczne.
          </p>
          <br></br>
          <p>
            Nasz zespół doświadczonych specjalistów posługuje się nowoczesnym
            sprzętem, umożliwiającym precyzyjne operacje w trudno dostępnych
            obszarach. Bez względu na lokalizację, gwarantujemy skuteczne i
            bezpieczne przeprowadzenie prac związanych z wycinaniem i
            pielęgnacją drzew.
          </p>
          <br></br>
          <p>
            Działamy z pełną elastycznością, dostosowując się do indywidualnych
            potrzeb klienta. Nasza firma łączy elastyczność z profesjonalizmem,
            zapewniając kompleksową opiekę nad drzewami, bez względu na ich
            umiejscowienie. Skontaktuj się z nami, aby dowiedzieć się więcej i
            skorzystać z naszych usług.
          </p>
        </div>
      ),
      description: "Wysokie drzewa to dla nas nie problem.",
      img: drzewo,
    },

    {
      id: "podnosniki",
      title: "Wynajem Podnośników Koszowych",
      content: (
        <div>
          <p>
            Nasza firma specjalizuje się w wynajmie podnośników koszowych o
            maksymalnej wysokości roboczej do 28 metrów. Dzięki temu zapewniają
            one dostęp do trudno dostępnych miejsc, umożliwiając wykonywanie
            prac na różnych wysokościach.
          </p>
          <br></br>
          <p>
            Wynajmując podnośniki koszowe od nas, zyskujesz pewność bezpiecznych
            i komfortowych warunków pracy na wysokości. Nasz sprzęt jest
            regularnie serwisowany i spełnia najwyższe standardy, aby sprostać
            Twoim oczekiwaniom podczas wszelkich prac.
          </p>
          <br></br>
          <p>
            Oferujemy elastyczne warunki wynajmu podnośników koszowych,
            dostosowane do indywidualnych potrzeb klienta. Dzięki naszym
            maszynom, prace na wysokości stają się efektywne i łatwe do
            przeprowadzenia.
          </p>
        </div>
      ),
      description: "Montaż sygnalizacji świetlnej w Myśliborzu.",
      img: podnosniki,
    },
    {
      id: "koparki",
      title: "Wynajem koparko-ładowarki",
      content: (
        <div>
          <p>
            Nasza firma zapewnia kompleksową ofertę wynajmu koparek-ładowarek.
            Dzięki naszemu doświadczeniu i nowoczesnemu sprzętowi jesteśmy
            gotowi sprostać wszelkim potrzebom związanym z pracami budowlanymi.
          </p>
          <br></br>
          <p>
            Wynajmując koparko-ładowarkę od nas, otrzymujesz nie tylko sprzęt
            najwyższej jakości, ale także wsparcie doświadczonego zespołu.
            Jesteśmy gotowi dostarczyć niezbędne maszyny budowlane i doradzić w
            wyborze najlepszego sprzętu do konkretnego projektu.
          </p>
        </div>
      ),
      description: "Prace ziemne koparko-ładowarką w miejscowości Ławy.",
      img: koparka,
    },

    {
      id: "wysokosc",
      title: "Prace na wysokości",
      content: (
        <div>
          <p>
            Nasza firma specjalizuje się w profesjonalnych pracach na wysokości,
            oferując kompleksowe usługi dla różnorodnych potrzeb klientów. Bez
            względu na rodzaj zadania, od czyszczenia rynien po montaż siatek i
            reklam, nasz doświadczony zespół gwarantuje skuteczne i bezpieczne
            wykonanie prac na różnych poziomach.
          </p>
          <br></br>
          <p>
            Oferujemy klientom szeroki zakres usług związanych z pracami na
            wysokości, dostosowując się do indywidualnych potrzeb.
            Bezpieczeństwo naszych pracowników oraz satysfakcja klienta są dla
            nas priorytetem, dlatego dbamy o wysoką jakość świadczonych usług i
            terminowość realizacji zleceń.
          </p>
        </div>
      ),
      description: "Mycie elewacji w miejscowości Klicko.",
      img: wysokosc,
    },
  ];

  const selectedOffer = ofertaList.find((offer) => offer.id === offerId);

  if (!selectedOffer) {
    return (
      <>
        <Navbar />
        <Header currentPage="Oferta" />
        <div className="text-3xl font-bold ">
          Nie znaleziono pozycji na liscie ofert.
        </div>
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
        <div className="flex flex-col md:flex-row p-8">
          <div className="md:w-1/2 flex items-center">
            <p className="text-2xl p-2">{selectedOffer.content}</p>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0">
            <img
              src={selectedOffer.img}
              alt={selectedOffer.description}
              className="w-full h-auto"
            />
            <p className="text-lg">{selectedOffer.description}</p>
          </div>
        </div>
      </div>
      <Wizytowka />
    </>
  );
};

export default OfertaDetail;
