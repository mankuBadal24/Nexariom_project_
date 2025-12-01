import React, { useMemo, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineAdjustments } from "react-icons/hi";

const sampleProducts = [
  {
    id: 1,
    title: "Men's Casual Shirt",
    subtitle: "Premium quality cotton shirt",
    image: "/src/assets/casual_shirt.avif",
    inStock: true,
    rating: 4.5,
    createdAt: "2025-07-01",
  },
  {
    id: 2,
    title: "Women's Summer Dress",
    subtitle: "Light & breezy style",
    image: "/src/assets/women_summmer.avif",
    inStock: true,
    rating: 4.8,
    createdAt: "2025-06-28",
  },
  {
    id: 3,
    title: "Kids Sneakers",
    subtitle: "Comfortable and durable",
    image: "/src/assets/kidredsneaker.avif",
    inStock: true,
    rating: 4.2,
    createdAt: "2025-06-25",
  },
  {
    id: 4,
    title: "Organic Basmati Rice",
    subtitle: "5kg package",
    image: "/src/assets/OrganicBasmatiRice.webp",
    inStock: true,
    rating: 4.7,
    createdAt: "2025-05-05",
  },
  {
    id: 5,
    title: "Red Lentils",
    subtitle: "1kg pack of premium red lentils",
    image: "/src/assets/RedLentils.webp",
    inStock: true,
    rating: 4.3,
    createdAt: "2025-04-15",
  },
  // add more items for real use...
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
            className={`w-4 h-4 ${i < filled ? "text-yellow-400" : "text-gray-300"}`}
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
    let list = sampleProducts.filter((p) => (!lower ? true : p.title.toLowerCase().includes(lower)));
    if (sortBy === "name") list = list.sort((a, b) => a.title.localeCompare(b.title));
    else if (sortBy === "newest") list = list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">Our Products</h1>
          <p className="text-blue-100 mt-3 max-w-2xl mx-auto">Discover our wide range of international products</p>
        </div>
      </header>

      {/* SEARCH / CONTROLS */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-8 md:py-10">
          {/* layout:
              - stacked on small
              - md+: search left, controls right with space between
          */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            {/* SEARCH (constrained width on md+) */}
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
                    aria-label="Search for products"
                  />
                </div>

                <button
                  onClick={() => {}}
                  className="absolute right-1 top-1/2 -translate-y-1/2 inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4 py-2 shadow-md text-sm md:text-base z-50"
                  aria-label="Search"
                >
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/10">
                    <FiSearch />
                  </span>
                  <span className="hidden sm:inline font-medium">Search</span>
                </button>
              </div>
            </div>

            {/* CONTROLS */}
            <div className="flex items-center gap-4 justify-end flex-none">
              <div className="text-gray-600 text-sm whitespace-nowrap">
                Showing {filtered.length} of {sampleProducts.length} products
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="rounded-md border border-gray-200 px-3 py-2 bg-white text-sm"
                aria-label="Sort products"
              >
                <option value="name">Sort by Name</option>
                <option value="newest">Sort by Newest</option>
              </select>

              <button
                onClick={() => setShowFilters((s) => !s)}
                className="flex items-center gap-2 px-3 py-2 border border-blue-500 text-blue-600 rounded-md hover:bg-blue-50"
                aria-expanded={showFilters}
              >
                <HiOutlineAdjustments />
                <span className="hidden sm:inline">Filters</span>
              </button>
            </div>
          </div>

          {/* optional filter panel */}
          {showFilters && (
            <div id="filters-panel" className="mt-4 p-4 border rounded-md bg-gray-50">
              <p className="text-sm text-gray-600">Filter options go here — categories, price, etc.</p>
            </div>
          )}
        </div>
      </section>

      {/* PRODUCTS GRID */}
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
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{p.title}</h3>
                  <p className="text-gray-500 mb-4">{p.subtitle}</p>

                  <div className="flex items-center justify-between">
                    <button className="text-sm bg-blue-600 text-white px-3 py-2 rounded-md shadow-sm hover:bg-blue-700">
                      Explore More
                    </button>

                    <div>
                      <Stars rating={p.rating ?? 0} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* pagination */}
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
                      page === num ? "bg-blue-600 text-white shadow" : "bg-white"
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
