'use client'

import React, { useState, useRef } from 'react';
import './Testimonials.css'

const testimonials = [
    {
        image: "/images/ppl6.webp", // Replace with actual image path
        name: "David",
        testimonial: "Sodelovanje z vama je unikatno, saj ni golo osebno trenerstvo, ampak naveza. Vsakodnevna pomoč, ne samo pri prehrani in treningih ampak tudi psihološko. Marsel si je vzel čas in sva se pogovorila o ciljih za prihodnost in pomembnosti težkih obdobij, ki so me dobesedno naredile boljšega."
    },
    {
        image: "/images/ppl8.webp", // Replace with actual image path
        name: "Sabina",
        testimonial: "Tjaša in Marsel sta zakon! Z njima sem delala dobrih sedem mesecev in v tem času izgubila 8kg. Najbolj mi je všeč, da te ves čas motivirata, preverjata kako se počutiš, spremljata tvoj napredek in ti pomagata, če imaš kakršne koli težave. V sedmih mesecih sem se od njiju naučila ogromno, da lahko nadaljujem sama in ohranjam zdrav način življenja."
    },
    {
        image: "/images/ppl9.webp", // Replace with actual image path
        name: "Laura",
        testimonial: "Treniranje z vama je res super. Sta zelo prijetni osebi in z vama je res lažje. Od prilagajanja vaj, planov, poslušanje želja, spodbujanje, prejela sem veliko motivacije in lepih besed, ki so me samo gnale naprej."
    },
    {
        image: "/images/ppl10.webp", // Replace with actual image path
        name: "Manuela",
        testimonial: "Spoznala sem dve super osebi, ki dopolnjujeta ena drugo. Njun prilagojeni jedilnik in trening program mi je pomagal doseči cilje s katerimi sem neizmerno zadovoljna, to je zdaj že moj osmi mesec od kar z njima sodelujem. Sta odlična motivatorja, že na prvem treningu sem videla njuno pozitivno energijo, ki je name vplivala tako da sem že od samega začetka bila motivirana za trening in doseganje napredka."
    },
    {
        image: "/images/ppl11.webp", // Replace with actual image path
        name: "Afrodita",
        testimonial: "Za vajine storitve sem izvedela na socialnih omrežjih, po naključju sem takrat tudi razmišljala da bi začela trenirati zato sem vaju kontaktirala. Top sta kot osebi in trenerja, ful se mi dopade vajin odnos in konstruktivne kritike, sploh na začetku našega sodelovanja."
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
                    <p className='text-regular-semibold  black section-indicator lighter'>Mnenja</p>
                </div>
                <div className='header-wrapper'>
                    <h3 className='heading-desktop-h3 black' >Mnenja strank pričajo o najini predanosti</h3>
                </div>

                <div className='header-wrapper'>
                    <h3 className='text-medium-normal black' >Prepričajte se sami</h3>
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
