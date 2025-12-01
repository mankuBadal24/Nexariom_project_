// src/components/FaqQuestions.jsx
import React, { useState } from "react";

const tabs = [
  "All Questions",
  "Shipping & Delivery",
  "Returns & Refunds",
  "Orders & Payments",
  "Products & Quality",
  "International",
];

const faqData = {
  "Shipping & Delivery": [
    {
      q: "How long does shipping take for international orders?",
      a: "International shipping times vary by destination. Typically, orders take 7–14 business days to arrive. Express shipping options are available at checkout for faster delivery (3–7 business days). You’ll receive a tracking number once your order ships.",
    },
    {
      q: "What are the shipping costs for international orders?",
      a: "Shipping costs depend on the destination country, package weight, and shipping method selected. We offer free standard shipping on orders over €200. During checkout, you'll see the exact shipping cost based on your location and order details.",
    },
    {
      q: "Do you offer express shipping options?",
      a: "Yes, we offer express shipping through DHL, FedEx, and UPS for most international destinations. Express shipping typically takes 3–7 business days. The cost will be calculated at checkout based on your location and order size.",
    },
  ],

  "Returns & Refunds": [
    {
      q: "What is your return policy?",
      a: "We offer a 30-day return policy for most items. Products must be unused, in original packaging, and with all tags attached. Some items like perishable goods and personal care products are final sale. For international returns, customers are responsible for return shipping costs unless the item was defective or we made an error.",
    },
    {
      q: "How do I initiate a return?",
      a: 'To initiate a return, log into your account and go to "Order History." Select the item you want to return and follow the prompts. If you checked out as a guest, use the "Returns" form on our Contact page with your order number and email address. We\'ll email you a return label and instructions within 1–2 business days.',
    },
    {
      q: "How long does it take to process a refund?",
      a: "Once we receive your returned item, we process refunds within 3–5 business days. The time it takes for the refund to appear in your account depends on your payment method and bank processing times. Credit card refunds typically take 5–10 business days to appear on your statement.",
    },
  ],

  "Orders & Payments": [
    {
      q: "What payment methods do you accept?",
      a: "We accept various payment methods including Visa, MasterCard, American Express, PayPal, Apple Pay, and Google Pay. For some countries, we also offer local payment options. All transactions are secured with SSL encryption to protect your information.",
    },
    {
      q: "Can I modify or cancel my order after placing it?",
      a: "You can modify or cancel your order within 1 hour of placing it by contacting our customer service team. After this window, your order enters our processing system and cannot be changed. If you need to make changes after this time, you may need to refuse delivery or initiate a return once received.",
    },
    {
      q: "Why was my order declined?",
      a: "Order declines can happen for several reasons: insufficient funds, payment method issues, billing address discrepancies, or security checks. We recommend verifying your payment information and contacting your bank if necessary.",
    },
  ],

  "Products & Quality": [
    {
      q: "Are your products authentic and high quality?",
      a: "Yes, we guarantee that all products sold on Nexariom are 100% authentic and sourced directly from authorized suppliers and brands. We have strict quality control processes in place. If you receive an item that doesn't meet your expectations, please contact our customer service team for assistance.",
    },
    {
      q: "Do you offer product warranties?",
      a: "Many of our products come with manufacturer warranties. The warranty details are provided on product pages and included with your purchase. For electronics and appliances, warranty terms vary by brand and product. Please check individual product listings for specific warranty information.",
    },
  ],

  International: [
    {
      q: "Do you ship to all countries?",
      a: "We ship to over 150 countries worldwide. However, some restrictions may apply based on local import regulations, especially for agricultural products and machinery. During checkout, you can enter your address to confirm if we deliver to your location. Some remote areas may have additional shipping restrictions.",
    },
    {
      q: "Are there additional fees for international orders?",
      a: "International orders may be subject to customs duties, taxes, or import fees based on your country's regulations. These fees are not included in the product price or shipping cost and are the responsibility of the recipient. Check with your local customs office for more information.",
    },
    {
      q: "What currency are your prices in?",
      a: "All prices on our website are displayed in Euros (EUR). During checkout, you can choose to see the approximate total in your local currency, but the final charge will be in EUR. Your bank will convert this amount to your local currency based on their exchange rates.",
    },
  ],
};

