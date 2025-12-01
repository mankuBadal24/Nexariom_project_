import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Product } from "./pages/Product.jsx"; // <-- named import
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/products" element={<Product />} />
      {/* add other top-level routes here if needed */}
    </Routes>
  </BrowserRouter>
);
