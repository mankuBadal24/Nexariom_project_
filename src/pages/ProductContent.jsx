import React, { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineAdjustments } from "react-icons/hi";

const sampleProducts = [
  {
    id: 1,
    title: "Men's Casual Shirt",
    subtitle: "Premium quality cotton shirt",
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    inStock: true,
    rating: 4.5,
    createdAt: "2025-07-01",
  },
  {
    id: 2,
    title: "Women's Summer Dress",
    subtitle: "Light & breezy style",
    image:
      "https://images.unsplash.com/photo-1529903384028-929ae5dccdf1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    inStock: true,
    rating: 4.8,
    createdAt: "2025-06-28",
  },
  {
    id: 3,
    title: "Kids Sneakers",
    subtitle: "Comfortable and durable",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    inStock: true,
    rating: 4.2,
    createdAt: "2025-06-25",
  },
  {
    id: 4,
    title: "Organic Basmati Rice",
    subtitle: "5kg package",
    image: "https://www.nexariom.com/images/OrganicBasmatiRice.jpg",
    inStock: true,
    rating: 4.7,
    createdAt: "2025-05-05",
  },
  {
    id: 5,
    title: "Red Lentils",
    subtitle: "1kg pack of premium red lentils",
    image: "https://www.nexariom.com/images/RedLentils.jpg",
    inStock: true,
    rating: 4.3,
    createdAt: "2025-04-15",
  },
  {
    id: 6,
    title: "Tractor",
    subtitle: "Machinery ",
    image: "https://www.nexariom.com/images/Tractor.avif",
    inStock: true,
    rating: 4.6,
    createdAt: "2025-03-20",
  },
  {
    id: 7,
    title: "Men's Jeans",
    subtitle: "Stylish denim jeans",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    inStock: true,
    rating: 4.1,
    createdAt: "2025-02-10",
  },
  {
    id: 8,
    title: "Women's Handbag",
    subtitle: "Elegant leather handbag",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    inStock: true,
    rating: 4.4,
    createdAt: "2025-01-30",
  },
  {
    id: 9,
    title: "Kid's Jacket",
    subtitle: "Warm and cozy",
    image: "https://www.nexariom.com/images/KidsJacket.jpg",
    inStock: true,
    rating: 4.0,
    createdAt: "2024-12-15",
  },
  {
    id: 10,
    title: "Jasmine Rice",
    subtitle: "fragrant jasmine rice",
    image: "https://www.nexariom.com/images/JasmineRice.jpg",
    inStock: true,
    rating: 4.5,
    createdAt: "2024-11-20",  
  },
  {
    id: 11,
    title: "Chickpeas",
    subtitle: "1 bowl pack of premium chickpeas",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    inStock: true,
    rating: 4.2,
    createdAt: "2024-10-05",
  },
  {
    id: 12,
    title: "Harvaster",
    subtitle: "High-yield corn seeds for farming",
    image: "https://www.nexariom.com/images/Harvester.jpg",
    inStock: true,
    rating: 4.6,
    createdAt: "2024-09-12",
  },
  {
    id: 13,
    title: "Men's Formal suit",
    subtitle: "Elegant formal wear",
    image:"https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    inStock: true,
    rating: 4.3,
    createdAt: "2024-08-22",
  },
  {
    id: 14,
    title: "Kid's Backpack",
    subtitle: "Durable and spacious",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    inStock: true,
    rating: 4.1,
    createdAt: "2024-07-18",
  },
  {
    id: 15,
    title:"Brown Rice",
    subtitle: "Healthy brown rice",
    image: "https://www.nexariom.com/images/BrownRice.webp",
    inStock: true,
    rating: 4.4,
    createdAt: "2024-06-25",
  },
  {
    id: 16,
    title: "Men's Watch",
    subtitle: "Luxury wrist watch",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    inStock: true,
    rating: 4.7,
    createdAt: "2024-05-30",
  },
  {
    id: 17,
    title: "Kid's Bycycle",
    subtitle: "Safe and fun",
    image: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    inStock: true,
    rating: 4.2,
    createdAt: "2024-04-14",
  },
  {
    id: 18,
    title:"Kid's Sunglasses",
    subtitle: "Stylish protection",
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    inStock: true,
    rating: 4.5,
    createdAt: "2024-03-19",
  },
];

const PAGE_SIZE = 20;