export const FaqQuestions = () => {
  const [activeTab, setActiveTab] = useState("Shipping & Delivery");
  // allow multiple open cards (behaves like screenshot)
  const [openSet, setOpenSet] = useState(new Set());

  const toggleFAQ = (index) => {
    setOpenSet((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  // compute list for the active tab (All Questions flattens all)
  const currentList =
    activeTab === "All Questions"
      ? Object.values(faqData).flat()
      : faqData[activeTab] || [];

  return (
    <section className="w-full bg-[#e9eef7] py-10 px-4 sm:px-6 lg:px-10">
      {/* TABS - horizontally scrollable on mobile */}
      <div className="mb-10">
        <div className="max-w-6xl mx-auto">
          <div className="overflow-x-auto -mx-4 px-4">
            <div className="flex gap-3 w-max">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium shadow-md transition ${
                    activeTab === tab
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-800 hover:bg-gray-50"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Title */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
          {activeTab === "All Questions"
            ? "Frequently Asked Questions"
            : activeTab}
        </h2>

        {/* FAQ LIST */}
        <div className="space-y-6">
          {currentList.map((item, idx) => {
            // create a stable index per tab so toggling won't conflict
            const keyIndex = `${activeTab}-${idx}`;
            const isOpen = openSet.has(keyIndex);

            return (
              <div
                key={keyIndex}
                className="bg-white rounded-2xl p-6 shadow-lg transition"
                aria-live="polite"
              >
                <button
                  onClick={() => toggleFAQ(keyIndex)}
                  className="w-full flex items-start justify-between gap-4 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg">
                      {item.q}
                    </h3>
                  </div>

                  {/* caret icon */}
                  <div className="flex-shrink-0 text-gray-600 mt-1">
                    <svg
                      className={`w-6 h-6 transform transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M6 9l6 6 6-6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </button>

                {/* answer: smooth collapse using max-height */}
                <div
                  className={`mt-4 text-gray-700 leading-relaxed overflow-hidden transition-[max-height] duration-300 ${
                    isOpen ? "max-h-[600px]" : "max-h-0"
                  }`}
                >
                  <p className="mb-1">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA: Still have questions */}
        <div className="mt-12 bg-white rounded-2xl p-8 shadow-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our customer support
              team is here to help!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 8l7.89 5.26a2 2 0 0 0 2.22 0L21 8"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                </svg>
                Email Support
              </a>

              <a
                href="#"
                className="
    inline-flex items-center gap-2 
    px-5 py-3 rounded-lg border border-blue-200 
    text-blue-600 font-medium shadow-sm 
    hover:bg-blue-500 hover:text-white 
    hover:border-blue-500
    transition
  "
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition stroke-current"
                >
                  <path
                    d="M21 15a2 2 0 0 1-2 2H7l-4 3V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Live Chat
              </a>

              <a
                href="tel:+4573913957"
                className="
    inline-flex items-center gap-2 
    px-5 py-3 rounded-lg border border-gray-200 
    text-gray-800 font-medium shadow-sm 
    hover:bg-black hover:text-white 
    hover:border-black
    transition
  "
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="transition stroke-current"
                >
                  <path
                    d="M22 16.92V21a1 1 0 0 1-1.11 1 19.86 19.86 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 9.74 19.86 19.86 0 0 1 0 1.11 1 1 0 0 1 1 0h4.09a1 1 0 0 1 1 .79c.12.95.33 1.88.63 2.77a1 1 0 0 1-.24 1.02L5.7 7.7a16 16 0 0 0 8.6 8.6l2.12-1.79a1 1 0 0 1 1.02-.24c.9.3 1.82.51 2.77.63a1 1 0 0 1 .79 1V22z"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                +45 73 91 39 57
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqQuestions;
