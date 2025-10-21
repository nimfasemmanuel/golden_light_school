import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // ✅ Use react-scroll for smooth scrolling
import logo from "../assets/logo.svg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // ✅ Paths now match section IDs (no route change)
  const links = [
    { name: "Home", path: "home" },
    { name: "About us", path: "about" },
    { name: "Academics", path: "academics" },
    { name: "Admission", path: "admission" },
    { name: "Gallery", path: "gallery" },
    { name: "Contact", path: "contact" },
  ];

  return (
    <div className="w-full bg-white sticky top-0 left-0 z-50">
      <div
        className="
          w-full max-w-[1440px] h-[90px] mx-auto
          flex justify-between items-center
          px-6 sm:px-10 md:px-[60px] lg:px-[100px] py-[20px] gap-[10px]
        "
      >
        {/* Left: Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={600}
          offset={-90}
          className="cursor-pointer"
        >
          <img
            src={logo}
            alt="School Logo"
            className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] md:w-[64px] md:h-[63px] object-contain"
          />
        </ScrollLink>

        {/* Center: Desktop Links */}
        <ul className="hidden md:flex items-center gap-[30px] lg:gap-[40px]">
          {links.map((link) => {
            const isHome = link.name === "Home";
            return (
              <li key={link.name}>
                <ScrollLink
                  to={link.path}
                  smooth={true}
                  duration={600}
                  offset={-90} // Adjust scroll stop
                  className={`inline-block text-[16px] font-medium leading-[24px] px-3 py-1 rounded-md transition-all duration-300 cursor-pointer
                    ${isHome ? "text-black" : "text-[#33333380]"} 
                    hover:bg-[#00AEEF] hover:text-white active:opacity-80`}
                >
                  {link.name}
                </ScrollLink>
              </li>
            );
          })}
        </ul>

        {/* Right: Apply Button (Desktop) */}
        <div className="hidden md:block">
          <button className="cursor-pointer px-[24px] py-[10px] bg-[#00AEEF] text-white text-[16px] font-semibold rounded-md transition-all duration-300 hover:bg-[#0095cc] hover:shadow-md active:opacity-80">
            Apply Now
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden flex flex-col gap-[4px] cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-[2px] bg-gray-800"></span>
          <span className="block w-6 h-[2px] bg-gray-800"></span>
          <span className="block w-6 h-[2px] bg-gray-800"></span>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-left gap-4 bg-white py-4 shadow-md">
          {links.map((link) => {
            const isHome = link.name === "Home";
            return (
              <ScrollLink
                key={link.name}
                to={link.path}
                smooth={true}
                duration={600}
                offset={-90}
                onClick={() => setMenuOpen(false)}
                className={`text-[16px] font-medium leading-[24px] px-4 py-2 rounded-md transition-all duration-300 cursor-pointer
                  ${isHome ? "text-black" : "text-[#33333380]"} 
                  hover:bg-[#00AEEF] hover:text-white active:opacity-80`}
              >
                {link.name}
              </ScrollLink>
            );
          })}
          <button className="cursor-pointer px-[24px] py-[10px] bg-[#00AEEF] text-white text-[16px] font-semibold rounded-md transition-all duration-300 hover:bg-[#0095cc] hover:shadow-md active:opacity-80">
            Apply Now
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
