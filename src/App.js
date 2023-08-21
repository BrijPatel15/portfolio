import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import "./App.css";
import Experience from "./components/Experience";

function App() {
  const globalStyles = {
    fontFamily: 'Oxygen, sans-serif',
  }
  return (
    <div className="App" style={globalStyles}>
      <div className="content">
        <Hero />
        <About />
        <Experience/>
      </div>
    </div>
  );
}

export default App;

