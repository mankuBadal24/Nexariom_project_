// src/components/Navbar.jsx (or wherever you keep it)
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  Search,
  ChevronDown,
  Home as HomeIcon,
  ShoppingBag,
  HelpCircle,
  Info,
  CreditCard,
  Mail,
} from "lucide-react";

import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "../components/ui/sheet";

const LOGO_URL = "https://www.nexariom.com/images/nexariom.png";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "Home", to: "/", icon: HomeIcon },
    { label: "Products", to: "/products", icon: ShoppingBag },
    { label: "Faqs", to: "/faqs", icon: HelpCircle },
    { label: "About", to: "/about", icon: Info },
    { label: "Visting Card", to: "/vcard", icon: CreditCard },
    { label: "Contact", to: "/contact", icon: Mail },
  ];

  // Keep active tab in sync with current path
  useEffect(() => {
    const idx = nav.findIndex((n) => {
      // exact match for root, otherwise match path start (handles /products/subroute)
      if (n.to === "/") return location.pathname === "/";
      return location.pathname.startsWith(n.to);
    });
    setActiveIdx(idx >= 0 ? idx : 0);
  }, [location.pathname]); // run whenever location changes

  const SheetHeader = () => (
    <div className="p-4 border-b flex items-center justify-between">
      <h2 className="text-lg font-semibold">Menu</h2>
      <SheetClose asChild />
    </div>
  );

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur bg-white/70 shadow-sm py-2"
          : "py-4 bg-gradient-to-b from-[#dbeefe] to-[#e6f7f0]"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-4 ">
        <div className="flex items-center justify-between space-x-20">
          {/* Left logo */}
          <Link to="/" className="flex items-center gap-3 select-none">
            <motion.div
              initial={{ y: -6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="flex items-center"
            >
              <img
                src={LOGO_URL}
                alt="Nexariom logo"
                className="w-25 h-15 object-contain"
                loading="lazy"
              />
            </motion.div>
          </Link>

          {/* Center search pill (desktop & tablet) */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="relative w-full max-w-[700px]">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-70 pointer-events-none">
                <Search size={18} />
              </div>
              <input
                aria-label="Search products"
                placeholder="Search products..."
                className="w-full rounded-full py-3 pl-14 pr-4 shadow-lg border-0 outline-none bg-white"
              />
            </div>
          </div>

          {/* Right: Desktop nav (md+) and hamburger for mobile */}
          <div className="flex items-center gap-4">
            {/* Desktop nav links (hidden on small) */}
            <div className="hidden lg:flex items-center gap-4">
              <ul className="flex items-center gap-3 relative z-10">
                {nav.map((item, idx) => (
                  <li key={idx} className="relative">
                    <Link
                      to={item.to}
                      onClick={() => setActiveIdx(idx)}
                      className={`px-4 py-2 text-sm font-medium rounded-md transition focus:outline-none focus:ring-0 hover:bg-[#cfe8ff] hover:text-blue-400  ${
                        activeIdx === idx
                          ? "bg-[#cfe8ff] text-slate-900 shadow-sm hover:text-slate-900 "
                          : "text-slate-700"
                      }`}
                      aria-current={activeIdx === idx ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile: bottom sheet trigger (small screens) */}
            <div className="md:hidden flex items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    aria-label="Open menu"
                    className="p-3 rounded-lg border border-slate-200 bg-white shadow-sm hover:shadow-md"
                    title="Menu"
                  >
                    <Menu size={18} />
                  </button>
                </SheetTrigger>

                <SheetContent
                  side="bottom"
                  className="rounded-t-2xl p-0 max-w-md mx-auto"
                >
                  <SheetHeader />

                  <div className="p-5">
                    <ul className="flex flex-col gap-2">
                      {nav.map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <li key={i}>
                            <Link
                              to={item.to}
                              onClick={() => setActiveIdx(i)}
                              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition ${
                                activeIdx === i
                                  ? "bg-[#e6f4ff] font-semibold"
                                  : "hover:bg-slate-50"
                              }`}
                            >
                              <span className="w-7 h-7 rounded-full flex items-center justify-center bg-white shadow-sm">
                                <Icon size={16} />
                              </span>
                              <span>{item.label}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* medium screens show right-side sheet with identical header + body layout */}
            <div className="hidden md:flex lg:hidden items-center">
              <Sheet>
                <SheetTrigger asChild>
                  <button
                    aria-label="Open menu"
                    className="p-3 rounded-md border border-slate-200 bg-white shadow-sm"
                  >
                    <Menu size={18} />
                  </button>
                </SheetTrigger>

                <SheetContent side="right" className="p-0 w-80">
                  <SheetHeader />

                  <div className="p-5">
                    <div className="mb-4">
                      <input
                        aria-label="Search products"
                        placeholder="Search products..."
                        className="w-full rounded-full py-3 pl-4 pr-4 shadow-sm border-0 outline-none bg-slate-50"
                      />
                    </div>

                    <ul className="flex flex-col gap-2">
                      {nav.map((item, i) => {
                        const Icon = item.icon;
                        return (
                          <li key={i}>
                            <Link
                              to={item.to}
                              onClick={() => setActiveIdx(i)}
                              className={`flex items-center gap-3 px-3 py-3 rounded-lg transition ${
                                activeIdx === i
                                  ? "bg-[#e6f4ff] font-semibold"
                                  : "hover:bg-slate-50"
                              }`}
                            >
                              <span className="w-7 h-7 rounded-full flex items-center justify-center bg-white shadow-sm">
                                <Icon size={16} />
                              </span>
                              <span>{item.label}</span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>

        {/* Small screen search pill below header */}
        <div className="md:hidden mt-3 px-2">
          <div className="flex justify-center">
            <div className="relative w-full max-w-[520px]">
              <div className="absolute left-3 top-1/2 -translate-y-1/2 opacity-70 pointer-events-none">
                <Search size={16} />
              </div>
              <input
                aria-label="Search products"
                placeholder="Search products..."
                className="w-full rounded-full py-3 pl-11 pr-4 shadow-sm border-0 outline-none bg-white"
              />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
