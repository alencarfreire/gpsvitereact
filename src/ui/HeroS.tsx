import ButtonWhatsApp from "./components/ButtonWhatsApp";

export default function HeroS() {
  return (
    <>
      <section className="bg-white px-14 pb-16">
        <div className="flex gap-10 flex-wrap justify-center items-center">
          <div className="flex flex-col max-w-[360px] items-center justify-center text-center pt-20 pb-28 rounded-lg drop-shadow-2xl relative -top-24 bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
              <path d="M23.961 8.429c-.831.982-1.614 1.918-1.961 3.775v6.683l-4 2.479v-9.161c-.347-1.857-1.13-2.793-1.961-3.775-.908-1.075-2.039-2.411-2.039-4.629l.019-.345-2.019-1.456-5.545 4-6.455-4v18l6.455 4 5.545-4 5.545 4 6.455-4v-11.618l-.039.047zm-12.961 9.826l-4 2.885v-13.067l4-2.886v13.068zm9-18.255c-2.1 0-4 1.702-4 3.801 0 3.121 3.188 3.451 4 8.199.812-4.748 4-5.078 4-8.199 0-2.099-1.9-3.801-4-3.801zm0 5.5c-.828 0-1.5-.671-1.5-1.5s.672-1.5 1.5-1.5 1.5.671 1.5 1.5-.672 1.5-1.5 1.5z" />
            </svg>
            <h3 className="text-xl font-bold py-4 text-black">Cobertura Regional</h3>
            <p className="px-6">
              Cobrimos toda região de Porto Seguro, onde você precisar, vamos até você e levamos para onde precisar.
            </p>
          </div>
          <div className="flex flex-col max-w-[360px] items-center justify-center text-center pt-20 pb-28 rounded-lg drop-shadow-2xl relative -top-24 bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
              <path d="M18 1h-11.916l-6.084 7 12 15 12-14.917-6-7.083zm-3.387 8l-2.613 7.839-2.613-7.839h5.226zm-4.588-2l1.969-2.412 1.94 2.412h-3.909zm5.612-1.073l-2.354-2.927h3.33l-.976 2.927zm-7.286-.037l-.964-2.89h3.322l-2.358 2.89zm-1.738 1.11h-3.094l2.236-2.573.858 2.573zm.666 2l2.8 8.397-6.718-8.397h3.918zm9.442 0h3.975l-6.787 8.437 2.812-8.437zm.666-2l.868-2.604 2.206 2.604h-3.074z" />
            </svg>
            <h3 className="text-xl font-bold py-4 text-black">Totalmente Privativo</h3>
            <p className="px-6">
              Tenha o conforto e a privacidade de ir em um transporte unicamente contratado para você.
            </p>
          </div>
          <div className="flex flex-col max-w-[360px] items-center justify-center text-center pt-20 pb-28 rounded-lg drop-shadow-2xl relative -top-24 bg-white">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
              <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm7 14h-8v-9h2v7h6v2z" />
            </svg>
            <h3 className="text-xl font-bold py-4 text-black">Pontualidade</h3>
            <p className="px-6">
              Queremos sua tranquilidade e nós que vamos esperar você, seu tempo é sagrado e respeitamos isso.
            </p>
          </div>
        </div>
        <ButtonWhatsApp />
      </section>
    </>
  );
}
