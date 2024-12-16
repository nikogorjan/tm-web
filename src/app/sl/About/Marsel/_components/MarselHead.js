'use client'

import React, { useRef, useState } from 'react';
import './MarselHead.css'
import '../../../../sl/_components/Hero.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import HoverButton from '../../../../../../public/Components/HoverButton/HoverButton';

import { useDispatch } from 'react-redux';
import { setBackgroundColor } from '../../../../store/colorSlice'; // Update the path as needed

gsap.registerPlugin(ScrollTrigger);

const MarselHead = () => {
    const HolderRef = useRef();
    const ImgWrapperRef = useRef();
    const ImgRef = useRef();
    const headerRef1 = useRef();
    const textRef1 = useRef();
    const rowRef1 = useRef();
    const rowReff1 = useRef();

    const hookRef = useRef(null);
    const headerRef = useRef(null);
    const paragraphRef = useRef(null);
    const squareRef = useRef(null);

    const dispatch = useDispatch();



    useGSAP(() => {


        // Timeline for image wrapper animation
        const imgTimeline = gsap.timeline();

        imgTimeline.to(
            ImgWrapperRef.current,
            {
                width: '80%',
                duration: 1.5,
                ease: 'power3.inOut',
                delay: 0
            },
            "+=0" // No delay before starting the next animation
        );

        const imgTimeline2 = gsap.timeline();

        imgTimeline2.to(
            ImgWrapperRef.current,
            {
                height: '100%',
                width: '100%',
                duration: 1,
                ease: 'power3.inOut',
                delay: 1.4
            },
            "+=0"
        );



        const imgTimeline3 = gsap.timeline();

        imgTimeline3.to(
            ImgRef.current,
            {
                scale: 1.1,
                duration: 1,
                ease: 'power3.inOut',
                delay: 0.6
            },
            "+=0"
        );






    }, []);

    const [isTransitioning, setIsTransitioning] = useState(false); // State to manage the shadow transition


    const handleNavigation = (url) => {
        // Add the 'show-shadow' class to trigger the transition
        setIsTransitioning(true);
    
        // After 0.3s, navigate to the URL
        setTimeout(() => {
          window.location.href = url;
        }, 300);
      };

    useGSAP(() => {
        const startPositionForHeroMain = window.innerWidth < 1000 ? "top top+=20%" : "bottom bottom-=10%";
        const endPositionForHeroMain = window.innerWidth < 1000 ? "top top+=20%" : "bottom bottom-=10%";
        ScrollTrigger.create({
            trigger: hookRef.current,
            start: startPositionForHeroMain,
            end: endPositionForHeroMain,
            onEnter: () => {
                

                gsap.to('body', { backgroundColor: 'white', duration: 0.6 }); // Change back to white
                gsap.to([headerRef.current, paragraphRef.current, ], { color: 'black', duration: 0.6 }); // Change text color back to black
                squareRef.current.classList.add('lighter'); // Add the 'lighter' class back

                dispatch(setBackgroundColor('white'));


            },
            onLeaveBack: () => {
                
                gsap.to('body', { backgroundColor: 'black', duration: 0.6 });
                gsap.to([headerRef.current, paragraphRef.current, ], { color: 'white', duration: 0.6 });
                squareRef.current.classList.remove('lighter'); // Remove the 'lighter' class

                dispatch(setBackgroundColor('black'));

            },
            markers: false // Disable markers for production
        });
    }, []);

    return (
        <div className='marsel-head-main'>
            <div className='marsel-head-image-wrapper' ref={HolderRef}>
                <div className='hero-img-wrapperr' ref={ImgWrapperRef}>
                    <img alt='logo' className='hero-imgg ' src='/images/z12.webp' ref={ImgRef} />
                    {/*<img alt='logo' className='hero-img mobile' src='/Images/hero2-mobile.webp' ref={ImgRef} />*/}

                </div>
            </div>

            <div className='marsel-head-content-wrapper'>
                <div className='one-first-row'>
                    <div className='one-first-left'>
                        <div className='first-left-wrapper'>
                            <h3 className='heading-desktop-h3' ref={headerRef1}>Marsel Kolarič - licencirani osebni trener in motivator</h3>
                        </div>


                    </div>
                    <div className='one-first-right'>
                        <div className='one-right-upper'>
                            <p className='text-medium-normal' ref={textRef1}>Sem Marsel Kolarič, licencirani osebni trener in motivator za vse, ki si želijo izboljšati svoje življenje in so pripravljeni sodelovati z mano na poti do uspeha. </p>

                        </div>
                        <div className='one-right-lower'>
                            <div className='left-row'>
                                <div className='left-row-cell'>
                                    <div className='left-row-cell-wrapper' ref={rowRef1}>
                                        <img src="/images/group.svg" className='relume-icon' alt='heros' />
                                        <h6 className='heading-desktop-h6 highlighted-header'>Osebni trener</h6>
                                        <p className='text-regular-normal'>Vsak trening je priložnost za izboljšanje, ne glede na to, ali gre za večje teže, več ponovitev ali boljšo tehniko. S stranko skupaj delava na doseganju teh ciljev.</p>
                                    </div>
                                </div>

                                <div className='left-row-cell'>
                                    <div className='left-row-cell-wrapper' ref={rowReff1}>
                                        <img src="/images/user-voice.svg" className='relume-icon' alt='heros' />
                                        <h6 className='heading-desktop-h6 highlighted-header'>Motivator</h6>
                                        <p className='text-regular-normal'>Verjamem, da lahko s pravo motivacijo in pozitivnim odnosom vsak doseže svoje cilje.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>







            </div>

            <div className='tmp tmpmargin' ref={hookRef}>
                <div className='tmp-about-wrapper'>
                    <div className='tmp-about-left leftalign'>
                        <div className='left-wrapper'>
                            <div className='tmp-about-left-headers'>
                                <p className=' black section-indicator alignself text-regular-semibold smooth' ref={squareRef}>Diabetes</p>

                                <h3 className='heading-desktop-h3' ref={headerRef}>Kako je sladkorna bolezen oblikovala moj pristop k fitnesu</h3>
                                <p className='text-medium-normal' ref={paragraphRef}>Pri šestnajstih letih sem bil diagnosticiran s sladkorno boleznijo tip 1, kar me je hitro pripeljalo do spoznanja, da fitnes vadba igra ključno vlogo pri uravnavanju krvnega sladkorja in izboljšanju splošnega zdravja. Po preizkušanju številnih diet sem ugotovil, da je najboljša tista, ki jo lahko vzdržujemo dolgoročno, brez strogih omejitev in z ravnovesjem, ki ustreza posameznikovemu življenjskemu slogu.</p>
                                <div className='marger'></div>
                                <HoverButton
                                    text="Preberi več"
                                    onClick={() => handleNavigation('/sl/Blog/sladkorna-bolezen')}
                                />
                            </div>


                        </div>

                    </div>
                    <div className='tmp-about-right'>
                        <img src="/images/marsel1.webp" className='tmp-img-l' alt='heros' />
                    </div>
                </div>
            </div>



            <div className={`shadows-for-transition ${isTransitioning ? 'show-shadow' : ''}`}>

      </div>


        </div>
    )
}

export default MarselHead
