'use client'

import React, { useRef } from 'react';
import './MarselHook.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import { useDispatch } from 'react-redux';
import { setBackgroundColor } from '../../../../store/colorSlice'; // Update the path as needed

gsap.registerPlugin(ScrollTrigger);

const MarselHook = () => {

    const hookRef = useRef(null);
    const headerRef = useRef(null);
    const paragraphRef = useRef(null);
    const squareRef = useRef(null);
    const dispatch = useDispatch();


    useGSAP(() => {
        const startPositionForHeroMain = window.innerWidth < 1000 ? "top top+=20%" : "top bottom-=10%";
        const endPositionForHeroMain = window.innerWidth < 1000 ? "top top+=20%" : "top bottom-=10%";
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
        <div className='marsel-hook' ref={hookRef}>
            <div className='marsel-hooh-wrapper'>
            <div className='blog-headers-wrapper'>
    <div className='blog-header-wrapper'>
        <p className='text-regular-semibold black section-indicator lighter smooth' ref={squareRef}>Let's Begin!</p>
    </div>
    <div className='blog-header-wrapper'>
        <h3 className='heading-desktop-h3 black' ref={headerRef}>Your Progress is My Guiding Principle!</h3>
    </div>
    <div className='blog-header-wrapper'>
        <h3 className='text-medium-normal black' ref={paragraphRef}>
            Every success story starts with a single step. Together, we will build your success story, step by step. Join me and discover how far we can go together.
        </h3>
    </div>
</div>

                <div className='mhoo-imags-row'>
                <img alt='logo' className='m-imgg ' src='/images/m6.webp'  />
                <img alt='logo' className='m-imgg ' src='/images/m7.webp'  />

                </div>
            </div>
        </div>
    )
}

export default MarselHook
