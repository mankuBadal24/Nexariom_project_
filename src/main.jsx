import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Product from "./pages/Product.jsx"; // default import - change to { Product } if it's a named export
import About from "./pages/About.jsx"; // default import of your About page
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/products" element={<Product />} />
      <Route path="/about" element={<About />} />
      {/* Add other top-level routes here */}
    </Routes>
  </BrowserRouter>
);