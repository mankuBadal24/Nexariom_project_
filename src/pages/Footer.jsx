import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

/**
 * Updated Footer: makes second screenshot look like the first one.
 * - Uses Tailwind v3+ utility classes (marker: utilities for bullets)
 * - Social icons styled as circular bubbles (bigger + border + shadow)
 * - Subtle dotted background (lighter) with proper spacing
 *
 * Replace your Footer.jsx with this file.
 */

const footerDots = {
  backgroundImage: `
    linear-gradient(90deg, #2A6FD6 0%, #5B2FCC 100%),
    radial-gradient(rgba(255,255,255,0.09) 2px, transparent 2px)
  `,
  backgroundSize: `
    100% 100%,
    22px 22px
  `,
  backgroundBlendMode: "overlay",
};

const Footer = () => {
  return (
    <footer style={footerDots} className="text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Nexariom Trade LLP</h3>
            <p className="text-white/90 mb-6 max-w-sm leading-relaxed">
              Your international shopping destination for quality products from
              around the world.
            </p>

            {/* Social Icons: bigger circular bubbles */}
            <div className="flex items-center gap-4 mt-2">
              {[
                { Icon: FaFacebookF, label: "Facebook", to: "/" },
                { Icon: FaTwitter, label: "Twitter", to: "/" },
                { Icon: FaInstagram, label: "Instagram", to: "/" },
                { Icon: FaLinkedinIn, label: "LinkedIn", to: "/" },
              ].map(({ Icon, label, to }) => (
                <Link
                  key={label}
                  to={to}
                  aria-label={label}
                  className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/12 border border-white/10 shadow-sm hover:bg-white/20 transition-transform transform hover:-translate-y-1"
                >
                  <Icon size={16} className="text-white" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 2 */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>

            {/* list with white bullets matching screenshot */}
            <ul className="space-y-3 text-white/90 list-disc list-inside marker:text-white/90 marker:opacity-90">
              <li>
                <Link to="/" >
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" >
                  Products
                </Link>
              </li>
              <li>
                <Link to="/categories" >
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/about" >
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Categories</h4>
            <ul className="space-y-3 text-white/90 list-disc list-inside marker:text-white/90 marker:opacity-90">
              <li>
                <Link to="/mens" >
                  Men's Wear
                </Link>
              </li>
              <li>
                <Link to="/womens" >
                  Women's Wear
                </Link>
              </li>
              <li>
                <Link to="/kids" >
                  Kids Wear
                </Link>
              </li>
              <li>
                <Link to="/pulses" >
                  Rice & Pulses
                </Link>
              </li>
              <li>
                <Link to="/agriculture" >
                  Agriculture Machinery
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Info</h4>

            <div className="flex gap-3 items-start text-white/90 mb-4">
              <HiLocationMarker className="w-5 h-5 mt-1" />
              <span>Birkvej 43, Sandved, 4262, Denmark</span>
            </div>

            <div className="flex gap-3 items-center text-white/90 mb-3">
              <HiPhone className="w-5 h-5" />
              <Link to="tel:+4591733957" >
                +45 91-73-39-57
              </Link>
            </div>

            <div className="flex gap-3 items-center text-white/90">
              <HiMail className="w-5 h-5" />
              <Link
                to="mailto:nexariom@outlook.com"
                
              >
                nexariom@outlook.com
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8" />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-6 text-white/90">
          <span className="text-sm">
            © 2013–{new Date().getFullYear()} Nexariom Trade LLP. All rights
            reserved.
          </span>

          <div className="flex items-center gap-6 text-sm">
            <Link to="/privacy-policy" >
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" >
              Terms of Service
            </Link>
            <Link to="/cookie-policy" >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
