import React from "react";
import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import image4 from "../assets/image4.svg";
import image5 from "../assets/image5.svg";
import image6 from "../assets/image6.svg";

const Admission = () => {
  const facilities = [
    {
      img: image1,
      title: "Modern Library",
      desc: "Our state-of-the-art library houses over 20,000 books and digital resources.",
    },
    {
      img: image2,
      title: "Science Labs",
      desc: "Fully equipped laboratories for biology, chemistry, and physics experiments.",
    },
    {
      img: image3,
      title: "Athletic Complex",
      desc: "Indoor and outdoor facilities including a gymnasium, pool, and sports fields.",
    },
    {
      img: image4,
      title: "Performing Arts Center",
      desc: "A 500-seat theater for drama productions, concerts, and school events.",
    },
    {
      img: image5,
      title: "Computer Labs",
      desc: "Multiple computer labs with the latest technology and software.",
    },
    {
      img: image6,
      title: "Student Center",
      desc: "A vibrant space for student activities, clubs, and collaborative learning.",
    },
  ];

  return (
    <section
      id="facilities"
      className="w-full flex flex-col items-center justify-center px-[100px] py-[100px] gap-[10px] bg-white"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-[10px]">
        <h1 className="text-[32px] leading-[40px] font-poppins font-semibold text-[#003366] text-center max-w-[733px]">
          Our Facilities
        </h1>
        <p className="text-[18px] mb-[20px] leading-[26px] font-poppins font-normal text-center max-w-[733px] text-[#003366]">
          Explore the modern facilities designed to create a supportive and
          engaging environment for students.
        </p>
        <hr className="border-2 border-blue-400 w-[90px]" />
      </div>

      {/* Facilities Cards */}
      <div className="w-full max-w-[1240px] flex flex-wrap justify-center gap-[20px] pt-[50px]">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="flex flex-col  items-center text-center gap-[0px] rounded-[8px] w-[400px] sm:w-[45%] md:w-[45%] lg:w-[400px] cursor-pointer transform transition-all duration-300 hover:scale-105 shadow-lg"
          >
            <img
              src={facility.img}
              alt={facility.title}
              className="w-full h-[256px] object-cover rounded-t-[8px]"
            />
            <div className="flex flex-col items-center text-center gap-[10px] bg-white rounded-b-[8px] p-6 w-full">
              <p className="font-poppins font-bold text-[18px] leading-[26px] text-[#003366]">
                {facility.title}
              </p>
              <p className="font-poppins font-normal text-[14px] leading-[20px] text-[#003366]">
                {facility.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Admission;
