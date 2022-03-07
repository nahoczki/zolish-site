import React from "react";
import styled from "styled-components";
import Particles from "react-tsparticles";
import {particlesOptions} from "../helpers/particleOptions";
import {IParticlesProps} from "react-tsparticles/ts3.4";

const Home = () => {

    const Wrapper = styled.div`
      display: flex;
      width: 100%;
      height: 100vh;
      align-items: center;
      justify-content: center;
      position: absolute;
    `

    const Text = styled.h1`
      z-index: 10;
    `

    return (
        <Wrapper>
            <Text>Coming Soon</Text>
            <Particles
                id="tsparticles"
                options={particlesOptions as IParticlesProps.options}
            />
        </Wrapper>
    )
}

export default Home