'use client'


import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Offers.css'
import { useGSAP } from '@gsap/react';

const offers = [
    {
        image: "/images/team7.webp", // Replace with actual image path
        header: "Starter Plan",
        description: "Ideal for beginners looking to kickstart their fitness journey with personalized workouts and nutritional guidance.",
        price: "29.99",
        discount: "19.99" // This can be adjusted based on your promotional strategy
    },
    {
        image: "/images/team8.webp", // Replace with actual image path
        header: "Pro Plan",
        description: "Designed for fitness enthusiasts seeking to elevate their workout regimen and nutritional planning to the next level.",
        price: "49.99",
        discount: "39.99" // This can be adjusted based on your promotional strategy
    },
    {
        image: "/images/team7.webp", // Replace with actual image path
        header: "Elite Plan",
        description: "Our most comprehensive plan, offering 1-on-1 coaching, advanced fitness programs, and full nutritional support for serious athletes.",
        price: "79.99",
        discount: "69.99" // This can be adjusted based on your promotional strategy
    }
];

const Offers = () => {
    const offersMainRef = useRef(null);

    /*useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        ScrollTrigger.create({
            trigger: '.offers-main',
            start: 'top 50%', // Trigger when the top of .offers-main enters 50% of the viewport
            end: 'bottom top', // End when the bottom of .offers-main exits the top of the viewport
            scrub: true, // Smooth scrubbing
            onEnter: () => {
                gsap.to('body', { backgroundColor: 'white', duration: 1 });

            },
            onLeaveBack: () => {
                gsap.to('body', { backgroundColor: 'black', duration: 1 }); // Ensure smooth transition back

            },
            markers: false, // Optional: for debugging purposes
        });
    }, []);*/

    return (
        <div className='offers-main' ref={offersMainRef}>
            <h1 className='coaches-names offer-header'>IZBERI SVOJ PLAN</h1>
            <div className='offers-wrapper'>
                <div className='offers-row'>
                    {offers.map((offer, index) => (
                        <div key={index} className='offer-cell'>
                            <div className='offer-cell-wrapper'>
                                <div className='offer-image-wrapper'>
                                    <img src={offer.image} alt={offer.header} className='offer-image' />
                                </div>
                                <h2 className='offer-title'>{offer.header}</h2>
                                <p className='offer-description'>{offer.description}</p>
                                <div className='offer-pricing'>
                                    <span className='original-price'>${offer.price}</span>
                                    <span className='discounted-price'>${offer.discount}</span>
                                </div>
                                <a href="https://www.trainerize.me/profile/demiai/?planGUID=5c1e9bd1c6814ad1b7b717dd40fc61c2" className="animated-button1">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    IZBERI PLAN
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Offers
