// src/main.jsx (or src/index.jsx)
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Product from "./pages/Product.jsx";
import About from "./pages/About.jsx";
import VisitingCard from "./pages/VisitingCard.jsx";
import Faq from "./pages/Faq.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/products" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/vcard" element={<VisitingCard />} />    {/* matches nav /vcard */}
      <Route path="/faqs" element={<Faq />} />             {/* FAQ page */}
      {/* add other top-level routes as needed */}
    </Routes>
  </BrowserRouter>
);
