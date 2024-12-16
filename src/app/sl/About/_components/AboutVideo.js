import React from 'react'
import './AboutVideo.css'

const AboutVideo = () => {
    return (
        <div className='about-video-main'>
            <div className='about-video-wrapper'>
                <video
                    src="/Videos/tm.mp4"
                    autoPlay
                    muted
                    playsInline
                    loop
                    className='about-video desktop'>
                </video>

                <video
                    src="/Videos/tm.mp4"
                    autoPlay
                    muted
                    playsInline
                    loop
                    className='about-video mobile'>
                </video>



            </div>

            <div className='about-under-wrapper'>
                <div className='padder'></div>
                <p className=' black section-indicator alignself text-regular-semibold'>Prilagojene rešitve</p>

                <div className='about-under-video'>
                    <div className='under-left'>
                        <h3 className='heading-desktop-h3'>Sva tukaj, da ti pomagava doseči svoje cilje in izboljšati svoje življenje!</h3>

                    </div>

                    <div className='under-right'>
                        <p className='text-medium-normal'>Zagovarjava dejstvo da smo si ljudje med seboj različni kar pomeni, da vsak pozameznik potrebuje svoj pristop, svoj trening plan in svoj plan prehrane. Stranka pri nama nima občutka, da je v tem sama ampak smo v procesu skupaj. </p>

                    </div>
                </div>



                <div className='remmer'></div>

                <div className='one-bullets-row'>
                    <div className='one-bullet'>
                        <div className='one-bullet-wrapper'>
                            <img src="/images/message-square-check.svg" className='relume-icon' alt='heros' />
                            <h6 className='heading-desktop-h6 highlighted-header'>Sva dobra poslušalca</h6>
                            <p className='text-regular-normal'>Dan danes je tempo življenja zelo hiter in ljudje vedno znova pozabljamo na pogovor, ki pa je ključen za uspešno pot. S tem razlogom strmiva in spodbujava stranke k pogovoru in sva dobra poslušalca. </p>

                        </div>
                    </div>
                    <div className='one-bullet'>
                        <div className='one-bullet-wrapper'>
                            <img src="/images/heart-circle.svg" className='relume-icon' alt='heros' />
                            <h6 className='heading-desktop-h6 highlighted-header'>Sva razumevajoča</h6>
                            <p className='text-regular-normal'>Sva razumevajoča in skupaj s stranko vedno najdeva neko pot, ki ustreza vsem in je optimalna za napredek stranke.</p>

                        </div>
                    </div>
                    <div className='one-bullet'>
                        <div className='one-bullet-wrapper'>
                            <img src="/images/analyse.svg" className='relume-icon' alt='heros' />
                            <h6 className='heading-desktop-h6 highlighted-header'>Popolna predanost</h6>
                            <p className='text-regular-normal'>Vsaki stranki se posvetiva 100% kar pomeni da dobi vsaka stranka svoj individualen trening plan in plan prehrane.</p>

                        </div>
                    </div>
                </div>



            </div>
        </div>
    )
}

export default AboutVideo
