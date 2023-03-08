import React, {useEffect} from "react";
import styled from "styled-components";
import {Project} from "../providers/ProjectsProvider";
import {gsap} from "gsap";

const ProjectCard = ({project, key} : {project: Project, key: number}) => {

    const CardTitle = styled.div`
      font-family: interstate-mono, monospace;
      font-weight: 800;
      font-style: normal;
      transition: all 0.5s ease;
    `

    const CardBody = styled.div`
      line-height: 23px;
      font-family: neuzeit-grotesk,sans-serif;
      font-weight: 400;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-style: normal;
    `

    const CardContent = styled.div`
      padding: 12px;
    `

    const Line = styled.div`
      margin-top: 10px;
      margin-bottom: 10px;
      width: 50%;
      background: linear-gradient(106deg, #9448bc, #f433ab);
      background-size: 500% 500%;
      transition: all 0.5s ease;
      height: 4px;
      border-radius: 10px;
    `

    const ProjectBoxBackground = styled.div`
      width: 264px;
      height: 200px;
      border-radius: 10px;
      background-color: #F433AB;
      @media (max-width: 900px) {
        width: 100%;
      }
    `

    const MainWrap = styled.div`
      @media (max-width: 900px) {
        position: relative;
        width: 100%;
      }
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
        height: 200px;
      }

      :hover .background {
        height: 0px;
      }
      
      :hover .line {
        background-position: 100% 100%;
        width: 25%;
        height: 2px;
      }

      :hover .title {
        font-size: 10px;
      }

      :hover .body {
        line-height: 20px;
        font-weight: 400;
        white-space: pre-line;
        text-overflow: ellipsis;
        font-style: normal;
      }
    `

    useEffect(() => {
        const $square = document.querySelector('.cursor__square');
        const $hoverables = document.querySelectorAll('.hoverable');

        for (let i = 0; i < $hoverables.length; i++) {
            $hoverables[i].addEventListener('mouseenter', onMouseHover);
            $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
        }

        function onMouseHover() {
            gsap.to($square, .3, {
                scale: 3,
                rotation: 45
            })
        }
        function onMouseHoverOut() {
            gsap.to($square, .3, {
                scale: 1,
                rotation: 0,
            })
        }
    })

    return (
        <MainWrap className="hoverable">
            <ProjectBoxBackground key={key} className="background">
                <ProjectBoxForeground>
                    <CardContent>
                        <CardTitle className={"title"}>{project.title}</CardTitle>
                        <Line className={"line"}/>
                        <CardBody className="body">
                            {project.description}
                        </CardBody>
                    </CardContent>
                </ProjectBoxForeground>
            </ProjectBoxBackground>
        </MainWrap>

    )
}

export default ProjectCard
