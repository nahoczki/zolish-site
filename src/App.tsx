import React, {useEffect, useLayoutEffect} from 'react'
import './App.css'
import Preloader from "./components/Preloader";
import { gsap } from "gsap";
import Home from "./views/Home";

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

    useEffect(() => {
        document.body.addEventListener('mousemove', onMouseMove);

        const $bigBall = document.querySelector('.cursor__ball--big');
        const $smallBall = document.querySelector('.cursor__ball--small');

        function onMouseMove(e: { pageX: number; pageY: number; }) {
            gsap.to($bigBall, .4, {
                x: e.pageX - 15,
                y: e.pageY - 15
            })
            gsap.to($smallBall, .1, {
                x: e.pageX - 5,
                y: e.pageY - 7
            })
        }
    })

    return (
        <div className="App">
            <Preloader ref={e => (preLoaderRef = e)}/>
            <Home/>
        </div>
    )
}

export default App
