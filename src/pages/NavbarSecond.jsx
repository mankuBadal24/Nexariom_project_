// src/components/NavbarSecond.jsx
import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "https://www.nexariom.com/images/nexariom.png";

export const NavbarSecond = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const closeButtonRef = useRef(null);
  const panelRef = useRef(null);

  const nav = [
    { label: "Home", to: "/" },
    { label: "Products", to: "/products" },
    { label: "About", to: "/about" },
    { label: "Visting Card", to: "/vcard" },
    { label: "Faqs", to: "/faqs" },
    { label: "Contact", to: "/contact" },
  ];

  // close on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // small page shift (reduced) and allow scrolling while menu open
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    function applyPageShift(px) {
      root.style.transition = "transform 220ms ease";
      body.style.transition = "transform 220ms ease";
      root.style.transform = `translateY(${px}px)`;
      body.style.transform = `translateY(${px}px)`;
    }

    if (open) {
      // DO NOT disable scrolling -> allow user to scroll (fixes "upar scroll bhi nhi ho rhi")
      // Apply a small shift so UI feels pushed but not too far
      const shift = 36; // <-- small, conservative value
      applyPageShift(shift);
    } else {
      // restore
      root.style.transform = "";
      body.style.transform = "";
    }

    // cleanup on unmount
    return () => {
      root.style.transform = "";
      body.style.transform = "";
      root.style.transition = "";
      body.style.transition = "";
    };
  }, [open]);

  // focus close button when opening for accessibility
  useEffect(() => {
    if (open && closeButtonRef.current) {
      closeButtonRef.current.focus({ preventScroll: true });
    }
  }, [open]);

  // keyboard esc to close
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" && open) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // motion variants
  const panelVariants = {
    hidden: { y: "-100%", opacity: 0 },
    enter: { y: "0%", opacity: 1, transition: { duration: 0.36, ease: [0.22, 0.9, 0.33, 1] } },
    exit: { y: "-100%", opacity: 0, transition: { duration: 0.28, ease: [0.22, 0.9, 0.33, 1] } },
  };

  return (
    <header className="w-full bg-white/95 fixed top-0 left-0 z-50 shadow-sm">
      <style>{`
        :root { --nav-fill-duration: 1000ms; }
        @keyframes navFill { from { width: 0%; } to { width: 100%; } }
        .nav-link-group:hover .nav-fill { animation: navFill var(--nav-fill-duration) linear forwards; }
        .nav-fill { width: 0%; height: 4px; border-radius: 9999px; background: rgb(47 128 255); will-change: width; }
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
                <div key={item.to} className="nav-link-group group relative px-3 py-2">
                  <Link
                    to={item.to}
                    className={`relative z-10 text-sm font-medium transition-colors duration-200 ${
                      isActive ? "text-sky-600 font-semibold" : "text-slate-800"
                    } group-hover:text-sky-600`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>

                  <div className="absolute left-0 bottom-0 w-full h-1 bg-transparent rounded-full -z-10" />
                  <div className="nav-fill absolute left-0 bottom-0 rounded-full" style={{ zIndex: 0 }} aria-hidden />
                </div>
              );
            })}
          </nav>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
              className="p-2 rounded-md bg-white/90 border border-slate-200 shadow-sm"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile animated panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={panelRef}
            className="fixed left-0 right-0 top-0 z-60 bg-white shadow-2xl border-b"
            variants={panelVariants}
            initial="hidden"
            animate="enter"
            exit="exit"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
          >
            {/* Panel inner content */}
            <div className="max-w-[1400px] mx-auto px-6">
              <div className="flex items-center justify-between h-20">
                <Link to="/" onClick={() => setOpen(false)} className="flex items-center gap-3">
                  <img src={LOGO_URL} alt="Nexariom" className="w-24 object-contain" />
                </Link>

                <button
                  aria-label="Close menu"
                  onClick={() => setOpen(false)}
                  ref={closeButtonRef}
                  className="p-2 rounded-md border border-slate-200 bg-white shadow-sm"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Menu items */}
              <div className="px-6 pb-8">
                <ul className="flex flex-col gap-6 text-2xl">
                  {nav.map((item) => {
                    const isActive = location.pathname === item.to;
                    return (
                      <li key={item.to}>
                        <Link
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className={`block text-2xl font-medium ${isActive ? "text-sky-600" : "text-slate-900"}`}
                        >
                          {item.label}
                        </Link>

                        {/* subtle active bar */}
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavbarSecond;
