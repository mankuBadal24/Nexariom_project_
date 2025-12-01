// src/components/HeroFaq.jsx
import React from "react";

export const HeroFaq = () => {
  return (
    <>
      <style>{`
        @keyframes heroGradientFaq {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        /* small tweak so the input + attached button have a crisp white border like design */
        .faq-pill {
          box-shadow: 0 18px 24px rgba(2,6,23,0.08), 0 8px 12px rgba(2,6,23,0.04);
          border: 4px solid rgba(255,255,255,0.85); /* gives that white ring */
        }
      `}</style>

      <section
        className="w-full"
        style={{
          background:
            "linear-gradient(90deg, #f5ecd3 0%, #fbd1c3 50%, #ffe6d8 100%)",
          backgroundSize: "200% 200%",
          animation: "heroGradientFaq 15s ease-in-out infinite",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-20">
          <div className="flex flex-col items-center text-center">
            <h1
              className="font-extrabold text-slate-900"
              style={{ fontSize: "clamp(28px, 4.2vw, 48px)", lineHeight: 1.03 }}
            >
              Frequently Asked Questions
            </h1>

            <p
              className="mt-4 text-slate-700 max-w-2xl"
              style={{ fontSize: "clamp(14px, 1.6vw, 18px)", lineHeight: 1.7 }}
            >
              Find answers to common questions about shopping on Nexariom,
              international shipping, returns, and more.
            </p>

            {/* SEARCH FORM */}
            <form
              role="search"
              className="mt-8 w-full flex justify-center"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* container width adapts; we use relative so the button can overlap on mobile */}
              <div className="w-full max-w-3xl px-2 sm:px-0">
                {/* Desktop / tablet: inline pill (sm and up) */}
                <div className="hidden sm:flex items-center faq-pill bg-white rounded-full overflow-hidden transition-shadow duration-300">
                  <div className="flex items-center flex-1 min-w-0 pl-6 pr-3">
                    <div className="pr-3 text-slate-400 pointer-events-none">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M21 21l-4.35-4.35"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="10.5"
                          cy="10.5"
                          r="5.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                      </svg>
                    </div>

                    <input
                      aria-label="Search FAQ"
                      type="search"
                      placeholder="Search for answers..."
                      className="flex-1 py-4 pr-4 placeholder-slate-400 text-slate-700 text-sm md:text-base bg-transparent outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    aria-label="Search"
                    className="relative inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full px-5 py-3 mr-2 shadow-md transition transform hover:-translate-y-0.5"
                  >
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path
                          d="M21 21l-4.35-4.35"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <circle
                          cx="10.5"
                          cy="10.5"
                          r="5.5"
                          stroke="currentColor"
                          strokeWidth="1.6"
                        />
                      </svg>
                    </span>
                    <span className="hidden md:inline">Search</span>
                  </button>
                </div>

                {/* Mobile: single pill with overlapping button on the right */}
                <div className="sm:hidden relative">
                  {/* white pill with extra right padding to make room for overlapping button */}
                  <div className="bg-white rounded-full faq-pill">
                    <div className="flex items-center">
                      <div className="pl-4 pr-3 text-slate-400 pointer-events-none">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path
                            d="M21 21l-4.35-4.35"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <circle
                            cx="10.5"
                            cy="10.5"
                            r="5.5"
                            stroke="currentColor"
                            strokeWidth="1.6"
                          />
                        </svg>
                      </div>

                      <input
                        aria-label="Search FAQ"
                        type="search"
                        placeholder="Search for answers..."
                        className="w-full rounded-full py-3 pr-20 pl-1 text-slate-700 placeholder-slate-400 outline-none text-sm"
                        style={{ background: "transparent" }}
                      />

                      {/* invisible spacer so content doesn't go under button on very small widths */}
                      <div className="w-6" />
                    </div>
                  </div>

                  {/* Overlapping search button (rounded) */}
                  <button
                    type="submit"
                    aria-label="Search"
                    className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-full px-4 py-2 shadow-md transition"
                    style={{
                      boxShadow: "0 8px 18px rgba(2,6,23,0.12)",
                      border: "4px solid rgba(255,255,255,0.9)",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M21 21l-4.35-4.35"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle
                        cx="10.5"
                        cy="10.5"
                        r="5.5"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroFaq;
