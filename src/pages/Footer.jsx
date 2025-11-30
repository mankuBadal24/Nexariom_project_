import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";

export const Footer = () => {
    return (
        <footer
            className="text-white"
             style={{
    backgroundColor: "#6C4BFF",
    backgroundImage: `radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)`,
    backgroundSize: "18px 18px",
  }}
        >
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* TOP GRID */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Column 1 */}
                    <div>
                        <h3 className="text-xl font-semibold mb-3">Nexariom Trade LLP</h3>
                        <p className="text-white/90 mb-6 max-w-sm">
                            Your international shopping destination for quality products from around the world.
                        </p>

                        {/* Social Icons */}
                        <div className="flex items-center gap-3">
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
                                    className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition"
                                >
                                    <Icon size={16} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3">Quick Links</h4>
                        <ul className="space-y-2 text-white/90">
                            <li><Link to="/" className="hover:underline">Home</Link></li>
                            <li><Link to="/products" className="hover:underline">Products</Link></li>
                            <li><Link to="/categories" className="hover:underline">Categories</Link></li>
                            <li><Link to="/about" className="hover:underline">About Us</Link></li>
                            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3">Categories</h4>
                        <ul className="space-y-2 text-white/90">
                            <li><Link to="/mens" className="hover:underline">Men's Wear</Link></li>
                            <li><Link to="/womens" className="hover:underline">Women's Wear</Link></li>
                            <li><Link to="/kids" className="hover:underline">Kids Wear</Link></li>
                            <li><Link to="/pulses" className="hover:underline">Rice & Pulses</Link></li>
                            <li><Link to="/agriculture" className="hover:underline">Agriculture Machinery</Link></li>
                        </ul>
                    </div>

                    {/* Column 4 */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3">Contact Info</h4>

                        <div className="flex gap-3 text-white/90 mb-3">
                            <HiLocationMarker className="w-5 h-5 mt-1" />
                            <span>Birkvej 43, Sandved, 4262, Denmark</span>
                        </div>

                        <div className="flex gap-3 text-white/90 mb-3">
                            <HiPhone className="w-5 h-5" />
                            <Link to="tel:+4591733957" className="hover:underline">
                                +45 91-73-39-57
                            </Link>
                        </div>

                        <div className="flex gap-3 text-white/90">
                            <HiMail className="w-5 h-5" />
                            <Link to="mailto:nexariom@outlook.com" className="hover:underline">
                                nexariom@outlook.com
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-white/10 mt-10 pt-6" />

                {/* Bottom row */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-4 text-white/90">
                    <span>© 2013–{new Date().getFullYear()} Nexariom Trade LLP. All rights reserved.</span>

                    <div className="flex items-center gap-6">
                        <Link to="/privacy-policy" className="hover:underline">Privacy Policy</Link>
                        <Link to="/terms-of-service" className="hover:underline">Terms of Service</Link>
                        <Link to="/cookie-policy" className="hover:underline">Cookie Policy</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
