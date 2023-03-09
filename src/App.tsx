import React, {useEffect, useLayoutEffect, useState} from 'react'
import './App.css'
import Preloader from "./components/Preloader";
import { gsap } from "gsap";
import Home from "./views/Home";
import {isBrowser} from 'react-device-detect';

function App() {

    let preLoaderRef: HTMLDivElement | null;

    const dismissLoader = () => {
        gsap.to(preLoaderRef, {y: "-100vh", duration: 1.25, ease: "power4.out"}).delay(1)
    }

    useLayoutEffect(() => {
        window.addEventListener("load", dismissLoader)
        return () => {
            window.document.body.style.overflow = "unset";
            window.removeEventListener('load', dismissLoader)
        };

    }, [])

    function isSmallWindow() {
        console.log(window.innerHeight)
        if (window.innerWidth <= 915 || window.innerHeight <= 577) {
            document.getElementById("cursor")!.style.display = "none"
            document.body.style.cursor = "inherit"
        } else {
            document.getElementById("cursor")!.style.display = "inline"
            document.body.style.cursor = 'none'
        }

    }

    useEffect(() => {
        window.addEventListener('resize', isSmallWindow);
        

        if (isBrowser) {
            document.body.addEventListener('mousemove', onMouseMove);
            document.body.style.cursor = 'none'

            const $square = document.querySelector('.cursor__square');
            const $smallSquare = document.querySelector('.cursor__square2');
    
            function onMouseMove(e: { pageX: number; pageY: number; }) {
                gsap.to($square, .2, {
                    x: e.pageX - 5,
                    y: e.pageY - 7
                })
                gsap.to($smallSquare, .1, {
                    x: e.pageX + 2,
                    y: e.pageY
                })
            }
        } else {
            document.getElementById("cursor")!.style.display = "none"
        }

        isSmallWindow()
    })

    return (
        <div className="App">
            <Preloader ref={e => (preLoaderRef = e)}/>
            <Home/>
        </div>
    )
}

export default App
