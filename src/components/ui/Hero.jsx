import React from "react";
import heroImg from "../../assets/nexirombanner.webp";

export const Hero = () => {
  return (
    <>
      {/* Inline Tailwind Gradient Animation */}
      <style>{`
        @keyframes heroGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-hero-bg {
          background: linear-gradient(90deg, #dff6e9, #e1f3d8, #f8d4c8);
          background-size: hero200% 200%;
          animation: heroGradient 10s ease-in-out infinite;
        }
      `}</style>

      <section className="animated-hero-bg w-full">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* LEFT AREA */}
            <div className="order-2 lg:order-1">
              <h1
                className="font-extrabold text-gray-900 leading-tight"
                style={{
                  fontSize: "clamp(28px, 5vw, 60px)", // 🔥 Smaller & more balanced
                  lineHeight: 1.05,
                }}
              >
                Global Shopping
                <br />
                Experience Right at
                <br />
                Your Doorstep
              </h1>

              <p className="mt-6 max-w-lg text-lg text-gray-600">
                Discover products from around the world with fast international
                shipping and secure payment options.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#products"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition"
                >
                  Shop Now
                </a>

                <a
                  href="#about"
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-gray-300 text-gray-800 bg-white hover:bg-black hover:text-white transition"
                >
                  Learn More
                </a>
              </div>
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

export default Hero;
