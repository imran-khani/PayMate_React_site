import "../App.css";
import React from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import HowItWork from "../components/HowItWork";
import Aboutus from "../components/Aboutus";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Error from "../components/Error";

function Home() {
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

export default Home;
