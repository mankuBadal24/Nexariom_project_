import React from "react";
import "./hero.css";
import heroImg from "../../assets/nexirombanner.webp";

export const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">

        <div className="hero-left">
          <h1>
            Global Shopping <br />
            Experience Right at <br />
            Your Doorstep
          </h1>

          <p>
            Discover products from around the world with fast international 
            shipping and secure payment options.
          </p>

          <div className="hero-buttons">
            <button className="btn-shop">Shop Now</button>
            <button className="btn-learn">Learn More</button>
          </div>
        </div>

        <div className="hero-right">
          <img src={heroImg} alt="banner" />
        </div>

      </div>
    </section>
  );
};
