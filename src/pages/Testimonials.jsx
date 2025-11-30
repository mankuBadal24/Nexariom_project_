
const TESTIMONIALS = [
  {
    id: 1,
    text:
      "The quality of products I received was exceptional. International shipping was faster than I expected!",
    name: "Wilmer Drake",
    role: "CEO, Nexariom Trade",
    initials: "WD",
  },
  {
    id: 2,
    text:
      "I've been shopping here for months and the consistency in quality is impressive. Highly recommended!",
    name: "Mercia Sharp",
    role: "Co-Founder, Nexariom",
    initials: "MS",
  },
  {
    id: 3,
    text:
      "The agriculture machinery I purchased has transformed my farming operation. Great products and service!",
    name: "Robert Sorensen",
    role: "Denmark",
    initials: "RS",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* header */}
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            What Our Customers Say
          </h2>
          <div className="mt-3 w-20 h-1 bg-sky-500 mx-auto rounded-sm" />
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
            Read experiences from our global customers
          </p>
        </header>

        {/* testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.id}
              className="relative bg-white rounded-2xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1"
            >
              {/* decorative faint quote mark top-right */}
              <span
                aria-hidden="true"
                className="absolute top-4 right-6 text-5xl text-slate-100 pointer-events-none select-none"
                style={{ lineHeight: 1 }}
              >
                “
              </span>

              <div className="p-8 md:p-10">
                <blockquote className="text-slate-700 italic text-base md:text-lg leading-relaxed mb-8">
                  {t.text}
                </blockquote>

                <div className="flex items-center gap-4">
                  {/* avatar circle with initials */}
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-sky-500 text-white font-semibold flex items-center justify-center shadow">
                      {t.initials}
                    </div>
                  </div>

                  {/* name and role */}
                  <div>
                    <div className="text-sm md:text-base font-semibold text-slate-900">
                      {t.name}
                    </div>
                    <div className="text-xs md:text-sm text-slate-500">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
