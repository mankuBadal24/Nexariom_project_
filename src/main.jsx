import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Product from "./pages/Product.jsx";   // default export from Product.jsx
import About from "./pages/About.jsx";       // default export from About.jsx
import VisitingCard from "./pages/VisitingCard.jsx"; // default export (see file below)
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/products" element={<Product />} />
      <Route path="/about" element={<About />} />
      {/* I used /vcard to match your navbar; change to /visitingCard if you prefer */}
      <Route path="/vCard" element={<VisitingCard />} />
      {/* Add other top-level routes here */}
    </Routes>
  </BrowserRouter>
);
