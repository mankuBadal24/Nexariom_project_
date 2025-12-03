import React from "react";

const ValueCard = ({ title, copy, children }) => {
  return (
    <article
      className="
        bg-white rounded-2xl overflow-hidden shadow-md border border-transparent
        transition-transform duration-300 ease-out
        transform hover:-translate-y-2 hover:shadow-2xl hover:border-sky-100
      "
    >
      {/* Top circle icon area */}
      <div className="pt-8 pb-6 flex justify-center bg-transparent">
        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-sky-500 to-violet-500 flex items-center justify-center shadow-md">
          {children}
        </div>
      </div>

      {/* Content */}
      <div className="px-8 pb-10 text-center">
        <h3 className="text-xl md:text-2xl font-semibold text-slate-900">
          {title}
        </h3>
        <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
          {copy}
        </p>
      </div>
    </article>
  );
};

export const OurValues = () => {
  return (
    <section className="bg-gradient-to-b from-slate-200 to-slate-300/80 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Our Values
          </h2>
          <div className="mx-auto mt-4 w-16 h-1 bg-sky-600 rounded-full" />
          <p className="mt-4 text-sm md:text-base text-slate-600">
            The principles that guide everything we do
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid gap-8 md:grid-cols-3">
          <ValueCard
            title="Integrity"
            copy="We conduct our business with honesty, transparency, and ethical practices. Our word is our bond, and we stand by our commitments."
          >
            {/* handshake icon */}
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M2 12l6 6 4-4"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 7l6 6 7-7"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ValueCard>

          <ValueCard
            title="Quality"
            copy="We are committed to delivering products and services that meet the highest standards of excellence and customer satisfaction."
          >
            {/* medal icon */}
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M12 3v6"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8 21l4-3 4 3"
                stroke="white"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="12" cy="11" r="6" stroke="white" strokeWidth="1.6" />
            </svg>
          </ValueCard>

          <ValueCard
            title="Global Perspective"
            copy="We embrace cultural diversity and understand the nuances of international trade, enabling us to serve clients across borders effectively."
          >
            {/* globe icon */}
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden
            >
              <path
                d="M12 2a10 10 0 100 20 10 10 0 000-20z"
                stroke="white"
                strokeWidth="1.6"
              />
              <path
                d="M2 12h20M12 2c3 4 3 12 0 20M12 2C9 6 9 18 12 22"
                stroke="white"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
          </ValueCard>
        </div>

        {/* CTA band */}
        <div className="mt-16 md:mt-20 text-center">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white/95">
            Ready to experience the Nexariom difference?
          </h3>

          <div className="mt-6 flex justify-center gap-4">
            {/* Contact Us button */}
            <a
              href="/contact"
              className="
        inline-block px-6 py-3 rounded-lg 
        bg-white text-slate-800 font-medium shadow
        transition-colors duration-300
        hover:bg-gray-300 hover:text-black
      "
            >
              Contact Us
            </a>

            {/* Explore Products button */}
            <a
              href="/products"
              className="
        inline-block px-6 py-3 rounded-lg
        border border-white/60 text-white/90 font-medium
        bg-white/10 
        transition-colors duration-300
        hover:bg-white hover:text-black
      "
            >
              Explore Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValues;
