import React from "react";
import chairman from "../assets/chairman.jpg";
import director from "../assets/director.jpg";
import principal from "../assets/principal.jpg";
import hscience from "../assets/hscience.jpg";
import hteacher from "../assets/hteacher.jpg";
import english from "../assets/english.jpg"


const OurTeam = () => {
  const members = [
    {
      img: chairman,
      name: "Mr E.B Chira",
      role: "Chairman",
      desc: "A distinguished educational leader committed to advancing academic excellence, professional standards, and sustainable institutional growth..",
    },
    {
      img: director,
      name: "Mrs. Justina Ekene Chira",
      role: "Director",
      desc: "A visionary leader committed to advancing academic excellence and organizational growth.",
    },
    {
      img: principal,
      name: "Mr Godswill Uche Chira",
      role: "Principal",
      desc: "A transformational principal focused on raising standards and inspiring student success.",
    },
    {
      img: hteacher,
      name: "Mrs. Jennifer Philiyan Bariya",
      role: "Head Teacher",
      desc: "A seasoned educator focused on strengthening teaching quality and student development.",
    },
    {
      img: hscience,
      name: "Mrs. Juliana Yusuf",
      role: "Arts Director",
      desc: "Drives creativity and cultural appreciation across the arts programs.",
    },
    {
      img:english,
      name: "Mrs. Peace Maina",
      role: "HOD English & Languages",
      desc: "A passionate English specialist committed to raising linguistic standards and inspiring confident learners.",
    },
  ];

  return (
    <section
      id="our-team"
      className="w-full flex flex-col items-center justify-center px-[100px] py-[100px] gap-[10px] bg-white"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-[10px]">
        <h1 className="text-[32px] leading-[40px] font-poppins font-semibold text-[#003366] text-center max-w-[733px]">
          Meet Our Dedicated Team
        </h1>
        <p className="text-[18px] mb-[20px] leading-[26px] font-poppins font-normal text-center max-w-[733px] text-[#003366]">
          Our passionate educators and staff work together to provide a nurturing,
          inclusive, and dynamic learning environment for every student.
        </p>
        <hr className="border-2 border-blue-400 w-[90px]" />
      </div>

      {/* Team Cards */}
      <div className="w-full max-w-[1240px] flex flex-wrap justify-center gap-[20px] pt-[50px]">
        {members.map((member, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center gap-[0px] rounded-[8px] w-full sm:w-[45%] md:w-[45%] lg:w-[400px] cursor-pointer transform transition-all duration-300 hover:scale-105 shadow-lg bg-white"
          >
            <img
              src={member.img}
              alt={member.name}
              className="w-full h-[256px] object-cover rounded-t-[8px]"
            />
            <div className="flex flex-col items-center text-center gap-[8px] bg-white rounded-b-[8px] p-6 w-full">
              <p className="font-poppins font-bold text-[18px] leading-[26px] text-[#003366]">
                {member.name}
              </p>
              <p className="font-poppins font-semibold text-[14px] leading-[20px] text-[#00AEEF]">
                {member.role}
              </p>
              <p className="font-poppins font-normal text-[14px] leading-[20px] text-[#003366]">
                {member.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
