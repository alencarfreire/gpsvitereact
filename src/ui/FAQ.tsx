export default function FAQ() {
  interface dataFAQ {
    question: string;
    answer: string;
  }
  const dataFAQ: dataFAQ[] = [
    {
      question: "Por que contratar um Transfer de forma atencipada?",
      answer:
        "Garantia de que você será atendido com horário agendado, tranquilidade, atendimento exclusivo e um melhor valor.",
    },
    {
      question: "Em Porto Seguro não tem Uber, 99 ou outro aplicativo de transporte?",
      answer:
        "Tem sim, porém com cobertura limitada e vários cancelamentos até conseguir uma corrida. Os aplicativos de corrida funcionam somente no Centro e Orla norte de Porto Seguro, para outros destinos como Arraial d'Ajuda, Club Med, Trancoso e Caraíva, o ideal é contratar um Transfer.",
    },
    {
      question: "Vocês buscam no Hotel ou no Aeroporto pela madrugada?",
      answer:
        "Com certeza. O Transfer é a mesma coisa que uma corrida agendada, o diferencial da GPS Transfer é que cumprimos o horário e os valores já combinados, sem pegadinha no momento do Transfer.",
    },
    {
      question: "Como faço para contratar o Transfer?",
      answer:
        "Entre em contato através do nosso WhatsApp: (73) 99834-4769, informe a data, horário e quantidade de pessoas, local de embarque e destino, em seguida enviaremos uma cotação.",
    },
  ];
  return (
    <section className="bg-white flex flex-col items-center pt-10 pb-16">
      <div className="text-center p-4 mb-8">
        <span className="text-[#54595f] font-bold text-lg">Está com dúvidas?</span>
        <h3 className="text-3xl font-bold mt-2">Perguntas Frequentes</h3>
      </div>
      <div className="max-w-lg mx-auto">
        {dataFAQ.map((faq) => (
          <details className=" transition duration-200 open:ease-in-out">
            <summary className="border text-lg py-3 px-4 text-[#54595f] font-semibold hover:text-[#f41922] transition delay-75 cursor-pointer">
              {faq.question}
            </summary>
            <div className="border">
              <p className=" text-[#7a7a7a] p-4 ">{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
