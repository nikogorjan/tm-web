'use client'

import React, { useRef } from 'react';
import './MarselHook.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const MarselHook = () => {

    const hookRef = useRef(null);
    const headerRef = useRef(null);
    const paragraphRef = useRef(null);
    const squareRef = useRef(null);

    useGSAP(() => {
        const startPositionForHeroMain = window.innerWidth < 1000 ? "top top+=20%" : "top bottom-=10%";
        const endPositionForHeroMain = window.innerWidth < 1000 ? "top top+=20%" : "top bottom-=10%";
        ScrollTrigger.create({
            trigger: hookRef.current,
            start: startPositionForHeroMain,
            end: endPositionForHeroMain,
            onEnter: () => {
                gsap.to('body', { backgroundColor: 'black', duration: 0.3 });
                gsap.to([headerRef.current, paragraphRef.current, ], { color: 'white', duration: 0.3 });
                squareRef.current.classList.remove('lighter'); // Remove the 'lighter' class

                

            },
            onLeaveBack: () => {
                gsap.to('body', { backgroundColor: 'white', duration: 0.3 }); // Change back to white
                gsap.to([headerRef.current, paragraphRef.current, ], { color: 'black', duration: 0.3 }); // Change text color back to black
                squareRef.current.classList.add('lighter'); // Add the 'lighter' class back
                
            },
            markers: false // Disable markers for production
        });
    }, []);

    return (
        <div className='marsel-hook' ref={hookRef}>
            <div className='marsel-hooh-wrapper'>
                <div className='blog-headers-wrapper'>
                    <div className='blog-header-wrapper'>
                        <p className='text-regular-semibold  black section-indicator lighter' ref={squareRef}>Začniva!</p>
                    </div>
                    <div className='blog-header-wrapper'>
                        <h3 className='heading-desktop-h3 black ' ref={headerRef}>Tvoj napredek je moje vodilo!</h3>
                    </div>

                    <div className='blog-header-wrapper'>
                        <h3 className='text-medium-normal  black' ref={paragraphRef}>Vsaka uspešna zgodba se začne z enim korakom. Skupaj bova zgradila tvojo zgodbo o uspehu, korak za korakom. Pridruži se mi in odkrij, kako daleč lahko greva skupaj.</h3>
                    </div>
                </div>

                <div className='mhoo-imags-row'>
                <img alt='logo' className='m-imgg ' src='/Images/m6.webp'  />
                <img alt='logo' className='m-imgg ' src='/Images/m7.webp'  />

                </div>
            </div>
        </div>
    )
}

export default MarselHook
