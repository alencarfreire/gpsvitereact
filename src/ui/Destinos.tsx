import ButtonWhatsApp from "./components/ButtonWhatsApp";

export default function Destinos() {
  interface dataDestinos {
    title: string;
    description: string;
    image: string;
  }

  const dataDestinos: dataDestinos[] = [
    {
      title: "Arraial d'Ajuda",
      description:
        "Arraial d'Ajuda fica cerca de 10km do Aeroporto e 7km do Centro de Porto Seguro, mais o trajeto de balsa que é cerca de 15 minutos, conhecida por sua história e praias paradisíacas, é um dos melhores locais de hospedagem da região.",
      image: "./src/assets/Arraial-dAjuda.png",
    },
    {
      title: "Club Med Trancoso",
      description:
        "O Club Med Trancoso fica cerca de 30km do Aeroporto e 25km do Centro de Porto Seguro, mais o trajeto de balsa que é cerca de 15 minutos. Local de hospegadem de alto padrão, All Inclusive.",
      image: "./src/assets/Clubmedtrancoso.png",
    },
  ];

  return (
    <section className="bg-white px-8 py-8 text-center">
      <h3 className="text-3xl font-bold mb-24 text-[#F2444A]">Para onde você precisa ir?</h3>
      <div className="max-w-[1080px] md:m-auto">
        {dataDestinos.map((destino) => (
          <div className="mb-16 md:flex md:gap-32" key={destino.title}>
            <div>
              <img src={destino.image} alt={destino.title} className="mb-10 drop-shadow-2xl md:max-w-[400px]" />
            </div>
            <div className="md:text-start md:justify-center md:items-start md:flex md:flex-col">
              <h4 className="text-2xl font-bold mb-4 text-black md:text-3xl">{destino.title}</h4>
              <p className="text-[#5B5956] text-lg mb-12"> {destino.description}</p>
              <ButtonWhatsApp />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
