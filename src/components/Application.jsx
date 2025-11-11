import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import school from "../assets/school.jpg";

const Application = () => {
  return (
    <section
      id="application"
      className="w-full flex flex-col items-center justify-center px-[20px] md:px-[100px] py-[100px] gap-[80px] bg-[#F8FAFC]"
    >
      {/* Header */}
      <div className="text-center max-w-[800px]">
        <h1 className="text-[#003366] font-poppins font-semibold text-[32px] leading-[40px]">
          Application
        </h1>
        <p className="text-[#003366] font-poppins font-normal text-[18px] leading-[26px] mt-4">
          Begin your journey with Golden Light School — where excellence,
          character, and creativity are nurtured every day.
        </p>
        <hr className="border-2 border-[#00AEEF] w-[90px] mx-auto mt-[30px]" />
      </div>

      {/* Introduction & Image */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-[1200px] gap-[40px]">
        <div className="flex flex-col gap-[20px] text-[#003366] font-poppins w-full lg:w-1/2">
          <h2 className="text-[24px] font-semibold">Apply to Our School</h2>
          <p className="text-[16px] leading-[26px]">
            Welcome to the Golden Light School Application Page! We appreciate
            your interest in joining our school community. To apply, please
            complete the following steps:
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[16px]">
            <li>Fill out the application form accurately and completely.</li>
            <li>Double-check all fields before submitting.</li>
            <li>
              Click “Submit” to finalize your application and receive a
              confirmation message.
            </li>
            <li>
              Within 24 hours, you’ll receive an email with further
              instructions.
            </li>
          </ul>
          <p className="text-[16px] leading-[26px]">
            For any questions, contact our admissions team at{" "}
            <span className="text-[#00AEEF] font-medium">
              goldenlightschool009@gmail.com
            </span>
            .
          </p>
        </div>

        <div className="w-full lg:w-1/2">
          <img
            src={school}
            alt="Golden Light School"
            className="w-full h-[400px]  rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Application Form & Contact Section (merged design) */}
      <div className="flex flex-col lg:flex-row justify-center gap-[40px] w-full max-w-[1200px]">
        {/* Left - Application Form */}
        <div className="bg-[#E6F7FB] rounded-[8px] shadow-md w-full lg:w-[610px] p-[40px] flex flex-col gap-[20px]">
          <h3 className="text-[#003366] font-poppins font-semibold text-[24px] leading-[32px] mb-2">
            Application Form
          </h3>

          <label className="font-poppins font-medium text-[14px] text-[#003366]">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full h-[50px] border border-gray-300 rounded-[6px] px-[17px] py-[13px] outline-none focus:ring-2 focus:ring-[#00AEEF]"
          />

          <label className="font-poppins font-medium text-[14px] text-[#003366] mt-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full h-[50px] border border-gray-300 rounded-[6px] px-[17px] py-[13px] outline-none focus:ring-2 focus:ring-[#00AEEF]"
          />

          <label className="font-poppins font-medium text-[14px] text-[#003366] mt-2">
            Date of Birth
          </label>
          <input
            type="date"
            className="w-full h-[50px] border border-gray-300 rounded-[6px] px-[17px] py-[13px] outline-none focus:ring-2 focus:ring-[#00AEEF]"
          />

          <label className="font-poppins font-medium text-[14px] text-[#003366] mt-2">
            Gender
          </label>
          <select className="w-full h-[50px] border border-gray-300 rounded-[6px] px-[17px] text-[#003366] outline-none focus:ring-2 focus:ring-[#00AEEF]">
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label className="font-poppins font-medium text-[14px] text-[#003366] mt-2">
            Select Class
          </label>
          <div className="flex flex-wrap gap-[10px]">
            {["Creche", "Pre-Nursery", "Nursery", "Primary", "Secondary"].map(
              (level, index) => (
                <button
                  key={index}
                  type="button"
                  className="px-[20px] py-[10px] rounded-full border border-[#00AEEF] text-[14px] font-poppins text-[#003366] bg-white hover:bg-[#003366] hover:text-white transition-all"
                >
                  {level}
                </button>
              )
            )}
          </div>

          <button className="mt-4 active:opacity-70 bg-[#00AEEF] text-white font-poppins font-medium text-[16px] leading-[24px] px-6 py-3 rounded-[8px] hover:opacity-90 transition-opacity w-full">
            Apply
          </button>
        </div>

        {/* Right - Contact Info (styled like Contact Us) */}
        <div className="flex flex-col  lg:flex-row justify-center gap-[40px] w-full">
                {/* Left Card - Contact Details */}
                <div className="bg-[#E6F7FB] rounded-[8px] shadow-md w-full lg:w-[610px] p-[40px] flex flex-col gap-[32px]">
                  <h3 className="text-[#003366] font-poppins font-semibold text-[24px] leading-[32px]">
                    Get in Touch
                  </h3>
        
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-[50px] h-[50px] rounded-full bg-[#E6F7FB] flex items-center justify-center">
                      <FaMapMarkerAlt className="text-[#00AEEF] text-[20px]" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-bold text-[18px] leading-[26px] text-[#003366]">
                        Address
                      </h4>
                      <p className="font-poppins text-[16px] text-[#334155]">123 Education Lane</p>
                      <p className="font-poppins text-[16px] text-[#334155]">Golden Light, CA 90210</p>
                    </div>
                  </div>
        
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-[50px] h-[50px] rounded-full bg-[#E6F7FB] flex items-center justify-center">
                      <FaPhone className="text-[#00AEEF] text-[20px]" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-bold text-[18px] leading-[26px] text-[#003366]">
                        Phone
                      </h4>
                      <p className="font-poppins text-[16px] text-[#334155]">(555) 123-4567</p>
                    </div>
                  </div>
        
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-[50px] h-[50px] rounded-full bg-[#E6F7FB] flex items-center justify-center">
                      <FaEnvelope className="text-[#00AEEF] text-[20px]" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-bold text-[18px] leading-[26px] text-[#003366]">
                        Email
                      </h4>
                      <p className="font-poppins text-[16px] text-[#334155]">
                        admissions@goldenlightschool.edu
                      </p>
                    </div>
                  </div>
        
                  {/* Office Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-[50px] h-[50px] rounded-full bg-[#E6F7FB] flex items-center justify-center">
                      <FaClock className="text-[#00AEEF] text-[20px]" />
                    </div>
                    <div>
                      <h4 className="font-poppins font-bold text-[18px] leading-[26px] text-[#003366]">
                        Office Hours
                      </h4>
                      <p className="font-poppins text-[16px] text-[#334155]">
                        Monday - Friday: 8:00 AM - 4:30 PM
                      </p>
                      <p className="font-poppins text-[16px] text-[#334155]">
                        Saturday: 9:00 AM - 12:00 PM
                      </p>
                    </div>
                  </div>
        
                  {/* Social Links */}
                  <div className="pt-4">
                    <h4 className="font-poppins font-bold text-[14px] leading-[26px] text-[#003366] mb-3">
                      Follow Us
                    </h4>
                    <div className="flex gap-3">
                      <div className="w-[44px] h-[44px] rounded-full bg-[#00AEEF] flex items-center justify-center cursor-pointer hover:opacity-90 transition">
                        <FaFacebookF className="text-white text-[18px]" />
                      </div>
                      <div className="w-[44px] h-[44px] rounded-full bg-[#00AEEF] flex items-center justify-center cursor-pointer hover:opacity-90 transition">
                        <FaXTwitter className="text-white text-[18px]" />
                      </div>
                      <div className="w-[44px] h-[44px] rounded-full bg-[#00AEEF] flex items-center justify-center cursor-pointer hover:opacity-90 transition">
                        <FaInstagram className="text-white text-[18px]" />
                      </div>
                      <div className="w-[44px] h-[44px] rounded-full bg-[#00AEEF] flex items-center justify-center cursor-pointer hover:opacity-90 transition">
                        <FaYoutube className="text-white text-[18px]" />
                      </div>
                    </div>
                  </div>
                </div>
        </div>
      </div>
    </section>
  );
};

export default Application;
