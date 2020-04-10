import React from "react";
import { Router } from "@reach/router";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import HomePage from "./homePage/HomePage";
import ServicesPage from "./servicesPage/ServicesPage";
import AboutPage from "./aboutPage/AboutPage";
import ContactPage from "./contactPage/ContactPage";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <HomePage path="/" />
        <ServicesPage path="/services" />
        <AboutPage path="/about" />
        <ContactPage path="/contact" />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
