// src/components/NavbarSecond.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const LOGO_URL = "https://www.nexariom.com/images/nexariom.png";

export const NavbarSecond = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // nav items
  const nav = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "About", to: "/about" },
    { label: "Visting Card", to: "/vcard" },
    { label: "Faqs", to: "/faqs" },
    { label: "Contact", to: "/contact" },
  ];

  return (
    <header className="w-full bg-white/90 fixed top-0 left-0 z-50 shadow-sm">
      {/* Inline styles for progress animation (keeps everything in one file, no external CSS) */}
      <style>{`
        :root { --nav-fill-duration: 1000ms; } /* change to speed up/slow down */
        @keyframes navFill {
          from { width: 0%; }
          to { width: 100%; }
        }

        /* When hovered, apply animation once from 0->100% */
        .nav-link-group:hover .nav-fill {
          animation: navFill var(--nav-fill-duration) linear forwards;
        }

        .nav-fill {
          width: 0%;
          height: 4px;
          border-radius: 9999px;
          background: rgb(14 165 233); /* Tailwind sky-400 */
          will-change: width;
        }
      `}</style>

      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
            <img src={LOGO_URL} alt="Nexariom" className="w-28 h-auto object-contain" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {nav.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <div
                  key={item.to}
                  className="nav-link-group group relative px-3 py-2"
                  aria-current={isActive ? "page" : undefined}
                >
                  <Link
                    to={item.to}
                    className={`relative z-10 text-sm font-medium transition-colors duration-200 ${
                      isActive ? "text-sky-600 font-semibold" : "text-slate-800"
                    } group-hover:text-sky-600`}
                  >
                    {item.label}
                  </Link>

                  {/* TRACK: still present for animation/layout but invisible */}
                  <div className="absolute left-0 bottom-0 w-full h-1 bg-transparent rounded-full -z-10" />

                  {/* animated fill (starts at 0 width; grows on hover via CSS animation) */}
                  <div
                    className="nav-fill absolute left-0 bottom-0 rounded-full"
                    style={{ zIndex: 0 }}
                    aria-hidden
                  />

                  <span className="sr-only">{isActive ? "active" : ""}</span>
                </div>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="p-2 rounded-md bg-white/90 border border-slate-200 shadow-sm"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile full-screen panel */}
      {open && (
        <div className="fixed inset-0 z-60 flex flex-col bg-white" role="dialog" aria-modal="true">
          {/* top bar with logo + close */}
          <div className="flex items-center justify-between px-5 py-4 border-b">
            <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
              <img src={LOGO_URL} alt="Nexariom" className="w-24 object-contain" />
            </Link>

            <button
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="p-2 rounded-md border border-slate-200 bg-white shadow-sm"
            >
              <X size={20} />
            </button>
          </div>

          {/* menu items */}
          <div className="px-6 py-8 flex-1 overflow-auto">
            <ul className="flex flex-col gap-6 text-2xl">
              {nav.map((item) => {
                const isActive = location.pathname === item.to;
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      onClick={() => setOpen(false)}
                      className={`block text-2xl font-medium ${
                        isActive ? "text-sky-600" : "text-slate-900"
                      }`}
                    >
                      {item.label}
                    </Link>

                    {/* subtle bar under active item (mobile) */}
                    <div className="mt-2">
                      <div
                        className={`h-1 rounded-full bg-sky-700 transition-all duration-700 ${
                          isActive ? "w-28" : "w-0"
                        }`}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* bottom hero peek (blue block) to mimic screenshot */}
          <div className="px-6 pb-10">
            <div className="rounded-xl p-8 text-center bg-sky-500 text-white">
              <h3 className="text-3xl font-extrabold">Our Products</h3>
              <p className="mt-2">Discover our wide range of international products</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavbarSecond;
