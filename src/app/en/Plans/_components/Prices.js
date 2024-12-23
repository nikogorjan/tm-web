'use client'

import React, { useEffect, useRef, useState } from 'react';
import './Prices.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';

const Prices = () => {
    const [selectedButton, setSelectedButton] = useState('monthly');
    const [selectedCategory, setSelectedCategory] = useState('Vse storitve');

    const handleButtonClick = (buttonType) => {
        setSelectedButton(buttonType);
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        // Reset Swiper to the first slide
        if (swiperRef.current) {
            swiperRef.current.slideTo(0);
        }
    };

    const categories = [
    'All Services',
    'One-on-One Training',
    'Partner Training',
    'Online Coaching',
    'Video Consultation'
];

const beginnerPlans = [
    {
        header: 'One-on-One',
        paragraph: 'Ideal for new fitness enthusiasts.',
        image: '/images/z3.webp',
        difficulty: '230 € / 10 sessions',
        description: 'Includes a personalized nutrition plan, individual training plan, supplement plan, guidance on proper exercise execution via video and in person, weekly check-ins, and updates as needed.'
    },
    
];

const intermediatePlans = [
    {
        header: 'Partner Training',
        paragraph: 'Challenge yourself with tougher routines.',
        image: '/images/st99.webp',
        difficulty: '280 € / 8 sessions',
        description: 'Includes a personalized nutrition plan, individual training plan, supplement plan, guidance on proper exercise execution via video and in person, weekly check-ins, and updates as needed.'
    },
    {
        header: 'Partner Training',
        paragraph: 'Take your fitness to the next level.',
        image: '/images/st98.webp',
        difficulty: '250 € / 8 sessions',
        description: 'Training only, without a nutrition or training plan.'
    },
];

const advancedPlans = [
    {
        header: 'Online Coaching - 1 Month',
        paragraph: 'Take on intense challenges.',
        image: '/images/z4.webp',
        difficulty: '110 € / month',
        description: 'Online coaching includes a personalized nutrition plan, individual training plan, supplement plan, guidance on proper exercise execution via video, weekly check-ins, and updates as needed.'
    },
    {
        header: 'Online Coaching - 3 Months',
        paragraph: 'Maximize your performance.',
        image: '/images/z8.webp',
        difficulty: '250 € / 3 months',
        description: 'Online coaching includes a personalized nutrition plan, individual training plan, supplement plan, guidance on proper exercise execution via video, weekly check-ins, and updates as needed.'
    },
];

const videoPlans = [
    {
        header: 'Video Consultation',
        paragraph: 'Take on intense challenges.',
        image: '/images/st8.webp',
        difficulty: '10 € / hour',
        description: 'Clients have the opportunity to meet and consult with us on anything they are interested in. Video calls are also available for individuals who are not our clients but have questions about fitness or seek advice on conditions such as diabetes, eating disorders, or injuries.'
    },
];


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
            setSlidesPerView(isMobileDevice() ? 1 : 2);
            setSpaceBetween(isMobileDevice() ? window.innerWidth * 0.025 : 64);
        };

        handleResize();  // Set the initial values based on current window size
        window.addEventListener('resize', handleResize);  // Adjust on window resize

        return () => {
            window.removeEventListener('resize', handleResize);  // Clean up
        };
    }, []);

    const allPlans = [...beginnerPlans, ...intermediatePlans, ...advancedPlans, ...videoPlans];

    const getPlansForCategory = () => {
        if (selectedCategory === 'Trening ena na ena') {
            return beginnerPlans;
        } else if (selectedCategory === 'Trening v paru') {
            return intermediatePlans;
        } else if (selectedCategory === 'Spletno trenerstvo') {
            return advancedPlans;
        } else if (selectedCategory === 'Video svetovanje') {
            return videoPlans;
        
        } else {
            return allPlans;
        }
    };

    const filteredPlans = getPlansForCategory();
    const bestSeller = filteredPlans.length > 0 ? filteredPlans[0] : null;

    return (
        <div className='prices-main'>
            <div className='prices-wrapper'>




                



                <div className='plans'>
                <p className='text-regular-semibold black section-indicator lighter'>All Services</p>

<div className='heading-desktop-h3 black'>Explore Our Offerings!</div>
<p className='text-medium-normal black'>You can start in just a few seconds!</p>
<div className='error-row'>
    <img src="/images/error-circle.svg" className='small-icon' alt='heroes' />
    <p className='error-message'>Live training sessions do not include a gym membership!</p>
</div>
<div className='plans-display'>
    <div className='display-left'>
        <div className='plans-navigations-wrapper'>
            <h6 className='heading-desktop-h6 black'>Categories</h6>
            {categories.map((category) => (
                <div
                    key={category}
                    className={`plan-kategorija tovsebuje ${selectedCategory === category ? 'selected-plan' : ''}`}
                    onClick={() => handleCategoryClick(category)}
                >
                    {category}
                </div>
            ))}
        </div>
    </div>

                        <div className='display-right'>
                            {/* Display plans based on selected category */}
                            <div className='best-seller-wrapper'>
                                {bestSeller && (
                                    <>
                                        {/*<div className='plan-img-wrap'><img src={bestSeller.image} alt={bestSeller.header} className='best-seller-img' /></div>*/}
                                        {/*<div className='heading-desktop-h6 black'>{bestSeller.difficulty}</div>
                                        <div className='heading-desktop-h3 black'>{bestSeller.header}</div>
                                        <p className='text-medium-normal black'>{bestSeller.description}</p>*/}

                                    </>
                                )}
                            </div>

                            <div className='swipper-wrapper'>
                                <Swiper
                                    slidesPerView={slidesPerView}
                                    spaceBetween={spaceBetween} // Space between slides
                                    slidesOffsetAfter={offset}
                                    slidesOffsetBefore={0}
                                    centeredSlides={false}
                                    mousewheel={true}
                                    pagination={{ clickable: true }}
                                    onSlideChange={() => console.log('slide change')}
                                    onSwiper={(swiper) => swiperRef.current = swiper}
                                    className="testimonials-swiper"
                                    ref={swiperRef}

                                >
                                    {filteredPlans.map((plan, index) => (
                                        <SwiperSlide key={index + 1}>

                                            <div className='swiper-slide'>
                                                <div className='plan-img-wrap'><img src={plan.image} alt={plan.header} className='planedimg' /></div>
                                                <div className='heading-desktop-h6 black marged'>{plan.difficulty}</div>
                                                <div className='heading-desktop-h3 black smoller'>{plan.header}</div>
                                                <p className='text-medium-normal black'>{plan.description}</p>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                            </div>
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
        </div>
    );
};

export default Prices;