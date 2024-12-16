'use client'

import React, { useRef, useEffect, useState } from 'react';
import './Hero.css'; // Import the Sass module
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";
import SplitType from 'split-type';
import HoverButton from '../../../../public/Components/HoverButton/HoverButton';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { useDispatch } from 'react-redux';
import { setBackgroundColor } from '../../store/colorSlice'; // Update the path as needed

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

    const dispatch = useDispatch();


    const heromainRef = useRef(null);
    const [shadowsDivHeight, setShadowsDivHeight] = useState('auto');
    const shadowsDivRef = useRef(null);
    const herosRef = useRef(null);
    const tmpRef = useRef(null);
    const tmpWrapperRef = useRef(null);
    const aboutImgRef = useRef(null); // Reference for the section1 header
    const aboutImgRef2 = useRef(null); // Reference for the section1 header
    const headerRef = useRef(null); // Reference for the section1 header
    const textRef = useRef(null); // Reference for the section1 header
    const rowRef = useRef(null); // Reference for the section1 header
    const rowReff = useRef(null); // Reference for the section1 header

    const headerRef1 = useRef(null); // Reference for the section1 header
    const textRef1 = useRef(null); // Reference for the section1 header
    const rowRef1 = useRef(null);
    const rowReff1 = useRef(null);

    const tmpRef1 = useRef(null);

    const shadowRef = useRef(null);

    const whiteRef = useRef(null);
    const whiteHeaderRef = useRef(null);
    const whiteTextRef = useRef(null);
    const whiteSmallRef = useRef(null);
    const swiperWrapperRef = useRef(null);
    const swiperWrapperRef1 = useRef(null);

    const program1Ref = useRef(null);
    const program2Ref = useRef(null);
    const program3Ref = useRef(null);

    const preberiButtonRef = useRef(null);

    const swiperRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(isMobileDevice() ? 1.5 : 6);
    const [spaceBetween, setSpaceBetween] = useState(isMobileDevice() ? window.innerWidth * 0.05 : 16);
    const [offset, setOffset] = useState(0);

    const swiperRef2 = useRef(null);
    const swiperRef3 = useRef(null);

    const rightRef = useRef(null);
    const rightRef2 = useRef(null);

    const leftRef = useRef(null);

    const wordRef = useRef(null);
    const headerRef2 = useRef(null);
    const paragraphRef2 = useRef(null);
    const relRef1 = useRef(null);
    const relRef2 = useRef(null);
    const relRef3 = useRef(null);
    const hRef1 = useRef(null);
    const hRef2 = useRef(null);
    const hRef3 = useRef(null);
    const pRef1 = useRef(null);
    const pRef2 = useRef(null);
    const pRef3 = useRef(null);

    const [totalSlides, setTotalSlides] = useState(0); // Store the total number of slides
    const [currentIndex, setCurrentIndex] = useState(0); // Store the current slide index
    const [lastIndex, setLastIndex] = useState(0); 


    useEffect(() => {
        const updateShadowsDivHeight = () => {
            const heromainHeight = heromainRef.current.offsetHeight;
            setShadowsDivHeight(`${heromainHeight}px`);
        };

        updateShadowsDivHeight();
        window.addEventListener('resize', updateShadowsDivHeight);
        return () => window.removeEventListener('resize', updateShadowsDivHeight);
    }, []);

    useGSAP(() => {
        const startPositionForHeroMain = window.innerWidth < 1100 ? "top  top" : "top top";
        {/*        const startPositionForHeroMain = window.innerWidth < 1100 ? "center-=10% top" : "center-=10% top";
            */ }


        const endPositionForHeroMain = window.innerWidth < 1100 ? "bottom top" : "bottom top";

        const startPositionForTmp = window.innerWidth < 1100 ? "top-=10% top" : "top top";

        ScrollTrigger.create({
            animation: gsap.to(heromainRef.current, { scale: 0.8, opacity: 0.0 }),
            trigger: heromainRef.current,
            start: startPositionForHeroMain,
            end: endPositionForHeroMain,
            scrub: true,
            markers: false,
            pin: true,

        });

        /*ScrollTrigger.create({
            animation: gsap.to(tmpRef.current, {
                y: () => -heromainRef.current.offsetHeight * 0.2,
                opacity: 1
            }),
            trigger: heromainRef.current,
            start: startPositionForTmp,
            end: "bottom top",
            scrub: true,
            markers: true
        });*/

        ScrollTrigger.create({
            trigger: '.tmp-about-right',
            start: 'top 70%',
            end: 'bottom top',
            scrub: true,
            onEnter: () => {
                gsap.to('.tmp-about-right img', { filter: 'grayscale(0%)', duration: 1 });
            },
            onLeaveBack: () => {
                gsap.to('.tmp-about-right img', { filter: 'grayscale(100%)', duration: 1 });
            },
            markers: false,
        });
    });



    useGSAP(() => {
        const splitTypes = document.querySelectorAll('.reveal-type');

        splitTypes.forEach((char, i) => {
            const bg = "rgba(255, 255, 255, 0.1)";
            const fg = "rgba(255, 255, 255, 1.0)";
            const text = new SplitType(char, { types: 'words, chars', splitClass: 'split-word' });

            gsap.fromTo(text.chars,
                { color: bg },
                {
                    color: fg,
                    duration: 0.3,
                    stagger: 0.02,
                    scrollTrigger: {
                        trigger: ".tmp-text-wrapper",
                        start: 'top bottom',
                        end: 'center 40%',
                        scrub: true,
                        markers: false,
                        toggleActions: 'play play reverse reverse'
                    }
                });
        });
    });

    // New useGSAP Hook
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: tmpRef.current,
                start: 'top-=35% center',
                end: 'bottom center',
                scrub: false,
                markers: false,
            }
        });

        tl.fromTo(headerRef.current,
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1 }
        )
            .fromTo(textRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.5"
            )
            .fromTo(rowRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2 },
                "-=0.5"
            ).fromTo(rowReff.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2 },
                "-=0.5"
            );
    });

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: tmpRef1.current,
                start: 'top bottom',
                end: 'bottom bottom',
                scrub: false,
                markers: false,
            }
        });

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: tmpRef1.current,
                start: 'top bottom',
                end: 'bottom bottom',
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
                onComplete: () => runShadowAnimation() // Call the shadow animation after completion

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
                onComplete: () => runShadowAnimation() // Call the shadow animation after completion

            });
        }
    }, []);

    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                /*trigger: ".animated-line",*/
                trigger: ".one-second-wor",

                start: "top center",
                end: "bottom top",
                scrub: false,
                markers: false
            }
        });

        // Sequential animation of lines and circles with specific class targeting

    });

    const runShadowAnimation = () => {
        const startPositionForHeroMain = window.innerWidth < 600 ? "center+=30% center" : "bottom center";
        const endPositionForHeroMain = window.innerWidth < 600 ? "bottom-=10% center" : "bottom+=30% center-=20%";

        /*ScrollTrigger.create({
            trigger: shadowRef.current,
            start: startPositionForHeroMain,
            end: endPositionForHeroMain,
            scrub: true,
            pin: false,
            animation: gsap.to([shadowRef.current, aboutImgRef.current, aboutImgRef2.current], { opacity: 0 }),
            markers: false, 
        });*/
    };

    useGSAP(() => {
        const startPositionForHeroMain = window.innerWidth < 1000 ? "bottom-=80% center+=20%" : "bottom-=35% center+=20%";
        const endPositionForHeroMain = window.innerWidth < 1000 ? "bottom center+=40%" : "bottom center+=20%";

        ScrollTrigger.create({
            trigger: whiteRef.current,
            start: startPositionForHeroMain,
            end: endPositionForHeroMain,
            onEnter: () => {
                gsap.timeline()
                    .to('body', { backgroundColor: 'white', duration: 0.6 })
                whiteSmallRef.current.classList.add('lighter');
                swiperWrapperRef1.current.classList.add('swiper-light');
                whiteHeaderRef.current.classList.add('black');
                whiteTextRef.current.classList.add('black');
                pRef1.current.classList.add('black');
                pRef2.current.classList.add('black');
                pRef3.current.classList.add('black');
                relRef1.current.classList.add('inverted');
                relRef2.current.classList.add('inverted');
                relRef3.current.classList.add('inverted');
                headerRef2.current.classList.add('black');
                dispatch(setBackgroundColor('white'));
            },
            onLeaveBack: () => {
                gsap.timeline()
                    .to('body', { backgroundColor: 'black', duration: 0.6 });
                whiteSmallRef.current.classList.remove('lighter'); // Add the 'lighter' class back
                swiperWrapperRef1.current.classList.remove('swiper-light');
                whiteHeaderRef.current.classList.remove('black');
                whiteTextRef.current.classList.remove('black');
                pRef1.current.classList.remove('black');
                pRef2.current.classList.remove('black');
                pRef3.current.classList.remove('black');
                relRef1.current.classList.remove('inverted');
                relRef2.current.classList.remove('inverted');
                relRef3.current.classList.remove('inverted');
                headerRef2.current.classList.remove('black');
                dispatch(setBackgroundColor('black'));
            },
            markers: false, // Disable markers for production
        });



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



    function isMobileDevice() {
        return typeof window !== 'undefined' && window.innerWidth <= 800;
    }

    useEffect(() => {
        // This code will only run on the client-side
        const handleResize = () => {
            setOffset(window.innerWidth * 0.05); // Update based on current window width
        };

        handleResize(); // Set initial value when component mounts

        // Set up an event listener for future resize events
        window.addEventListener('resize', handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleResize = () => {
            const mobile = isMobileDevice();
            const newSlidesPerView = mobile ? 1.5 : 6;
            const newSpaceBetween = mobile ? window.innerWidth * 0.05 : 16;

            setSlidesPerView(newSlidesPerView);
            setSpaceBetween(newSpaceBetween);

            if (swiperRef.current) {
                swiperRef.current.update(); // Force Swiper update when slidesPerView or spaceBetween changes

                // Recalculate the last index
                const total = swiperRef.current.slides.length;
                const calculatedLastIndex = total - Math.ceil(newSlidesPerView) +1; // Using Math.ceil for fractional slidesPerView
                setLastIndex(calculatedLastIndex < 0 ? 0 : calculatedLastIndex);
            }
        };

        handleResize();  // Set the initial values based on current window size
        window.addEventListener('resize', handleResize);  // Adjust on window resize

        return () => {
            window.removeEventListener('resize', handleResize);  // Clean up
        };
    }, []);

    const goPrev = () => {
        console.log("click next")

        if (swiperRef2.current) {
            swiperRef2.current.slideNext();
            console.log("click next")
        }
    };

    // Function to go to the previous slide
    const goNext = () => {
        if (swiperRef2.current) {
            swiperRef2.current.slidePrev();
        }
    };


    const goPrev2 = () => {
        console.log("click next")

        if (swiperRef3.current) {
            swiperRef3.current.slideNext();
            console.log("click next")
        }
    };

    // Function to go to the previous slide
    const goNext2 = () => {
        if (swiperRef3.current) {
            swiperRef3.current.slidePrev();
        }
    };


    const [direction, setDirection] = useState('forward'); // Track the current direction

    useEffect(() => {
        const swiperInstance = swiperRef.current;

        if (!swiperInstance) return; // If swiper instance is not ready, return

        const interval = setInterval(() => {
            const swiper = swiperRef.current;
            if (!swiper) return; // Ensure swiper is defined

            if (direction === 'forward') {
                if (swiper.activeIndex >= lastIndex) {
                    // If we're at the last visible slide, change direction to backward
                    setDirection('backward');
                    swiper.slidePrev();
                } else {
                    // Slide to the next one
                    swiper.slideNext();
                }
            } else if (direction === 'backward') {
                if (swiper.activeIndex === 0) {
                    // If we're at the first slide, change direction to forward
                    setDirection('forward');
                    swiper.slideNext();
                } else {
                    // Slide to the previous one
                    swiper.slidePrev();
                }
            }
        }, 2000); // Every 2 seconds

        // Clear the interval on unmount
        return () => clearInterval(interval);
    }, [direction, lastIndex]); 


    return (
        <>
            <div className='shadowmain' ref={heromainRef}>
                <div className='heromain'>
                    <div className='lines'>
                        <div className='linex'></div>
                        <div className='linex'></div>
                        <div className='linex'></div>
                        <div className='linex'></div>
                        <div className='linex'></div>
                        <div className='linex'></div>
                        <div className='linex'></div>
                    </div>

                    <div className='heros-overflow' ref={herosRef}>
                        <div className='hero-left'>
                            <div className='hero-text-wrapper'>
                                <h1 className='hero-header'>Preoblikuj svoje življenje: sprejmi zdravje in vitalnost!</h1>
                                {/*<div className='hero-button align-hero' onClick={() => handleNavigation('/Plans')}>
                                    Storitve
                                </div>*/}

                            </div>
                        </div>

                        <div className='hero-right desktop'>
                            <img src="/images/02nobg.webp" className='hero-img' alt='heros' />
                        </div>

                        <div className='hero-right mobile'>
                            <img src="/images/02nobg.webp" className='hero-img' alt='heros' />
                        </div>
                    </div>
                </div>

            </div>

            <div className='tmp' ref={tmpRef}>
                <div className='tmp-about-wrapper'>
                    <div className='tmp-about-left'>
                        <div className='left-wrapper'>
                            <div className='tmp-about-left-headers'>
                                <p className=' black section-indicator alignself text-regular-semibold'>Rezultati zagotovljeni</p>

                                <h3 className='heading-desktop-h3' ref={headerRef}>Spoznaj naju! Sva osebna trenerja z dokazanimi uspehi</h3>
                                <p className='text-medium-normal' ref={textRef}>Z dolgoletnimi izkušnjami in številnimi transformacijami strank sva predana temu, da vam pomagava doseči vaše fitnes cilje.</p>
                            </div>

                            <div className='left-row'>
                                <div className='left-row-cell'>
                                    <div className='left-row-cell-wrapper' ref={rowRef}>
                                        <img src="/images/dumbbell.svg" className='relume-icon' alt='heros' />
                                        <h6 className='heading-desktop-h6 highlighted-header'>Ponujava strokovno znanje</h6>
                                        <p className='text-regular-normal'>Hujšanje, pridobivanje mišic, funkcionalni trening in še več.</p>
                                    </div>
                                </div>

                                <div className='left-row-cell'>
                                    <div className='left-row-cell-wrapper' ref={rowReff}>
                                        <img src="/images/trophy.svg" className='relume-icon' alt='heros' />
                                        <h6 className='heading-desktop-h6 highlighted-header'>Doseganje tvojih ciljev</h6>
                                        <p className='text-regular-normal'>Pomagala sva že skoraj stotim strankam doseči mejnike telesne pripravljenosti</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='tmp-about-right'>
                        <img src="/images/z1.webp" className='tmp-img' alt='heros' />
                    </div>
                </div>
            </div>


            <div className='hero-swipper'>
                <div className='portfolio-header-center'>
                    <div className='header-wrapper'>
                        <p className='text-regular-semibold  black section-indicator alignself text-regular-semibold '>Transformacije</p>
                    </div>
                    <div className='header-wrapper'>
                        <h3 className='heading-desktop-h3 ' >Prepričaj se sam!</h3>
                    </div>

                    <div className='header-wrapper'>
                        <h3 className='text-medium-normal ' >Preglej številne uspešne transformacije.</h3>
                    </div>
                </div>

                <div className='swipper-wrapper'>
                    <Swiper
                        slidesPerView={slidesPerView}
                        spaceBetween={spaceBetween} // Space between slides
                        slidesOffsetAfter={offset}
                        slidesOffsetBefore={offset}
                        centeredSlides={false}
                        mousewheel={true}
                        pagination={{ clickable: true }}
                        onSwiper={(swiper) => {
                            swiperRef.current = swiper; // Save the swiper instance
                            //setTotalSlides(swiper.slides.length); // Set total slides on initialization
                        }}
                        onSlideChange={(swiper) => {
                            //setCurrentIndex(swiper.activeIndex); // Update current index on slide change
                            
                        }}
                        className="testimonials-swiper"
                        ref={swiperRef}

                    >
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt1.webp' />

                        </SwiperSlide>

                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt2.webp' />

                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt15.webp' />

                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt4.webp' />

                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/z15.webp' />

                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt5.webp' />

                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt6.webp' />

                        </SwiperSlide>

                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt8.webp' />

                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt9.webp' />

                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt10.webp' />

                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt11.webp' />

                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt12.webp' />

                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt13.webp' />

                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/tt14.webp' />

                        </SwiperSlide>

                    </Swiper>

                </div>


            </div>


            <div className='one-on-one' ref={tmpRef1}>
                <div className='one-first-row'>
                    <div className='one-first-left'>
                        <div className='first-left-wrapper'>
                            <h3 className='heading-desktop-h3' ref={headerRef1}>Preoblikuj svoje telo in duha z najinim vodstvom in podporo!</h3>
                        </div>


                    </div>
                    <div className='one-first-right'>
                        <div className='one-right-upper'>
                            <p className='text-medium-normal' ref={textRef1}>Najini programi ponujajo celovit pristop k fitnesu, ki ti pomaga doseči fizično moč, duševno jasnost in uravnotežen življenjski slog.</p>

                        </div>
                        <div className='one-right-lower'>
                            <div className='left-row'>
                                <div className='left-row-cell'>
                                    <div className='left-row-cell-wrapper' ref={rowRef1}>
                                        <img src="/images/hearth.svg" className='relume-icon' alt='heros' />
                                        <h6 className='heading-desktop-h6 highlighted-header'>Fizične koristi</h6>
                                        <p className='text-regular-normal'>Zgradi mišice brez odvečnih kilogramov, povečaj svojo vzdržljivost in izboljšaj splošno raven telesne pripravljenosti.</p>
                                    </div>
                                </div>

                                <div className='left-row-cell'>
                                    <div className='left-row-cell-wrapper' ref={rowReff1}>
                                        <img src="/images/brain.svg" className='relume-icon' alt='heros' />
                                        <h6 className='heading-desktop-h6 highlighted-header'>Duševne koristi</h6>
                                        <p className='text-regular-normal'>Krepi zaupanje samemu vase, zmanjšaj stres in izboljšaj kognitivne funkcije.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='animated-line'>
                    <div className='line line1'></div>
                    <div className='circle circle1'><span className='circle-text'>Začni trenirati</span></div>
                    <div className='line line2'></div>
                    <div className='circle circle2'><span className='circle-text'>Doseži cilje</span></div>
                    <div className='line line3'></div>
                    <div className='circle circle3'><span className='circle-text'>Zgradi samozavest</span></div>
                    <div className='line line4'></div>
                </div>
                <div className='one-second-wor'>
                    <img alt='about-1' className='about-img desktop' src='/images/tjasa1.webp' ref={aboutImgRef} />
                    <img alt='about-1' className='about-img mobile' src='/images/tjasa2.webp' ref={aboutImgRef2} />
                </div>

                <div className='prednosti-one' ref={shadowRef}>
                <div className='on-right desktop'>
                        <video
                            src="/Videos/11.mp4"
                            autoPlay
                            muted
                            playsInline
                            loop
                            className='right-video'>
                        </video>
                    </div>

                    <div className='on-left'>
                        <p className=' black section-indicator alignself text-regular-semibold smooth' ref={wordRef}>Prednosti 1 na 1</p>

                        <h3 className='heading-desktop-h3 smooth' ref={headerRef2}>Prednosti 1 na 1 treninga</h3>
                        <div className='one-bullets-row'>

                            <div className='one-bullet'>
                                <div className='one-bullet-wrapper'>
                                    <img src="/images/user-voice.svg" className='relume-icon smooth' alt='heros' ref={relRef1}/>
                                    <h6 className='heading-desktop-h6 highlighted-header smooth' ref={hRef1}>Takojšne povratne informacije</h6>
                                    <p className='text-regular-normal smooth' ref={pRef1}>Stranke spodbujava in motivirava v času treninga kar omogoča bolj intenziven trening in bolše rezultate.</p>

                                </div>
                            </div>
                            <div className='one-bullet'>
                                <div className='one-bullet-wrapper'>
                                    <img src="/images/user-check.svg" className='relume-icon smooth' alt='heros' ref={relRef2}/>
                                    <h6 className='heading-desktop-h6 highlighted-header smooth' ref={hRef2}>Pravilna izvedba</h6>
                                    <p className='text-regular-normal smooth' ref={pRef2}>Pravilna izvedba vaj in takojšni popravki nepravilnih izvedb</p>

                                </div>
                            </div>

                            <div className='one-bullet'>
                                <div className='one-bullet-wrapper'>
                                    <img src="/images/laugh.svg" className='relume-icon smooth' alt='heros' ref={relRef3}/>
                                    <h6 className='heading-desktop-h6 highlighted-header smooth' ref={hRef3}>Dobra družba</h6>
                                    <p className='text-regular-normal smooth' ref={pRef3}>Polek napornih treningov še polno smeha in zabave.</p>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='on-right mobile'>
                        <video
                            src="/Videos/11.mp4"
                            autoPlay
                            muted
                            playsInline
                            loop
                            className='right-video'>
                        </video>
                    </div>

                </div>
            </div>



            <div className='go-white-div' ref={whiteRef}>


                <div className='white-row'>
                    {/*<div className='white-right desktop' ref={swiperWrapperRef}>
                        <div className='white-swiper'>
                            <Swiper
                                modules={[Pagination]}

                                slidesPerView={1}
                                spaceBetween={0} // Space between slides
                                slidesOffsetAfter={0}
                                slidesOffsetBefore={0}
                                centeredSlides={false}
                                mousewheel={true}
                                pagination={{ clickable: true }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => swiperRef3.current = swiper}
                                className="testimonials-swiper"
                                ref={swiperRef3}

                            >
                                <SwiperSlide>
                                    <img alt='item-1' className='white-img' src='/images/z3.webp' />
                                    <h4 className='program-header black hmargin w90'>Treningi 1 na 1</h4>
                                    <h3 className='text-medium-normal black w90' >Osebni pristop za hitrejše doseganje vaših ciljev.</h3>
                                    <div className='error-row w90'>
                                        <img src="/images/error-circle.svg" className='small-icon' alt='heros' />
                                        <p className='error-message'>Treningi v živo ne vsebujejo fitnes karte!</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img alt='item-1' className='white-img' src='/images/z2.webp' />
                                    <h4 className='program-header black align-left hmargin w90'>Trening v paru</h4>
                                    <h3 className='text-medium-normal black align-left w90' >Trening s prijateljem ali boljšo polovico.</h3>
                                    <div className='error-row w90'>
                                        <img src="/images/error-circle.svg" className='small-icon' alt='heros' />
                                        <p className='error-message'>Treningi v živo ne vsebujejo fitnes karte!</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img alt='item-1' className='white-img' src='/images/z4.webp' />
                                    <h4 className='program-header black align-left hmargin w90'>Spletno trenerstvo</h4>
                                    <h3 className='text-medium-normal black align-left w90' >Program kateremu lahko sledite kjer koli.</h3>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img alt='item-1' className='white-img' src='/images/z5.webp' />
                                    <h4 className='program-header black align-left hmargin w90'>Video svetovanje</h4>
                                    <h3 className='text-medium-normal black align-left w90' >Strokovni nasveti, ki vam pomagajo napredovati.</h3>

                                </SwiperSlide>


                            </Swiper>


                            <div className='swipers-arrows'>
                                <div className='arrows'>
                                    <div className='button-next' onClick={goNext2}><span className='arrow'></span></div>
                                    <div className='button-prev' onClick={goPrev2}><span className='arrow'></span></div>
                                </div>
                            </div>
                        </div>
                    </div>*/}

                    <div className='white-left' ref={leftRef}>
                        <p className='text-regular-semibold  black section-indicator smooth' ref={whiteSmallRef}>Začni zdaj!</p>
                        <h3 className='heading-desktop-h3 smooth' ref={whiteHeaderRef}>Ponujava obsežen spekter storitev, ki so zasnovane za zadovoljitev tvojih potreb in želja!</h3>

                        <h3 className='text-medium-normal  smooth' ref={whiteTextRef}>Posveti se svojemu zdravju in dobremu počutju s široko izbiro pripravljenih rešitev.</h3>

                        <div className='buttoin'>
                            <HoverButton
                                text="Preberi več"
                                onClick={() => handleNavigation('sl/Plans')}
                            />
                        </div>

                    </div>

                    <div className='white-right ' ref={swiperWrapperRef1}>
                        <div className='white-swiper'>
                            <Swiper
                                modules={[Pagination]}

                                slidesPerView={1}
                                spaceBetween={0} // Space between slides
                                slidesOffsetAfter={0}
                                slidesOffsetBefore={0}
                                centeredSlides={false}
                                mousewheel={true}
                                pagination={{ clickable: true }}
                                onSlideChange={() => console.log('slide change')}
                                onSwiper={(swiper) => swiperRef2.current = swiper}
                                className="testimonials-swiper"
                                ref={swiperRef2}

                            >
                                <SwiperSlide>
                                    <img alt='item-1' className='white-img' src='/images/z3.webp' />
                                    <h4 className='program-header black hmargin w90'>Treningi 1 na 1</h4>
                                    <h3 className='text-medium-normal black w90' >Osebni pristop za hitrejše doseganje tvojih ciljev.</h3>
                                    <div className='error-row w90'>
                                        <img src="/images/error-circle.svg" className='small-icon' alt='heros' />
                                        <p className='error-message'>Treningi v živo ne vsebujejo fitnes karte!</p>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <img alt='item-1' className='white-img' src='/images/z2.webp' />
                                    <h4 className='program-header black align-left hmargin w90'>Trening v paru</h4>
                                    <h3 className='text-medium-normal black align-left w90' >Trening s prijateljem ali boljšo polovico.</h3>
                                    <div className='error-row w90'>
                                        <img src="/images/error-circle.svg" className='small-icon' alt='heros' />
                                        <p className='error-message'>Treningi v živo ne vsebujejo fitnes karte!</p>
                                    </div>
                                    </SwiperSlide>
                                <SwiperSlide>
                                    <img alt='item-1' className='white-img' src='/images/z4.webp' />
                                    <h4 className='program-header black align-left hmargin w90'>Spletno trenerstvo</h4>
                                    <h3 className='text-medium-normal black align-left w90' >Program kateremu lahko slediš kjer koli.</h3>
                               
                                     </SwiperSlide>
                                <SwiperSlide>
                                    <img alt='item-1' className='white-img' src='/images/z5.webp' />
                                    <h4 className='program-header black align-left hmargin w90'>Video svetovanje</h4>
                                    <h3 className='text-medium-normal black align-left w90' >Strokovni nasveti, ki ti pomagajo napredovati.</h3>

                                </SwiperSlide>


                            </Swiper>


                            <div className='swipers-arrows'>
                                <div className='arrows'>
                                    <div className='button-next' onClick={goNext}><span className='arrow'></span></div>
                                    <div className='button-prev' onClick={goPrev}><span className='arrow'></span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>


            <div className='healthy-foods-wrapper'>
                <div className='portfolio-header-center'>
                    <div className='header-wrapper'>
                        <p className='text-regular-semibold  black section-indicator alignself text-regular-semibold lighter'>Zdrava prehrana</p>
                    </div>
                    <div className='header-wrapper'>
                        <h3 className='heading-desktop-h3 black' >Raznoliki in okusni jedilniki!</h3>
                    </div>

                    <div className='header-wrapper'>
                        <h3 className='text-medium-normal black' >Programi vključujejo tudi skrbno izbrane jedilnike, ki so tako okusni kot zdravi. </h3>
                    </div>
                </div>


                <div className='food-images-row'>
                    <img alt='item-1' className='food-img' src='/images/f1.webp' />
                    <img alt='item-1' className='food-img' src='/images/f2.webp' />
                    <img alt='item-1' className='food-img' src='/images/f3.webp' />
                    <img alt='item-1' className='food-img' src='/images/f4.webp' />
                    <img alt='item-1' className='food-img' src='/images/f5.webp' />

                </div>
            </div>




            <div className='prednosti-online'>
                <div className='online-roe'>
                <div className='onl-left'>
                <img alt='item-1' className='onl-img' src='/images/online3.webp' />

                </div>
                <div className='prednosti-onl width-one width-two predspl' >
                    <h3 className='heading-desktop-h3 black'>Prednosti spletnega trenerstva</h3>
                    <div className='one-bullets-row'>
                        <div className='one-bullet'>
                            <div className='one-bullet-wrapper'>
                                <img src="/images/cool.svg" className='relume-icon' alt='heros' />
                                <h6 className='heading-desktop-h6 highlighted-header'>Udobje in prilagodljivost</h6>
                                <p className='text-regular-normal black'>Omogoča trening na lokaciji, ki ti ugaja. Lahko celo doma.</p>

                            </div>
                        </div>
                        <div className='one-bullet'>
                            <div className='one-bullet-wrapper'>
                                <img src="/images/infinite.svg" className='relume-icon' alt='heros' />
                                <h6 className='heading-desktop-h6 highlighted-header'>Dostop do Širšega nabora Teningov</h6>
                                <p className='text-regular-normal black'>Pripraviva ti trening glede na vašo opremo. Lahko za trening od doma itd.</p>

                            </div>
                        </div>
                        <div className='one-bullet'>
                            <div className='one-bullet-wrapper'>
                                <img src="/images/euro.svg" className='relume-icon' alt='heros' />
                                <h6 className='heading-desktop-h6 highlighted-header'>Stroškovna Učinkovitost</h6>
                                <p className='text-regular-normal black'>Ker odstrani potrebo po potovanju trenerja so spletni programi cenovno ugodnejši.</p>

                            </div>
                        </div>
                    </div>
                </div>
                </div>

                
            </div>
            <div className={`shadows-for-transition ${isTransitioning ? 'show-shadow' : ''}`}>

            </div>

        </>
    )
}

export default Hero;