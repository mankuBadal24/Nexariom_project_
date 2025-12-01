import React from "react";
import NavbarSecond from "../pages/NavbarSecond"; 
import Footer from "../pages/Footer";
import VisitingCardContent from "./VisitingCardContent";

// simple page wrapper that renders Navbar (you can expand this page as needed)
const VisitingCard = () => {
  return (
    <div>
      <NavbarSecond />
      <div className="pt-20">
        <VisitingCardContent />
      </div>
      <Footer />
    </div>
  );
};

export default VisitingCard;
