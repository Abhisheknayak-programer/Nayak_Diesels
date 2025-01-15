import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "./Containers/Home/Home";
import About from "./Containers/About/About";
import Services from "./Containers/Services/Services";
import Contact from "./Containers/Contact/Contact";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />

      <main className="main__container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

export default App;
