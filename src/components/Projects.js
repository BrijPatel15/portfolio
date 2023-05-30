import React from "react";
import styled from "styled-components";

const ProjectsSection = styled.section`
  background-color: #fff;
  padding: 50px 20px;

  @media (min-width: 768px) {
    padding: 100px;
  }
`;

const ProjectsTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
  text-align: center;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ProjectCard = styled.div`
  width: calc(100% - 40px);
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    width: calc(33.33% - 20px);
    margin: 0 10px 30px;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const ProjectTitle = styled.h4`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 20px;
`;

const ProjectLink = styled.a`
  display: inline-block;
  background-color: #333;
  color: #fff;
  text-align: center;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #333;
  }
`;
const Skill = styled.li`
  display: inline-block;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 7px 12px;
  border-radius: 20px;
  background-color: #f2f2f2;
  color: #555;
`;

const SkillsList = styled.ul`
  list-style: none;
  padding: 10px 0px;
  margin: 0;
`;

const projects = [
  {title: "Golf Scanner", link: "https://github.com/BrijPatel15/golf-scraper", desc: "Always tired of looking at multiple of your local golf courses to find the cheapest price? Using Golf Scraper you can find all the available tee times in one place!",
   img: "https://via.placeholder.com/300x200", tech: ["React.js", "Node.js", "Firebase"]},
  {title: "Manga Notifer", link:"", desc:"Find keeping up with my favourite manga already tiring? With this tool you can enter in the URL of where you read you manga and get notified when a new chapter is available!",
   img: "https://via.placeholder.com/300x200", tech: ["Node.js", "React.js", "SQLite"]}
]

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <div className="container">
        <ProjectsTitle>Projects</ProjectsTitle>
        <ProjectsContainer>
          {projects.map(function({title, link, desc, img, tech}){
            return <ProjectCard>
                    <ProjectImage src={img} alt="Project" />
                    <ProjectTitle>{title}</ProjectTitle>
                    <ProjectDescription>
                      {desc}
                    </ProjectDescription>
                    <ProjectLink href={link}>View project</ProjectLink>
                    <SkillsList>
                      {tech.map(function(t){
                        return <Skill>{t}</Skill>
                      })}
                    </SkillsList>
            </ProjectCard> 
          })}
        </ProjectsContainer>
      </div>
    </ProjectsSection>
  );
};

export default Projects;
