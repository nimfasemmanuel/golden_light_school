import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Academics from "../components/Academics";
import Admission from "../components/Admission";
import WhyChoose from "../components/WhyChoose";
import LatestNews from "../components/LatestNews";
import Testimonials from "../components/Testimonials";
import Journey from "../components/Journey";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import  OurTeam  from "../components/OurTeam";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Academics />
      <Admission />
      <WhyChoose />
      <OurTeam />
      <LatestNews />
      <Testimonials />
      <Journey />
      <ContactForm />   
    </>
  );
};

export default Home;
