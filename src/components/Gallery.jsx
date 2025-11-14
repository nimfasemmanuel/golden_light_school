import React, { useState } from "react";
import creche1 from "../assets/creche1.jpg";
import nursery1 from "../assets/nursery1.jpg";
import creche2 from "../assets/creche2.jpg";
import creche3 from "../assets/creche3.jpg";
import creche4 from "../assets/creche4.jpg";
import creche5 from "../assets/creche5.jpg";
// import creche6 from "../assets/creche6.jpg";
// import creche7 from "../assets/creche7.jpg";
// import creche8 from "../assets/creche8.jpg";
// import creche9 from "../assets/creche9.jpg";
// import creche10 from "../assets/creche10.jpg";
// import creche11 from "../assets/creche11.jpg";
// import creche12 from "../assets/creche12.jpg";
// import creche13 from "../assets/creche13.jpg";
// import creche14 from "../assets/creche14.jpg";
// import creche15 from "../assets/creche15.jpg";
import nursery2 from "../assets/nursery2.jpg";
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import img4 from "../assets/img4.jpg"
import img5 from "../assets/img5.jpg"
import img6 from "../assets/img6.jpg"
// import img7 from "../assets/img7.jpg"
// import img8 from "../assets/img8.jpg"
// import img9 from "../assets/img9.jpg"
// import img10 from "../assets/img10.jpg"
// import img11 from "../assets/img11.jpg"
// import img12 from "../assets/img12.jpg"
// import img13 from "../assets/img13.jpg"
// import img14 from "../assets/img14.jpg"
// import img15 from "../assets/img15.jpg"
// import img16 from "../assets/img16.jpg"
import img17 from "../assets/img17.jpg"
// import img18 from "../assets/img18.jpg"
// import img19 from "../assets/img19.jpg"
// import img20 from "../assets/img20.jpg"
// import img21 from "../assets/img21.jpg"
import sec1 from "../assets/sec1.jpg"
import sec2 from "../assets/sec2.jpg"
import sec3 from "../assets/sec3.jpg"
import sec4 from "../assets/sec4.jpg"
import sec5 from "../assets/sec5.jpg"
// import sec6 from "../assets/sec6.jpg"
// import sec7 from "../assets/sec7.jpg"
// import sec8 from "../assets/sec8.jpg"
// import sec9 from "../assets/sec9.jpg"
// import sec10 from "../assets/sec10.jpg"
// import sec11 from "../assets/sec11.jpg"
// import sec12 from "../assets/sec12.jpg"
// import sec13 from "../assets/sec13.jpg"
// import sec14 from "../assets/sec14.jpg"
// import sec15 from "../assets/sec15.jpg"
// import sec16 from "../assets/sec16.jpg"
// import sec17 from "../assets/sec17.jpg"
// import sec18 from "../assets/sec18.jpg"
// import sec19 from "../assets/sec19.jpg"
// import sec20 from "../assets/sec20.jpg"
import sec21 from "../assets/sec21.jpg"

const Gallery = () => {
  const categories = {
    Creche: [creche1, creche2,creche3,creche4,creche5,/*creche6,creche7,creche8,creche9,creche10,*/],
    Nursery: [nursery1, nursery2,/*creche11,creche12,creche13,creche14,creche15*/],
    Primary: [ img1,img2,img3,img4,img5,img6,/*img7,img8,img9,img10,img11,img12,img13,img14,img15,img16,*/],
    Secondary: [sec1,sec2,sec3,sec4,sec5,/*sec6,sec7,sec8,sec9,sec10,sec11,sec12,sec13,sec14,sec15,sec16,*/],
    Others: [img17,/*img18,img19,img20,img21,sec17,sec18,sec19,sec20,sec21,*/],
  };

  const [activeCategory, setActiveCategory] = useState("Creche");

  return (
    <section
      id="gallery"
      className="w-full flex flex-col items-center justify-center px-[100px] py-[100px] gap-[10px] bg-[#F8FAFC]"
    >
      {/* Section Header */}
      <div className="flex flex-col items-center text-center gap-[10px]">
        <h1 className="text-[32px] leading-[40px] font-poppins font-semibold text-[#003366] text-center max-w-[733px]">
          School Gallery
        </h1>
        <p className="text-[18px] mb-[20px] leading-[26px] font-poppins font-normal text-center max-w-[733px] text-[#003366]">
          Journey through our vibrant halls and classrooms — where every smile, achievement, and discovery reflects the spirit of Golden Light School.
        </p>
        <hr className="border-2 border-blue-400 w-[90px]" />
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap justify-center gap-[15px] mt-[30px]">
        {Object.keys(categories).map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-[24px] py-[10px] rounded-full border border-[#00AEEF] font-poppins text-[14px] font-medium transition-all duration-300 flex-shrink-0 cursor-pointer active:opacity-70 ${
              activeCategory === category
                ? "bg-[#003366] text-white"
                : "bg-white text-[#003366] hover:bg-[#003366] hover:text-white"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Images */}
      <div className="w-full max-w-[1240px] flex flex-wrap justify-center gap-[20px] pt-[50px]">
        {categories[activeCategory].map((img, index) => (
          <div
            key={index}
            className="rounded-[8px] overflow-hidden shadow-md w-full sm:w-[45%] md:w-[45%] lg:w-[380px] cursor-pointer transform transition-all duration-300 hover:scale-105"
          >
            <img
              src={img}
              alt={`${activeCategory} ${index + 1}`}
              className="w-full h-[250px] object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
