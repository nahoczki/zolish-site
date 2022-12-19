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
      margin-top: 25px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: 20px;
    `

    const ProjectBoxBackground = styled.div`
      width: 264px;
      height: 150px;

      
      border-radius: 10px;
      background-color: #F433AB;
    `

    const HighlightedText = styled.span`
      background-color: #F433AB;
      font-weight: 600;
    `

    const ProjectBoxForeground = styled.div`
      flex: 1;
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
        border: white solid 1.5px;
      }
    `

    let items = [1, 2, 3, 4, 5, 6]

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
                    Below are some of my personal <HighlightedText>projects</HighlightedText>
                </BodyText>
                <ProjectWrapper>
                    {
                        items.map(() => {
                            return (<ProjectBoxBackground className="hoverable">
                                <ProjectBoxForeground></ProjectBoxForeground>
                            </ProjectBoxBackground>)
                        })
                    }
                </ProjectWrapper>
            </TextWrapper>
        </Wrapper>
    )
}

export default Home