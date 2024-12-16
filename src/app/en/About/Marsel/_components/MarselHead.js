'use client'

import React, { useRef, useState } from 'react';
import './MarselHead.css'
import '../../../../sl/_components/Hero.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import HoverButton from '../../../../../../public/Components/HoverButton/HoverButton';

import { useDispatch } from 'react-redux';
import { setBackgroundColor } from '../../../../store/colorSlice'; // Update the path as needed

gsap.registerPlugin(ScrollTrigger);

const MarselHead = () => {
    const HolderRef = useRef();
    const ImgWrapperRef = useRef();
    const ImgRef = useRef();
    const headerRef1 = useRef();
    const textRef1 = useRef();
    const rowRef1 = useRef();
    const rowReff1 = useRef();

    const hookRef = useRef(null);
    const headerRef = useRef(null);
    const paragraphRef = useRef(null);
    const squareRef = useRef(null);

    const dispatch = useDispatch();



    useGSAP(() => {


        // Timeline for image wrapper animation
        const imgTimeline = gsap.timeline();

        imgTimeline.to(
            ImgWrapperRef.current,
            {
                width: '80%',
                duration: 1.5,
                ease: 'power3.inOut',
                delay: 0
            },
            "+=0" // No delay before starting the next animation
        );

        const imgTimeline2 = gsap.timeline();

        imgTimeline2.to(
            ImgWrapperRef.current,
            {
                height: '100%',
                width: '100%',
                duration: 1,
                ease: 'power3.inOut',
                delay: 1.4
            },
            "+=0"
        );



        const imgTimeline3 = gsap.timeline();

        imgTimeline3.to(
            ImgRef.current,
            {
                scale: 1.1,
                duration: 1,
                ease: 'power3.inOut',
                delay: 0.6
            },
            "+=0"
        );






    }, []);

    const [isTransitioning, setIsTransitioning] = useState(false); // State to manage the shadow transition


    const handleNavigation = (url) => {
        // Add the 'show-shadow' class to trigger the transition
        setIsTransitioning(true);
    
        // After 0.3s, navigate to the URL
        setTimeout(() => {
          window.location.href = url;
        }, 300);
      };

    useGSAP(() => {
        const startPositionForHeroMain = window.innerWidth < 1000 ? "top top+=20%" : "bottom bottom-=10%";
        const endPositionForHeroMain = window.innerWidth < 1000 ? "top top+=20%" : "bottom bottom-=10%";
        ScrollTrigger.create({
            trigger: hookRef.current,
            start: startPositionForHeroMain,
            end: endPositionForHeroMain,
            onEnter: () => {
                

                gsap.to('body', { backgroundColor: 'white', duration: 0.6 }); // Change back to white
                gsap.to([headerRef.current, paragraphRef.current, ], { color: 'black', duration: 0.6 }); // Change text color back to black
                squareRef.current.classList.add('lighter'); // Add the 'lighter' class back

                dispatch(setBackgroundColor('white'));


            },
            onLeaveBack: () => {
                
                gsap.to('body', { backgroundColor: 'black', duration: 0.6 });
                gsap.to([headerRef.current, paragraphRef.current, ], { color: 'white', duration: 0.6 });
                squareRef.current.classList.remove('lighter'); // Remove the 'lighter' class

                dispatch(setBackgroundColor('black'));

            },
            markers: false // Disable markers for production
        });
    }, []);

    return (
        <div className='marsel-head-main'>
            <div className='marsel-head-image-wrapper' ref={HolderRef}>
                <div className='hero-img-wrapperr' ref={ImgWrapperRef}>
                    <img alt='logo' className='hero-imgg ' src='/images/z12.webp' ref={ImgRef} />
                    {/*<img alt='logo' className='hero-img mobile' src='/Images/hero2-mobile.webp' ref={ImgRef} />*/}

                </div>
            </div>

            <div className='marsel-head-content-wrapper'>
            <div className='one-first-row'>
    <div className='one-first-left'>
        <div className='first-left-wrapper'>
            <h3 className='heading-desktop-h3' ref={headerRef1}>Marsel Kolarič - Certified Personal Trainer and Motivator</h3>
        </div>
    </div>
    <div className='one-first-right'>
        <div className='one-right-upper'>
            <p className='text-medium-normal' ref={textRef1}>
                I am Marsel Kolarič, a certified personal trainer and motivator for anyone who wants to improve their life and is ready to work with me on the path to success.
            </p>
        </div>
        <div className='one-right-lower'>
            <div className='left-row'>
                <div className='left-row-cell'>
                    <div className='left-row-cell-wrapper' ref={rowRef1}>
                        <img src="/images/group.svg" className='relume-icon' alt='heroes' />
                        <h6 className='heading-desktop-h6 highlighted-header'>Personal Trainer</h6>
                        <p className='text-regular-normal'>
                            Every training session is an opportunity for improvement, whether it’s lifting heavier weights, performing more repetitions, or improving technique. Together with my clients, I work on achieving these goals.
                        </p>
                    </div>
                </div>

                <div className='left-row-cell'>
                    <div className='left-row-cell-wrapper' ref={rowReff1}>
                        <img src="/images/user-voice.svg" className='relume-icon' alt='heroes' />
                        <h6 className='heading-desktop-h6 highlighted-header'>Motivator</h6>
                        <p className='text-regular-normal'>
                            I believe that with the right motivation and a positive attitude, anyone can achieve their goals.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>







            </div>

            <div className='tmp tmpmargin' ref={hookRef}>
                <div className='tmp-about-wrapper'>
                <div className='tmp-about-left leftalign'>
    <div className='left-wrapper'>
        <div className='tmp-about-left-headers'>
            <p className='black section-indicator alignself text-regular-semibold smooth' ref={squareRef}>Diabetes</p>

            <h3 className='heading-desktop-h3' ref={headerRef}>How Diabetes Shaped My Approach to Fitness</h3>
            <p className='text-medium-normal' ref={paragraphRef}>
                At the age of sixteen, I was diagnosed with Type 1 diabetes, which quickly made me realize that fitness plays a key role in managing blood sugar levels and improving overall health. After trying numerous diets, I discovered that the best one is the one that can be sustained long-term, without strict restrictions, and balanced to fit an individual's lifestyle.
            </p>
            <div className='marger'></div>
            <HoverButton
                text="Read More"
                onClick={() => handleNavigation('/en/Blog/sladkorna-bolezen')}
            />
        </div>
    </div>
</div>
                    <div className='tmp-about-right'>
                        <img src="/images/marsel1.webp" className='tmp-img-l' alt='heros' />
                    </div>
                </div>
            </div>



            <div className={`shadows-for-transition ${isTransitioning ? 'show-shadow' : ''}`}>

      </div>


        </div>
    )
}

export default MarselHead
