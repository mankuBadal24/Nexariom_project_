import React from "react";
import Navbar from "../pages/Navbar";      
import HeroAbout from "../components/ui/HeroAbout"; 
import Footer from "../pages/Footer";      
import OurStory from "./OurStory";
import OurLeaders from "./OurLeaders";
import OurValues from "./OurValues";

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <HeroAbout />
        <OurStory />
        <OurLeaders />
        <OurValues />
      </div>
      <Footer />
    </div>
  );
};

export default About;
