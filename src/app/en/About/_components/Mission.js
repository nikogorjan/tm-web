import React from 'react'
import './Mission.css'

const Mission = () => {
    return (
        <div className='mission-main'>
            <div className='mission-wrapper'>

                <div className='mission-left'>
                    {/*<div className='header-wrapper'>
                        <p className='text-regular-semibold  black'>Navdihujeva</p>
                    </div>*/}
                    <div className='header-wrapper'>
    <h3 className='heading-desktop-h3 black'>We Advocate for a Diverse Diet and Work to Bust Myths in the Fitness World!</h3>
</div>

<div className='header-wrapper'>
    <h3 className='text-medium-normal black'>
        We believe that achieving progress does not require a strict diet of just rice and chicken. The key to success lies in balanced eating and meeting daily nutritional intake that aligns with your goals.
    </h3>
</div>

<div className='missions-row'>
    <div className='left-row'>
        <div className='left-row-cell'>
            <div className='left-row-cell-wrapper'>
                <img src="/images/cookie.svg" className='relume-icon' alt='heroes' />
                <h6 className='heading-desktop-h6 black'>Personalized Nutrition Approach</h6>
                <p className='text-regular-normal black'>
                    Everyone is different, so we create a tailored nutritional plan for each client. It's essential that the diet aligns with their lifestyle and personal goals.
                </p>
            </div>
        </div>

        <div className='left-row-cell'>
            <div className='left-row-cell-wrapper'>
                <img src="/images/trip.svg" className='relume-icon' alt='heroes' />
                <h6 className='heading-desktop-h6 black'>Experience That Counts</h6>
                <p className='text-regular-normal black'>
                    Throughout our journey in personal training and consulting, we’ve helped many people with different goals and challenges. This has provided us with valuable experience, which we now share with our clients to help them achieve their dreams.
                </p>
            </div>
        </div>
    </div>
</div>
                </div>

                <div className='mission-right'>
                    <img
                        src="/images/us7.webp"
                        alt="A couple"
                        className='happy-img'

                    />
                </div>
            </div>
        </div>
    )
}

export default Mission
