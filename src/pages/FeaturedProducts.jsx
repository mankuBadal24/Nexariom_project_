// FeaturedProducts.jsx
import React from "react";
import { Link } from "react-router-dom";

/**
 * FeaturedProducts component
 * - Tailwind CSS based
 * - Responsive: 1 / 2 / 4 columns
 * - Buttons navigate to /products/:id
 */

const sampleProducts = [
  {
    id: 1,
    title: "Men's Casual Shirt",
    subtitle: "Premium quality cotton shirt",
    image: "/src/assets/Men'sCasualShirt (1).webp", // replace path
  },
  {
    id: 2,
    title: "Women's Winter Jacket",
    subtitle: "Warm and stylish",
    image: "/src/assets/Women'sWinterJacket.avif",
  },
  {
    id: 3,
    title: "Kids Sneakers",
    subtitle: "Comfortable and durable",
    image: "/src/assets/KidsSneakers.webp",
  },
  {
    id: 4,
    title: "Organic Basmati Rice",
    subtitle: "5kg package",
    image: "/src/assets/OrganicBasmatiRice.webp",
  },
  {
    id: 5,
    title: "Kids Toy Set",
    subtitle: "Educational and fun",
    image: "/src/assets/photo-1587654780291-39c9404d746b.avif",
  },
  {
    id: 6,
    title: "White Rice",
    subtitle: "premium white rice",
    image: "/src/assets/WhiteRice.webp",
  },
  {
    id: 7,
    title: "Kidney Beans",
    subtitle: "High-quality kidney beans",
    image: "/src/assets/photo-1540420773420-3366772f4999.avif",
  },
  {
    id: 8,
    title: "Irrigation System",
    subtitle: "Efficient water management",
    image: "/src/assets/IrrigationSystem.webp",
  },
];

export const FeaturedProducts = ({ products = sampleProducts }) => {
  return (
    <section id="featured" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-4xl font-extrabold text-gray-900">
            Featured Products
          </h2>
          <div className="mt-3 flex justify-center">
            <div className="w-16 h-1 rounded-full bg-sky-500"></div>
          </div>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto">Bestsellers from around the world</p>
        </div>

        {/* Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((p) => (
            <article
              key={p.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-0 overflow-hidden border border-transparent"
            >
              {/* image area */}
              <div className="bg-gray-50 p-6 flex items-center justify-center">
                <img src={p.image} alt={p.title} className="w-full max-w-[220px] h-[180px] object-contain" />
              </div>

              {/* card body */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 mb-4">{p.subtitle}</p>

                <div className="mt-2">
                  {/* Navigate to /products/:id on tap */}
                  <Link
                    to="/products"
                    className="inline-block px-4 py-2 bg-sky-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-sky-700 transition"
                    aria-label={`Explore ${p.title}`}
                  >
                    Explore More
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
