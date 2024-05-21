"use client";

export default function Reviews() {
  return (
    <div className="py-8 bg-white flex flex-col justify-center items-center">
      <h3 className="text-[#F2444A] text-3xl font-bold px-6 mb-10 text-center" id="review">Nossos clientes...</h3>

      <div className="h-96 carousel carousel-vertical rounded-box">
        <div className="carousel-item h-full">
          <img src="https://i.imgur.com/iFVpDCQ.png" alt="clientes" width={300} height={400} />
        </div>
        <div className="carousel-item h-full">
          <img src="https://i.imgur.com/CfypmSW.png" alt="clientes" width={300} height={400} />
        </div>
        <div className="carousel-item h-full">
          <img src="https://i.imgur.com/eIDJH8Y.png" alt="clientes" width={300} height={400} />
        </div>
        <div className="carousel-item h-full">
          <img src="https://i.imgur.com/ye4SjaA.png" alt="clientes" width={300} height={400} />
        </div>
        <div className="carousel-item h-full">
          <img src="https://i.imgur.com/VUIAguc.png" alt="clientes" width={300} height={400} />
        </div>
      </div>

      <div className="mt-10 flex flex-col justify-center items-center">
        <a
          href="https://www.tripadvisor.com.br/Attraction_Review-g303270-d25427668-Reviews-GPS_Transfer-Porto_Seguro_State_of_Bahia.html"
          target="_blank"
        >
          <img
            src="https://static.tacdn.com/img2/brand_refresh/Tripadvisor_lockup_horizontal_secondary_registered.svg"
            alt="Tripadivisor"
            className="w-[200px] mb-2"
            width={200}
            height={300}
          />
        </a>
        <span className="text-[#1F1818] opacity-70">Nota: 5.0</span>
        <div className="flex">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-green">
            <path
              fill="#00b090"
              d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-green">
            <path
              fill="#00b090"
              d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-green">
            <path
              fill="#00b090"
              d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-green">
            <path
              fill="#00b090"
              d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
            ></path>
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="text-green">
            <path
              fill="#00b090"
              d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
