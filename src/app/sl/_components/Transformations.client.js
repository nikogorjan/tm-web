'use client'


import React, { useState, useEffect } from 'react';
import './Transformations.css'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const mediaLinks = [
    { link: "/images/s1.jpeg" },
    { link: "/images/s2.jpeg" },
    { link: "/images/s3.jpeg" },
    { link: "/images/s4.jpeg" },
    { link: "/images/s5.jpeg" },
    { link: "/images/s6.jpeg" },
    { link: "/images/s7.jpeg" },
    { link: "/images/s8.jpeg" },
    { link: "/images/s9.jpeg" },
    { link: "/images/s10.jpeg" },
    { link: "/images/s11.jpeg" },
    { link: "/images/s12.jpeg" },
    { link: "/images/s13.jpeg" },
    { link: "/images/s14.jpeg" },
    { link: "/images/s15.jpeg" },
    { link: "/images/s16.jpeg" },
    { link: "/images/s17.jpeg" },

];

const Transformations = () => {

    const [sliderSettings, setSliderSettings] = useState({
        dots: false,
        infinite: true,
        speed: 7500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: "linear",
        rtl: false,
        pauseOnHover: false,
    });

    useEffect(() => {
        const updateSettingsBasedOnWidth = () => {
            const newSettings = {
                ...sliderSettings,
                slidesToShow: window.innerWidth < 1100 ? 2 : 6,
            };
            setSliderSettings(newSettings);
        };

        updateSettingsBasedOnWidth(); // Update on mount

        window.addEventListener('resize', updateSettingsBasedOnWidth);

        // Cleanup listener on component unmount
        return () => window.removeEventListener('resize', updateSettingsBasedOnWidth);
    }, []);

    return (
        <div className='media-main'>
            <div className='media-main'>
                <div className='media-wrapper'>



                    <Slider {...sliderSettings}>
                        {mediaLinks.map(({ img, link }, index) => (
                            <div key={index} className='caro-holder'>

                                <img className='media-img' src={link} alt='medij' />

                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Transformations
