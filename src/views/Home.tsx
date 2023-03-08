import React from "react";
import styled from "styled-components";
import useProjects from "../providers/ProjectsProvider/projects";
import ProjectCard from "../components/ProjectCard";

const Home = () => {

    const Wrapper = styled.div`
      display: flex;
      width: 100%;
      height: 100vh;
      justify-content: center;
    `

    const TextWrapper = styled.div`
      padding-top: 6rem;
      flex-direction: column;
      display: flex;
      width: 864px;
      @media (max-width: 900px) {
        width: 80%;
        padding: 20px;
        padding-top: 5rem;
      }
    `

    const HeaderText = styled.h1`
      z-index: 10;
      font-family: interstate-mono, monospace;
      font-weight: 800;
      font-style: normal;
    `

    const BodyText = styled.h1`
      z-index: 10;
      font-size: 20px;
      line-height: 28px;
      font-family: neuzeit-grotesk,sans-serif;
      font-weight: 400;
      font-style: normal;
    `

    const ProjectWrapper = styled.div`
      position: relative;
      margin-top: 25px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 20px;

      @media (max-width: 900px) {
        flex-direction: column;
        width: 100%;
      }
    `

    const HighlightedText = styled.span`
      background-color: #F433AB;
      font-weight: 600;
    `

    const projects = useProjects();

    return (
        <Wrapper>
            <div className="gradient"/>
            <TextWrapper>
                <HeaderText>Hi 👋 <br/>
                    I’m Zoli</HeaderText>
                <BodyText>
                    - I am a <HighlightedText>passionate</HighlightedText> Software Engineer and a recent graduate from the University of Wisconsin Parkside with a bachelors in <HighlightedText>Computer Science</HighlightedText> and a minor in <HighlightedText>Web Development</HighlightedText>. Along with my bachelor and minor I have a few certificates, most notably in <HighlightedText>Mobile Development</HighlightedText>.
                </BodyText>
                <BodyText>
                    - I have been working at The App Factory on the UWP campus for 4 years working with different clients around the Kenosha area creating apps and custom solutions.
                </BodyText>
                <BodyText>
                    Below are some of my personal projects
                </BodyText>
                <ProjectWrapper>
                    {
                        projects ? projects.map((project, i) => {
                            return <ProjectCard project={project} key={i}/>
                        }) : ""
                    }
                </ProjectWrapper>
            </TextWrapper>
        </Wrapper>
    )
}

export default Home