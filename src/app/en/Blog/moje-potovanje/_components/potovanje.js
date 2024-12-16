import React from 'react'
import '../../page.css'


const Potovanje = () => {
    return (
        <div className='izguba-main'>
            <div className='izguba-wrapper'>
                <div className='izguba-img-wrapper'>
                    <img src="/images/b2.webp" className='blogpost-img' alt='beginner' />

                </div>


                <div className='content-wrapper'>
    <div className='blog-header-wrapper'>
        <h3 className='heading-desktop-h3 black'>My Journey from Injury to Bodybuilding!</h3>
    </div>

    <h3 className='text-medium-normal black'>
        Unfortunately, we humans often change our lifestyle only when forced to do so by various reasons—whether due to injuries, surgeries, or poor eating habits.
    </h3>

    <div className='target-divider'>
        <div className='target-left'>
            <p className='text-medium-normal black'>
                I was on the same path when improper exercise led to an injury, resulting in a herniated disc in my lumbar region, L5-S1.
            </p>
            <p className='text-medium-normal black'>
                At that point, I dedicated myself to understanding body anatomy and proper exercise techniques. 
                With my guidance and professional advice, I aim to help individuals prevent injuries and teach them the correct way to perform exercises. At the same time, I want to restore hope and prove that despite injuries, you can achieve anything.
            </p>
        </div>

        <div className='target-right'>
            <img src="/images/b3.webp" className='blogger-img' alt='beginner' />
        </div>
    </div>
</div>
            </div>
        </div>
    )
}

export default Potovanje
