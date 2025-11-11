import React, { useState, useEffect } from "react";
import heroright from "../assets/heroright.svg"; // Using the same image repeatedly

const Hero = () => {
  // Slider images — same image used multiple times
  const images = [heroright, heroright, heroright];
  const [current, setCurrent] = useState(0);

  // Automatic slider every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="
        w-full
        min-h-[727px]
        bg-gradient-to-r from-[#003366] to-[#000000]
        flex justify-center
        text-white
      
      "
    >
      <div
        className="
          w-full max-w-[1440px]
          flex flex-col md:flex-row justify-between items-center
          px-[20px] sm:px-[50px] md:px-[100px] py-[60px] md:py-[100px] gap-[30px]
        "
      >
        {/* Left Content */}
        <div className="max-w-[656px] text-center md:text-left">
          
          <h1
            className="
              font-poppins font-bold text-[36px] sm:text-[48px] md:text-[64px]
              leading-[140%] mb-6
            ">Shaping Bright <span className="text-[#00AEEF]">Minds</span> for a{" "}<span className="text-[#00AEEF]">Brighter</span> Future</h1>
          <p
            className="
              font-poppins font-normal text-[16px] sm:text-[18px] leading-[150%]
              text-[#FFFFFFCC] mb-10
            "
          >
            We nurture students with knowledge, discipline, and character.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button
              className="
                px-[20px] h-[48px]
                bg-[#00AEEF]
                text-white text-[16px] font-medium
                rounded-[8px]
                transition-all duration-300
                hover:bg-[#0095cc]
                active:opacity-70
                cursor-pointer
              "
            >
              Enroll Now
            </button>

            <button
              className="
                px-[20px] h-[48px]
                bg-transparent
                border border-[#00AEEF]
                text-[#00AEEF] text-[16px] font-medium
                rounded-[8px]
                transition-all duration-300
                hover:bg-[#00AEEF] hover:text-white
                active:opacity-70
                cursor-pointer
              "
            >
              Learn Now
            </button>
          </div>
        </div>

        {/* Right Image Slider */}
        <div className="relative w-full max-w-[600px] flex justify-center items-center">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Hero Slide ${index + 1}`}
              className={`
                absolute w-full object-contain transition-opacity duration-1000
                ${index === current ? "opacity-100" : "opacity-0"}
              `}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
