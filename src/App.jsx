<<<<<<< HEAD
import styled from "styled-components";
import "./index.css";

import Home from "./components/Home";

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
       
        <BrowserRouter>
        <Routes>

          <Route path="/" element={  <Home />}/>
          <Route path="/online-courses" element={<ExploreCourses/>} />
        </Routes>
        
        </BrowserRouter>

        
          

      </Container>
    </>
  );
};

export default App;
=======
import styled from "styled-components";
import "./index.css";

import Home from "./components/Home";

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
       
        <BrowserRouter>
        <Routes>

          <Route path="/" element={  <Home />}/>
          <Route path="/online-courses" element={<ExploreCourses/>} />
        </Routes>
        
        </BrowserRouter>

        
          

      </Container>
    </>
  );
};

export default App;
>>>>>>> 5a84f5fdfd4b446c55c304790ce134a4a1595fe8
