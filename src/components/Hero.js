import React from "react";
import styled, { keyframes } from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";

const HeroSection = styled.section`
  height: 100vh;
  background: linear-gradient(45deg, #f3ec78, #af4261, #009dff);
  background-size: 400% 400%;
  animation: slideDiagonal 8s ease-in-out infinite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @keyframes slideDiagonal {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;


const rotate = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const ArrowDown = styled(MdKeyboardArrowDown)`
  font-size: 2rem;
  margin-top: 20px;
  animation: arrow 2s infinite;
  @keyframes arrow {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`;

function Hero() {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <HeroSection>
      <h1>Hi! My Name is Brij Patel</h1>
      <p>Get to know more about me!</p>
      <ArrowDown onClick={handleScroll} />
    </HeroSection>
  );
}

export default Hero;
