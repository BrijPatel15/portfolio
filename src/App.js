import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Hero />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;

