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
      background: rgb(2, 0, 36);
      background: linear-gradient(139deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 0%, rgb(255, 255, 255) 100%);
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
                <h2>zoli.sh</h2>
                <ScaleLoader height={10} color={"white"} />
            </Inner>
        </Wrapper>
    )
})

export default Preloader