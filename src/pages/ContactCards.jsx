import React from "react";

const contacts = [
  {
    title: "Our Address",
    lines: [
      "Birkevej 43, Sandved",
      "Region Sjælland, 4262",
      "Denmark",
    ],
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" className="stroke-current">
        <path d="M12 11.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M19.5 10.5C19.5 15.5 12 22 12 22s-7.5-6.5-7.5-11.5a7.5 7.5 0 1 1 15 0z" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    title: "Phone Number",
    lines: ["+45 91-73-39-57", "Mon–Fri: 9:00 AM – 5:00 PM"],
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" className="stroke-current">
        <path d="M22 16.92v3a1 1 0 0 1-1.11 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.2-6.2A19.86 19.86 0 0 1 1.08 3.11 1 1 0 0 1 2 2h3a1 1 0 0 1 1 .75c.12.93.34 1.85.66 2.72a1 1 0 0 1-.24 1.02l-1.2 1.2a16 16 0 0 0 8.6 8.6l1.2-1.2a1 1 0 0 1 1.02-.24c.87.32 1.79.54 2.72.66A1 1 0 0 1 22 16.92z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    tel: "+459173913957",
  },
  {
    title: "Email Address",
    lines: ["info@nexariom.com", "support@nexariom.com"],
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" className="stroke-current">
        <path d="M3 8.5v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M21 8.5l-9 6-9-6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    email: "info@nexariom.com",
  },
];

export const ContactCards = () => {
  return (
    <section className="w-full bg-[#e2e5eb] py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {contacts.map((c, idx) => (
            <article
              key={c.title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200"
              aria-labelledby={`contact-${idx}-title`}
            >
              <div className="flex flex-col items-center">
                {/* Icon circle */}
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-6
                                bg-gradient-to-br from-indigo-500 to-purple-500 text-white
                                shadow-[0_18px_35px_rgba(99,102,241,0.12)]">
                  <span className="inline-flex">{c.icon}</span>
                </div>

                <h3 id={`contact-${idx}-title`} className="text-xl font-semibold text-gray-900 mb-3">
                  {c.title}
                </h3>

                <div className="text-center text-gray-600 leading-relaxed">
                  {c.lines.map((line, i) => (
                    <p key={i} className="text-sm md:text-base">{line}</p>
                  ))}

                  {/* optional tel / email links */}
                  {c.tel && (
                    <p className="mt-2">
                      <a
                        href={`tel:${c.tel}`}
                        className="text-sm md:text-base text-gray-700 hover:text-gray-900 transition"
                      >
                        {c.lines[0]}
                      </a>
                    </p>
                  )}

                  {c.email && (
                    <div className="mt-2 space-y-0">
                      <a
                        href={`mailto:${c.email}`}
                        className="block text-sm md:text-base text-gray-700 hover:text-gray-900 transition"
                      >
                        {c.lines[0]}
                      </a>
                      {c.lines[1] && (
                        <a
                          href={`mailto:${c.email}`}
                          className="block text-sm md:text-base text-gray-700 hover:text-gray-900 transition"
                        >
                          {c.lines[1]}
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
