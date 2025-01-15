import React from "react";
import "./Home.css";
import About from "../About/About";
import Services from "../Services/Services";
import Contact from "../Contact/Contact";
import Accordion from "../../Components/Accordion/Accordion";
import Testimonial from "../../Components/Testimonials/Testimonial";
import HeroSection from "../../Components/HeroSection/HeroSection";

const Home = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <HeroSection />

      {/* ABOUT US SECTION */}
      <About />

      {/* SERVICES SECTION */}
      <Services />

      {/* ACCORDION SECTION */}
      <Accordion />

      {/* TESTIMONIALS */}
      <Testimonial />

      {/* CONTACT US SECTION */}
      <Contact />
    </div>
  );
};

export default Home;
