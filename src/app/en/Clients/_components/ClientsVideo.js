'use client'

import React, { useRef, useEffect, useState } from 'react';
import './ClientsVideo.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';

const ClientsVideo = () => {
    function isMobileDevice() {
        return typeof window !== 'undefined' && window.innerWidth <= 800;
    }

    const swiperRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(isMobileDevice() ? 1.5 : 6);
    const [spaceBetween, setSpaceBetween] = useState(isMobileDevice() ? window.innerWidth * 0.05 : 16);
    const [offset, setOffset] = useState(0);


    

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

    const [lastIndex, setLastIndex] = useState(0); 
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
        <div className='about-video-main padding-main'>
            <div className='about-video-wrapper'>
                <video
                    src="/Videos/clients-eng.mp4"
                    autoPlay
                    muted
                    playsInline
                    loop
                    className='about-video desktop'>
                </video>

                <video
                    src="/Videos/clients-eng.mp4"
                    autoPlay
                    muted
                    playsInline
                    loop
                    className='about-video mobile'>
                </video>



            </div>

            <div className='about-under-wrapper'>
    <div className='padder'></div>
    <p className='black section-indicator alignself text-regular-semibold'>Success Stories</p>

    <div className='about-under-video'>
        <div className='under-left'>
            <h3 className='heading-desktop-h3'>A Journey to Better Health, Greater Strength, and Increased Confidence!</h3>
        </div>

        <div className='under-right'>
            <p className='text-medium-normal'>
                Every transformation is unique, just like the individual experiencing it. With us, many people have discovered their strength, improved their health, and changed their lifestyle. Below, you can explore their inspiring transformations, proving that with the right approach and support, anything is possible.
            </p>
        </div>
    </div>
</div>



            <div className='hero-swipper nopad'>
                

                <div className='swipper-wrapper'>
                    <Swiper
                        slidesPerView={slidesPerView}
                        spaceBetween={spaceBetween} // Space between slides
                        slidesOffsetAfter={offset}
                        slidesOffsetBefore={offset}
                        centeredSlides={false}
                        mousewheel={true}
                        pagination={{ clickable: true }}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => swiperRef.current = swiper}
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




        </div>
    )
}

export default ClientsVideo
