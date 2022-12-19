import React from 'react';
import {forwardRef} from 'react'
import styled from 'styled-components';
import {ScaleLoader} from "react-spinners";


const Preloader = forwardRef<HTMLDivElement>((props, ref) => {

    const Wrapper = styled.div`
      overflow: hidden;
      position: fixed;
      width: 100%;
      height: 100vh;
      background-image: linear-gradient(to right, #9448BC, #F433AB);
      z-index: 100;
    `;

    const Inner = styled.div`
      position: fixed;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.4);
    `;

    return (
        <Wrapper ref={ref}>
            <Inner>
                <h2>loading</h2>
                <ScaleLoader height={10} color={"white"} />
            </Inner>
        </Wrapper>
    )
})

export default Preloader