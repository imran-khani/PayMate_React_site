import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import HowItWork from "./components/HowItWork";
import Aboutus from "./components/Aboutus";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <HowItWork />
      <Aboutus />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
