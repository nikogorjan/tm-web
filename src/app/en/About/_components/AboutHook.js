
'use client'

import React, { useRef, useEffect, useState } from 'react';
import './AboutHook.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

import { useDispatch } from 'react-redux';
import { setBackgroundColor } from '../../../store/colorSlice'; // Update the path as needed

const AboutHook = () => {
    const hookRef = useRef(null);
    const headerRef = useRef(null);
    const paragraphRef = useRef(null);
    const squareRef = useRef(null);

    const dispatch = useDispatch();


    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger); // Ensure ScrollTrigger is registered
        const startPositionForHeroMain = window.innerWidth < 1000 ? "top top" : "center bottom";
        const endPositionForHeroMain = window.innerWidth < 1000 ? "top top" : "center bottom";
        ScrollTrigger.create({
            trigger: hookRef.current,
            start: startPositionForHeroMain,
            end: endPositionForHeroMain,
            onEnter: () => {
                gsap.to('body', { backgroundColor: 'black', duration: 0.6 });
                gsap.to([headerRef.current, paragraphRef.current, ], { color: 'white', duration: 0.6 });
                squareRef.current.classList.remove('lighter'); // Remove the 'lighter' class

                dispatch(setBackgroundColor('black'));


            },
            onLeaveBack: () => {
                gsap.to('body', { backgroundColor: 'white', duration: 0.6 }); // Change back to white
                gsap.to([headerRef.current, paragraphRef.current, ], { color: 'black', duration: 0.6 }); // Change text color back to black
                squareRef.current.classList.add('lighter'); // Add the 'lighter' class back
                dispatch(setBackgroundColor('white'));

            },
            markers: false // Disable markers for production
        });
    }, []);

    return (
        <div className='about-hook-main' ref={hookRef}>
            <div className='about-hook-wrapper'>
                <div className='about-hook-left'>
                    <div className='toppper'>
                    <p className='text-regular-semibold black section-indicator alignself text-regular-semibold lighter smooth' ref={squareRef}>United Strength</p>
<h3 className='heading-desktop-h3 black' ref={headerRef}>When We Combine Forces, We Achieve Even Better Results!</h3>

                    </div>
                    <h3 className='text-medium-normal black' ref={paragraphRef}>
    When we combine our knowledge and experience, we become an even stronger team. Each of us brings unique skills and insights, which we integrate into a holistic approach. This combination not only improves us as trainers but also directly benefits our clients. With our combined knowledge, we can better understand your needs, customize training and nutrition plans, and teach you everything you need for success.
</h3>
                </div>


                <div className='about-hook-right'>
                    <div className='img-holder'>
                        <img src="/images/us8.webp" className='about-hook-img' alt='heros' />

                    </div>

                    <div className='img-holder'>
                        <img src="/images/us1.webp" className='about-hook-img' alt='heros' />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default AboutHook
