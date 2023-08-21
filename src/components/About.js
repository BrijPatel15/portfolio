import React from "react";
import styled from "styled-components";
import Resume from "../Resume.pdf"
import { Button } from '@mui/material';

const AboutSection = styled.section`
  background-color: #fff;
  padding: 60px 30px;
`;

const AboutContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const AboutContent = styled.div`
  width: 100%;
  max-width: 600px;

  @media only screen and (min-width: 768px) {
    width: 45%;
  }
`;

const AboutTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 20px;
`;

const AboutText = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const AboutSkills = styled.div`
  width: 100%;
  max-width: 600px;
  margin-top: 40px;

  @media only screen and (min-width: 768px) {
    margin-top: 0;
    width: 45%;
  }
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
  transition: background-color 0.3s;
  &:hover {
    background-color: #0000ff;
    color: white; 
  }
`;


const skills = [
  "Java",
  "JavaScript",
  "JQuery",
  "HTML/CSS",
  "SQL",
  "React.js",
  "Postgres", 
  "OSGi",
  "Maven",
  "Object Oriented Programming",
  "Git",
  "Mockito",
  "JUnit"
];



const About = () => {
  return (
    <AboutSection id="about">
      <div className="container">
        <AboutContainer>
          <AboutContent>
            <AboutTitle>About Me</AboutTitle>
            <AboutText>
            Experienced fullstack software developer with a passion for building high-quality web applications. Adept at solving complex problems with a
            detail-oriented and analytical approach. Skilled in Java, JavaScript, and HTML/CSS, with experience in popular frameworks such as React and
            OSGi. Thrives in collaborative environments and enjoys sharing knowledge with team members to achieve project success. Continuously learning
            new technologies to stay up-to-date with industry trends. Possesses excellent communication and leadership skills to effectively manage teams
            and deliver exceptional results
            </AboutText>
            {/* <ResumeLink href={Resume} target="_blank">Check out my Resume!</ResumeLink> */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: '#0000ff', // Your blue highlight color
                color: 'white', // Text color
                '&:hover': {
                  backgroundColor: '#1E90FF', // Slightly darker shade on hover
                },
              }}
              href={Resume}
            >
              Check out my Resume
            </Button>
          </AboutContent>
          <AboutSkills>
            <SkillsTitle>Skills</SkillsTitle>
            <SkillsList>
              {skills.map(function (skill) {
                return <Skill>{skill}</Skill>;
              })}
            </SkillsList>
          </AboutSkills>
        </AboutContainer>
      </div>
    </AboutSection>
  );
};

export default About;