import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Home from "../pages/Home";
// import Skills from "../pages/Skills";
// import Works from "../pages/Works";
// import Contact from "../pages/Contact";
// import CheckCV from "../pages/CheckCV";

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/skills" element={<Skills />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<CheckCV />} /> */}
      </Routes>
    </Router>
  );
}
