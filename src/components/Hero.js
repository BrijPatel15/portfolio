import React, { useEffect } from "react";
import profilePic from "../BrijProfilePicture-modified.png";
import './Hero.css';
import { TypeAnimation } from "react-type-animation";
import { Button } from '@mui/material';

function Hero() {
  useEffect(() => {
    const totalTypeAnimationTime = 5050; // Total time for TypeAnimation
    const highlightInterval = 1000; // Time between each highlight
  
    const javaPill = setTimeout(() => {
      document.getElementById("java").classList.add("active");
    }, totalTypeAnimationTime);
  
    const javascriptPill = setTimeout(() => {
      document.getElementById("javascript").classList.add("active");
    }, totalTypeAnimationTime + highlightInterval);
  
    const reactPill = setTimeout(() => {
      document.getElementById("react").classList.add("active");
    }, totalTypeAnimationTime + highlightInterval * 2);
  
    // Cleanup timeouts when component unmounts
    return () => {
      clearTimeout(javaPill);
      clearTimeout(javascriptPill);
      clearTimeout(reactPill);
    };
  }, []);
  

  return (
    <div style={{ backgroundColor: "black", display: "flex", flexDirection: "column", alignItems: "center", 
      height: "calc(100vh - 80px)", width: "100vw", paddingTop: "50px"}}>
      <img src={profilePic} alt="This is me!" style={{ maxHeight: "40%", maxWidth: "40%", objectFit: "contain" }} />
      <div className="hero-text">
        <h2>Hello my name is Brij!</h2>
        <TypeAnimation
          sequence={[
            'I am a Travler ✈️',
            1000,
            'I am a Gamer ⌨️',
            1000,
            'I am a Developer 👨🏼‍💻',
            1000
          ]}
          speed={50}
          className="type-animation"
        />
        <h2>I specialize in building fast, responsive, and reliable web apps using 
          <span id="java" className="pill-word"> Java</span>,
          <span id="javascript" className="pill-word">JavaScript</span>,
          and <span id="react" className="pill-word">React</span></h2>
      </div>
      <div style={{padding: '20px 0'}}>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#0000ff', // Your blue highlight color
            color: 'white', // Text color
            '&:hover': {
              backgroundColor: '#1E90FF', // Slightly darker shade on hover
            },
          }}
          href={`mailto:brij.2815@gmail.com`}
        >
          Get in Touch
        </Button>
      </div>
    </div>
  );
}

export default Hero;
