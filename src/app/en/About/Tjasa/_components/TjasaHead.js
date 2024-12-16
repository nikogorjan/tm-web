'use client'

import React, { useRef, useState } from 'react';
import './TjasaHead.css'
import '../../../../sl/_components/Hero.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import HoverButton from '../../../../../../public/Components/HoverButton/HoverButton';
import Ekipa from './Ekipa';

import { useDispatch } from 'react-redux';
import { setBackgroundColor } from '../../../../store/colorSlice'; // Update the path as needed

gsap.registerPlugin(ScrollTrigger);


const TjasaHead = () => {

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
    const grayRef = useRef(null);

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
                gsap.to([headerRef.current, paragraphRef.current,], { color: 'black', duration: 0.6 }); // Change text color back to black
                squareRef.current.classList.add('lighter'); // Add the 'lighter' class back
                gsap.to(grayRef.current, { backgroundColor: '#f9f9f9', duration: 0.6 }); // Change back to white
                dispatch(setBackgroundColor('white'));


            },
            onLeaveBack: () => {

                gsap.to('body', { backgroundColor: 'black', duration: 0.6 });
                gsap.to([headerRef.current, paragraphRef.current,], { color: 'white', duration: 0.6 });
                squareRef.current.classList.remove('lighter'); // Remove the 'lighter' class
                gsap.to(grayRef.current, { backgroundColor: "black", duration: 0.6 }); // Change back to white
                dispatch(setBackgroundColor('black'));

            },
            markers: false // Disable markers for production
        });
    }, []);


    return (
        <div className='tjasa-head-main'>
            <div className='marsel-head-image-wrapper' ref={HolderRef}>
                <div className='hero-img-wrapperr' ref={ImgWrapperRef}>
                    <img alt='logo' className='hero-imgg ' src='/images/z11.webp' ref={ImgRef} />
                    {/*<img alt='logo' className='hero-img mobile' src='/Images/hero2-mobile.webp' ref={ImgRef} />*/}

                </div>
            </div>

            <div className='marsel-head-content-wrapper'>
    <div className='one-first-row'>
        <div className='one-first-left'>
            <div className='first-left-wrapper'>
                <h3 className='heading-desktop-h3' ref={headerRef1}>Tjaša Vrečič - Certified Personal Trainer and Bodybuilder</h3>
            </div>
        </div>
        <div className='one-first-right'>
            <div className='one-right-upper'>
                <p className='text-medium-normal' ref={textRef1}>
                    I am Tjaša Vrečič, a certified personal trainer, bodybuilding competitor, and passionate athlete. Through various challenges in life, I have learned to listen to my body and mind. I prioritize understanding the body, performing exercises correctly, and establishing a strong mind-muscle connection.
                </p>
            </div>
            <div className='one-right-lower'>
                <div className='left-row'>
                    <div className='left-row-cell'>
                        <div className='left-row-cell-wrapper' ref={rowRef1}>
                            <img src="/images/group.svg" className='relume-icon' alt='heroes' />
                            <h6 className='heading-desktop-h6 highlighted-header'>Personal Trainer</h6>
                            <p className='text-regular-normal'>
                                Every workout is an opportunity for improvement, whether it’s lifting heavier weights, performing more repetitions, or improving technique. Together with my clients, we work toward achieving these goals.
                            </p>
                        </div>
                    </div>
                    <div className='left-row-cell'>
                        <div className='left-row-cell-wrapper' ref={rowReff1}>
                            <img src="/images/dumbbell.svg" className='relume-icon' alt='heroes' />
                            <h6 className='heading-desktop-h6 highlighted-header'>Bodybuilder</h6>
                            <p className='text-regular-normal'>
                                In my career, I have already achieved numerous international results.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className='tmp tmpmargin tmptjasa' ref={hookRef}>
    <div className='tmp-about-wrapper'>
        <div className='tmp-about-left leftalign'>
            <div className='left-wrapper'>
                <div className='tmp-about-left-headers'>
                    <p className='black section-indicator alignself text-regular-semibold smooth' ref={squareRef}>My Journey</p>

                    <h3 className='heading-desktop-h3' ref={headerRef}>My Journey from Injury to Bodybuilding!</h3>
                    <p className='text-medium-normal' ref={paragraphRef}>
                        Unfortunately, we humans often change our lifestyle only when we are forced to do so due to various reasons—be it injuries, surgeries, or poor habits. I was on the same path when, due to improper exercise, I suffered an injury and developed a hernia in the lumbar region, L5-S1.
                    </p>
                    <div className='marger'></div>
                    <HoverButton
                        text="Read More"
                        onClick={() => handleNavigation('/en/Blog/moje-potovanje')}
                    />
                </div>
            </div>
        </div>
        <div className='tmp-about-right'>
            <img src="/images/us9.webp" className='tmp-img-l' alt='heroes' />
        </div>
    </div>
</div>



            <div className='tjasa-medals' ref={grayRef}>

                <div className='hedd midded'>
                    <h3 className='heading-desktop-h3 black ' >Moje medalje! </h3>

                    <h3 className='text-medium-normal  black' >Simboli truda in uspeha.</h3>
                </div>

                <div className='medals-wrapper'>
                <div className='medals-left'>
    <h4 className='program-header black'>First Place at NPC Invictus Cup. My First Competition in the True Novice Category</h4>
    <h3 className='text-medium-normal black'>
        Achieving optimal weight requires more than just counting calories and exercising.
    </h3>

    <div className='highlighted-row margingray'>
        <div className='blog-header-wrapper black highlighted-gray'>
            <p className='text-regular-semibold nomargins'>Competition</p>
        </div>
        <div className='blog-header-wrapper black highlighted-gray'>
            <p className='text-regular-semibold nomargins'>Bodybuilding</p>
        </div>
        <div className='blog-header-wrapper black highlighted-gray'>
            <p className='text-regular-semibold nomargins'>True Novice</p>
        </div>
    </div>

    <img
        src="/images/tekma1.webp"
        alt="Competition Medal"
        className='tekma-img'
    />
</div>

<div className='medals-right'>

<div className='mr1'>
    <div className='medal-cell'>
        <img
            src="/images/gold.svg"
            alt="Gold Medal"
            className='medal-img'
        />
        <h6 className='heading-desktop-h6 black'>NPC Invictus Cup</h6>
        <p className='text-regular-normal black'>First place in the True Novice category</p>
    </div>

    <div className='medal-cell'>
        <img
            src="/images/silver.svg"
            alt="Silver Medal"
            className='medal-img'
        />
        <h6 className='heading-desktop-h6 black'>NPC Regional Austria</h6>
        <p className='text-regular-normal black'>Second place in the Novice category</p>
    </div>
</div>
<div className='mr1'>
    <div className='medal-cell'>
        <img
            src="/images/bronze.svg"
            alt="Bronze Medal"
            className='medal-img'
        />
        <h6 className='heading-desktop-h6 black'>NPC Invictus Cup</h6>
        <p className='text-regular-normal black'>Third place in the Open Class category</p>
    </div>

    <div className='medal-cell'>
        <img
            src="/images/4th.svg"
            alt="Fourth Place"
            className='medal-img'
        />
        <h6 className='heading-desktop-h6 black'>NPC Regional Austria</h6>
        <p className='text-regular-normal black'>Fourth place in the Open Class category</p>
    </div>
</div>

</div>

                </div>


                <div className='medals-wrapper mrgto'>
    <div className='medals-left'>
        <h4 className='program-header black'>To achieve my results, I had to step out of my comfort zone and reduce my body fat to 10%</h4>
        <h3 className='text-medium-normal black'>Discipline is the key to success.</h3>

        <div className='highlighted-row margingray'>
            <div className='blog-header-wrapper black highlighted-gray'>
                <p className='text-regular-semibold nomargins'>Transformation</p>
            </div>
            <div className='blog-header-wrapper black highlighted-gray'>
                <p className='text-regular-semibold nomargins'>Weight Loss</p>
            </div>
            <div className='blog-header-wrapper black highlighted-gray'>
                <p className='text-regular-semibold nomargins'>Competition Preparation</p>
            </div>
        </div>
        <img
            src="/images/ttr.webp"
            alt="Transformation Image"
            className='ttr-img'
        />
    </div>
</div>

                <div className='medals-right'>

                </div>



            </div>



            <div className='tjasa-bento'>
                <Ekipa />
            </div>





            <div className={`shadows-for-transition ${isTransitioning ? 'show-shadow' : ''}`}>

      </div>

        </div>

    )
}

export default TjasaHead
