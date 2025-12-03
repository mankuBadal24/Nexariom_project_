import React from "react";

const LeaderCard = ({ name, role, description }) => {
  return (
    <article
      className="
        bg-white rounded-2xl overflow-hidden shadow-sm border border-transparent
        transition-all duration-300 
        hover:shadow-xl hover:border-sky-200 hover:-translate-y-1
      "
    >
      {/* Top grey hero */} 
      <div className="bg-slate-50 h-40 md:h-48 flex items-center justify-center">
        <svg
          width="72"
          height="72"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden
          className="text-sky-500"
        >
          <path
            d="M12 12a4 4 0 100-8 4 4 0 000 8z"
            fill="currentColor"
            opacity="0.95"
          />
          <path
            d="M4.5 20a7.5 7.5 0 0115 0"
            fill="currentColor"
            opacity="0.95"
          />
        </svg>
      </div>

      {/* Bottom content */}
      <div className="p-8 text-center md:text-left">
        <h3 className="text-2xl md:text-2xl font-semibold text-slate-900">
          {name}
        </h3>

        <p className="mt-2">
          <a
            href="#"
            className="text-sky-600 font-medium hover:underline"
            aria-label={`${name} role`}
          >
            {role}
          </a>
        </p>

        <p className="mt-6 text-slate-700 leading-relaxed">{description}</p>
      </div>
    </article>
  );
};

export const OurLeaders = () => {
  return (
    <section className="bg-white/80 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Our Leadership
          </h2>
          <div className="mx-auto mt-4 w-16 h-1 bg-sky-600 rounded-full" />
          <p className="mt-4 text-sm md:text-base text-slate-600">
            The visionaries behind Nexariom Trade LLP
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          <LeaderCard
            name="Wilmer Drake"
            role="Founder & CEO"
            description="With over 15 years of experience in international trade, Wilmer brings strategic vision and operational excellence to Nexariom Trade."
          />

          <LeaderCard
            name="Mercia Sharp"
            role="Co-Founder & CEO"
            description="Mercia's expertise in supply chain management and customer relations has been instrumental in building our global network of partners and clients."
          />
        </div>
      </div>
    </section>
  );
};

export default OurLeaders;
