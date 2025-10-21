import React from "react";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import icon5 from "../assets/icon5.svg";
import icon6 from "../assets/icon6.svg";

const WhyChoose = () => {
  const features = [
    {
      img: icon1,
      title: "Academic Excellence",
      desc: "Consistently ranked among the top 5% of schools nationwide with exceptional academic outcomes.",
    },
    {
      img: icon2,
      title: "Dedicated Staff",
      desc: "Our teachers are passionate, qualified, and committed to nurturing every student’s potential.",
    },
    {
      img: icon3,
      title: "Holistic Learning",
      desc: "We combine academics, sports, arts, and leadership training for all-round development.",
    },
    {
      img: icon4,
      title: "Safe Environment",
      desc: "We provide a secure and welcoming atmosphere where students can thrive confidently.",
    },
    {
      img: icon5,
      title: "Modern Facilities",
      desc: "Equipped with cutting-edge technology and resources for hands-on learning experiences.",
    },
    {
      img: icon6,
      title: "Parental Engagement",
      desc: "Strong collaboration with parents ensures every child receives the best support possible.",
    },
  ];

  const stats = [
    { value: "95%", label: "College Acceptance" },
    { value: "90%", label: "AP Pass Rate" },
    { value: "25+", label: "Sports Teams" },
    { value: "40+", label: "Student Clubs" },
  ];

  return (
    <section
      id="why-choose"
      // 🟩 Removed: max-w-[1440px], px-[100px], py-[100px], mx-auto
      // 🟩 Added: px-4 sm:px-8 py-[100px] to keep it responsive but full width
      className="w-full flex flex-col items-center justify-center bg-[#003366] text-white py-[100px] px-4 sm:px-8 gap-[10px]"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-[10px]">
        <h2 className="text-[32px] leading-[40px] font-poppins font-semibold text-white text-center max-w-[733px]">
          Why Choose Golden Light School
        </h2>
        <p className="text-[18px] mb-[20px] leading-[26px] font-poppins font-normal text-white text-center max-w-[733px]">
          Discover what sets us apart and why our school is the right choice for
          your child's future.
        </p>
        <hr className="border-2 border-red-400 w-[90px] " />
      </div>

      {/* Features Cards */}
      <div className="w-full  max-w-[1240px] flex flex-wrap justify-center gap-[24px] pt-[50px]">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex p-10 flex-col items-start gap-[10px] bg-[#00AEEF] rounded-[8px] p-6 w-full sm:w-[45%] md:w-[30%] text-white shadow-sm transform transition-all duration-300 hover:scale-105 cursor-pointer"
          >
            {/* 🟩 Made the icon white */}
            <img
              src={feature.img}
              alt={feature.title}
              className="w-[40px] h-[40px] object-contain invert brightness-0"
            />
            <p className="font-poppins font-bold text-[18px] leading-[26px] text-white">
              {feature.title}
            </p>
            <p className="font-poppins font-normal text-[14px] leading-[20px] text-white">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Results Section */}
      <div className="flex flex-col items-center justify-center text-center bg-[#00AEEF] rounded-[8px] p-[32px] gap-[32px] mt-[64px] w-full max-w-[896px]">
        <h3 className="font-poppins font-bold text-[20.4px] leading-[32px] text-center text-white">
          Our Results Speak for Themselves
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-[32px]">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center ">
              <p className="font-poppins font-bold text-[30.6px] leading-[40px] text-white">
                {stat.value}
              </p>
              <p className="font-poppins font-normal text-[13.6px] leading-[24px] text-white">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
