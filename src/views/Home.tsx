import React from "react";
import styled from "styled-components";

const Home = () => {

    const Wrapper = styled.div`
      display: flex;
      width: 100%;
      height: 100vh;
      justify-content: center;
    `

    const TextWrapper = styled.div`
      padding-top: 10rem;
      flex-direction: column;
      display: flex;
      width: 50vw;
    `

    const HeaderText = styled.h1`
      z-index: 10;
      font-family: 'Space Mono', monospace;
    `

    const BodyText = styled.h1`
      z-index: 10;
      font-size: 20px;
      font-weight: 300;
      font-family: 'Space Mono', monospace;
    `

    const ProjectWrapper = styled.div`
      display: flex;
      flex-direction: row;
      gap: 20px;
    `

    const ProjectBoxBackground = styled.div`
      width: 300px;
      height: 150px;

      
      border-radius: 10px;
      background-color: white;
    `

    const ProjectBoxForeground = styled.div`
      position: relative;
      background-color: #171717;
      width: 100%;
      height: 100%;
      border-radius: 10px;
      border: #707070 solid 1px;
      transition: all 0.1s ease-in;
      :hover {
        margin-top: -7px;
        margin-left: -7px;
        cursor: pointer;
      }
    `

    return (
        <Wrapper>
            <TextWrapper>
                <HeaderText>Hi 👋 <br/>
                    I’m Zoli</HeaderText>
                <BodyText>
                    I am a passionate Software Engineer and a recent graduate from the University of Wisconsin Parkside with a bachelors in Computer Science and a minor in Web Development. Along with my bachelor and minor I have a few certificates, most notably in Mobile Development.
                </BodyText>
                <BodyText>
                    I have been working at The App Factory on the UWP campus for 4 years working with different clients around the Kenosha area creating apps and custom solutions.
                </BodyText>
                <BodyText>
                    Below are some of my personal projects
                </BodyText>
                <ProjectWrapper>
                    <ProjectBoxBackground>
                        <ProjectBoxForeground></ProjectBoxForeground>
                    </ProjectBoxBackground>
                    <ProjectBoxBackground>
                        <ProjectBoxForeground></ProjectBoxForeground>
                    </ProjectBoxBackground>
                    <ProjectBoxBackground>
                        <ProjectBoxForeground></ProjectBoxForeground>
                    </ProjectBoxBackground>
                </ProjectWrapper>
            </TextWrapper>
        </Wrapper>
    )
}

export default Home