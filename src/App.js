import { Routes, Route } from "react-router-dom";
import "./App.css";
import ReactGA from "react-ga";
import React from "react";
import Footer from "./footer/Footer";
import Navbars from "./navbar/Navbar";
import Cards from "./cards/Cards";
import Contact from "./navbar/contact/Contact";
import About from "./navbar/about/About";
import Tech from "./tech/Tech";
import House from "./house/house";
import Plate from "./plate/plate";
import Acces from "./accessory/acces";
import Decor from "./decor/decore";
import Photo from "./photo.js";
import Platedetail from "./plate/platedetail";
import Techdetail from "./tech/techdetail";
import Housedetail from "./house/housedetail";
import Decoredetail from "./decor/decoredetail";
import Accesdetail from "./accessory/accesdetail";
import Toys from "./toys/toys";
import Toysdetail from "./toys/toysdetail";
import Innovate from "./innovate/innovate";
import Innovatedetail from "./innovate/innovatedetail";
import Mobile from "./mobile/mobile";
import Mobiledetail from "./mobile/mobiledetail";

function initizeAnalytics() {
  ReactGA.initialize(" G-JTYBSTN0P0");
  ReactGA.pageview("/HomePage");
}

function App() {
  initizeAnalytics();
  return (
    <div className="pp">
      <>
        <header>
          <Navbars />
        </header>
        <Routes>
          <Route path="/" element={[<Photo />, <Cards />]} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/tech/:link" element={<Techdetail />} />

          <Route path="/house" element={<House />} />
          <Route path="/house/:link" element={<Housedetail />} />

          <Route path="/innovate" element={<Innovate />} />
          <Route path="/innovate/:link" element={<Innovatedetail />} />

          <Route path="/mobile" element={<Mobile />} />
          <Route path="/mobile/:link" element={<Mobiledetail />} />

          <Route path="/plate" element={<Plate />} />
          <Route path="/plate/:link" element={<Platedetail />} />

          <Route path="/acces" element={<Acces />} />
          <Route path="/acces/:link" element={<Accesdetail />} />

          <Route path="/decor" element={<Decor />} />
          <Route path="/decor/:link" element={<Decoredetail />} />

          <Route path="/toy" element={<Toys />} />
          <Route path="/toy/:link" element={<Toysdetail />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </>
    </div>
  );
}

export default App;
