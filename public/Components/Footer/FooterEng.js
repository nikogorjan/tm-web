

import React, { useState } from 'react'
import './Footer.css'

const FooterEng = () => {
    const [isTransitioning, setIsTransitioning] = useState(false); // State to manage the shadow transition

    const handleNavigate = (url) => {
        // Add the 'show-shadow' class to trigger the transition
        setIsTransitioning(true);
    
        // After 0.3s, navigate to the URL
        setTimeout(() => {
          window.location.href = url;
        }, 300);
      };

    const handleMailTo = (email) => {
        window.location.href = `mailto:${email}`;
    };


    return (
        <>
            <div className='footer-main'>


                <div className='footers-wrapper'>
                    <div className='footer-cell firstcell'>
                        <img src='/images/logo-black.webp' className='logo-img' alt='heros' onClick={() => handleNavigate('/en')} />

                    </div>


                    <div className='footer-cell mid-cell'>
                        <p className='footer-nav-paragraph' onClick={() => handleNavigate('/en/Plans')}>Services</p>
                        <p className='footer-nav-paragraph' onClick={() => handleNavigate('/en/About')}>About Us</p>


                        <p className='footer-nav-paragraph' onClick={() => handleNavigate('/en/Clients')}>Clients</p>
                        <p className='footer-nav-paragraph' onClick={() => handleNavigate('/en/Blog')}>Blog</p>
                    </div>

                    <div className='footer-cell lastcell'>



                        <div className='socialedroe'>
                            <div className='instacell'>
                                <img src='/images/Instagram.svg' className='social-icon-img' alt='heros' />
                                <img src='/images/male.svg' className='social-icon-img pointer' alt='heros' onClick={() => handleNavigate('https://www.instagram.com/marsel.kolaric123/')} />
                                <img src='/images/female.svg' className='social-icon-img pointer' alt='heros' onClick={() => handleNavigate('https://www.instagram.com/tjasa_vrecic/')} />
                            </div>
                            <div className='social-separator'></div>
                            <div className='facecell'>
                                <img src='/images/Facebook.svg' className='social-icon-img' alt='heros' />
                                <img src='/images/male.svg' className='social-icon-img pointer' alt='heros' onClick={() => handleNavigate('https://www.facebook.com/marsel.kolaric.7')} />
                                <img src='/images/female.svg' className='social-icon-img pointer' alt='heros' onClick={() => handleNavigate('https://www.facebook.com/tjasa.vrecic')} />
                            </div>

                            <div className='social-separator wideseparator'></div>
                            <div className='facecell centerit pointer mailcell' onClick={() => handleMailTo('info@tmlifestylecoaching.com')}>
                                <img src='/images/envelope.svg' className='social-icon-img' alt='heros' />
                                <p className='emailid'>info@tmlifestylecoaching.com</p>
                            </div>


                        </div>
                    </div>

                </div>


                <div className='footer-separator'>

                </div>


                <div className='footer-last'>
                    <div className='facecell centerit '>
                        <img src='/images/copyright.svg' className='social-icon-img copyrightimg' alt='heros' />
                        <p className='designerid margleft'>tmlifestylecoaching vse pravice pridržane</p>
                    </div>

                    <div className='social-separator '></div>

                    <div className='designer-cell' onClick={() => handleNavigate('https://nikogorjan.com/')}>
                        <div className='facecell centerit pointer'>
                            <p className='designerid'>Designed and developed by <span className='highlight'>Niko Gorjan</span></p>
                            <img src='/images/deminobg.png' className='social-icon-img' alt='heros' />

                        </div>
                    </div>
                </div>



                {/*<div className='footer-first-row'>
                    <div className='first-row-wrapper'>
                        <div className='footerrerer'>

                            <div className='socials-cell'>
                                <div className='socialedroe'>
                                    <div className='instacell'>
                                        <img src='/images/instagram.svg' className='social-icon-img' alt='heros' />
                                        <img src='/images/male.svg' className='social-icon-img pointer' alt='heros' onClick={() => handleNavigate('https://www.instagram.com/marsel.kolaric123/')} />
                                        <img src='/images/female.svg' className='social-icon-img pointer' alt='heros' onClick={() => handleNavigate('https://www.instagram.com/tjasa_vrecic/')} />
                                    </div>
                                    <div className='social-separator'></div>
                                    <div className='facecell'>
                                        <img src='/images/facebook.svg' className='social-icon-img' alt='heros' />
                                        <img src='/images/male.svg' className='social-icon-img pointer' alt='heros' onClick={() => handleNavigate('https://www.facebook.com/marsel.kolaric.7')} />
                                        <img src='/images/female.svg' className='social-icon-img pointer' alt='heros' onClick={() => handleNavigate('https://www.facebook.com/tjasa.vrecic')} />
                                    </div>
                                </div>

                                <div className='social-separator wideseparator'></div>
                                <div className='facecell centerit pointer mailcell' onClick={() => handleMailTo('info@tmlifestylecoaching.com')}>
                                    <img src='/images/envelope.svg' className='social-icon-img' alt='heros' />
                                    <p className='emailid'>info@tmlifestylecoaching.com</p>
                                </div>
                                <div className='social-separator wideseparator'></div>

                                <div className='facecell centerit '>
                                    <img src='/images/copyright.svg' className='social-icon-img copyrightimg' alt='heros' />
                                    <p className='designerid margleft'>tmlifestylecoaching</p>
                                </div>

                                <div className='social-separator none'></div>


                            </div>
                        </div>


                        <div className='designer-cell' onClick={() => handleNavigate('https://nikogorjan.com/Portfolio')}>
                            <div className='facecell centerit pointer'>
                                <p className='designerid'>Designed and developed by <span className='highlight'>Niko Gorjan</span></p>
                                <img src='/images/designer.webp' className='social-icon-img' alt='heros' />

                            </div>
                        </div>

                    </div>
                </div>*/}


<div className={`shadows-for-transition ${isTransitioning ? 'show-shadow' : ''}`}>

</div>

            </div>


        </>
    )
}

export default FooterEng
