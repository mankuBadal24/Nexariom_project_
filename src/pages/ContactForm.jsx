import React from "react";

export const ContactForm = () => {
  return (
    <section className="w-full bg-[#f7f9fb] py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Send Us a Message
          </h2>
          <div className="mt-2 h-1 w-16 mx-auto bg-blue-500 rounded" />
          <p className="mt-3 text-gray-600">
            We'll get back to you as soon as possible
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md p-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Message sent (mock)");
                }}
                className="space-y-6"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-gray-600 mb-2">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Enter your name"
                      className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm text-gray-600 mb-2">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm text-gray-600 mb-2">
                    Subject
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-600 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={8}
                    placeholder="Write your message..."
                    className="w-full rounded-md border border-gray-200 bg-white px-4 py-3 text-sm text-gray-800 resize-vertical focus:outline-none focus:ring-2 focus:ring-blue-200"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold px-6 py-3 rounded-lg shadow hover:from-blue-600 hover:to-purple-600 transition"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="stroke-current">
                      <path d="M22 2L11 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 2l-7 20-4-9-9-4 20-7z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          
          <aside className="lg:col-span-1">
            <div className="relative">
              <article
                className="bg-white rounded-3xl shadow-2xl overflow-hidden"
                role="region"
                aria-label="Contact card"
              >
                
                <div
                  className="h-3 w-full"
                  style={{
                    background:
                      "linear-gradient(90deg, #4f46e5 0%, #7c3aed 25%, #ec4899 60%, #ff3b7d 100%)",
                  }}
                />

                <div className="p-6 md:p-8 text-center">
                  
                  <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight">
                    <span className="text-blue-500">Nexariom</span>
                    <span className="text-pink-500">Trade</span>
                  </h3>

                  <p className="mt-3 text-sm font-semibold text-gray-800">Nexariom Trade LLP</p>
                  <p className="text-sm text-blue-500 mt-1">Global Trading Partners</p>

                  <div className="mt-6 border-t pt-6 border-gray-100" />

                
                  <dl className="mt-4 text-sm text-gray-700 space-y-3">
                    <div className="flex items-start justify-center gap-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="stroke-current text-gray-700 mt-0.5">
                        <path d="M12 21s-7.5-6.5-7.5-11.5a7.5 7.5 0 1 1 15 0C19.5 14.5 12 21 12 21z" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="10.5" r="2.2" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="text-left">
                        <div>Birkevej 43, Sandved, 4262</div>
                        <div>Denmark</div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center gap-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="stroke-current text-gray-700">
                        <path d="M22 16.92V21a1 1 0 0 1-1.11 1 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6.2-6.2A19.86 19.86 0 0 1 1.08 3.11 1 1 0 0 1 2 2h3a1 1 0 0 1 1 .75c.12.93.34 1.85.66 2.72a1 1 0 0 1-.24 1.02l-1.2 1.2a16 16 0 0 0 8.6 8.6l1.2-1.2a1 1 0 0 1 1.02-.24c.87.32 1.79.54 2.72.66A1 1 0 0 1 22 16.92z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <a href="tel:+459173913957" className="text-gray-700 hover:text-gray-900">+45 91-73-39-57</a>
                    </div>

                    <div className="flex items-center justify-center gap-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="stroke-current text-gray-700">
                        <path d="M3 8.5v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M21 8.5l-9 6-9-6" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <a href="mailto:info@nexariom.com" className="text-gray-700 hover:text-gray-900">info@nexariom.com</a>
                    </div>

                    <div className="flex items-center justify-center gap-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="stroke-current text-gray-700">
                        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <a href="https://www.nexariom.com" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-gray-900">www.nexariom.com</a>
                    </div>
                  </dl>

                  
                  <div className="mt-6 flex items-center justify-center gap-3">
                    
                    <a href="#" className="w-8 h-8 rounded-full bg-white border border-gray-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="stroke-current">
                        <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.33 2 1.86 6.48 1.86 12.07 1.86 17.08 5.66 21 10.26 21v-7h-2.5v-2.9H10.26V8.6c0-2.45 1.46-3.8 3.7-3.8 1.03 0 2.1.18 2.1.18v2.3h-1.17c-1.15 0-1.5.71-1.5 1.44v1.74h2.56l-.41 2.9H13.4V21c4.6 0 8.4-3.92 8.4-8.93z" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>

                    <a href="#" className="w-8 h-8 rounded-full bg-white border border-gray-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="stroke-current">
                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12.13 7v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5V5a7 7 0 0 0-.08-1.6A7.72 7.72 0 0 0 23 3z" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>

                    <a href="#" className="w-8 h-8 rounded-full bg-white border border-gray-100 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="stroke-current">
                        <path d="M16 8a6 6 0 0 1 6 6v6h-4v-6a2 2 0 0 0-2-2h-2v8H8v-8H6V8h4V6a4 4 0 0 1 4-4h2v6h-2z" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
