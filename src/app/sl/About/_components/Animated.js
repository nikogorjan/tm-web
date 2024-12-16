'use client'


import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger'; import './Animated.css'
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);


const Animated = () => {

    /*useGSAP(() => {

        // Animation for absolute-img1
        gsap.from('.absolute-img1', {
            scrollTrigger: {
                trigger: '.animated-wrapper',
                start: 'top bottom',
                end: 'bottom center', // Animation ends when the top of .animated-wrapper hits the center of the viewport
                toggleActions: 'play none none none',
                scrub: false,
                markers: false
            },
            x: '-100%', // Starts from -100% of its width to the left
            opacity: 0,
            duration: 1, // Animation duration in seconds
        });

        // Animation for absolute-img2
        gsap.from('.absolute-img2', {
            scrollTrigger: {
                trigger: '.animated-wrapper',
                start: 'top bottom', // Adjust the start point as needed
                end: 'bottom center', // Animation ends when the top of .animated-wrapper hits the center of the viewport

                toggleActions: 'play none none none',
                scrub: false,
            },
            y: '100%', // Starts from 100% of its height below
            opacity: 0,

            duration: 1, // Animation duration in seconds
        });

        gsap.from('.absolute-img3', {
            scrollTrigger: {
                trigger: '.animated-wrapper2',
                start: 'top bottom',
                end: 'bottom center', // Animation ends when the top of .animated-wrapper hits the center of the viewport
                toggleActions: 'play none none none',
                scrub: false,
                markers: false
            },
            x: '100%', // Starts from -100% of its width to the left
            opacity: 0,

            duration: 1, // Animation duration in seconds
        });

        // Animation for absolute-img2
        gsap.from('.absolute-img4', {
            scrollTrigger: {
                trigger: '.animated-wrapper2',
                start: 'top bottom', // Adjust the start point as needed
                end: 'bottom center', // Animation ends when the top of .animated-wrapper hits the center of the viewport

                toggleActions: 'play none none none',
                scrub: false,
            },
            y: '100%', // Starts from 100% of its height below
            opacity: 0,

            duration: 1, // Animation duration in seconds
        });

    });*/


    return (
        <div className='animated-main'>
            <div className='animated-wrapper'>

                <div className='animated-left'>
                    <img
                        src="/images/team7.webp"
                        alt="A couple"
                        className='absolute-img1'
                    />

                    
                </div>

                <div className='animated-right'>
                    <div className='znanost-content-wrapper'>
                        <h1 className='about-mainheader'>Znanstvena podlaga</h1>
                        <p className='about-mainparagraph notitalic'>Vse, kar počneva, temelji na znanosti in se neprestano razvija v skladu z najnovejšimi dognanji na področju prehrane, vedenjske znanosti in športne znanosti.</p>

                        <h1 className='about-mainheader upmargin'>Dolgotrajnost</h1>
                        <p className='about-mainparagraph notitalic'>Do sedaj sva pomagala stotim strankam. Že šest let sva predana pomoči strankam na njihovi poti do boljšega zdravja in dobrega počutja.</p>

                    </div>
                </div>

            </div>

            <div className='animated-wrapper2'>

                <div className='animated-right mobile'>
                    <img
                        src="/images/team7.webp"
                        alt="A couple"
                        className='absolute-img2'
                    />

                    
                </div>


                <div className='animated-left '>
                    <div className='znanost-content-wrapper'>
                        <h1 className='about-mainheader'>Izkušnje, ki spreminjajo življenja</h1>
                        <p className='about-mainparagraph notitalic'>Verjameva, da se lahko vsak počuti absolutno najbolje.
                            Hitre rešitve so sicer prijetne, vendar naju strast vodi k trajnim spremembam.
                        </p>

                        <h1 className='about-mainheader upmargin'>Strokovno vodstvo</h1>
                        <p className='about-mainparagraph notitalic'>VerjameVA, da strokovnost vedno zmaga.
                            Spremembe dosegava z dokazano znanostjo.
                            Vedno sva avtentična in iskrena; zaupanje in integriteta sta najin temelj.</p>

                    </div>
                </div>

                <div className='animated-right desktop'>
                    <img
                        src="/images/team7.webp"
                        alt="A couple"
                        className='absolute-img2'
                    />

                   
                </div>
            </div>

            <div className='margin-div'></div>

        </div>
    )
}

export default Animated
