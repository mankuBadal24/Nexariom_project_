import React from "react";
import { Link } from "react-router-dom";

const offers = [
  {
    id: 1,
    title: "Summer Sale",
    subtitle: "Up to 50% off on summer clothing",
    cta: "Shop Now",
    href: "/products?tag=summer",
    gradient: "linear-gradient(90deg,#ff6b5a 0%,#ff8a66 100%)",
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Brand new products with 20% off",
    cta: "Explore",
    href: "/products?tag=new",
    gradient: "linear-gradient(90deg,#3b5bff 0%,#2a2b3f 100%)",
  },
];

export const SpecialOffers = () => {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            Special Offers
          </h2>
          <div className="mt-3 flex justify-center">
            <div className="w-14 h-1 rounded-full bg-sky-500"></div>
          </div>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">
            Limited time deals you don't want to miss
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {offers.map((o) => (
            <article
              key={o.id}
              className="rounded-2xl shadow-xl overflow-hidden"
            >
              <div
                className="p-10 md:p-12 rounded-2xl"
                style={{ background: o.gradient }}
              >
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {o.title}
                </h3>

                <p className="text-white/90 mb-6">{o.subtitle}</p>

                {/* UPDATED BUTTON */}
                <Link
                  to={o.href}
                  className="inline-block bg-white text-gray-900 font-medium px-4 py-2 rounded-md shadow-sm transition hover:bg-slate-200 hover:text-black"
                >
                  {o.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SpecialOffers;
