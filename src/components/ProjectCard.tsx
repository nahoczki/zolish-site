import React, {useEffect} from "react";
import styled from "styled-components";
import {Project} from "../providers/ProjectsProvider";
import {gsap} from "gsap";

const ProjectCard = ({project, key} : {project: Project, key: number}) => {

    const CardTitle = styled.div`
      font-family: interstate-mono, monospace;
      font-weight: 800;
      font-style: normal;
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
      height: 150px;
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
      }
      
      :hover .line {
        background-position: 100% 100%;
      }
    `

    useEffect(() => {
        const $bigBall = document.querySelector('.cursor__ball--big');
        const $hoverables = document.querySelectorAll('.hoverable');

        for (let i = 0; i < $hoverables.length; i++) {
            $hoverables[i].addEventListener('mouseenter', onMouseHover);
            $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
        }

        function onMouseHover() {
            gsap.to($bigBall, .3, {
                scale: 8
            })
        }
        function onMouseHoverOut() {
            gsap.to($bigBall, .3, {
                scale: 1
            })
        }
    })

    return (
        <MainWrap className="hoverable">
            <ProjectBoxBackground key={key}>
                <ProjectBoxForeground>
                    <CardContent>
                        <CardTitle>{project.title}</CardTitle>
                        <Line className={"line"}/>
                        <CardBody>
                            {project.description}
                        </CardBody>
                    </CardContent>
                </ProjectBoxForeground>
            </ProjectBoxBackground>
        </MainWrap>

    )
}

export default ProjectCard
