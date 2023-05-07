import React from "react";
import styled from "styled-components";

const ProjectsSection = styled.section`
  background-color: #fff;
  padding: 100px;
`;

const ProjectsTitle = styled.h2`
  font-size: 36px;
  margin-bottom: 30px;
`;

const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ProjectCard = styled.div`
  width: calc(33.33% - 20px);
  margin-bottom: 30px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
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
  padding: 10px 20px;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fff;
    color: #333;
  }
`;

const Projects = () => {
  return (
    <ProjectsSection id="projects">
      <div className="container">
        <ProjectsTitle>Projects</ProjectsTitle>
        <ProjectsContainer>
          <ProjectCard>
            <ProjectImage src="https://via.placeholder.com/300x200" alt="Project" />
            <ProjectTitle>Project 1</ProjectTitle>
            <ProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor hendrerit mi, at molestie augue consectetur ac.
            </ProjectDescription>
            <ProjectLink href="#">View project</ProjectLink>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage src="https://via.placeholder.com/300x200" alt="Project" />
            <ProjectTitle>Project 2</ProjectTitle>
            <ProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor hendrerit mi, at molestie augue consectetur ac.
            </ProjectDescription>
            <ProjectLink href="#">View project</ProjectLink>
          </ProjectCard>
          <ProjectCard>
            <ProjectImage src="https://via.placeholder.com/300x200" alt="Project" />
            <ProjectTitle>Project 3</ProjectTitle>
            <ProjectDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor hendrerit mi, at molestie augue consectetur ac.
            </ProjectDescription>
            <ProjectLink href="#">View project</ProjectLink>
          </ProjectCard>
        </ProjectsContainer>
      </div>
    </ProjectsSection>
  );
};

export default Projects;
