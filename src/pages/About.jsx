// src/pages/About.jsx
import React from "react";
import Navbar from "../pages/Navbar";      // <-- ensure path is correct
import HeroAbout from "../components/ui/HeroAbout"; // match actual export name of your hero component
import Footer from "../pages/Footer";      // <-- ensure path is correct
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
