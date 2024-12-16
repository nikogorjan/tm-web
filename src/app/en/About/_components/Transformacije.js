'use client'

import React, { useRef, useEffect, useState } from 'react';
import './Transformacije.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';

const Transformacije = () => {
    function isMobileDevice() {
        return typeof window !== 'undefined' && window.innerWidth <= 800;
    }

    const swiperRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(isMobileDevice() ? 1.5 : 6);
    const [spaceBetween, setSpaceBetween] = useState(isMobileDevice() ? window.innerWidth * 0.05 : 16);
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
        <div className='transformacije-main'>
            <div className='transformacije-wrapper'>
                <div className='portfolio-header-center'>
                <div className='header-wrapper'>
    <p className='text-regular-semibold black section-indicator alignself text-regular-semibold lighter'>Transformations</p>
</div>
<div className='header-wrapper'>
    <h3 className='heading-desktop-h3 black'>See for Yourself!</h3>
</div>
<div className='header-wrapper'>
    <h3 className='text-medium-normal black mrganbo'>Explore numerous successful transformations.</h3>
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
