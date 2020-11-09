import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../src/Components/Home";
import Projects from "./Components/Projects";
import AOS from "aos";
import "antd/dist/antd.css";
import "aos/dist/aos.css";
// ..
AOS.init();

function App() {
  return (
    <Router>
      <Home />
      <Projects />
    </Router>
  );
}

export default App;
