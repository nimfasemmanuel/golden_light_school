import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <section
      id="contact"
      className="w-full  flex flex-col items-center justify-center px-[20px] md:px-[100px] py-[100px] gap-[64px] bg-[#F8FAFC] mx-auto"
    >
      {/* Header Section */}
      <div className="text-center max-w-[800px]">
        <h2 className="text-[#003366] font-poppins font-semibold text-[32px] leading-[40px]">
          Contact Us
        </h2>
         
        <p className="text-[#003366] font-poppins font-normal text-[18px] leading-[26px] mt-4">
          Have questions or want to learn more? We're here to help you through every step of the process.
        </p>
        <hr className="border-2  border-blue-400 w-[70px] sm:w-[90px] mx-auto mt-[40px]" />
      </div>
      
      

      {/* Cards Container */}
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
              <p className="font-poppins text-[16px] text-[#334155]">Sabuwar Takur Adua, 720101 Dutse , Jigawa State</p>
              <p className="font-poppins text-[16px] text-[#334155]"></p>
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
              <p className="font-poppins text-[16px] text-[#334155]">+234 9121105066</p>
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
                goldenlightschool009@gmail.com
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
                <a href="https://web.facebook.com/goldenlightschool" target="_blank"><FaFacebookF className="text-white text-[18px]" /></a>
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

        {/* Right Card - Message Form */}
        <div className="bg-white rounded-[8px] shadow-md w-full lg:w-[610px] p-[40px] flex flex-col gap-[20px]">
          <h3 className="text-[#003366] font-poppins font-semibold text-[24px] leading-[32px] mb-2">
            Send Us a Message
          </h3>

          {/* Full Name */}
          <label className="font-poppins font-medium text-[14px] leading-[24px] text-[#003366]">
            Full Name
          </label>
          <input
            type="text"
            className="w-full h-[50px] border border-gray-300 rounded-[6px] px-[17px] py-[13px] outline-none focus:ring-2 focus:ring-[#00AEEF] transition"
          />

          {/* Email Address */}
          <label className="font-poppins font-medium text-[14px] leading-[24px] text-[#003366] mt-2">
            Email Address
          </label>
          <input
            type="email"
            className="w-full h-[50px] border border-gray-300 rounded-[6px] px-[17px] py-[13px] outline-none focus:ring-2 focus:ring-[#00AEEF] transition"
          />

          {/* Phone Number */}
          <label className="font-poppins font-medium text-[14px] leading-[24px] text-[#003366] mt-2">
            Phone Number
          </label>
          <input
            type="tel"
            className="w-full h-[50px] border border-gray-300 rounded-[6px] px-[17px] py-[13px] outline-none focus:ring-2 focus:ring-[#00AEEF] transition"
          />

          {/* Message */}
          <label className="font-poppins font-medium text-[14px] leading-[24px] text-[#003366] mt-2">
            Your Message
          </label>
          <textarea
            rows="6"
            className="w-full min-h-[194px] border border-gray-300 rounded-[6px] px-[17px] py-[13px] resize-y outline-none focus:ring-2 focus:ring-[#00AEEF] transition"
            placeholder="Type your message here..."
          ></textarea>

          {/* Submit Button */}
          <button className="mt-4 active:opacity-70 cursor-pointer bg-[#00AEEF] text-white font-poppins font-medium text-[16px] leading-[24px] px-6 py-3 rounded-[8px] hover:opacity-90 transition-opacity duration-300 w-full">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
