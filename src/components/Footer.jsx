import React from "react";
import { FaPhoneAlt, FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#003366] text-white w-full mx-auto px-[100px] py-[50px]">
      {/* Top Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[40px] mb-[40px]">
        
        {/* Column 1 */}
        <div>
          <h2 className="font-poppins font-bold text-[20px] leading-[32px] mb-4">
            Golden Light School
          </h2>
          <p className="font-poppins font-normal text-[16px] leading-[24px] mb-3">
            Nurturing excellence, inspiring futures, and building character since 1985.
          </p>
          <p className="font-poppins font-normal text-[16px] leading-[24px]">
            123 Education Lane <br />
            Golden Light, CA 90210
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-poppins font-bold text-[20px] leading-[32px] mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 font-poppins text-[16px] leading-[24px]">
            <li><a href="#about" className="hover:text-blue-400">About Us</a></li>
            <li><a href="#academics" className="hover:text-blue-400">Academic Programs</a></li>
            <li><a href="#facilities" className="hover:text-blue-400">Facilities</a></li>
            <li><a href="#news" className="hover:text-blue-400">News & Events</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-poppins font-bold text-[20px] leading-[32px] mb-4">
            Resources
          </h3>
          <ul className="space-y-2 font-poppins text-[16px] leading-[24px]">
            <li><a href="#student-portal" className="hover:text-blue-400">Student Portal</a></li>
            <li><a href="#parent-resources" className="hover:text-blue-400">Parent Resources</a></li>
            <li><a href="#faculty" className="hover:text-blue-400">Faculty & Staff</a></li>
            <li><a href="#alumni" className="hover:text-blue-400">Alumni</a></li>
            <li><a href="#calendar" className="hover:text-blue-400">Calendar</a></li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-poppins font-bold text-[20px] leading-[32px] mb-4">
            Get In Touch
          </h3>
          <div className="flex items-center gap-2 mb-3">
            <FaPhoneAlt className="text-red-500 w-[24px] h-[24px]" />
            <p className="font-poppins font-normal text-[16px] leading-[24px]">
              (555) 123-4567
            </p>
          </div>
          <p className="font-poppins font-normal text-[16px] leading-[24px] mb-6">
            info@goldenlightschool.edu
          </p>
          <div className="flex items-center gap-4">
            <FaFacebookF className="w-[24px] h-[24px] cursor-pointer hover:text-blue-400" />
            <FaTwitter className="w-[24px] h-[24px] cursor-pointer hover:text-blue-400" />
            <FaInstagram className="w-[24px] h-[24px] cursor-pointer hover:text-blue-400" />
            <FaYoutube className="w-[24px] h-[24px] cursor-pointer hover:text-blue-400" />
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t border-white opacity-30 mb-[30px]" />

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-[14px]">
          <FaRegCopyright />
          <p className="font-poppins">2025 Golden Light School. All rights reserved.</p>
        </div>
        <div className="flex items-center gap-6 text-[14px] font-poppins">
          <a href="#privacy" className="hover:text-blue-400">Privacy Policy</a>
          <a href="#terms" className="hover:text-blue-400">Terms of Use</a>
          <a href="#accessibility" className="hover:text-blue-400">Accessibility</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
