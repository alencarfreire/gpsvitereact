import ButtonWhatsApp from "./components/ButtonWhatsApp";

export default function Hero() {
  return (
    <>
      <section>
        <div className="bg-[url('/src/assets/capagpstransfer.webp')] bg-fill bg-no-repeat h-[430px] relative bg-cover bg-center"></div>
        <div className="flex flex-col items-center text-center bg-white p-12">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
            <path d="M17.75 7c.138 0 .25.112.25.25v.255c0 .397-.463.495-.808.495l-.543-1h1.101zm-.721 1.753c.32.593.473 1.126.473 1.833 0 .685-.198 1.267-.503 1.991v.923c0 .276-.224.5-.5.5h-.75c-.276 0-.5-.224-.5-.5v-.5h-6.5v.5c0 .276-.224.5-.5.5h-.749c-.276 0-.5-.224-.5-.5v-.924c-.304-.724-.503-1.306-.503-1.991 0-.707.154-1.24.473-1.833.414-.768.926-1.726 1.465-2.626.415-.69.631-.853 1.139-.944.767-.137 1.459-.182 2.426-.182s1.659.045 2.426.182c.508.091.725.253 1.139.945.539.9 1.05 1.857 1.464 2.626zm-8.029 1.497c0-.414-.336-.75-.75-.75s-.75.336-.75.75.336.75.75.75.75-.336.75-.75zm5 .5c0-.138-.112-.25-.25-.25h-3.5c-.138 0-.25.112-.25.25s.112.25.25.25h3.5c.138 0 .25-.112.25-.25zm1.471-2.764s-.37-.913-.815-1.571c-.101-.149-.258-.251-.435-.283-.756-.136-1.418-.179-2.221-.179s-1.465.043-2.22.179c-.177.032-.334.134-.435.283-.445.658-.816 1.571-.816 1.571.821.157 2.155.249 3.471.249s2.65-.092 3.471-.249zm1.029 2.264c0-.414-.336-.75-.75-.75s-.75.336-.75.75.336.75.75.75.75-.336.75-.75zm-9.149-3.25h-1.101c-.138 0-.25.112-.25.25v.255c0 .397.463.495.808.495l.543-1zm4.649-7c-5.523 0-10 4.394-10 9.815 0 5.505 4.375 9.268 10 14.185 5.625-4.917 10-8.68 10-14.185 0-5.421-4.478-9.815-10-9.815zm0 18c-4.419 0-8-3.582-8-8s3.581-8 8-8c4.419 0 8 3.582 8 8s-3.581 8-8 8z" />
          </svg>
          <h1 className="text-[#0A0500] text-4xl font-bold my-6">
            Tenha um veículo exclusivo a sua espera no Aeroporto de Porto Seguro
          </h1>
          <p className="text-[#504E4A] text-lg font-medium mb-4">
            Transfer privativo para os principais destinos de Porto Seguro: Trancoso, Arraial d’Ajuda, Club Med
            Trancoso, Caraíva, entre outros destinos.
          </p>
          <span className="text-[#504E4A] text-lg font-bold mb-6 ">Trabalhamos com os melhores preços.</span>
          <ButtonWhatsApp />
        </div>
      </section>
      <div className="mt-24 mb-48">
        <div className="flex flex-col items-center justify-center text-center px-8 m-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            className="fill-white mb-1"
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 14h-7v-8h2v6h5v2z" />
          </svg>
          <h1 className="text-white text-3xl font-bold mb-4">Pontualidade e Excelência</h1>
          <p className="text-white text-lg font-semibold">
            Oferecemos um serviço com excelência, para que você tenha tranquilidade e curta ao máximo os seus dias em
            Porto Seguro e Região.
          </p>
        </div>
      </div>
    </>
  );
}
