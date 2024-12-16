'use client'

import React, { useRef } from 'react';
import './TjasaHook.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useDispatch } from 'react-redux';
import { setBackgroundColor } from '../../../../store/colorSlice'; // Update the path as needed
gsap.registerPlugin(ScrollTrigger);

const TjasaHook = () => {
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
                gsap.to([headerRef.current, paragraphRef.current,], { color: 'white', duration: 0.6 });
                squareRef.current.classList.remove('lighter'); // Remove the 'lighter' class
                dispatch(setBackgroundColor('black'));



            },
            onLeaveBack: () => {
                gsap.to('body', { backgroundColor: 'white', duration: 0.6 }); // Change back to white
                gsap.to([headerRef.current, paragraphRef.current,], { color: 'black', duration: 0.6 }); // Change text color back to black
                squareRef.current.classList.add('lighter'); // Add the 'lighter' class back
                dispatch(setBackgroundColor('white'));

            },
            markers: false // Disable markers for production
        });
    }, []);



    return (
        <div className='tjasa-hook-main' ref={hookRef}>
            <div className='zivali-main'>
                <div className='zivali-wrapper'>

                    <div className='zivali-first-row'>
                        <div className='zivali-left'>
                        <p className='text-regular-semibold  black section-indicator lighter smooth' ref={squareRef}>Začniva!</p>

                            <h3 className='heading-desktop-h3 black' ref={headerRef}>Skupaj začniva tvojo pot do uspeha!</h3>
                            <p className='text-medium-normal black ' ref={paragraphRef}>Vsako potovanje se začne s prvim korakom. Skupaj lahko doseževa tvoje cilje, ne glede na to, ali gre za telesno preobrazbo, izboljšanje zdravja ali premagovanje novih izzivov. Z mojim vodenjem in tvojo predanostjo bomo ustvarili rezultate, na katere bova ponosna. Začniva že danes!</p>

                        </div>
                        
                    </div>

                    <div className='zivali-second-row'>
                        
                        <div className='second-img2-wrapper'>
                            <video
                                src="/Videos/tjasa1.mp4"
                                autoPlay
                                muted
                                playsInline
                                loop
                                className='hook-video'>
                            </video>

                        </div>
                        <div className='second-img3-wrapper'>
                            <img src="/images/th2.webp" className='plant-img' alt='heros' />

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TjasaHook
