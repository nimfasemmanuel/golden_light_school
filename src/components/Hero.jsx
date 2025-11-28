import React, { useState, useEffect } from "react";
// import creche1 from "../assets/creche1.jpg";
// import creche2 from "../assets/creche2.jpg";
// import img17 from "../assets/img17.jpg";
// import sec21 from "../assets/sec21.jpg";
// import nursery1 from "../assets/nursery1.jpg";
// import nursery2 from "../assets/nursery2.jpg";

const Hero = () => {
   const images = [/*img17, sec21, creche1, creche2, nursery1 ,nursery2,*/];
  const [current, setCurrent] = useState(0);

  const subText = "Shaping Bright Minds for a Greater Future";
  const paraText =
    "We nurture students with knowledge, discipline, and character.";

  const [subIndex, setSubIndex] = useState(0);
  const [paraIndex, setParaIndex] = useState(0);
  const [subDeleting, setSubDeleting] = useState(false);
  const [paraDeleting, setParaDeleting] = useState(false);
  const [cycleCount, setCycleCount] = useState(0);

  const [subDisplay, setSubDisplay] = useState("");
  const [paraDisplay, setParaDisplay] = useState("");

  // Typing and deleting effect
  useEffect(() => {
    if (cycleCount >= 4) return; // Stop after 4 cycles

    const timer = setTimeout(() => {
      // Typing phase
      if (!subDeleting && subIndex < subText.length) {
        setSubIndex(subIndex + 1);
      } else if (
        !paraDeleting &&
        subIndex === subText.length &&
        paraIndex < paraText.length
      ) {
        setParaIndex(paraIndex + 1);
      }
      // Deleting phase
      else if (
        !paraDeleting &&
        subIndex === subText.length &&
        paraIndex === paraText.length
      ) {
        setSubDeleting(true);
      } else if (subDeleting && subIndex > 0) {
        setSubIndex(subIndex - 1);
      } else if (subDeleting && subIndex === 0 && paraIndex > 0) {
        setParaDeleting(true);
        setSubDeleting(false);
      } else if (paraDeleting && paraIndex > 0) {
        setParaIndex(paraIndex - 1);
      } else if (paraDeleting && paraIndex === 0) {
        setParaDeleting(false);
        setCycleCount(cycleCount + 1);
      }
    }, 60);

    return () => clearTimeout(timer);
  }, [
    subIndex,
    paraIndex,
    subDeleting,
    paraDeleting,
    cycleCount,
    subText.length,
    paraText.length,
  ]);

  useEffect(() => {
    setSubDisplay(subText.slice(0, subIndex));
  }, [subIndex]);

  useEffect(() => {
    setParaDisplay(paraText.slice(0, paraIndex));
  }, [paraIndex]);

  // Slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="w-full min-h-[727px] bg-gradient-to-r from-[#003366] to-[#000000] flex justify-center text-white">
      <div className="w-full max-w-[1440px] flex flex-col md:flex-row justify-between items-center px-[20px] sm:px-[50px] md:px-[100px] py-[60px] md:py-[100px] gap-[30px]">
        {/* Left Content - 70% width */}
        <div className="w-full md:w-[59%] text-center md:text-left">
          {/* Static Header */}
          <h1 className="font-poppins font-bold text-[36px]  sm:text-[48px] md:text-[62px] leading-[140%] mb-4">
            GOLDEN LIGHT SCHOOL
          </h1>

          {/* Animated Subheading */}
          <h2 className="font-poppins font-semibold text-[20px] sm:text-[24px] md:text-[28px] leading-[150%] mb-6 text-[#00AEEF] min-h-[1.5em]">
            {subDisplay}
          </h2>

          {/* Animated Paragraph */}
          <p className="font-poppins font-normal text-[16px] sm:text-[18px] leading-[150%] text-[#FFFFFFCC] mb-10 min-h-[1.5em]">
            {paraDisplay}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <a href="/admission">
               <button className="px-[20px] h-[48px] bg-[#00AEEF] text-white text-[16px] font-medium rounded-[8px] transition-all duration-300 hover:bg-[#0095cc] active:opacity-70 cursor-pointer">
              Enroll Now
            </button>
            </a>
            <a href="./about">
              <button className="px-[20px] h-[48px] bg-transparent border border-[#00AEEF] text-[#00AEEF] text-[16px] font-medium rounded-[8px] transition-all duration-300 hover:bg-[#00AEEF] hover:text-white active:opacity-70 cursor-pointer">
              Learn Now
            </button>
            </a>
          </div>
        </div>

        {/* Right Content - 40% width */}
        <div className="w-full md:w-[60%] relative flex justify-center items-center">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Hero Slide ${index + 1}`}
              className={`absolute w-full object-cover transition-opacity duration-1000 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
