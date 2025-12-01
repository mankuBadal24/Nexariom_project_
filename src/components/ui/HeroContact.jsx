// src/components/ui/HeroContact.jsx
import React from "react";
import heroImg from "../../assets/nexirombanner.webp"; // change if different image

export const HeroContact = () => {
  return (
    <>
      {/* Gradient Animation */}
      <style>{`
        @keyframes heroGradientContact {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-hero-contact {
          background: linear-gradient(90deg, #ffe0e8 0%, #e8f7ef 50%, #d4f6ea 100%);
          background-size: 200% 200%;
          animation: heroGradientContact 12s ease-in-out infinite;
        }
      `}</style>

      <section className="animated-hero-contact w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            {/* LEFT TEXT — JUST LIKE ABOUT HERO */}
            <div className="order-2 lg:order-1">
              <h1
                className="font-bold text-gray-900 leading-tight"
                style={{
                  fontSize: "clamp(36px, 5vw, 48px)",
                  lineHeight: "1.15",
                }}
              >
                Get in Touch
              </h1>

              <p
                className="mt-6 text-gray-700 max-w-2xl"
                style={{
                  fontSize: "clamp(17px, 2.2vw, 20px)",
                  lineHeight: "1.65",
                }}
              >
                We'd love to hear from you. Reach out to us for any inquiries,
                partnerships, or support.
              </p>

              <p
                className="mt-6 text-gray-700 max-w-2xl"
                style={{
                  fontSize: "clamp(15px, 2vw, 18px)",
                  lineHeight: "1.7",
                }}
              >
                Our team is ready to assist you with any questions about our
                products, services, or global trade opportunities.
              </p>
            </div>

            {/* RIGHT IMAGE — EXACT SAME STYLE AS ABOUT HERO */}
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

export default HeroContact;
