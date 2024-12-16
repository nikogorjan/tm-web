'use client'

import React, { useRef, useState } from 'react';
import './TjasaHead.css'
import '../../../../sl/_components/Hero.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import HoverButton from '../../../../../../public/Components/HoverButton/HoverButton';
import Ekipa from './Ekipa';

import { useDispatch } from 'react-redux';
import { setBackgroundColor } from '../../../../store/colorSlice'; // Update the path as needed

gsap.registerPlugin(ScrollTrigger);


const TjasaHead = () => {

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
    const grayRef = useRef(null);

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
                gsap.to([headerRef.current, paragraphRef.current,], { color: 'black', duration: 0.6 }); // Change text color back to black
                squareRef.current.classList.add('lighter'); // Add the 'lighter' class back
                gsap.to(grayRef.current, { backgroundColor: '#f9f9f9', duration: 0.6 }); // Change back to white
                dispatch(setBackgroundColor('white'));


            },
            onLeaveBack: () => {

                gsap.to('body', { backgroundColor: 'black', duration: 0.6 });
                gsap.to([headerRef.current, paragraphRef.current,], { color: 'white', duration: 0.6 });
                squareRef.current.classList.remove('lighter'); // Remove the 'lighter' class
                gsap.to(grayRef.current, { backgroundColor: "black", duration: 0.6 }); // Change back to white
                dispatch(setBackgroundColor('black'));

            },
            markers: false // Disable markers for production
        });
    }, []);


    return (
        <div className='tjasa-head-main'>
            <div className='marsel-head-image-wrapper' ref={HolderRef}>
                <div className='hero-img-wrapperr' ref={ImgWrapperRef}>
                    <img alt='logo' className='hero-imgg ' src='/images/z11.webp' ref={ImgRef} />
                    {/*<img alt='logo' className='hero-img mobile' src='/Images/hero2-mobile.webp' ref={ImgRef} />*/}

                </div>
            </div>

            <div className='marsel-head-content-wrapper'>
                <div className='one-first-row'>
                    <div className='one-first-left'>
                        <div className='first-left-wrapper'>
                            <h3 className='heading-desktop-h3' ref={headerRef1}>Tjaša Vrečič - licencirana osebna trenerka in bodybuilderka</h3>
                        </div>


                    </div>
                    <div className='one-first-right'>
                        <div className='one-right-upper'>
                            <p className='text-medium-normal' ref={textRef1}>Sem Tjaša Vrečič licencirana osebna trenerka, tekmovalka v bodybuildingu in strastna športnica. Skozi ralične preizkušnje ki sem jih v življenju imela sem se naučila poslušati telo in glavo. Prioriteto dajem poznavanju telesa, pravilemu izvajanju vaj in povezavi glava z mišico. </p>

                        </div>
                        <div className='one-right-lower'>
                            <div className='left-row'>
                                <div className='left-row-cell'>
                                    <div className='left-row-cell-wrapper' ref={rowRef1}>
                                        <img src="/images/group.svg" className='relume-icon' alt='heros' />
                                        <h6 className='heading-desktop-h6 highlighted-header'>Osebna trenerka</h6>
                                        <p className='text-regular-normal'>Vsak trening je priložnost za izboljšanje, ne glede na to, ali gre za večje teže, več ponovitev ali boljšo tehniko. S stranko skupaj delava na doseganju teh ciljev.</p>
                                    </div>
                                </div>

                                <div className='left-row-cell'>
                                    <div className='left-row-cell-wrapper' ref={rowReff1}>
                                        <img src="/images/dumbbell.svg" className='relume-icon' alt='heros' />
                                        <h6 className='heading-desktop-h6 highlighted-header'>Bodybuilderka</h6>
                                        <p className='text-regular-normal'>V svoji karieri sem dosegla že številne mednarodne rezultate.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>







            </div>

            <div className='tmp tmpmargin tmptjasa' ref={hookRef}>
                <div className='tmp-about-wrapper'>
                    <div className='tmp-about-left leftalign'>
                        <div className='left-wrapper'>
                            <div className='tmp-about-left-headers'>
                                <p className=' black section-indicator alignself text-regular-semibold smooth' ref={squareRef}>Moja pot</p>

                                <h3 className='heading-desktop-h3' ref={headerRef}>Moje potovanje od poškodbe do bodybuildinga!</h3>
                                <p className='text-medium-normal' ref={paragraphRef}>Žal smo ljudje pogosto taki, da spremenimo svoj način življenja šele takrat, ko smo prisiljeni to narediti zaradi različnih razlogov – bodisi zaradi poškodb, operacij ali slabih življenskih navad. Sama sem bila na isti poti, ko sem zaradi nepravilne vadbe doživela poškodbo in pridobila hernijo v ledvenem predelu L5-S1.</p>
                                <div className='marger'></div>
                                <HoverButton
                                    text="Preberi več"
                                    onClick={() => handleNavigation('/sl/Blog/moje-potovanje')}
                                />
                            </div>


                        </div>

                    </div>
                    <div className='tmp-about-right'>
                        <img src="/images/us9.webp" className='tmp-img-l' alt='heros' />
                    </div>
                </div>
            </div>



            <div className='tjasa-medals' ref={grayRef}>

                <div className='hedd midded'>
                    <h3 className='heading-desktop-h3 black ' >Moje medalje! </h3>

                    <h3 className='text-medium-normal  black' >Simboli truda in uspeha.</h3>
                </div>

                <div className='medals-wrapper'>
                    <div className='medals-left'>
                        <h4 className='program-header black'>Prvo mesto na NPC Invictus Cup. Moje prvo tekmovanje v true novice kategoriji</h4>
                        <h3 className='text-medium-normal black' >Da dosežemo optimalno težo je potrebno več kot le štetje kalorij in telovadba.</h3>


                        <div className='highlighted-row margingray'>
                            <div className='blog-header-wrapper black highlighted-gray'>
                                <p className='text-regular-semibold  nomargins'>Tekmovanje</p>
                            </div>
                            <div className='blog-header-wrapper black highlighted-gray'>
                                <p className='text-regular-semibold  nomargins'>Bodybuilding</p>
                            </div>
                            <div className='blog-header-wrapper black highlighted-gray'>
                                <p className='text-regular-semibold  nomargins'>True Novice</p>
                            </div>
                        </div>

                        <img
                            src="/images/tekma1.webp"
                            alt="A couple"
                            className='tekma-img'
                        />
                    </div>

                    <div className='medals-right'>

                        <div className='mr1'>
                            <div className='medal-cell'>
                                <img
                                    src="/images/gold.svg"
                                    alt="A couple"
                                    className='medal-img'
                                />
                                <h6 className='heading-desktop-h6 black'>NPC Invictus Cup</h6>
                                <p className='text-regular-normal black'>Prvo mesto v kategoriji True Novice</p>

                            </div>

                            <div className='medal-cell'>
                                <img
                                    src="/images/silver.svg"
                                    alt="A couple"
                                    className='medal-img'
                                />
                                <h6 className='heading-desktop-h6 black'>NPC Regional Avstrija</h6>
                                <p className='text-regular-normal black'>Drugo mesto v kategoriji Novice</p>

                            </div>
                        </div>
                        <div className='mr1'>
                            <div className='medal-cell'>
                                <img
                                    src="/images/bronze.svg"
                                    alt="A couple"
                                    className='medal-img'
                                />
                                <h6 className='heading-desktop-h6 black'>NPC Invictus Cup</h6>
                                <p className='text-regular-normal black'>Tretje mesto v kategoriji Open Class</p>

                            </div>

                            <div className='medal-cell'>
                                <img
                                    src="/images/4th.svg"
                                    alt="A couple"
                                    className='medal-img'
                                />
                                <h6 className='heading-desktop-h6 black'>NPC Regional Avstrija</h6>
                                <p className='text-regular-normal black'>Četrto mesto v kategoriji Open Class</p>

                            </div>
                        </div>

                    </div>
                </div>


                <div className='medals-wrapper mrgto'>
                    <div className='medals-left'>
                        <h4 className='program-header black'>Za svoje rezultate sem morala stopiti izven svoje cone udobja in spraviti telesno maščobo na 10%</h4>
                        <h3 className='text-medium-normal black' >Disciplina je ključ do uspeha.</h3>


                        <div className='highlighted-row margingray'>
                            <div className='blog-header-wrapper black highlighted-gray'>
                                <p className='text-regular-semibold  nomargins'>Transformacija</p>
                            </div>
                            <div className='blog-header-wrapper black highlighted-gray'>
                                <p className='text-regular-semibold  nomargins'>Hujšanje</p>
                            </div>
                            <div className='blog-header-wrapper black highlighted-gray'>
                                <p className='text-regular-semibold  nomargins'>Priprava na tekmovanje</p>
                            </div>
                        </div>
                        <img
                            src="/images/ttr.webp"
                            alt="A couple"
                            className='ttr-img'
                        />
                    </div>
                </div>

                <div className='medals-right'>

                </div>



            </div>



            <div className='tjasa-bento'>
                <Ekipa />
            </div>





            <div className={`shadows-for-transition ${isTransitioning ? 'show-shadow' : ''}`}>

      </div>

        </div>

    )
}

export default TjasaHead
