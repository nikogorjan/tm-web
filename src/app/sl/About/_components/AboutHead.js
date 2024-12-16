import React from 'react'
import './AboutHead.css'

const AboutHead = () => {
    return (
        <div className='abouthead-main'>
            <div className='amobile'>
                <img
                    src="/images/couple.webp"
                    alt="A couple2"
                    className='coupleweb-img'
                />
            </div>
            <div className='adesktop'>
                <img
                    src="/images/couple.webp"
                    alt="A couple"
                    className='coupleweb-img'
                />
            </div> 

            <div className='absolute-shadows'>
                <div className='head-content-wrapper'>
                    <div className='head-content-positioner'>

                        <div className='header-wrapperr'>
                        <p className='text-regular-semibold' >Začni</p>
                    </div>
                    <div className='header-wrapperr'>
                        <h3 className='heading-desktop-h3' >Spoznajte naju!</h3>
                    </div>

                    <div className='header-wrapperr'>
                        <h3 className='text-medium-normal' >Pozdravljeni na najini spletni strani!</h3>
                    </div>
                    </div>
                </div>
            </div>

            

        </div>
    )
}

export default AboutHead
