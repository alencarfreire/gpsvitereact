import Logo from "../assets/GPS-Transfer-1.svg";

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7]">
      <div className="flex flex-wrap justify-between p-16 max-w-[920px] md:m-auto">
        <div className="flex flex-col gap-2 mb-6">
          <img src={Logo} alt="Logo GPS Transfer" className="w-[250px]" />
          <p className="w-[250px]">Transfer com excelência em Porto Seguro, Arraial d'Ajuda, Trancoso, Caraíva e região.</p>
          <p>Contato: <a href="https://api.whatsapp.com/send?phone=5573998344769&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20transfer..." className="text-[#F41922]">73 99834-4769</a> </p>
        </div>
        <div>
          <h3 className="text-black font-semibold mb-2">Links</h3>
          <ul className="flex flex-col gap-1">
            <li>
              <a href="#" className="hover:text-[#F41922] transition-colors delay-75">Diferenciais</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F41922] transition-colors delay-75">Destinos</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F41922] transition-colors delay-75">Clientes</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F41922] transition-colors delay-75">FAQ</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-black font-bold mb-2">Redes Sociais</h3>
          <ul className="flex flex-col gap-1">
            <li>
              <a href="#" className="hover:text-[#F41922] transition-colors delay-75">Facebook</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F41922] transition-colors delay-75">Instagram</a>
            </li>
            <li>
              <a href="#" className="hover:text-[#F41922] transition-colors delay-75">Tripadvisor</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
