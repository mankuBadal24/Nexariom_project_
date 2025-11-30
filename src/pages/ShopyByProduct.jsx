
import React from "react";
import { FaTshirt, FaFemale, FaChild, FaLeaf, FaHome, FaHeartBroken } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaHouseMedical } from "react-icons/fa6";
import { MdAgriculture } from "react-icons/md";
const categories = [
  {
    id: "mens",
    title: "Men's Wear",
    subtitle: "Latest fashion trends",
    Icon: FaTshirt,
  },
  {
    id: "womens",
    title: "Women's Wear",
    subtitle: "Elegant and stylish",
    Icon: FaFemale,
  },
  {
    id: "kids",
    title: "Kids Wear",
    subtitle: "Comfortable and cute",
    Icon: FaChild,
  },
  {
    id: "rice",
    title: "Rice & Pulses",
    subtitle: "Organic and healthy",
    Icon: FaLeaf,
  },
  {
    id: "agriculture",
    title: "Agriculture Machinery",
    subtitle: "Modern farming solutions",
    Icon: MdAgriculture ,
  },
  {
    id: "electronics",
    title: "Electronics",
    subtitle: "Latest gadgets",
    Icon: FaMobileAlt  ,
  },
  {
    id: "Home & Kitchen",
    title: "Home & Kitchen",
    subtitle: "Essentials for your home",
    Icon: FaHome  ,
  },
  {
    id: "Health & Beauty",
    title: "Health & Beauty",
    subtitle: "Wellness products",
    Icon: FaHeartBroken,
  },
];

export const ShopyByProduct = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">Shop By Category</h2>
          <div className="mt-3 w-20 h-1 bg-sky-500 mx-auto rounded-sm"></div>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Explore our wide range of international products
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map(({ id, title, subtitle, Icon }) => (
            <article
              key={id}
              className="bg-white cursor-pointer rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
              role="group"
            >
              {/* Icon / visual area */}
              <div className="bg-slate-50 p-12 flex items-center justify-center">
                <div
                  className="rounded-xl w-24 h-24 flex items-center justify-center"
                  aria-hidden="true"
                >
                  <Icon size={60} className="text-sky-500" />
                </div>
              </div>

              {/* Title area */}
              <div className="bg-white p-6 text-center">
                <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopyByProduct;
