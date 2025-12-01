// src/components/VisitingCardContent.jsx
import React from "react";

export const VisitingCardContent = () => {
  return (
    <section className="bg-[#dce4ef] pb-20">
      {/* TOP BLUE HERO */}
      <div className="bg-[#2f80ff] text-center py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-white">
          Our Visiting Card
        </h1>
        <p className="text-white/90 mt-2 text-sm md:text-base">
          Connect with us – Download our digital business card
        </p>
      </div>

      {/* CARD CONTAINER */}
      <div className="max-w-7xl mx-auto px-6 mt-10 md:mt-16">
        <div className="flex justify-start">
          <div className="w-full max-w-4xl">
            <div
              className="
                bg-white rounded-[28px]
                shadow-[0_10px_40px_rgba(0,0,0,0.1)]
                overflow-hidden flex flex-col md:flex-row
              "
            >
              {/* LEFT BLUE PANEL */}
              <div className="md:w-[38%] bg-[#2f80ff] text-white p-10 relative">

                {/* Background circles */}
                <div className="absolute top-12 right-0 w-44 h-44 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/10 rounded-full blur-xl"></div>

                <div className="relative">
                  <h2 className="text-3xl font-extrabold tracking-tight">
                    Nexariom<span className="text-rose-400">Trade</span>
                  </h2>

                  <p className="mt-4 text-white/95 italic text-sm md:text-base">
                    Your international trading partner
                  </p>

                  {/* CONTACT DETAILS */}
                  <div className="mt-10 space-y-5">

                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg">
                        🌐
                      </span>
                      <a className="text-white/95 text-sm md:text-base" href="#">
                        www.nexariom.com
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg">
                        ✉️
                      </span>
                      <a className="text-white/95 text-sm md:text-base" href="#">
                        nexariom@outlook.com
                      </a>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-lg">
                        📞
                      </span>
                      <span className="text-white/95 text-sm md:text-base">
                        +45 91-73-39-57
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT WHITE PANEL */}
              <div className="md:w-[62%] p-10">
                <h3 className="text-2xl md:text-3xl font-extrabold text-[#2f80ff]">
                  Wilmer Drake & Mercia Sharp
                </h3>
                <p className="text-gray-600 mt-1 text-sm md:text-base">
                  Founders & CEOs
                </p>

                <ul className="mt-6 space-y-4 text-gray-700 text-sm md:text-base">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#2f80ff] text-lg">📍</span>
                    Birkevej 43, Sandved, Region Sjælland, 4262, Denmark
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#2f80ff] text-lg">📦</span>
                    Specializing in international trade of consumer goods, rice, pulses,
                    and agriculture machinery
                  </li>

                  <li className="flex items-start gap-3">
                    <span className="mt-1 text-[#2f80ff] text-lg">✨</span>
                    Quality products from around the world
                  </li>
                </ul>

                {/* BUTTONS */}
                <div className="mt-10 flex flex-wrap gap-4">
                  {/* DOWNLOAD BUTTON */}
                  <a
                    href="#"
                    download
                    className="
                      px-7 py-3 rounded-full bg-[#2f80ff] text-white font-semibold
                      flex items-center gap-2 shadow-md
                      transition-all duration-300
                      hover:-translate-y-1 hover:bg-purple-700 hover:shadow-xl
                    "
                  >
                    ⬇ Download Card
                  </a>

                  {/* BACK BUTTON */}
                  <a
                    href="/"
                    className="
                      px-7 py-3 rounded-full border border-[#2f80ff]
                      text-[#2f80ff] bg-white font-semibold
                      flex items-center gap-2
                      transition-all duration-300
                      hover:bg-blue-50
                    "
                  >
                    ← Back to Website
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitingCardContent;
