import styled from "styled-components";
import "./index.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Features from "./components/Features";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import ContactUs from "./components/ContactUs";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
} from "react-router-dom";
import ExploreCourses from "./components/ExploreCourses";
const Container = styled.div`
  height: 100vh;
`;

const App = () => {
  return (
    <>
      <Container className="main">
       
          <Navbar />

          <Home />
          <Features />
          <Services />
          <Pricing />
          <ContactUs />

      </Container>
    </>
  );
};

export default App;
