import React from "react";

export const OurStory = () => {
  return (
    <section className="bg-slate-100 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900">
            Our Story
          </h2>

          {/* blue underline */}
          <div className="mx-auto mt-4 w-16 h-1 bg-sky-600 rounded-full" />

          <p className="mt-6 text-md md:text-lg text-slate-700 max-w-2xl mx-auto">
            From humble beginnings to global trade leaders
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Card 1 */}
          <article className="bg-white rounded-xl p-8 shadow-md border border-transparent hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Our Beginning
            </h3>
            <div className="text-slate-700 space-y-4 leading-relaxed">
              <p>
                Nexariom Trade LLP was established with a vision to create a
                bridge between quality international products and customers
                worldwide. What started as a small trading company has grown
                into a respected global trade partner.
              </p>


              <p>
                Our founders, Wilmer Drake and Mercia Sharp, combined their
                expertise in international business and logistics to create a
                company that values relationships as much as transactions.
              </p>
            </div>
          </article>

          {/* Card 2 */}
          <article className="bg-white rounded-xl p-8 shadow-md border border-transparent hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-slate-900 mb-4">
              Our Growth
            </h3>

            <div className="text-slate-700 space-y-4 leading-relaxed">
              <p>
                Over the years, we've expanded our product portfolio to include
                clothing, agricultural products, electronics, and machinery.
                Our customer base now spans across continents, with clients in
                Europe, Asia, and the Americas.
              </p>

              <p>
                Despite our growth, we've maintained our commitment to
                personalized service and quality assurance that defined our
                early days.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
