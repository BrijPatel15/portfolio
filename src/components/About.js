import React from "react";
import styled from "styled-components";

const AboutSection = styled.section`
  background-color: #fff;
  padding: 100px;
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AboutContent = styled.div`
  width: 45%;
  max-width: 600px;
`;

const AboutTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
`;

const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const AboutSkills = styled.div`
  width: 45%;
  max-width: 600px;
`;

const SkillsTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const Skill = styled.li`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: #f2f2f2;
  color: #555;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <div className="container">
        <AboutContainer>
          <AboutContent>
            <AboutTitle>About Me</AboutTitle>
            <AboutText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              euismod eu lorem et ultricies. In porta lorem at dui semper
              porttitor. Nullam quis cursus dui. Cras tincidunt vehicula tellus
              eu facilisis. Donec nisi turpis, iaculis et arcu a, aliquet
              ultrices nisl. Nam in pharetra odio, ac blandit metus. Suspendisse
              potenti. Praesent elementum diam non orci cursus rutrum. Pellentesque
              condimentum ultrices dignissim. Sed a tempor ligula, vel luctus
              sapien. Mauris vehicula rutrum massa. Duis condimentum, ex quis
              ullamcorper rhoncus, erat libero tempor arcu, condimentum facilisis
              tellus lectus ut nunc.
            </AboutText>
          </AboutContent>
          <AboutSkills>
            <SkillsTitle>Skills</SkillsTitle>
            <SkillsList>
              <Skill>HTML</Skill>
              <Skill>CSS</Skill>
              <Skill>JavaScript</Skill>
              <Skill>React</Skill>
              <Skill>Node.js</Skill>
              <Skill>Express.js</Skill>
              <Skill>MongoDB</Skill>
              <Skill>SQL</Skill>
            </SkillsList>
          </AboutSkills>
        </AboutContainer>
      </div>
    </AboutSection>
  );
};

export default About;
