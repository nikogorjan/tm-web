import React from 'react'
import './AboutVideo.css'

const AboutVideo = () => {
    return (
        <div className='about-video-main'>
            <div className='about-video-wrapper'>
                <video
                    src="/Videos/about-eng.mp4"
                    autoPlay
                    muted
                    playsInline
                    loop
                    className='about-video desktop'>
                </video>

                <video
                    src="/Videos/about-eng.mp4"
                    autoPlay
                    muted
                    playsInline
                    loop
                    className='about-video mobile'>
                </video>



            </div>

            <div className='about-under-wrapper'>
    <div className='padder'></div>
    <p className='black section-indicator alignself text-regular-semibold'>Customized Solutions</p>

    <div className='about-under-video'>
        <div className='under-left'>
            <h3 className='heading-desktop-h3'>We’re here to help you achieve your goals and improve your life!</h3>
        </div>

        <div className='under-right'>
            <p className='text-medium-normal'>
                We believe that everyone is unique, which means each individual requires a personalized approach, their own training plan, and their own nutrition plan. Our clients never feel like they are alone in the process—we’re in this together.
            </p>
        </div>
    </div>

    <div className='remmer'></div>

    <div className='one-bullets-row'>
        <div className='one-bullet'>
            <div className='one-bullet-wrapper'>
                <img src="/images/message-square-check.svg" className='relume-icon' alt='heroes' />
                <h6 className='heading-desktop-h6 highlighted-header'>We Are Good Listeners</h6>
                <p className='text-regular-normal'>
                    In today’s fast-paced life, people often forget the importance of conversation, which is key to a successful journey. For this reason, we encourage our clients to communicate, and we pride ourselves on being attentive listeners.
                </p>
            </div>
        </div>
        <div className='one-bullet'>
            <div className='one-bullet-wrapper'>
                <img src="/images/heart-circle.svg" className='relume-icon' alt='heroes' />
                <h6 className='heading-desktop-h6 highlighted-header'>We Are Understanding</h6>
                <p className='text-regular-normal'>
                    We are empathetic and always work together with the client to find a solution that suits everyone and is optimal for the client’s progress.
                </p>
            </div>
        </div>
        <div className='one-bullet'>
            <div className='one-bullet-wrapper'>
                <img src="/images/analyse.svg" className='relume-icon' alt='heroes' />
                <h6 className='heading-desktop-h6 highlighted-header'>Complete Dedication</h6>
                <p className='text-regular-normal'>
                    We dedicate 100% to each client, which means every client receives an individual training plan and a personalized nutrition plan.
                </p>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}

export default AboutVideo
