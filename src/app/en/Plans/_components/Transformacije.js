'use client'

import React, { useRef, useEffect, useState } from 'react';
import './Transformacije.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';

const Transformacije = () => {
    const swiperRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(4);
    const [spaceBetween, setSpaceBetween] = useState(64);
    const [offset, setOffset] = useState(0);

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


    function isMobileDevice() {
        return window.innerWidth <= 800;
    }

    useEffect(() => {
        // This code will only run on the client-side
        const handleResize = () => {
            setOffset(window.innerWidth * 0.025); // Update based on current window width
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
            setSlidesPerView(isMobileDevice() ? 2 : 4);
            setSpaceBetween(isMobileDevice() ? window.innerWidth * 0.025 : 64);
        };

        handleResize();  // Set the initial values based on current window size
        window.addEventListener('resize', handleResize);  // Adjust on window resize

        return () => {
            window.removeEventListener('resize', handleResize);  // Clean up
        };
    }, []);

    return (
        <div className='transformacije-main'>
            <div className='transformacije-wrapper'>
                <div className='portfolio-header-center'>
                    <div className='header-wrapper'>
                    <p className='text-regular-semibold  black section-indicator alignself text-regular-semibold lighter'>Transformacije</p>
                    </div>
                    <div className='header-wrapper'>
                        <h3 className='heading-desktop-h3 black' >Prepričajte se sami!</h3>
                    </div>

                    <div className='header-wrapper'>
                        <h3 className='text-medium-normal black' >Preglejte številne uspešne transformacije.</h3>
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
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => swiperRef.current = swiper}
                        className="testimonials-swiper"
                        ref={swiperRef}

                    >
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/t1.webp' />
                            
                        </SwiperSlide>

                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/t2.png' />
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/t3.png' />
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/t4.png' />
                            
                        </SwiperSlide>

                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/t5.png' />
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/t6.png' />
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/t7.png' />
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/t8.png' />
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/t9.png' />
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/t10.png' />
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/t11.png' />
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/t12.png' />
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/t13.png' />
                            
                        </SwiperSlide>
                        <SwiperSlide>
                            <img alt='item-1' className='item-img' src='/images/t14.png' />
                            
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
        </div>
    )
}

export default Transformacije
