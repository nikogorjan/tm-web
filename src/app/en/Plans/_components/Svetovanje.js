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
            <h3 className='heading-desktop-h3 black'>Comprehensive Support, More Than Just Training!</h3>

            <h3 className='text-medium-normal black'>
                Beyond personal training, we also offer advice in various areas of health and well-being. We use our personal experience to help with diabetes, managing injuries such as hernias and protrusions, and dietary intolerances like gluten and lactose. Additionally, we provide support for eating disorders because we believe the key to success lies in a holistic approach that encompasses both physical and mental health. Together, we can find the path to better well-being and sustainable change.
            </h3>
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
                <p className='text-regular-semibold black section-indicator alignself text-regular-semibold lighter smooth' ref={squareRef}>United Strength</p>
                <h3 className='heading-desktop-h3 blackk' ref={headerRef}>Let’s Begin the Journey to a Better Life!</h3>
            </div>
            <h3 className='text-medium-normal blackk' ref={paragraphRef}>
                Our work goes beyond just exercise—it’s about creating a holistic plan that will lead you to health, strength, and balance. From personal training to nutritional guidance, we’re here to help you achieve the goals you’ve always wanted. Let’s start today and shape your new, better life together.
            </h3>
        </div>

        <div className='about-hook-right'>
            <div className='img-holder'>
                <img src="/images/t11.webp" className='about-hook-img' alt='heroes' />
            </div>

            <div className='img-holder'>
                <img src="/images/m7.webp" className='about-hook-img' alt='heroes' />
            </div>
        </div>
    </div>
</div>
        </>
    )
}

export default Svetovanje
