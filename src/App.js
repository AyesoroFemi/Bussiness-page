import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import { About } from "./pages/about/About";
import { Blog } from "./pages/blog/Blog";
import { Career } from "./pages/career/Career";
import { Home } from "./pages/home/Home";
import { Product } from "./pages/products/Product";
import { Services } from "./pages/services/Services";


function App() {
  return (
      <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="products" element={<Product />} />
            <Route path="services" element={<Services />} />
            <Route path="blog" element={<Blog />} />
            <Route path="career" element={<Career />} />
        </Routes>
      </Router>
  );
}

export default App;
