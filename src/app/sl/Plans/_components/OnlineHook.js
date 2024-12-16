'use client'


import React, { useRef, useEffect, useState } from 'react';
import './OnlineHook.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

const OnlineHook = () => {
    const headerRef1 = useRef(null); // Reference for the section1 header
    const textRef1 = useRef(null); // Reference for the section1 header
    const rowRef1 = useRef(null);
    const rowReff1 = useRef(null);
    const aboutImgRef = useRef(null); // Reference for the section1 header
    const aboutImgRef2 = useRef(null);
    const tmpRef1 = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: tmpRef1.current,
                start: 'top center',
                end: 'bottom center',
                scrub: false,
                markers: false,
            }
        });

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: tmpRef1.current,
                start: 'top center',
                end: 'bottom center',
                scrub: false,
                markers: false,
            }
        });

        tl2.to('.line1', { scaleX: 1, opacity: 1, duration: 0.5 })
            .to('.circle1', { opacity: 1, duration: 0.5 })
            .fromTo('.circle-text:nth-of-type(1)', { display: 'none' }, { display: 'block', duration: 0.1 })
            .to('.line2', { scaleX: 1, opacity: 1, duration: 0.5 })
            .to('.circle2', { opacity: 1, duration: 0.5 })
            .fromTo('.circle-text:nth-of-type(2)', { display: 'none' }, { display: 'block', duration: 0.1 })
            .to('.line3', { scaleX: 1, opacity: 1, duration: 0.5 })
            .to('.circle3', { opacity: 1, duration: 0.5 })
            .fromTo('.circle-text:nth-of-type(3)', { display: 'none' }, { display: 'block', duration: 0.1 })
            .to('.line4', { scaleX: 1, opacity: 1, duration: 0.5 });

        tl.fromTo(headerRef1.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 }
        )
            .fromTo(textRef1.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.5"
            )
            .fromTo(rowRef1.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2 },
                "-=0.5"
            ).fromTo(rowReff1.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2 },
                "-=0.5"
            );


    });

    useGSAP(() => {
        const container = document.querySelector('.container');

        // Ensure the element exists and is rendered before attaching ScrollTrigger
        if (aboutImgRef.current) {
            gsap.fromTo(aboutImgRef.current, {
                y: '50%', // Start with translateY(50%) to match your initial CSS
                width: '50%' // Start width to match your initial CSS
            }, {
                scrollTrigger: {
                    trigger: ".one-second-wor",
                    start: "top bottom", // Start when "#section4" enters the bottom of the viewport
                    end: "center top", // End when "#section4" exits the top of the viewport
                    scrub: true, // Smooth transition with scroll movement
                    markers: false, // Shows visual markers for debugging
                    once: true
                },
                y: '0%', // Final position at the top of its container
                width: '100%', // Increase width to 100%
                ease: 'none', // Use a linear ease for the animation to sync with scroll

            });
        }
    }, []);

    useGSAP(() => {
        const container = document.querySelector('.container');

        // Ensure the element exists and is rendered before attaching ScrollTrigger
        if (aboutImgRef2.current) {
            gsap.fromTo(aboutImgRef2.current, {
                y: '50%', // Start with translateY(50%) to match your initial CSS
                width: '50%' // Start width to match your initial CSS
            }, {
                scrollTrigger: {
                    trigger: ".one-second-wor",
                    start: "top bottom", // Start when "#section4" enters the bottom of the viewport
                    end: "center top", // End when "#section4" exits the top of the viewport
                    scrub: true, // Smooth transition with scroll movement
                    markers: false, // Shows visual markers for debugging
                    once: true
                },
                y: '0%', // Final position at the top of its container
                width: '100%', // Increase width to 100%
                ease: 'none', // Use a linear ease for the animation to sync with scroll

            });
        }
    }, []);

    return (
        <>
        <div className='online-hook-main' ref={tmpRef1}>
            <div className='online-hook-wrapper'>
                <div className='one-first-row'>
                    <div className='one-first-left'>
                        <div className='first-left-wrapper'>
                            <h3 className='heading-desktop-h3 black' ref={headerRef1}>Preoblikuj svoje telo in duha z najino izbiro storitev!</h3>
                        </div>


                    </div>
                    <div className='one-first-right'>
                        <div className='one-right-upper'>
                            <p className='text-medium-normal black' ref={textRef1}>Najini programi ponujajo celovit pristop k fitnesu, ki ti pomaga doseči fizično moč, duševno jasnost in uravnotežen življenjski slog.</p>

                        </div>
                        <div className='one-right-lower'>
                            <div className='left-row'>
                                <div className='left-row-cell'>
                                    <div className='left-row-cell-wrapper' ref={rowRef1}>
                                        <img src="/images/dumbbell-black.svg" className='relume-icon' alt='heros' />
                                        <h6 className='heading-desktop-h6 black'>Trening</h6>
                                        <p className='text-regular-normal black'>Vsak program vsebuje prilagojen trening, glede na tvoje želje.</p>
                                    </div>
                                </div>

                                <div className='left-row-cell'>
                                    <div className='left-row-cell-wrapper' ref={rowReff1}>
                                        <img src="/images/restaurant.svg" className='relume-icon' alt='heros' />
                                        <h6 className='heading-desktop-h6 black'>Prehrana</h6>
                                        <p className='text-regular-normal black'>Poleg treninga pa programi vsebujejo še jedilnik.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='animated-line'>
                    <div className='line line1'></div>
                    <div className='circle circle1'><span className='circle-text black'>Začni trenirati</span></div>
                    <div className='line line2'></div>
                    <div className='circle circle2'><span className='circle-text black'>Doseži cilje</span></div>
                    <div className='line line3'></div>
                    <div className='circle circle3'><span className='circle-text black'>Zgradi samozavest</span></div>
                    <div className='line line4'></div>
                </div>
                <div className='one-second-wor'>
                    <img alt='about-1' className='about-img desktop' src='/images/ts1.webp' ref={aboutImgRef} />
                    <img alt='about-1' className='about-img mobile border' src='/images/ts2.webp' ref={aboutImgRef2} />
                </div>


                

            </div>
        </div>

        
        </>
    )
}

export default OnlineHook
