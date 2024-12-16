import React, { useState } from 'react'
import '../../../app/sl/_components/Hero.css'

const Blog = () => {
    const [isTransitioning, setIsTransitioning] = useState(false); // State to manage the shadow transition


    const handleNavigation = (url) => {
        // Add the 'show-shadow' class to trigger the transition
        setIsTransitioning(true);
    
        // After 0.3s, navigate to the URL
        setTimeout(() => {
          window.location.href = url;
        }, 300);
      };

  return (
    <div>
      <div className='blog-online'>
                <div className='blog-wrapper'>
                    <div className='blog-headers-wrapper'>
                        <div className='blog-header-wrapper'>
                            <p className='text-regular-semibold  black section-indicator lighter'>Blog</p>
                        </div>
                        <div className='blog-header-wrapper'>
                            <h3 className='heading-desktop-h3 black ' >Preberi blog novice o treningih in zdravem načinu življenja</h3>
                        </div>

                        <div className='blog-header-wrapper'>
                            <h3 className='text-medium-normal  black'>Odkrij nasvete, trike in strokovna priporočila za izboljšanje svojega zdravja in kondicije.</h3>
                        </div>
                    </div>

                    <div className='programi-row'>
                        <div className='program-cell opacity-cell' >
                            <div className='program-img-wrapper'>
                                <img src="/images/build4.webp" className='program-img hoverim' alt='beginner' onClick={() => handleNavigation('/sl/Blog/izguba-odvecnih-kilogramov')} />
                            </div>
                            <div className='ontopmrgin'></div>
                            <div className='highlighted-row'>
                                <div className='blog-header-wrapper black highlighted-gray'>
                                    <p className='text-regular-semibold  nomargins'>Hujšanje</p>
                                </div>
                                <div className='blog-header-wrapper black highlighted-gray'>
                                    <p className='text-regular-semibold  nomargins'>Zdrava prehrana</p>
                                </div>
                            </div>
                            <h4 className='program-header black'>Izguba odvečnih kilogramov</h4>
                            <h3 className='text-medium-normal black' >Da dosežemo optimalno težo je potrebno več kot le štetje kalorij in telovadba...</h3>
                            <div className='read-more-row' onClick={() => handleNavigation('/sl/Blog/izguba-odvecnih-kilogramov')}>
                                <p className='preberi-vec-text black bbc' >Preberi več</p>
                                <p className='preberi-vec-text black arrow-vec bbc'>&gt;</p>
                            </div>
                        </div>

                        <div className='program-cell opacity-cell'>
                            <div className='program-img-wrapper'>
                                <img src="/images/b1.webp" className='program-img hoverim' alt='intermediate'onClick={() => handleNavigation('/sl/Blog/sladkorna-bolezen')} />
                            </div>
                            <div className='ontopmrgin'></div>
                            <div className='highlighted-row'>
                                <div className='blog-header-wrapper black highlighted-gray'>
                                    <p className='text-regular-semibold  nomargins'>Sladkorna bolezen</p>
                                </div>
                                <div className='blog-header-wrapper black highlighted-gray'>
                                    <p className='text-regular-semibold  nomargins'>Genska bolezen</p>
                                </div>
                            </div>
                            <h4 className='program-header black'>Kako je sladkorna bolezen oblikovala moj pristop k fitnesu</h4>
                            <h3 className='text-medium-normal black' >Diabetes sem dobil pri starosti 16let, lahko bi rekel da v najtežjem obdobju odrascanja...</h3>

                            <div className='read-more-row' onClick={() => handleNavigation('/sl/Blog/sladkorna-bolezen')}>
                                <p className='preberi-vec-text black bbc' >Preberi več</p>
                                <p className='preberi-vec-text black arrow-vec bbc'>&gt;</p>
                            </div>

                        </div>

                        <div className='program-cell opacity-cell' >
                            <div className='program-img-wrapper'>
                                <img src="/images/b2.webp" className='program-img hoverim' alt='advanced' onClick={() => handleNavigation('/sl/Blog/moje-potovanje')} />
                            </div>

                            <div className='ontopmrgin'></div>
                            <div className='highlighted-row'>
                                <div className='blog-header-wrapper black highlighted-gray'>
                                    <p className='text-regular-semibold  nomargins'>Poškodba</p>
                                </div>
                                <div className='blog-header-wrapper black highlighted-gray'>
                                    <p className='text-regular-semibold  nomargins'>L5-S1</p>
                                </div>
                                
                            </div>
                            <h4 className='program-header black'>Moje potovanje od poškodbe do bodybuildinga!</h4>
                            <h3 className='text-medium-normal black' >Žal smo ljudje pogosto taki, da spremenimo svoj način življenja šele takrat, ko smo prisiljeni to narediti zaradi različnih razlogov...</h3>
                            <div className='read-more-row' onClick={() => handleNavigation('/sl/Blog/moje-potovanje')}>
                                <p className='preberi-vec-text black bbc' >Preberi več</p>
                                <p className='preberi-vec-text black arrow-vec bbc'>&gt;</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

            <div className={`shadows-for-transition ${isTransitioning ? 'show-shadow' : ''}`}>

      </div>
    </div>
  )
}

export default Blog
