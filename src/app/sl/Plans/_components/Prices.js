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
        'Vse storitve',
        'Trening ena na ena',
        'Trening v paru',
        'Spletno trenerstvo',
        'Video svetovanje'
    ];

    const beginnerPlans = [
        
        {
            header: 'Ena na ena',
            paragraph: 'Ideal for new fitness enthusiasts.',
            image: '/images/z3.webp',
            difficulty: '230 € / 8 treningov',
            description: 'Vsebuje individualni plan prehrane, individualni plan treninga, plan prehranskih dopolnil, svetovanje pravilne izvedbe vaj preko video vsebine in v živo, tedenski check-in in update po potrebi.'
        },
        {
            header: 'Ena na ena',
            paragraph: 'Get started with easy-to-follow exercises.',
            image: '/images/z2.webp',
            difficulty: '200 € / 8 treningov',
            description: 'Samo treniranje brez plana prehrane in plana treningov.'
        },
        {
            header: 'Ena na ena',
            paragraph: 'Beginner-friendly routines.',
            image: '/images/z7.webp',
            difficulty: '30 € / h',
            description: 'Zakup ene ure trenerstva v živo.'
        },
        
    ];

    const intermediatePlans = [
        
        {
            header: 'Trening v paru',
            paragraph: 'Challenge yourself with tougher routines.',
            image: '/images/st99.webp',
            difficulty: '280 € / 8 treningov',
            description: 'Vsebuje individualni plan prehrane, individualni plan treninga, plan prehranskih dopolnil, svetovanje pravilne izvedbe vaj preko video vsebine in v živo, tedenski check-in in update po potrebi.'
        },
        {
            header: 'Trening v paru',
            paragraph: 'Take your fitness to the next level.',
            image: '/images/st98.webp',
            difficulty: '250 € / 8 treningov',
            description: 'Samo treniranje brez plana prehrane in plana treningov.'
        },
       
    ];

    const advancedPlans = [
        
        {
            header: 'Spletno trenerstvo 1 mesec',
            paragraph: 'Take on intense challenges.',
            image: '/images/z4.webp',
            difficulty: '110 € / mesec',
            description: 'Online trenestvo vsebuje individualni plan prehrane, individualni plan treninga, plan prehranskih dopolnil, svetovanje pravilne izvedbe vaj preko video vsebine, tedenski check-in in update po potrebi'
        },
        {
            header: 'Spletno trenerstvo 3 mesece',
            paragraph: 'Maximize your performance.',
            image: '/images/z8.webp',
            difficulty: '250 € / 3 mesece',
            description: 'Online trenestvo vsebuje individualni plan prehrane, individualni plan treninga, plan prehranskih dopolnil, svetovanje pravilne izvedbe vaj preko video vsebine, tedenski check-in in update po potrebi'
        },
        
    ];

    const videoPlans = [
        
        {
            header: 'Video svetovanje',
            paragraph: 'Take on intense challenges.',
            image: '/images/st8.webp',
            difficulty: '10 € / h',
            description: 'Stranka naju ima možnost spoznati in se posvetovati z nama glede vsega kar jo zanima. Video klic je mogoč tudi za posameznike, ki niso najine stranke ampak imajo vprašanja na temo fitnesa ali svetovanje o bolezni, kot je sladkorna bolezen, motnje hranjenja in poškodbe.'
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
                    <p className='text-regular-semibold  black  section-indicator lighter'>Vse storitve</p>

                    <div className='heading-desktop-h3 black'>Razišči najino ponudbo!</div>
                    <p className='text-medium-normal black'>Začneš lahko že v nekaj sekundah!</p>
                    <div className='error-row '>
                                        <img src="/images/error-circle.svg" className='small-icon' alt='heros' />
                                        <p className='error-message'>Treningi v živo ne vsebujejo fitnes karte!</p>
                                    </div>
                    <div className='plans-display'>
                        <div className='display-left'>
                            <div className='plans-navigations-wrapper'>
                                <h6 className='heading-desktop-h6 black'>kategorije</h6>
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