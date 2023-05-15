import React from "react";
import Aboutus from "../components/Aboutus";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <h1 className="mt-10 text-center text-5xl font-bold">About us</h1>
      <Aboutus />
      <Footer />
    </>
  );
};

export default About;
