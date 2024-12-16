'use client'

import React, { useRef, useState } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

import './Portfolio.css'

import { useDispatch } from 'react-redux';
import { setBackgroundColor } from '../../../store/colorSlice'; // Update the path as needed

const Portfolio = () => {
    const whiteRef = useRef(null);
    const whiteHeaderRef = useRef(null);
    const whiteMidRef = useRef(null);

    const whiteTextRef = useRef(null);
    const iconRef = useRef(null);
    const imgRef = useRef(null);

    const dispatch = useDispatch();

    const [isTransitioning, setIsTransitioning] = useState(false); // State to manage the shadow transition

    const handleNavigate = (url) => {
        // Add the 'show-shadow' class to trigger the transition
        setIsTransitioning(true);
    
        // After 0.3s, navigate to the URL
        setTimeout(() => {
          window.location.href = url;
        }, 300);
      };

    useGSAP(() => {
        const startPositionForHeroMain = window.innerWidth < 999 ? "top-=0% center+=0%" : "top-=0% center+=0%";
        const endPositionForHeroMain = window.innerWidth < 999 ? "bottom center+=0%" : "bottom center+=0%";

        ScrollTrigger.create({
            trigger: whiteRef.current,
            start: startPositionForHeroMain,
            end: endPositionForHeroMain,
            onEnter: () => {
                gsap.timeline()
                    .to('body', { backgroundColor: 'white', duration: 0.6 })
                    gsap.timeline()
                    .to(whiteHeaderRef.current, { color: 'black', duration: 0.6 })
                    gsap.timeline()
                    .to(whiteMidRef.current, { color: 'black', duration: 0.6 })
                    gsap.timeline()
                    .to(whiteTextRef.current, { color: 'black', duration: 0.6 })
                    gsap.timeline()
                    .to(iconRef.current, { filter: 'invert(1)', duration: 0.6 }); // Change icon color to black
                    gsap.timeline()
                    .to(imgRef.current, { opacity: 1,y: 0, duration: 1.2 }); // Change icon color to black
                    whiteMidRef.current.classList.add('lighter'); // Add the 'lighter' class back

                    dispatch(setBackgroundColor('white'));



            },
            onLeaveBack: () => {
                

                gsap.timeline()
                    .to('body', { backgroundColor: 'black', duration: 0.6 });
                    gsap.timeline()
                    .to(whiteHeaderRef.current, { color: 'white', duration: 0.6 })
                    gsap.timeline()
                    .to(whiteMidRef.current, { color: 'white', duration: 0.6 })
                    gsap.timeline()
                    .to(whiteTextRef.current, { color: 'white', duration: 0.6 })
                    gsap.timeline()
                    .to(iconRef.current, { filter: 'invert(0)', duration: 0.6 });
                    whiteMidRef.current.classList.remove('lighter'); // Add the 'lighter' class back

                    dispatch(setBackgroundColor('black'));


            },
            markers: false // Disable markers for production
        });
    }, []);


    return (
        <div className='portfolio-main' ref={whiteRef}>
            <div className='portfolio-wrapper'>
                <div className='portfolio-header-center'>
                    <div className='header-wrapper'>
                        <p className='text-regular-semibold black section-indicator alignself text-regular-semibold smooth' ref={whiteMidRef}>Portfolio</p>
                    </div>
                    <div className='header-wrapper'>
                        <h3 className='heading-desktop-h3 ' ref={whiteHeaderRef}>Kdo sva?</h3>
                    </div>

                    <div className='header-wrapper'>
                        <h3 className='text-medium-normal ' ref={whiteTextRef}>Sva ambiciozen mlad par. Drug drugega narediva boljšega.</h3>
                    </div>
                </div>

                <div className='portfolio-images'>
                    <div className='portfolio-images-left' onClick={() => handleNavigate('/sl/About/Tjasa')}>
                        <img
                            src="/images/z11.webp"
                            alt="A couple"
                            className='trainer-img'
                        />

                        <div className='name-on-image'>
                            <h3 className='heading-desktop-h3' >Tjaša Vrečič</h3>
                        </div>
                    </div>

                    <div className='portfolio-images-right' onClick={() => handleNavigate('/sl/About/Marsel')}>
                        <img
                            src="/images/z12.webp"
                            alt="A couple"
                            className='trainer-img'
                        />
                        <div className='name-on-image'>
                            <h3 className='heading-desktop-h3' >Marsel Kolarič</h3>
                        </div>
                    </div>
                </div>
            </div>


            <div className={`shadows-for-transition ${isTransitioning ? 'show-shadow' : ''}`}>

      </div>


        </div>
    )
}

export default Portfolio
