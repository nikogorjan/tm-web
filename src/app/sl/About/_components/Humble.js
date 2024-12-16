'use client'


import React, { useRef } from 'react'
import './Humble.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

const Humble = () => {
    const whiteRef = useRef(null);
    const whiteHeaderRef = useRef(null);
    const whiteTextRef = useRef(null);
    const iconRef = useRef(null);
    const imgRef = useRef(null);

    
    useGSAP(() => {
        const startPositionForHeroMain = window.innerWidth < 999 ? "bottom-=80% center+=20%" : "top center+=20%";
        const endPositionForHeroMain = window.innerWidth < 999 ? "bottom center+=40%" : "bottom center+=40%";

        ScrollTrigger.create({
            trigger: whiteRef.current,
            start: startPositionForHeroMain,
            end: endPositionForHeroMain,
            onEnter: () => {
                /*gsap.timeline()
                    .to('body', { backgroundColor: 'white', duration: 0.6 })
                    gsap.timeline()
                    .to(whiteHeaderRef.current, { color: 'black', duration: 0.3 })
                    gsap.timeline()
                    .to(whiteTextRef.current, { color: 'black', duration: 0.3 })
                    gsap.timeline()
                    .to(iconRef.current, { filter: 'invert(1)', duration: 0.3 }); */
                    gsap.timeline()
                    .to(imgRef.current, { opacity: 1,y: 0, duration: 1.2 }); 
                    

            },
            onLeaveBack: () => {
                

                /*gsap.timeline()
                    .to('body', { backgroundColor: 'black', duration: 0.6 });
                    gsap.timeline()
                    .to(whiteHeaderRef.current, { color: 'white', duration: 0.3 })
                    gsap.timeline()
                    .to(whiteTextRef.current, { color: 'white', duration: 0.3 })*/
                    gsap.timeline()
                    .to(iconRef.current, { filter: 'invert(0)', duration: 0.3 });
            },
            markers: false // Disable markers for production
        });
    }, []);


  return (
    <>
    <div className='humble-main' ref={whiteRef}>
        <div className='humble-wrapper'>
            <div className='humble-left'>
                <img src="/images/rocket-white.svg" className='relume-icon marginbottom' alt='heros' ref={iconRef}/>
                <div className='blog-header-wrapper'>
                            <h3 className='heading-desktop-h3  ' ref={whiteHeaderRef}>Od skromnih začetkov do ikon fitnesa - najina navdihujoča pot</h3>
                        </div>

                        <div className='blog-header-wrapper'>
                            <h3 className='text-medium-normal  ' ref={whiteTextRef}>Z dolgoletnimi izkušnjami in znanjem sva spremenila ogromno življenj. Stranke nama zaupajo, ker se vsega tega kar učiva, drživa tudi sama. To nama je tudi prineslo številne uspehe na mednarodnih tekmovanjih.</h3>
                        </div>

            </div>
            <div className='humble-right'>
            <img
                    src="/images/us5.webp"
                    alt="A couple"
                    className='humble-img'
                    ref={imgRef}
                />
            </div>

        </div>
    </div>

    </>
  )
}
export default Humble
