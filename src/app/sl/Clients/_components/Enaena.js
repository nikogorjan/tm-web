'use client'

import React, { useRef } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";import './Enaena.css'
import '../../../sl/_components/Hero.css'
import '../../../sl/_components/Ekipa.css'
import { useDispatch } from 'react-redux';
import { setBackgroundColor } from '../../../store/colorSlice'; // Update the path as needed
gsap.registerPlugin(ScrollTrigger);

const Enaena = () => {
    const whiteRef = useRef(null);
    const whiteHeaderRef = useRef(null);
    const whiteMidRef = useRef(null);
    const whiteTextRef = useRef(null);
    const iconRef = useRef(null);
    const imgRef = useRef(null);

    const dispatch = useDispatch();



    const whiteHeaderRef1 = useRef(null);
    const whiteMidRef1 = useRef(null);
    const whiteTextRef1 = useRef(null);

    useGSAP(() => {
        const startPositionForHeroMain = window.innerWidth < 999 ? "top+=0% center+=0%" : "top-=0% center+=0%";
        const endPositionForHeroMain = window.innerWidth < 999 ? "top+=0% center+=0%" : "top center+=0%";

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
                    
                    gsap.timeline()
                    .to(whiteHeaderRef1.current, { color: 'black', duration: 0.6 })
                    gsap.timeline()
                    .to(whiteMidRef1.current, { color: 'black', duration: 0.6 })
                    gsap.timeline()
                    .to(whiteTextRef1.current, { color: 'black', duration: 0.6 })
                    whiteMidRef1.current.classList.add('lighter'); // Add the 'lighter' class back

                    dispatch(setBackgroundColor('white'));


            },
            onLeaveBack: () => {
                

                gsap.timeline()
                    .to('body', { backgroundColor: 'black', duration: 0.6 });
                    gsap.timeline()
                    .to(whiteHeaderRef.current, { color: 'white', duration: 0.3 })
                    gsap.timeline()
                    .to(whiteMidRef.current, { color: 'white', duration: 0.3 })
                    gsap.timeline()
                    .to(whiteTextRef.current, { color: 'white', duration: 0.3 })
                    gsap.timeline()
                    .to(iconRef.current, { filter: 'invert(0)', duration: 0.3 });
                    whiteMidRef.current.classList.remove('lighter'); // Add the 'lighter' class back


                    gsap.timeline()
                    .to(whiteHeaderRef1.current, { color: 'white', duration: 0.3 })
                    gsap.timeline()
                    .to(whiteMidRef1.current, { color: 'white', duration: 0.3 })
                    gsap.timeline()
                    .to(whiteTextRef1.current, { color: 'white', duration: 0.3 })
                    whiteMidRef1.current.classList.remove('lighter'); // Add the 'lighter' class back
                    dispatch(setBackgroundColor('black'));

            },
            markers: false // Disable markers for production
        });
    }, []);

    return (
        <div className='ena-main'>
            <div className='ena-wrapper'>

                <div className='ena-left'>
                    <div className='ena-h' >
                        <p className=' black section-indicator alignself text-regular-semibold smooth' ref={whiteMidRef1}>1 na 1</p>

                        <h3 className='heading-desktop-h3' ref={whiteHeaderRef1}>Popeljeva te izven tvoje cone udobja in ti zagotoviva vidne rezultate!</h3>
                        <p className='text-medium-normal' ref={whiteTextRef1}>Vsaki stranki se popolnoma posvetiva in ji nameniva 100% svoje pozornosti.</p>

                    </div>
                </div>

                <div className='ena-right'>
                    <video
                        src="/Videos/9.mp4"
                        autoPlay
                        muted
                        playsInline
                        loop
                        className='ena-video'>
                    </video>

                    <video
                        src="/Videos/12.mp4"
                        autoPlay
                        muted
                        playsInline
                        loop
                        className='ena-video'>
                    </video>
                </div>

            </div>


            <div className='grid-main' ref={whiteRef}>
                <div className='grid-wrapper'>
                    <div className='theseheaders'>
                        <div className='header-wrapper'>
                            <p className='text-regular-semibold  black section-indicator alignself text-regular-semibold' ref={whiteMidRef}>Ekipa</p>
                        </div>
                        <div className='header-wrapper'>
                            <h3 className='heading-desktop-h3 ' ref={whiteHeaderRef}>Zavedava se, da je skupna pot vedno lažja!</h3>
                        </div>

                        <div className='header-wrapper'>
                            <h3 className='text-medium-normal ' ref={whiteTextRef}>Stranke imajo možnost, da se med seboj spoznajo, motivirajo ter delijo svoje izkušnje. </h3>
                        </div>
                    </div>
                    <div className='bento-grid w-layout-grid '>

                        <div className='bento-item item3'>
                            <img alt='logo' className='bento-img' src='/images/e1.webp' />

                        </div>
                        <div className='bento-item item4'>
                            <img alt='logo' className='bento-img higher' src='/images/e4.webp' />

                        </div>
                        <div className='bento-item item5'>
                            <img alt='logo' className='bento-img' src='/images/e5.webp' />

                        </div>
                        <div className='bento-item item6'>
                            <img alt='logo' className='bento-img' src='/images/e3.webp' />

                        </div>

                    </div>






                </div>
            </div>


        </div>
    )
}

export default Enaena
