import React from "react";
import heroImg from "../../assets/nexirombanner.webp";

export const AboutHero = () => {
  return (
    <>
      {/* Gradient Animation */}
      <style>{`
        @keyframes heroGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-hero-bg {
          background: linear-gradient(90deg, #e9f8ea 0%, #f3f0d9 50%, #fbd6c7 100%);
          background-size: 200% 200%;
          animation: heroGradient 12s ease-in-out infinite;
        }
      `}</style>

      <section className="animated-hero-bg w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* LEFT TEXT */}
            <div className="order-2 lg:order-1">
              <h1
                className="font-bold text-gray-900 leading-tight"
                style={{
                  fontSize: "clamp(36px, 5vw, 48px)",
                  lineHeight: "1.15",
                }}
              >
                About Nexariom Trade LLP
              </h1>

              <p
                className="mt-6 text-gray-700 max-w-2xl"
                style={{
                  fontSize: "clamp(17px, 2.2vw, 20px)",
                  lineHeight: "1.65",
                }}
              >
                Your trusted global trading partner, connecting quality products
                from around the world with discerning customers.
              </p>

              <p
                className="mt-6 text-gray-700 max-w-2xl"
                style={{
                  fontSize: "clamp(15px, 2vw, 18px)",
                  lineHeight: "1.7",
                }}
              >
                Founded in Denmark, we specialize in international trade of
                consumer goods, agricultural products, and machinery with a
                commitment to quality, sustainability, and customer satisfaction.
              </p>
            </div>

            {/* RIGHT IMAGE */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
              <div className="w-full max-w-lg hidden md:block">
                <img
                  src={heroImg}
                  alt="Product collage"
                  className="w-full h-auto object-contain rounded-2xl drop-shadow-2xl"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