function Stars({ rating }) {
  const rounded = Math.round(rating * 10) / 10;
  const filled = Math.round(rounded);
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < filled ? "text-yellow-400" : "text-gray-300"
            }`}
            viewBox="0 0 20 20"
            fill={i < filled ? "currentColor" : "none"}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden
          >
            <path
              d="M10 1.5l2.6 5.3 5.8.5-4.2 3.7 1.2 5.7L10 13.9 4.6 17.7l1.2-5.7L1.6 8.3l5.8-.5L10 1.5z"
              stroke={i < filled ? "none" : "currentColor"}
            />
          </svg>
        ))}
      </div>
      <div className="text-sm text-yellow-500">({rounded})</div>
    </div>
  );
}

export const ProductContent = () => {
  const [q, setQ] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [showFilters, setShowFilters] = useState(false);
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const lower = q.trim().toLowerCase();
    let list = sampleProducts.filter((p) =>
      !lower ? true : p.title.toLowerCase().includes(lower)
    );

    if (sortBy === "name")
      list = list.sort((a, b) => a.title.localeCompare(b.title));
    else if (sortBy === "newest")
      list = list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return list;
  }, [q, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  if (page > totalPages) setPage(1);
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const goTo = (p) => {
    const num = Math.min(Math.max(1, p), totalPages);
    setPage(num);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen bg-white">
      {/* HERO BAND */}
      <header className="bg-blue-500">
        <div className="max-w-7xl mx-auto px-6 py-12 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
            Our Products
          </h1>
          <p className="text-blue-100 mt-3 max-w-2xl mx-auto">
            Discover our wide range of international products
          </p>
        </div>
      </header>

      {/* SEARCH / CONTROLS */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="w-full md:w-[380px] lg:w-[420px] xl:w-[480px]">
              <div className="relative">
                <div className="rounded-full bg-white shadow-[0_8px_24px_rgba(2,6,23,0.06)]">
                  <input
                    value={q}
                    onChange={(e) => {
                      setQ(e.target.value);
                      setPage(1);
                    }}
                    placeholder="Search for products..."
                    className="w-full rounded-full py-3 pl-5 pr-36 text-gray-700 placeholder-gray-400 outline-none text-sm md:text-base"
                  />
                </div>

                <button className="absolute right-1 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 shadow-md text-sm md:text-base z-50">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10">
                    <FiSearch />
                  </span>
                  <span className="hidden sm:inline font-medium">Search</span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-4 justify-end flex-none">
              <div className="text-gray-600 text-sm whitespace-nowrap">
                Showing {filtered.length} of {sampleProducts.length} products
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-md border border-gray-200 px-3 py-2 bg-white text-sm"
              >
                <option value="name">Sort by Name</option>
                <option value="newest">Sort by Newest</option>
              </select>

              <button
                onClick={() => setShowFilters((s) => !s)}
                className="flex items-center gap-2 px-3 py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50"
              >
                <HiOutlineAdjustments />
                <span className="hidden sm:inline">Filters</span>
              </button>
            </div>
          </div>

          {showFilters && (
            <div className="mt-4 p-4 border rounded-md bg-gray-50">
              <p className="text-sm text-gray-600">
                Filter options go here — categories, price, etc.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {paginated.map((p) => (
              <article
                key={p.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition relative group"
              >
                <div className="relative">
                  <div className="w-full h-48 bg-gray-100 overflow-hidden rounded-t-2xl">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  </div>

                  {p.inStock && (
                    <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-medium px-3 py-1 rounded-full shadow">
                      In Stock
                    </span>
                  )}
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-gray-500 mb-4">{p.subtitle}</p>

                  {/* Footer: only stars, left-aligned */}
                  <div className="flex items-center justify-start">
                    <Stars rating={p.rating ?? 0} />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* PAGINATION */}
          <div className="mt-10 flex justify-center">
            <nav className="inline-flex items-center gap-3">
              <button
                onClick={() => goTo(page - 1)}
                className="px-3 py-2 rounded-md bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50"
                disabled={page === 1}
              >
                Prev
              </button>

              {Array.from({ length: totalPages }).map((_, i) => {
                const num = i + 1;
                return (
                  <button
                    key={num}
                    onClick={() => goTo(num)}
                    className={`w-9 h-9 rounded-full flex items-center justify-center ${
                      page === num
                        ? "bg-blue-600 text-white shadow"
                        : "bg-white"
                    }`}
                  >
                    {num}
                  </button>
                );
              })}

              <button
                onClick={() => goTo(page + 1)}
                className="px-3 py-2 rounded-md bg-white shadow-sm hover:bg-gray-50 disabled:opacity-50"
                disabled={page === totalPages}
              >
                Next
              </button>
            </nav>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductContent;
