import React from "react";
import { motion }   from "framer-motion";
import img17 from "../assets/img17.jpg";

const About = () => {
  return (
    <section className="w-full flex justify-center py-[60px] sm:py-[80px] md:py-[px] px-[16px] sm:px-[40px] md:px-[80px] bg-white">
      <div className="w-full max-w-[1440px] flex flex-col items-center gap-[40px]">
        {/* Header Text */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[#003366] text-center font-poppins font-bold text-[24px] sm:text-[28px] md:text-[36px] leading-[36px] sm:leading-[40px] max-w-[524px] pt-[50px]"
        >
          About Golden Light School
        </motion.p>

        <hr className="border-2 border-green-500 w-[80px] sm:w-[90px]" />

        {/* Main Content */}
        <div className="w-full max-w-[1240px] flex flex-col md:flex-row gap-[40px] sm:gap-[60px] md:gap-[120px] items-center md:items-start">
          {/* Left Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative w-full sm:w-[480px] md:w-[600px] lg:w-[663px] h-[240px] sm:h-[320px] md:h-[420px] lg:h-[442px] flex-shrink-0"
          >
            {/* Green rectangle behind */}
            <div
              className="
                absolute 
                top-[4px]
                left-[150px] 
                sm:left-[220px] 
                md:left-[300px] 
                lg:left-[350px] 
                w-[180px] 
                sm:w-[260px] 
                md:w-[320px] 
                lg:w-[365px]
                bottom-[40px] 
                sm:bottom-[60px] 
                md:bottom-[80px] 
                border-[4px] 
                border-green-500 
                rounded-[10px] 
                z-0
              "
            ></div>

            {/* Image */}
            <img
              src={img17}
              alt="About Section"
              className="w-full h-full object-cover rounded-[10px] pt-8 relative z-10"
            />
          </motion.div>

          {/* Right Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex-1 flex flex-col gap-[24px] sm:gap-[30px] text-center md:text-left"
          >
            {/* Our Story */}
            <div>
              <h1 className="font-poppins font-semibold text-[20px] sm:text-[22px] md:text-[24px] leading-[28px] sm:leading-[32px] mb-2 text-[#00AEEF]">
                Our Story
              </h1>
              <p className="font-poppins font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] text-gray-600 text-left
">
                Founded in 2000, Golden Light School has been a cornerstone of
                educational excellence in our community for over 20 years. Our
                commitment to academic rigor, character development, and holistic
                education has made us one of the leading schools in the region.
              </p>
            </div>

            {/* Our Mission */}
            <div>
              <h1 className="font-poppins font-semibold text-[20px] sm:text-[22px] md:text-[24px] leading-[28px] sm:leading-[32px] mb-2 text-[#00AEEF]">
                Mission
              </h1>
              <p className="font-poppins font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] text-gray-600 text-left
">
                We strive to provide a supportive and challenging educational
                environment that empowers students to become thoughtful,
                responsible, and successful citizens prepared for the challenges
                of higher education and beyond.
              </p>
            </div>  
               {/* Our Vision */}
            <div>
              <h1 className="font-poppins font-semibold text-[20px] sm:text-[22px] md:text-[24px] leading-[28px] sm:leading-[32px] mb-2 text-[#00AEEF]">
                Vision
              </h1>
              <p className="font-poppins font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] text-gray-600 text-left
">
                We strive to provide a supportive and challenging educational
                environment that empowers students to become thoughtful,
                responsible, and successful citizens prepared for the challenges
                of higher education and beyond.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
