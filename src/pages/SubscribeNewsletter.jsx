import React from "react";

export const SubscribeNewsletter = () => {
  return (
    <section
      className="py-20"
      style={{
        background:
          "linear-gradient(90deg, #3fa3ff 0%, #6b59ff 50%, #8d3bff 100%)",
      }}
    >
      <div className="max-w-3xl mx-auto px-6 text-center text-white">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3">
          Subscribe to Our Newsletter
        </h2>

        <p className="text-lg opacity-90 mb-10">
          Get updates on new products and special offers
        </p>

        {/* Input + Button */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex items-center justify-center max-w-2xl mx-auto"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-5 py-4 rounded-l-xl text-slate-900 outline-none text-lg bg-white"
          />

          <button
            type="submit"
            className="px-8 py-4 bg-black text-white rounded-r-xl cursor-pointer text-lg font-medium hover:bg-gray-600 transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeNewsletter;
