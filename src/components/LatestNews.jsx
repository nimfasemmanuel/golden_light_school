import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import apple from "../assets/apple.svg";
import robot from "../assets/robot.svg";
import cartoon from "../assets/cartoon.svg";

const LatestNews = () => {
  const newsData = [
    {
      id: 1,
      img: robot,
      date: "May 15, 2023",
      title: "Golden Light Robotics Team Wins State Championship",
      desc: "Our robotics team beat 45 other schools to claim the state title and will advance to the national competition.",
    },
    {
      id: 2,
      img: apple,
      date: "June 2, 2023",
      title: "New Science Wing Opening This Fall",
      desc: "The $2.5 million renovation includes state-of-the-art labs and advanced research equipment. lorem ipsum dolor.",
    },
    {
      id: 3,
      img: cartoon,
      date: "July 20, 2023",
      title: "Students Recognized for Community Service",
      desc: "Twenty-five Golden Light students were honored for completing over 1,000 hours of community service, which has been impactful to the community.",
    },
  ];

  const [expanded, setExpanded] = useState(null);

  return (
    <section
      id="latest-news"
      className="w-full max-w-[1440px] flex flex-col items-center justify-center px-[20px] sm:px-[50px] md:px-[80px] lg:px-[100px] py-[60px] sm:py-[80px] lg:py-[100px] bg-white mx-auto"
    >
      {/* Heading */}
      <h2 className="text-[24px] sm:text-[28px] md:text-[32px] leading-[34px] sm:leading-[40px] font-poppins font-semibold text-[#003366] text-center">
        Latest News
      </h2>

      {/* Paragraph */}
      <p className="text-[15px] sm:text-[16px] md:text-[18px] mb-[20px] leading-[24px] sm:leading-[26px] font-poppins font-normal text-[#003366] text-center max-w-[800px]">
        Stay updated with the latest happenings, achievements, and events at
        Golden Light School.
      </p>

      <hr className="border-2 border-blue-400 w-[70px] sm:w-[90px]" />

      {/* ✅ Responsive Grid Layout */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] sm:gap-[30px] mt-[50px]">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="w-full rounded-[8px] bg-[#F8F9FA] shadow-md overflow-hidden flex flex-col transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Image */}
            <img
              src={news.img}
              alt={news.title}
              className="w-full h-[180px] sm:h-[200px] object-cover"
            />

            {/* Content */}
            <div className="flex flex-col p-[15px] sm:p-[20px] gap-[10px] text-[#003366] flex-grow">
              <p className="text-[11px] sm:text-[12px] font-poppins font-normal">
                {news.date}
              </p>
              <h3 className="text-[16px] sm:text-[18px] font-poppins font-bold">
                {news.title}
              </h3>
              <p className="text-[13px] sm:text-[14px] leading-[22px] font-poppins font-normal">
                {expanded === news.id
                  ? news.desc
                  : news.desc.length > 100
                  ? `${news.desc.substring(0, 100)}...`
                  : news.desc}
              </p>

              {/* Read More */}
              <button
                className="flex items-center gap-2 text-[13px] sm:text-[14px] font-poppins font-medium text-[#003366] cursor-pointer mt-auto hover:underline"
                onClick={() =>
                  setExpanded(expanded === news.id ? null : news.id)
                }
              >
                {expanded === news.id ? "Show less" : "Read more"}
                <FaArrowRight className="text-[10px] sm:text-[12px]" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <button className="mt-[40px] sm:mt-[50px] cursor-pointer px-[18px] sm:px-[20px] py-[10px] sm:py-[12px] border border-[#003366] rounded-[8px] text-[#003366] text-[14px] sm:text-[16px] font-poppins font-medium hover:bg-[#003366] hover:text-white transition-all duration-300">
        View All News
      </button>
    </section>
  );
};

export default LatestNews;
