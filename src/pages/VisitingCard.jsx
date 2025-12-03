import React from "react";
import Navbar from "../pages/Navbar"; 
import Footer from "../pages/Footer";
import VisitingCardContent from "./VisitingCardContent";


const VisitingCard = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-20">
        <VisitingCardContent />
      </div>
      <Footer />
    </div>
  );
};

export default VisitingCard;
