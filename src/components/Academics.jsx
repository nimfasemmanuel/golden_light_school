import React from "react";
import book from "../assets/book.svg";
import cup from "../assets/cup.svg";
import clean from "../assets/cleaner.svg";
import music from "../assets/music.svg";

const Academics= () => {
  const courses = [
    "AP Biology",
    "AP Chemistry",
    "AP History",
    "AP Physics",
    "AP Calculus",
    "AP Literature",
    "AP Computer Science",
    "AP Art",
  ];

  return (
    <section
      id="academics"
      className="w-full flex flex-col items-center justify-center px-[100px] py-[80px] gap-[10px] bg-[#F8F9FA] overflow-hidden"
    >
      {/* --- Section Header --- */}
      <div className="flex flex-col items-center text-center gap-[10px]">
        <h1 className="text-[32px] leading-[40px] font-poppins font-semibold text-[#003366] text-center max-w-[733px] ">
          Our Academic Programs
        </h1>
        <p className="text-[18px] leading-[26px] font-poppins font-normal text-center max-w-[733px] text-[#003366] ">
          Discover our comprehensive educational offerings designed to develop
          well-rounded students prepared for future success.
        </p>
        <hr className="border-2 border-blue-400 w-[90px]" />
      </div>

      {/* --- Academic Programs Cards --- */}
      <div className="w-full max-w-[1440px] flex flex-wrap justify-between gap-[20px] pt-[50px]">
        {[
          {
            icon: book,
            title: "College Preparatory",
            desc: "Rigorous academic curriculum designed to prepare students for success in college and beyond.",
          },
          {
            icon: clean,
            title: "STEM Excellence",
            desc: "Advanced courses in science, technology, engineering, and mathematics with hands-on learning.",
          },
          {
            icon: cup,
            title: "Athletics",
            desc: "Championship-winning sports teams that develop teamwork, discipline, and leadership skills.",
          },
          {
            icon: music,
            title: "Arts & Humanities",
            desc: "Comprehensive programs in visual arts, music, theater, literature, and social studies.",
          },
        ].map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-[10px] bg-[#E6F7FB] shadow-sm rounded-xl p-6 w-[280px] sm:w-[90%] md:w-[45%] lg:w-[280px] cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            <img
              src={card.icon}
              alt={card.title}
              className="w-10 h-10 object-contain"
            />
            <p className="font-poppins font-bold text-[18px] leading-[26px] text-[#003366]">
              {card.title}
            </p>
            <p className="font-poppins font-normal text-[14px] leading-[20px] text-[#003366]">
              {card.desc}
            </p>
          </div>
        ))}
      </div>

      {/* --- Advanced Placement Courses Section --- */}
      <div className="flex flex-col items-center justify-center gap-[20px] pt-[80px] w-full">
        <h3 className="font-poppins font-semibold text-[24px] leading-[32px] text-center text-[#003366]">
          Advanced Placement Courses
        </h3>

        {/* ✅ Smooth marquee animation */}
        <div className="relative w-full max-w-[1128px] ">
          <div className="flex gap-[16px] animate-marquee whitespace-nowrap">
            {courses.concat(courses).map((course, index) => (
              <button
                key={index}
                className="px-[24px] py-[10px] rounded-full border border-[#00AEEF] font-poppins text-[14px] font-medium text-[#003366] bg-white hover:bg-[#003366] hover:text-white transition-all duration-300 flex-shrink-0 cursor-pointer active:opacity-70"
              >
                {course}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Academics; 