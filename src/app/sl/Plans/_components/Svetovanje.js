'use client'

import React, { useRef } from 'react';
import './Svetovanje.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { useDispatch } from 'react-redux';
import { setBackgroundColor } from '../../../store/colorSlice'; // Update the path as needed
gsap.registerPlugin(ScrollTrigger);

const Svetovanje = () => {


    const hookRef = useRef(null);
    const headerRef = useRef(null);
    const paragraphRef = useRef(null);
    const squareRef = useRef(null);
    const firstRef = useRef(null);
    const dispatch = useDispatch();

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger); // Ensure ScrollTrigger is registered
        const startPositionForHeroMain = window.innerWidth < 1000 ? "top top" : "bottom bottom";
        const endPositionForHeroMain = window.innerWidth < 1000 ? "top top" : "bottom bottom";
        ScrollTrigger.create({
            trigger: hookRef.current,
            start: startPositionForHeroMain,
            end: endPositionForHeroMain,
            onEnter: () => {
                gsap.to('body', { backgroundColor: 'black', duration: 0.6 });
                gsap.to([headerRef.current, paragraphRef.current,], { color: 'white', duration: 0.6 });
                squareRef.current.classList.remove('lighter'); // Remove the 'lighter' class
                gsap.to(firstRef.current, { backgroundColor: 'black', duration: 0.6 });
                gsap.to(hookRef.current, { backgroundColor: 'black', duration: 0.6 });
                dispatch(setBackgroundColor('black'));


            },
            onLeaveBack: () => {
                gsap.to('body', { backgroundColor: 'white', duration: 0.6 }); // Change back to white
                gsap.to([headerRef.current, paragraphRef.current,], { color: 'black', duration: 0.6 }); // Change text color back to black
                squareRef.current.classList.add('lighter'); // Add the 'lighter' class back
                gsap.to(firstRef.current, { backgroundColor: 'white', duration: 0.6 });
                gsap.to(hookRef.current, { backgroundColor: 'white', duration: 0.6 });
                dispatch(setBackgroundColor('white'));

            },
            markers: false // Disable markers for production
        });
    }, []);


    return (
        <>
            <div className='mission-main' ref={firstRef}>
                <div className='mission-wrapper'>

                    <div className='mission-left'>
                        {/*<div className='header-wrapper'>
                        <p className='text-regular-semibold  black'>Navdihujeva</p>
                    </div>*/}
                        <h3 className='heading-desktop-h3 black' >Celotna podpora, več kot le trenerstvo!</h3>

                        <h3 className='text-medium-normal black' >Poleg osebnega trenerstva ponujava tudi svetovanje na različnih področjih zdravja in dobrega počutja. Imava lastne izkušnje za pomoč pri sladkorni bolezni, obvladovanju poškodb, kot so hernija in protruzija, ter pri prehranskih intolerancah, kot sta gluten in laktoza. Prav tako nudiva podporo pri motnjah hranjenja, saj verjameva, da je ključ do uspeha v celostnem pristopu, ki zajema tako fizično kot duševno zdravje. Skupaj najdemo pot do boljšega počutja in trajnostnih sprememb.</h3>


                    </div>

                    <div className='mission-right'>
                        <img
                            src="/images/z6.webp"
                            alt="A couple"
                            className='happy-img brbrb'

                        />
                    </div>
                </div>
            </div>


            <div className='about-hook-main coloredw' ref={hookRef}>
                <div className='about-hook-wrapper'>
                    <div className='about-hook-left'>
                        <div className='toppper'>
                            <p className='text-regular-semibold  black section-indicator alignself text-regular-semibold lighter smooth' ref={squareRef}>Združena moč</p>
                            <h3 className='heading-desktop-h3 blackk ' ref={headerRef}>Začnimo pot k boljšemu življenju!</h3>

                        </div>
                        <h3 className='text-medium-normal  blackk' ref={paragraphRef}>Najino delo presega zgolj vadbo – gre za ustvarjanje celostnega načrta, ki te bo popeljal do zdravja, moči in ravnovesja. Z različnimi storitvami, od individualnega treninga do prehranskega svetovanja, sva tu, da ti pomagava doseči cilje, ki si jih vedno želel/a. Začnimo že danes in skupaj oblikujmo tvoje novo, boljše življenje.</h3>

                    </div>


                    <div className='about-hook-right'>
                        <div className='img-holder'>
                            <img src="/images/t11.webp" className='about-hook-img' alt='heros' />

                        </div>

                        <div className='img-holder'>
                            <img src="/images/m7.webp" className='about-hook-img' alt='heros' />

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Svetovanje
