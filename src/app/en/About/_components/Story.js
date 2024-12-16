'use client'

import React, { useRef, useEffect } from 'react';
import './Story.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
    const storyRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: storyRef.current,
                start: 'top bottom',
                end: 'bottom center',
                scrub: false,
                markers: false,
            }
        });

        tl.to('.line1', { y: 0, duration: 1 })
            .to('.circle1', { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.circle-text1', { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.line2', { y: -20, duration: 1 })
            .to('.content-holder1', { opacity: 1, y:0, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.circle2', { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.circle-text2', { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.line3', { y: -20, duration: 1 })
            .to('.content-holder2', { opacity: 1, y:0, scale: 1, duration: 0.5 }, '-=0.5')

            .to('.circle3', { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.circle-text3', { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.line4', { y: -20, duration: 1 })
            .to('.content-holder3', { opacity: 1, y:0, scale: 1, duration: 0.5 }, '-=0.5')

            .to('.circle4', { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.circle-text4', { opacity: 1, scale: 1, duration: 0.5 }, '-=0.5')
            .to('.line5', { y: -20, duration: 1 })
            .to('.content-holder4', { opacity: 1, y:0, scale: 1, duration: 0.5 }, '-=0.5')



    }, []);

    return (
        <div className='story-main'>
            <div className='story-wrapper' ref={storyRef}>
                <div className='story-left'>
                    {/* Left side content */}
                </div>
                <div className='story-right'>
                    <div className='line-wrapper line-wrapper1'><div className='line line1'></div></div>

                    <div className='circle-wrapper'>
                        <div className='circle circle1'></div>
                        <div className='circle-text circle-text1'>2021</div>
                    </div>
                    <div className='line-wrapper'><div className='line-with-content'></div>
                        <div className='line line2'></div>
                        <div className='content-holder content-holder1'>
                            <p className='content-text black'>Spoznala sva se.</p>
                            <img
                                src="/images/story1.webp"
                                alt="A couple"
                                className='story-img'
                            />
                        </div>
                    </div>
                    <div className='circle-wrapper'>
                        <div className='circle circle2'></div>
                        <div className='circle-text circle-text2'>2022</div>
                    </div>

                    <div className='line-wrapper'><div className='line-with-content'></div>
                        <div className='line line3'></div>
                        <div className='content-holder content-holder2'>
                            <p className='content-text black'>Sprejela sva prvo stranko.</p>
                            <img
                                src="/images/story2.webp"
                                alt="A couple"
                                className='story-img'
                            />
                        </div>
                    </div>
                    <div className='circle-wrapper'>
                        <div className='circle circle3'></div>
                        <div className='circle-text circle-text3'>2023</div>
                    </div>

                    <div className='line-wrapper'><div className='line-with-content'></div>
                        <div className='line line4'></div>
                        <div className='content-holder content-holder3'>
                            <p className='content-text black'>Ustanovila sva TM Lifestyle Coaching</p>
                            <img
                                src="/images/story3.webp"
                                alt="A couple"
                                className='story-img'
                            />
                        </div>
                    </div>
                    <div className='circle-wrapper'>
                        <div className='circle circle4'></div>
                        <div className='circle-text circle-text4'>2024</div>
                    </div>

                    <div className='line-wrapper'><div className='line-with-content'></div>
                        <div className='line line5'></div>
                        <div className='content-holder content-holder4'>
                            <p className='content-text black'>Do danes sva pomagala že stotim strankam.</p>
                            <img
                                src="/images/story4.webp"
                                alt="A couple"
                                className='story-img'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Story;