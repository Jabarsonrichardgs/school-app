
import React from "react";
import styled from "styled-components";
import Men from "../assests/Images/men.png";
import Animations from "./Animation";
import Features from "./Features";
import Services from "./Services";
import Pricing from "./Pricing";
import ContactUs from "./ContactUs";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container home d-flex mt-5">
        <div className="left-content">
          <h1>Elevate Your Knowledge, Embrace Your Future!</h1>
          <p className="mt-4 text-muted">
            {" "}
            Our mission is to provide high-quality educational resources that
            inspire curiosity and foster a love for knowledge. Whether you’re a
            beginner looking to explore new subjects or an advanced learner
            seeking to refine your skills, we have something for everyone.
          </p>
          <div className="start">
            <button className="btn bt-1  mt-2 fw-bold  800">
              Start With Us
            </button>
          </div>{" "}
        </div>

        <div className="right-content">
          <img src={Men} alt="" />
        </div>
    
      </div>

      <Features />
        <Services />
        <Pricing />
        <ContactUs />
        <Animations />
        <Footer/>
    </>
  );
};

export default Home;
