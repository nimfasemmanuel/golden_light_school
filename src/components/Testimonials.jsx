import React, { useState } from "react";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import profilephoto  from "../assets/profile.svg"

const testimonials = [
  {
    quote:
      "Golden Light School provided my daughter with not only excellent academic preparation but also instilled confidence and leadership skills that have been invaluable in college.",
    name: "Jennifer K.",
    role: "Parent of Graduate",
    avatar: "/images/jennifer.jpg",
  },
  {
    quote:
      "The teachers are attentive and the environment is very nurturing. My son loves the clubs and after-school programs!",
    name: "Samuel A.",
    role: "Alumni Parent",
    avatar: "/images/samuel.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setIndex((i) => (i + 1) % testimonials.length);

  return (
    <section className="w-full flex flex-col items-center justify-center bg-[#E6F7FB] py-24 px-4">
      {/* Header */}
      <h2 className="font-poppins font-semibold text-[32px] leading-[40px] text-[#003366] text-center max-w-[733px]">
        What Our Community Says
      </h2>

      <p className="font-poppins text-[18px] leading-[26px] text-[#334155] text-center max-w-[850px] mt-4">
        Hear from our students, parents, and alumni about their experiences at
        Golden Light School.
      </p>

      <hr className="border-2 mt-[40px] border-blue-400 w-[90px] mt-4" />

      {/* Testimonial Slider */}
      <div className="relative w-full max-w-[850px] mt-10 overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {testimonials.map((t, i) => (
            <article
              key={i}
              className="flex-shrink-0 w-full bg-white rounded-[12px] p-8 flex flex-col gap-6 shadow-md"
            >
              {/* Quote Section */}
              <div className="flex flex-col gap-4">
                <FaQuoteLeft className="text-[#003366] text-3xl" />
                <p className="font-poppins text-[20px] leading-[32px] text-[#334155] text-center md:text-left">
                  {t.quote}
                </p>
              </div>

              {/* Profile Section */}
              <div className="flex flex-col align-top md:flex-row items-center justify-center gap-4 pt-4">
                <img
                  src={profilephoto}
                  alt={t.name}
                  className="w-[64px] h-[64px] rounded-full object-cover "
                />
                <div className="text-center gap- md:text-left">
                  <div className="font-poppins mb-4 font-bold text-[16px] text-[#003366]">
                    {t.name}
                  </div>
                  <div className="font-inter  text-[14px] text-[#00AEEF]">
                    {t.role}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Navigation Buttons (bottom of card) */}
        <div className="flex justify-center items-center gap-3 mt-8">
          <button
            onClick={prev}
            className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#00AEEF] hover:bg-[#008FCC] transition"
            aria-label="Previous"
          >
            <FaChevronLeft className="text-white" />
          </button>
          <button
            onClick={next}
            className="w-[40px] h-[40px] rounded-full flex items-center justify-center bg-[#00AEEF] hover:bg-[#008FCC] transition"
            aria-label="Next"
          >
            <FaChevronRight className="text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
