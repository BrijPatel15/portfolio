import React from "react";
import styled from "styled-components";

const ContactSection = styled.section`
  background-color: #f9f9f9;
  padding: 100px;
`;

const ContactTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
`;

const ContactButton = styled.a`
  display: inline-block;
  background-color: #0072b1;
  color: #fff;
  font-size: 24px;
  padding: 15px 30px;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #004c7f;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <div className="container">
        <ContactTitle>Contact Me</ContactTitle>
        <ContactButton href="https://www.linkedin.com/in/your-linkedin-profile">Connect with me on LinkedIn</ContactButton>
      </div>
    </ContactSection>
  );
};

export default Contact;
