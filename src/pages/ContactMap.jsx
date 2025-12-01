import React from "react";

export const ContactMap = () => {
  return (
    <div className="w-full flex flex-col items-center py-12 px-4 bg-[#e6edf5]">
      <h2 className="text-3xl font-bold text-center mb-2">Our Location</h2>
      <p className="text-center text-gray-600 mb-8">Visit our office in Denmark</p>

      <div className="w-full max-w-6xl rounded-3xl overflow-hidden shadow-md bg-white p-2">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2255.282963986593!2d12.053833176658892!3d55.618659673087926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4652f8f782f1b7f7%3A0x84cdf508c24f17df!2sSyntegon%20A%2FS!5e0!3m2!1sen!2sin!4v1733083580000!5m2!1sen!2sin"
          className="w-full h-[400px] rounded-2xl border-none"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};
