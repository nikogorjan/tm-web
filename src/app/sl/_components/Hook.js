'use client'

import React, { useRef, useEffect, useState } from 'react';
import './Hook.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from "@gsap/react";

import { useDispatch } from 'react-redux';
import { setBackgroundColor } from '../../store/colorSlice'; // Update the path as needed

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const Hook = () => {
    function isMobileDevice() {
        return typeof window !== 'undefined' && window.innerWidth <= 800;
    }

    const swiperRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(isMobileDevice() ? 1.5 : 3.0);
    const [spaceBetween, setSpaceBetween] = useState(isMobileDevice() ? window.innerWidth * 0.05 : 16);
    const [offset, setOffset] = useState(0);
    const [lastIndex, setLastIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            const mobile = isMobileDevice();
            const newSlidesPerView = mobile ? 1.5 : 3.5;
            const newSpaceBetween = mobile ? window.innerWidth * 0.05 : 16;

            setSlidesPerView(newSlidesPerView);
            setSpaceBetween(newSpaceBetween);

            if (swiperRef.current) {
                swiperRef.current.update(); // Force Swiper update when slidesPerView or spaceBetween changes

                // Recalculate the last index
                const total = swiperRef.current.slides.length;
                const calculatedLastIndex = total - Math.ceil(newSlidesPerView) + 1; // Using Math.ceil for fractional slidesPerView
                setLastIndex(calculatedLastIndex < 0 ? 0 : calculatedLastIndex);
            }
        };

        handleResize();  // Set the initial values based on current window size
        window.addEventListener('resize', handleResize);  // Adjust on window resize

        return () => {
            window.removeEventListener('resize', handleResize);  // Clean up
        };
    }, []);

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

    const hookRef = useRef(null);
    const headerRef = useRef(null);
    const paragraphRef = useRef(null);
    const squareRef = useRef(null);
    const headerRef1 = useRef(null);
    const paragraphRef1 = useRef(null);
    const squareRef1 = useRef(null);
    const dispatch = useDispatch();


    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger); // Ensure ScrollTrigger is registered
        const startPositionForHeroMain = window.innerWidth < 1000 ? "top top" : "center-=20% top";
        const endPositionForHeroMain = window.innerWidth < 1000 ? "top top" : "center top";
        ScrollTrigger.create({
            trigger: hookRef.current,
            start: startPositionForHeroMain,
            end: endPositionForHeroMain,
            onEnter: () => {
                gsap.to('body', { backgroundColor: 'black', duration: 0.6 });
                gsap.to([headerRef.current, paragraphRef.current,], { color: 'white', duration: 0.6 });
                gsap.to([headerRef1.current, paragraphRef1.current,], { color: 'white', duration: 0.6 });
                squareRef.current.classList.remove('lighter'); // Remove the 'lighter' class
                squareRef1.current.classList.remove('lighter'); // Remove the 'lighter' class

                dispatch(setBackgroundColor('black'));


            },
            onLeaveBack: () => {
                gsap.to('body', { backgroundColor: 'white', duration: 0.6 }); // Change back to white
                gsap.to([headerRef.current, paragraphRef.current,], { color: 'black', duration: 0.6 }); // Change text color back to black
                gsap.to([headerRef1.current, paragraphRef1.current,], { color: 'black', duration: 0.6 }); // Change text color back to black
                squareRef.current.classList.add('lighter'); // Add the 'lighter' class back
                squareRef1.current.classList.add('lighter'); // Add the 'lighter' class back

                dispatch(setBackgroundColor('white'));


            },
            markers: false // Disable markers for production
        });
    }, []);

    const goPrev = () => {
        console.log("click next")

        if (swiperRef.current) {
            swiperRef.current.slideNext();
            console.log("click next")
        }
    };

    // Function to go to the previous slide
    const goNext = () => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    };

    return (
        <>
            <div className='sponsors-main'>

                <div className='hook-content-wrapper  margin-wrapper '>

                    <p className='text-regular-semibold  black section-indicator alignself text-regular-semibold lighter smooth' ref={squareRef1}>Sponzorji</p>
                    <h3 className='heading-desktop-h3 black' ref={headerRef1}>Sponzorji in ekskluzivni popusti</h3>
                    <p className='text-medium-normal black' ref={paragraphRef1}>Popusti samo za vas.</p>
                </div>

                <div className='sponsors-wrapper'>
                    <Swiper
                        slidesPerView={slidesPerView}
                        spaceBetween={spaceBetween}
                        slidesOffsetAfter={offset}
                        slidesOffsetBefore={offset}
                        centeredSlides={false}
                        mousewheel={true}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => swiperRef.current = swiper}
                        className="testimonials-swiper"
                        ref={swiperRef}
                        modules={[Pagination]}

                    >
                       {/*} <SwiperSlide>
                            <div className="image-container">
                                <img alt="item-1" className="sponsor-img" src="/images/sponsor1.webp" />
                                <div className="overlay-content">
                                    <div className='over-upper'>
                                        <div className='sp-logo-wrapper'>
                                            <img alt="item-1" className="sponsor-logo" src="/images/juicefast.webp" />

                                        </div>
                                    </div>
                                    <div className='over-lower'>
                                        <div className='lower-wrapper'>
                                            <div className='koda-alert'>
                                                KODA ZA POPUST!
                                            </div>
                                            <div className='koda'>
                                                TJASAV
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </SwiperSlide>*/}

                        <SwiperSlide>
                            <div className="image-container">
                                <img alt="item-1" className="sponsor-img" src="/images/sponsor2.webp" />
                                <div className="overlay-content">
                                    <div className='over-upper'>
                                        <div className='sp-logo-wrapper'>
                                            <img alt="item-1" className="sponsor-logo" src="/images/swy.webp" />

                                        </div>
                                    </div>
                                    <div className='over-lower'>
                                        <div className='lower-wrapper'>
                                            <div className='koda-alert'>
                                                KODA ZA POPUST!
                                            </div>
                                            <div className='koda'>
                                                VRECIC10
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image-container">
                                <img alt="item-1" className="sponsor-img" src="/images/sponsor3.webp" />
                                <div className="overlay-content">
                                    <div className='over-upper'>
                                        <div className='sp-logo-wrapper'>
                                            <img alt="item-1" className="sponsor-logo" src="/images/mp.webp" />

                                        </div>
                                    </div>
                                    <div className='over-lower'>
                                        <div className='lower-wrapper'>
                                            <div className='koda-alert'>
                                                KODA ZA POPUST!
                                            </div>
                                            <div className='koda'>
                                                MARSELMP
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="image-container">
                                <img alt="item-1" className="sponsor-img" src="/images/sponsor4.webp" />
                                <div className="overlay-content">
                                    <div className='over-upper'>
                                        <div className='sp-logo-wrapper'>
                                            <img alt="item-1" className="sponsor-logo" src="/images/polleo.webp" />

                                        </div>
                                    </div>
                                    <div className='over-lower'>
                                        {/*<div className='lower-wrapper'>
                                                <div className='koda-alert'>
                                                    KODA ZA POPUST!
                                                </div>
                                                <div className='koda'>
                                                    MARSELMP
                                                </div>
                                            </div>*/}
                                    </div>

                                </div>
                            </div>

                        </SwiperSlide>
                    </Swiper>
                </div>

                {/*<div className='swipers-arrows'>
                        <div className='arrows'>
                            <div className='button-next' onClick={goNext}><span className='arrow'></span></div>
                            <div className='button-prev' onClick={goPrev}><span className='arrow'></span></div>
                        </div>
                    </div>*/}


            </div>
            <div className='hook-main' ref={hookRef}>
                <div className='hook-row'>
                    <div className='hook-left'>
                        <div className='hook-content-wrapper  margin-wrapper '>
                            <div className='text-mid'>
                                <p className='text-regular-semibold  black section-indicator alignself text-regular-semibold lighter' ref={squareRef}>Začni zdaj!</p>

                                <h3 className='heading-desktop-h3 black' ref={headerRef}>Izberi svoj program že danes in začni dosegati svoje cilje!</h3>
                                <p className='text-medium-normal black' ref={paragraphRef}>Prilagojeni programi po tvojih potrebah.</p>
                                <div className='buttons-row-hook'>
                                </div>
                            </div>
                        </div>

                    </div>



                    <div className='hook-right'>
                        <video
                            src="/Videos/marsel1.mp4"
                            autoPlay
                            muted
                            playsInline
                            loop
                            className='gym-video marselvideo'>
                        </video>

                        <video
                            src="/Videos/tjasa1.mp4"
                            autoPlay
                            muted
                            playsInline
                            loop
                            className='gym-video'>
                        </video>


                    </div>
                </div>


            </div>
        </>
    )
}

export default Hook
