'use client'

import React, { useRef, useEffect } from 'react';
import './ClientHook.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import { useDispatch } from 'react-redux';
import { setBackgroundColor } from '../../../store/colorSlice'; // Update the path as needed
gsap.registerPlugin(ScrollTrigger);

const ClientHook = () => {
    const storyRef = useRef(null);

    const whitestRef = useRef(null);


    const sqRef1 = useRef(null);
    const sqRef2 = useRef(null);
    const HeaderRef1 = useRef(null);
    const HeaderRef2 = useRef(null);
    const ParRef1 = useRef(null);
    const ParRef2 = useRef(null);

    const iconRef1 = useRef(null);
    const iconRef2 = useRef(null);
    const iconRef3 = useRef(null);
    const iconRef4 = useRef(null);
    const ichRef1 = useRef(null);
    const ichRef2 = useRef(null);
    const ichRef3 = useRef(null);
    const ichRef4 = useRef(null);
    const icpRef1 = useRef(null);
    const icpRef2 = useRef(null);
    const icpRef3 = useRef(null);
    const icpRef4 = useRef(null);
    const lineRef1 = useRef(null);
    const lineRef2 = useRef(null);
    const lineRef3 = useRef(null);
    const lineRef4 = useRef(null);

    const dispatch = useDispatch();



    useEffect(() => {
        const startPositionForHeroMain = window.innerWidth < 1000 ? "top center" : "top bottom";
        const endPositionForHeroMain = window.innerWidth < 1000 ? "top center" : "top bottom";

        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: storyRef.current,
                start: startPositionForHeroMain,
                end: endPositionForHeroMain,
                scrub: false,
                markers: false,
            }
        });

        tl.to('.line1y', { y: 0, duration: 1 })
            .to('.circle1y', { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.circle-text1y', { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.line2y', { y: -0, duration: 1 })
            .to('.content-holder1y', { opacity: 1, y: 0, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.circle2y', { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.circle-text2y', { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.line3y', { y: -0, duration: 1 })
            .to('.content-holder2y', { opacity: 1, y: 0, scale: 1, duration: 0.5 }, '-=0.5')

            .to('.circle3y', { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.circle-text3y', { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.line4y', { y: -0, duration: 1 })
            .to('.content-holder3y', { opacity: 1, y: 0, scale: 1, duration: 0.5 }, '-=0.5')

            .to('.circle4y', { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.circle-text4y', { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.line5y', { y: -0, duration: 1 })
            .to('.content-holder4y', { opacity: 1, y: 0, scale: 1, duration: 0.5 }, '-=0.5')



    }, []);



    useGSAP(() => {
        const startPositionForHeroMain = window.innerWidth < 999 ? "top-=0% center+=0%" : "top-=30% center+=0%";
        const endPositionForHeroMain = window.innerWidth < 999 ? "top center+=0%" : "top-=30% center+=0%";

        ScrollTrigger.create({
            trigger: whitestRef.current,
            start: startPositionForHeroMain,
            end: endPositionForHeroMain,
            onEnter: () => {
                gsap.timeline()
                    .to('body', { backgroundColor: 'black', duration: 0.6 })
                gsap.timeline()
                    .to(HeaderRef1.current, { color: 'white', duration: 0.6 })
                    gsap.timeline()
                    .to(HeaderRef2.current, { color: 'white', duration: 0.6 })
                    gsap.timeline()
                    .to(ParRef1.current, { color: 'white', duration: 0.6 })
                    gsap.timeline()
                    .to(ParRef2.current, { color: 'white', duration: 0.6 })
                
                    sqRef1.current.classList.remove('lighter'); // Add the 'lighter' class back
                sqRef2.current.classList.remove('lighter'); // Add the 'lighter' class back

                iconRef1.current.classList.add('inverted'); // Add the 'lighter' class back
                iconRef2.current.classList.add('inverted'); // Add the 'lighter' class back
                iconRef3.current.classList.add('inverted'); // Add the 'lighter' class back
                iconRef4.current.classList.remove('inverted'); // Add the 'lighter' class back

                lineRef1.current.classList.add('inverted'); // Add the 'lighter' class back
                lineRef2.current.classList.add('inverted'); // Add the 'lighter' class back
                lineRef3.current.classList.add('inverted'); // Add the 'lighter' class back
                lineRef4.current.classList.add('inverted'); // Add the 'lighter' class back

                gsap.timeline()
                    .to(ichRef1.current, { color: 'white', duration: 0.3 })
                    gsap.timeline()
                    .to(icpRef1.current, { color: 'white', duration: 0.3 })

                    gsap.timeline()
                    .to(ichRef2.current, { color: 'white', duration: 0.3 })
                    gsap.timeline()
                    .to(icpRef2.current, { color: 'white', duration: 0.3 })

                    gsap.timeline()
                    .to(ichRef3.current, { color: 'white', duration: 0.3 })
                    gsap.timeline()
                    .to(icpRef3.current, { color: 'white', duration: 0.3 })

                    gsap.timeline()
                    .to(ichRef4.current, { color: 'white', duration: 0.3 })
                    gsap.timeline()
                    .to(icpRef4.current, { color: 'white', duration: 0.3 })
                    dispatch(setBackgroundColor('black'));

            },
            onLeaveBack: () => {


                gsap.timeline()
                    .to('body', { backgroundColor: 'white', duration: 0.6 });
                gsap.timeline()
                    .to(HeaderRef1.current, { color: 'black', duration: 0.6 })
                    gsap.timeline()
                    .to(HeaderRef2.current, { color: 'black', duration: 0.6 })
                    gsap.timeline()
                    .to(ParRef1.current, { color: 'black', duration: 0.6 })
                    gsap.timeline()
                    .to(ParRef2.current, { color: 'black', duration: 0.6 })

                    
                    sqRef1.current.classList.add('lighter'); // Add the 'lighter' class back
                    sqRef2.current.classList.add('lighter'); // Add the 'lighter' class back

                iconRef1.current.classList.remove('inverted'); // Add the 'lighter' class back
                iconRef2.current.classList.remove('inverted'); // Add the 'lighter' class back
                iconRef3.current.classList.remove('inverted'); // Add the 'lighter' class back
                iconRef4.current.classList.add('inverted'); // Add the 'lighter' class back

                lineRef1.current.classList.remove('inverted'); // Add the 'lighter' class back
                lineRef2.current.classList.remove('inverted'); // Add the 'lighter' class back
                lineRef3.current.classList.remove('inverted'); // Add the 'lighter' class back
                lineRef4.current.classList.remove('inverted'); // Add the 'lighter' class back



                gsap.timeline()
                    .to(ichRef1.current, { color: 'black', duration: 0.3 })
                    gsap.timeline()
                    .to(icpRef1.current, { color: 'black', duration: 0.3 })

                    gsap.timeline()
                    .to(ichRef2.current, { color: 'black', duration: 0.3 })
                    gsap.timeline()
                    .to(icpRef2.current, { color: 'black', duration: 0.3 })

                    gsap.timeline()
                    .to(ichRef3.current, { color: 'black', duration: 0.3 })
                    gsap.timeline()
                    .to(icpRef3.current, { color: 'black', duration: 0.3 })

                    gsap.timeline()
                    .to(ichRef4.current, { color: 'black', duration: 0.3 })
                    gsap.timeline()
                    .to(icpRef4.current, { color: 'black', duration: 0.3 })
                    dispatch(setBackgroundColor('white'));

            },
            markers: false // Disable markers for production
        });
    }, []);

    return (
        <>
            <div className='story-mainy'>

                <div className='story-wrappery' >
                    <div className='story-lefty'>
                        {/* Left side content */}

                        <div className='heddy'>
                            <p className='text-regular-semibold  black section-indicator lighter' ref={sqRef1}>Razlog</p>
                            <h3 className='heading-desktop-h3 black ' ref={HeaderRef1}>Zakaj se stranke odločajo za dolgoročno sodelovanje z nama? </h3>

                            <h3 className='text-medium-normal  black' ref={ParRef1}>Zaradi najinega individualnega pristopa, dokazano učinkovitih rezultatov in stalne podpore.</h3>
                        </div>


                    </div>
                    <div className='story-righty' ref={storyRef}>

                        <div className='circle-wrappery'>
                            <div className='circley circle1y'>
                                <img src="/images/id-card.svg" className='relume-icon ' alt='heros' ref={iconRef1} />

                            </div>

                        </div>
                        <div className='line-wrappery'><div className='line-with-contenty'></div>
                            <div className='liney line2y' ref={lineRef1}></div>
                            <div className='content-holdery content-holder1y'>
                                <p className='content-texty black' ref={ichRef1}>Osebni pristop</p>
                                <h3 className='text-medium-normal  black marbot' ref={icpRef1}>Vsaka stranka prejme individualno prilagojen načrt, ki ustreza njenim ciljem, potrebam in zmožnostim, kar zagotavlja učinkovite in trajne rezultate.</h3>

                            </div>
                        </div>
                        <div className='circle-wrappery'>
                            <div className='circley circle2y'>
                                <img src="/images/book-add.svg" className='relume-icon ' alt='heros' ref={iconRef2} />

                            </div>
                        </div>

                        <div className='line-wrappery'><div className='line-with-contenty'></div>
                            <div className='liney line3y' ref={lineRef2}></div>
                            <div className='content-holdery content-holder2y'>
                                <p className='content-texty black' ref={ichRef2}>Izkušnje</p>
                                <h3 className='text-medium-normal  black marbot' ref={icpRef2}>Sva izkušena in certificirana trenerja in predana vašemu uspehu. Podpirava vas na vsakem koraku.</h3>

                            </div>
                        </div>
                        <div className='circle-wrappery'>
                            <div className='circley circle3y'>
                                <img src="/images/infinite.svg" className='relume-icon ' alt='heros' ref={iconRef3} />

                            </div>
                        </div>

                        <div className='line-wrappery'><div className='line-with-contenty'></div>
                            <div className='liney line4y' ref={lineRef3}></div>
                            <div className='content-holdery content-holder3y'>
                                <p className='content-texty black' ref={ichRef3}>Celotna podpora</p>
                                <h3 className='text-medium-normal  black marbot' ref={icpRef3}>Poleg treningov nudiva tudi plan prehrane, motivacijo in podporo, da ostanete na pravi poti.</h3>

                            </div>
                        </div>
                        <div className='circle-wrappery'>
                            <div className='circley circle4y'>
                                <img src="/images/user-check.svg" className='relume-icon inverted' alt='heros' ref={iconRef4} />

                            </div>
                        </div>

                        <div className='line-wrappery'><div className='line-with-contenty'></div>
                            <div className='liney line5y' ref={lineRef4}></div>
                            <div className='content-holdery content-holder4y'>
                                <p className='content-texty black' ref={ichRef4}>Dokazani rezultati</p>
                                <h3 className='text-medium-normal  black marbot' ref={icpRef4}>Najine stranke dosegajo izjemne preobrazbe, kar dokazuje najino učinkovitost.</h3>

                            </div>
                        </div>
                    </div>
                </div>
            </div >

            <div className='client-hook-main' ref={whitestRef}>
                <div className='client-hook-wrapper'>

                    <div className='chook-left'>
                        <div className='heddy'>
                            <p className='text-regular-semibold  black section-indicator lighter smooth' ref={sqRef2}>Začni</p>
                            <h3 className='heading-desktop-h3 black ' ref={HeaderRef2}>Si pripravljen stopiti iz cone udobja in narediti prvi korak k boljšemu življenju?</h3>

                            <h3 className='text-medium-normal  black' ref={ParRef2}>Ne odlašajte, stopi v stik z nama še danes!</h3>
                        </div>
                    </div>

                    <div className='chook-right'>
                        <video
                            src="/Videos/Last.mp4"
                            autoPlay
                            muted
                            playsInline
                            loop
                            className='chook-video'>
                        </video>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ClientHook
