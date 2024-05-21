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
      image: "https://i.imgur.com/uP1zl6V.png",
    },
    {
      title: "Club Med Trancoso",
      description:
        "O Club Med Trancoso fica cerca de 30km do Aeroporto e 25km do Centro de Porto Seguro, mais o trajeto de balsa que é cerca de 15 minutos. Local de hospegadem de alto padrão, All Inclusive.",
      image: "https://i.imgur.com/qrYDY3i.png",
    },
    {
      title: "Trancoso",
      description:
        "Trancoso fica cerca de 35km do Aeroporto e 30km do Centro de Porto Seguro, mais o trajeto de balsa que é cerca de 15 minutos, em um dos seu trajetos mais curtos, porém também possui o trajeto sem balsa, que é cerca de 78km do Aeroporto e 80km do Centro de Porto Seguro, esse trajeto de maior quilometragem geralmente é o mais indicado em época de alta temporada, devida ao tempo perdido na fila da balsa, podendo chegar entre 2 horas e 4 horas de fila.",
      image: "https://i.imgur.com/UZkvt9m.png",
    },
    {
      title: "Caraíva",
      description:
        "Caraíva fica cerca de 75km do Aeroporto e 80km do Centro de Porto Seguro, mais o trajeto de balsa que é cerca de 15 minutos, em um dos trajetos mais longos, porém também possui o trajeto sem balsa, que é cerca de 130km do Aeroporto e 135km do Centro de Porto Seguro, esse trajeto de maior quilometragem geralmente é o mais indicado em época de alta temporada, devida ao tempo perdido na fila da balsa, podendo chegar entre 2 horas e 4 horas de fila.",
      image: "https://i.imgur.com/l91HzQy.png",
    },
    {
      title: "Aeroporto",
      description:
        "O Aeroporto de Porto Seguro fica localizado a 5 minutos do centro da cidade. É um aeroporto pequeno, mas existem meses que recebe mais de mil voos. Agende o seu Transfer e não corra o risco de perder o seu voo por conta de atrasos.",
      image: "https://i.imgur.com/DRCNr9E.png",
    },
    {
      title: "Outro Local de Porto Seguro?",
      description:
        "Levamos você para qualquer local de Porto Seguro e região. É só entrar em contato, nos falar para onde quer ir e passamos o orçamento.",
      image: "https://i.imgur.com/Bmcu7CU.png",
    },
  ];

  return (
    <section className="bg-white px-8 py-8 text-center">
      <h3 className="text-3xl font-bold mb-24 text-[#F2444A]" id="destinos">
        Para onde você precisa ir?
      </h3>
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
