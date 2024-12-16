'use client'


import React from 'react'
import './Offers.css'

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
    return (
        <div className='offers-main'>
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
                                <a href="#" className="animated-button11">
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
