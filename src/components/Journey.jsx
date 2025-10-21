import React from "react";
import backgroundImage from "../assets/backgroundImage.jpg";

const Journey = () => {
  return (
    <section
      className="relative w-full h-[422px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 51, 102, 0.8), rgba(0, 174, 239, 0.6)), url(${backgroundImage})`,
      }}
    >
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
        {/* Header */}
        <h2 className="font-poppins font-semibold text-white text-[28px] md:text-[36px] leading-[44px] mb-4">
          Begin Your Journey at Golden Light School
        </h2>

        {/* Paragraph */}
        <p className="font-poppins font-normal text-white text-[18px] leading-[24px] max-w-[700px] mb-8">
          Applications for the upcoming academic year are now open. Join our
          community of scholars, athletes, and leaders.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* Apply Now */}
          <button className="bg-[#00AEEF] active:opacity-70  text-white font-poppins font-medium text-[16px] leading-[24px] px-6 py-3 rounded-[8px] hover:opacity-90 transition-opacity duration-300 cursor-pointer">
            Apply Now
          </button>

          {/* Schedule a Visit */}
          <button className="border-2 active:opacity-80 border-white text-white font-poppins font-medium text-[16px] leading-[24px] px-6 py-3 rounded-[8px] hover:bg-[#00AEEF] hover:text-white transition-colors duration-300 cursor-pointer">
            Schedule a Visit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Journey;
