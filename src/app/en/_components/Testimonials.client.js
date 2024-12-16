'use client'

import React, { useState, useRef } from 'react';
import './Testimonials.css'

const testimonials = [
    {
        image: "/images/ppl6.webp", // Replace with actual image path
        name: "David",
        testimonial: "Working with you is unique because it’s not just personal training but a partnership. Daily support not only with diet and workouts but also psychologically. Marsel took the time to discuss my goals for the future and the importance of difficult periods that literally made me a better person."
    },
    {
        image: "/images/ppl8.webp", // Replace with actual image path
        name: "Sabina",
        testimonial: "Tjaša and Marsel are amazing! I worked with them for a good seven months and lost 8kg during that time. What I like most is that they constantly motivate you, check how you’re feeling, track your progress, and help if you face any issues. In seven months, I learned so much from them that I can continue on my own and maintain a healthy lifestyle."
    },
    {
        image: "/images/ppl9.webp", // Replace with actual image path
        name: "Laura",
        testimonial: "Training with you is really great. You are very pleasant people, and everything is easier with you. From adjusting exercises and plans to listening to my wishes and encouraging me, I received a lot of motivation and kind words that kept pushing me forward."
    },
    {
        image: "/images/ppl10.webp", // Replace with actual image path
        name: "Manuela",
        testimonial: "I met two amazing people who complement each other perfectly. Their customized meal plan and training program helped me achieve my goals, and I’m incredibly satisfied. This is now my eighth month working with them. They are excellent motivators, and from the very first workout, I saw their positive energy, which influenced me to stay motivated and make progress right from the start."
    },
    {
        image: "/images/ppl11.webp", // Replace with actual image path
        name: "Afrodita",
        testimonial: "I learned about your services on social media. By coincidence, I was also considering starting training at that time, so I contacted you. You are amazing as people and trainers. I really like your approach and constructive feedback, especially at the beginning of our collaboration."
    }
];



const Testimonials = () => {
    // State to keep track of the active testimonial index
    const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
    const testimonialParagraphRef = useRef(null); // Reference to the testimonial paragraph
    const lineRef = useRef(null); // Reference to the testimonial paragraph
    const imageRef = useRef(null); // Reference to the testimonial paragraph
    const nameRef = useRef(null); // Reference to the testimonial paragraph

    // Handler for next testimonial
    const handleNext = () => {
        // Add the class "translateandchange" to the testimonial paragraph
        if (testimonialParagraphRef.current) {
            testimonialParagraphRef.current.classList.add("translateandchange");
            lineRef.current.classList.add("changesize");
            imageRef.current.classList.add("fadeaway");
            nameRef.current.classList.add("fadeaway");

            // Remove the class after 1 second
            setTimeout(() => {
                if (testimonialParagraphRef.current) {
                    testimonialParagraphRef.current.classList.remove("translateandchange");
                    lineRef.current.classList.remove("changesize");
                    imageRef.current.classList.remove("fadeaway");
                    nameRef.current.classList.remove("fadeaway");


                }

                // Update the index after the class is removed to ensure smooth transition
                setActiveTestimonialIndex((prevIndex) =>
                    prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
                );
            }, 600);
        } else {
            // Directly update the index if the ref is not attached for some reason
            setActiveTestimonialIndex((prevIndex) =>
                prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
            );
        }
    };

    const handlePrev = () => {
        if (testimonialParagraphRef.current) {
            testimonialParagraphRef.current.classList.add("translateandchange");
            lineRef.current.classList.add("changesize");
            imageRef.current.classList.add("fadeaway");
            nameRef.current.classList.add("fadeaway");

            // Remove the class after 1 second
            setTimeout(() => {
                if (testimonialParagraphRef.current) {
                    testimonialParagraphRef.current.classList.remove("translateandchange");
                    lineRef.current.classList.remove("changesize");
                    imageRef.current.classList.remove("fadeaway");
                    nameRef.current.classList.remove("fadeaway");


                }

                // Update the index after the class is removed to ensure smooth transition
                setActiveTestimonialIndex((prevIndex) =>
                    prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
                );
            }, 600);
        } else {
            // Directly update the index if the ref is not attached for some reason
            setActiveTestimonialIndex((prevIndex) =>
                prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
            );
        }
    };

    const handleBulletClick = (index) => {
        if (testimonialParagraphRef.current) {
            testimonialParagraphRef.current.classList.add("translateandchange");
            lineRef.current.classList.add("changesize");
            imageRef.current.classList.add("fadeaway");
            nameRef.current.classList.add("fadeaway");

            // Remove the class after 1 second
            setTimeout(() => {
                if (testimonialParagraphRef.current) {
                    testimonialParagraphRef.current.classList.remove("translateandchange");
                    lineRef.current.classList.remove("changesize");
                    imageRef.current.classList.remove("fadeaway");
                    nameRef.current.classList.remove("fadeaway");


                }

                // Update the index after the class is removed to ensure smooth transition
                setActiveTestimonialIndex(index);
            }, 600);
        } else {
            // Directly update the index if the ref is not attached for some reason
            setActiveTestimonialIndex(index);
        }
    };


    // Handler for clicking on a bullet point
    /*const handleBulletClick = (index) => {
        setActiveTestimonialIndex(index);
    };*/

    return (
        <div className='testimonials-main'>
            <div className='testimonials-wrapper'>
            <div className='header-wrapper'>
    <p className='text-regular-semibold black section-indicator lighter'>Testimonials</p>
</div>
<div className='header-wrapper'>
    <h3 className='heading-desktop-h3 black'>Customer Reviews Reflect Our Dedication</h3>
</div>
<div className='header-wrapper'>
    <h3 className='text-medium-normal black'>See for Yourself</h3>
</div>
                <div className='testimonials-holder'>

                    <div className='testimonials-holder-row'>
                        <div className='slika-holder' ref={imageRef} ><img src={testimonials[activeTestimonialIndex].image} alt={testimonials[activeTestimonialIndex].name} className='selected-img' /></div>
                        <div className='narekovaj-holder'>
                            <img src="/images/narekovaj.webp" className='narekovaj-img' alt='heros' />

                        </div>
                    </div>

                    <p ref={testimonialParagraphRef} className='testimonial-paragraph'>{testimonials[activeTestimonialIndex].testimonial}</p>

                    <div className='nameandline-rov'>
                        <div ref={lineRef} className='testimonial-line'></div>
                        <h3 ref={nameRef} className='testimonial-name'>{testimonials[activeTestimonialIndex].name}</h3>
                    </div>


                </div>
                <div className='navigations-row'>
                    <div className='bullets'>
                        {testimonials.map((_, index) => (
                            <div
                                key={index}
                                className={`testimonial-bullet ${index === activeTestimonialIndex ? 'bullet-active' : ''}`}
                                onClick={() => handleBulletClick(index)}
                            >
                                {/* Render bullet point */}
                            </div>
                        ))}
                    </div>
                    <div className='arrows'>
                        <div className='button-next' onClick={handlePrev}><span className='arrow'></span></div>
                        <div className='button-prev' onClick={handleNext}><span className='arrow'></span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
