import Logo from "../assets/GPS-Transfer-1.svg";
export default function Header() {
  return (
    <header className="bg-white">
      <div className="bg-[#F41922] p-1 text-center">
        <span className="text-white">Atendimento 24h</span>
      </div>
      <div className="grid grid-cols-3 place-items-center gap-4 py-6">
        <a href="/">
          <img src={Logo} alt="Logo GPS Transfer" className="w-[250px] ml-4" />
        </a>
        <nav>
          <ul className="md:flex hidden gap-5 text-[#5B5956]">
            <li>
              <a href="#destinos" className="hover:text-[#F41922] transition delay-75">
                Destinos
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-[#F41922] transition delay-75">
                Dúvidas
              </a>
            </li>
            <li>
              <a href="#review" className="hover:text-[#F41922] transition delay-75">
                Avaliações
              </a>
            </li>
          </ul>
        </nav>
        <div className="lg:flex gap-6 text-[#5B5956] hidden">
          <a
            href="https://api.whatsapp.com/send?phone=5573998344769&text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20gostaria%20de%20saber%20mais%20sobre%20o%20transfer..."
            className="flex gap-1 fill-[#5B5956] hover:fill-[#F41922] hover:text-[#F41922] transition delay-75"
            target="_blank"
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
              <path d="M25,2C12.318,2,2,12.318,2,25c0,3.96,1.023,7.854,2.963,11.29L2.037,46.73c-0.096,0.343-0.003,0.711,0.245,0.966 C2.473,47.893,2.733,48,3,48c0.08,0,0.161-0.01,0.24-0.029l10.896-2.699C17.463,47.058,21.21,48,25,48c12.682,0,23-10.318,23-23 S37.682,2,25,2z M36.57,33.116c-0.492,1.362-2.852,2.605-3.986,2.772c-1.018,0.149-2.306,0.213-3.72-0.231 c-0.857-0.27-1.957-0.628-3.366-1.229c-5.923-2.526-9.791-8.415-10.087-8.804C15.116,25.235,13,22.463,13,19.594 s1.525-4.28,2.067-4.864c0.542-0.584,1.181-0.73,1.575-0.73s0.787,0.005,1.132,0.021c0.363,0.018,0.85-0.137,1.329,1.001 c0.492,1.168,1.673,4.037,1.819,4.33c0.148,0.292,0.246,0.633,0.05,1.022c-0.196,0.389-0.294,0.632-0.59,0.973 s-0.62,0.76-0.886,1.022c-0.296,0.291-0.603,0.606-0.259,1.19c0.344,0.584,1.529,2.493,3.285,4.039 c2.255,1.986,4.158,2.602,4.748,2.894c0.59,0.292,0.935,0.243,1.279-0.146c0.344-0.39,1.476-1.703,1.869-2.286 s0.787-0.487,1.329-0.292c0.542,0.194,3.445,1.604,4.035,1.896c0.59,0.292,0.984,0.438,1.132,0.681 C37.062,30.587,37.062,31.755,36.57,33.116z"></path>
            </svg>
            WhatsApp
          </a>
          <a
            href="https://www.instagram.com/gpstransfer"
            className="flex gap-1 fill-[#5B5956] hover:fill-[#F41922] hover:text-[#F41922] transition delay-75"
            target="_blank"
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50">
              <path d="M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z"></path>
            </svg>
            Instagram
          </a>
          <a
            href="https://www.tripadvisor.com.br/Attraction_Review-g303270-d25427668-Reviews-GPS_Transfer-Porto_Seguro_State_of_Bahia.html"
            className="flex gap-1 fill-[#5B5956] hover:fill-[#F41922] hover:text-[#F41922] transition delay-75"
            target="_blank"
          >
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 50 50 ">
              <path d="M 25 11 C 19.167969 11 13.84375 12.511719 9.789063 15 L 2 15 C 2 15 3.753906 17.152344 4.578125 19.578125 C 2.96875 21.621094 2 24.195313 2 27 C 2 33.628906 7.371094 39 14 39 C 17.496094 39 20.636719 37.492188 22.828125 35.105469 L 25 38 L 27.171875 35.105469 C 29.363281 37.492188 32.503906 39 36 39 C 42.628906 39 48 33.628906 48 27 C 48 24.195313 47.03125 21.621094 45.421875 19.578125 C 46.246094 17.152344 48 15 48 15 L 40.203125 15 C 36.148438 12.511719 30.828125 11 25 11 Z M 14 18 C 18.972656 18 23 22.027344 23 27 C 23 31.972656 18.972656 36 14 36 C 9.027344 36 5 31.972656 5 27 C 5 22.027344 9.027344 18 14 18 Z M 36 18 C 40.972656 18 45 22.027344 45 27 C 45 31.972656 40.972656 36 36 36 C 31.027344 36 27 31.972656 27 27 C 27 22.027344 31.027344 18 36 18 Z M 14 21 C 10.6875 21 8 23.6875 8 27 C 8 30.3125 10.6875 33 14 33 C 17.3125 33 20 30.3125 20 27 C 20 23.6875 17.3125 21 14 21 Z M 36 21 C 32.6875 21 30 23.6875 30 27 C 30 30.3125 32.6875 33 36 33 C 39.3125 33 42 30.3125 42 27 C 42 23.6875 39.3125 21 36 21 Z M 14 23 C 16.210938 23 18 24.789063 18 27 C 18 29.210938 16.210938 31 14 31 C 11.789063 31 10 29.210938 10 27 C 10 24.789063 11.789063 23 14 23 Z M 36 23 C 38.210938 23 40 24.789063 40 27 C 40 29.210938 38.210938 31 36 31 C 33.789063 31 32 29.210938 32 27 C 32 24.789063 33.789063 23 36 23 Z M 14 25 C 12.894531 25 12 25.894531 12 27 C 12 28.105469 12.894531 29 14 29 C 15.105469 29 16 28.105469 16 27 C 16 25.894531 15.105469 25 14 25 Z M 36 25 C 34.894531 25 34 25.894531 34 27 C 34 28.105469 34.894531 29 36 29 C 37.105469 29 38 28.105469 38 27 C 38 25.894531 37.105469 25 36 25 Z"></path>
            </svg>
            TripAdvisor
          </a>
        </div>
      </div>
    </header>
  );
}
