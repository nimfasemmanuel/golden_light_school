import React from "react";
import { ContactForm, Navbar } from "./components";
import { Hero } from "./components";
import { About } from "./components";
import { Academics } from "./components";
import { Admission } from "./components";
import { WhyChoose } from "./components"; 
import { LatestNews } from "./components"; 
import { Testimonials } from "./components"; 
import Journey from "./components/Journey";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* Navbar (stays fixed) */}
      <Navbar />

      {/* Page Sections */}
      <div className="flex-1 w-full">
        {/* 🏠 Home Section */}
        <section id="home" className="scroll-mt-[90px]">
          <Hero />
        </section>

        {/* 👨‍🏫 About Section */}
        <section id="about" className="scroll-mt-[90px]">
          <About />
        </section>

        {/* 📚 Academics Section */}
        <section id="academics" className="scroll-mt-[90px]">
          <Academics />
        </section>

        {/* 📝 Admission Section */}
        <section id="admission" className="scroll-mt-[90px]">
          <Admission />
        </section>

        {/* 💡 Why Choose Us Section (optional) */}
        <WhyChoose /> 

        <LatestNews />
        <Testimonials />
        <section id="gallery" className="scroll-mt-[90px]">
          <Journey />
        </section> 
        {/** 📞 Contact Section (Coming Soon)  */ } 
        <section id="contact" className="scroll-mt-[90px]">
          <ContactForm />
        </section> 
        <Footer />

        {/* 🖼️ Gallery Section (Coming Soon) */}
        {/* <section id="gallery" className="scroll-mt-[90px]">
          <h1 className="text-center text-2xl py-10 font-semibold">
            Gallery Section (Coming Soon)
          </h1>
        </section> */}

       
      </div>
    </div>
  );
};

export default App;
