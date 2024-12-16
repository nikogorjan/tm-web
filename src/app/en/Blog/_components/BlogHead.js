

'use client'


import React, { useState } from 'react'
import './BlogHead.css'

const BlogHead = () => {
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
        <div className='blog-head-main'>
            <div className='blog-head-wrapper'>
            <div className='blog-headers-wrapper'>
    <div className='blog-header-wrapper black'>
        <p className='text-regular-semibold black section-indicator lighter'>Blog</p>
    </div>
    <div className='blog-header-wrapper'>
        <h3 className='heading-desktop-h3 black'>
            Read Blog Updates About Training and Healthy Living
        </h3>
    </div>
    <div className='blog-header-wrapper'>
        <h3 className='text-medium-normal black'>
            Discover tips, tricks, and expert advice to improve your health and fitness.
        </h3>
    </div>
</div>



                <div className='trending-header'>
                    <div className='trending-left'>
                        <div className='program-img-wrapper'>
                            <img src="/images/b1.webp" className='trending-img' alt='beginner' onClick={() => handleNavigation('/en/Blog/sladkorna-bolezen')} />
                        </div>
                    </div>
                    <div className='trending-right'>
                    <div className='blog-headers-wrapper full-headers-wrapper'>

<div className='highlighted-row'>
    <div className='blog-header-wrapper black highlighted-gray'>
        <p className='text-regular-semibold nomargins'>Diabetes</p>
    </div>
    <div className='blog-header-wrapper black highlighted-gray'>
        <p className='text-regular-semibold nomargins'>Genetic Disease</p>
    </div>
</div>

<div className='blog-header-wrapper'>
    <h3 className='heading-desktop-h3 black'>How Diabetes Shaped My Approach to Fitness</h3>
</div>

<div className='blog-header-wrapper'>
    <h3 className='text-medium-normal black'>
        I was diagnosed with diabetes at the age of 16, arguably the most challenging period of adolescence...
    </h3>
</div>

<div className='read-more-row' onClick={() => handleNavigation('/en/Blog/sladkorna-bolezen')}>
    <p className='preberi-vec-text black bbc'>Read More</p>
    <p className='preberi-vec-text black arrow-vec bbc'>&gt;</p>
</div>

</div>

                    </div>

                </div>




                <div className='blog-all'>
                    <div className='programi-row'>

                        


                    <div className='program-cell opacity-cell'>
    <div>
        <div className='program-img-wrapper'>
            <img src="/images/b2.webp" className='program-img' alt='beginner' onClick={() => handleNavigation('/en/Blog/moje-potovanje')} />
        </div>
        <div className='ontopmrgin'></div>
        <div className='highlighted-row'>
            <div className='blog-header-wrapper black highlighted-gray'>
                <p className='text-regular-semibold nomargins'>Injury</p>
            </div>
            <div className='blog-header-wrapper black highlighted-gray'>
                <p className='text-regular-semibold nomargins'>L5-S1</p>
            </div>
        </div>

        <h4 className='program-header black'>My Journey from Injury to Bodybuilding!</h4>
        <h3 className='text-medium-normal black'>
            Unfortunately, we humans often change our lifestyle only when we are forced to do so due to various reasons...
        </h3>
        <div className='read-more-row' onClick={() => handleNavigation('/en/Blog/my-journey')}>
            <p className='preberi-vec-text highlighted-header'>Read More</p>
            <p className='preberi-vec-text arrow-vec highlighted-header'>&gt;</p>
        </div>
    </div>
    <div></div>
</div>

<div className='program-cell opacity-cell'>
    <div>
        <div className='program-img-wrapper'>
            <img src="/images/build4.webp" className='program-img' alt='beginner' onClick={() => handleNavigation('/en/Blog/izguba-odvecnih-kilogramov')} />
        </div>
        <div className='ontopmrgin'></div>
        <div className='highlighted-row'>
            <div className='blog-header-wrapper black highlighted-gray'>
                <p className='text-regular-semibold nomargins'>Weight Loss</p>
            </div>
            <div className='blog-header-wrapper black highlighted-gray'>
                <p className='text-regular-semibold nomargins'>Healthy Eating</p>
            </div>
        </div>

        <h4 className='program-header black'>Losing Excess Weight</h4>
        <h3 className='text-medium-normal black'>
            Achieving an optimal weight requires more than just counting calories and exercising...
        </h3>
        <div className='read-more-row' onClick={() => handleNavigation('/en/Blog/izguba-odvecnih-kilogramov')}>
            <p className='preberi-vec-text highlighted-header'>Read More</p>
            <p className='preberi-vec-text arrow-vec highlighted-header'>&gt;</p>
        </div>
    </div>
    <div></div>
</div>


<div className='program-cell opacity-cell'>
    <div>
        <div className='program-img-wrapper'>
            <img src="/images/build99.webp" className='program-img' alt='intermediate' onClick={() => handleNavigation('/en/Blog/skrivnost-pridobivanja-misicne-mase')} />
        </div>

        <div className='ontopmrgin'></div>
        <div className='highlighted-row'>
            <div className='blog-header-wrapper black highlighted-gray'>
                <p className='text-regular-semibold nomargins'>Muscle Mass</p>
            </div>
            <div className='blog-header-wrapper black highlighted-gray'>
                <p className='text-regular-semibold nomargins'>Healthy Eating</p>
            </div>
        </div>
        <h4 className='program-header black'>The Secret to Gaining Muscle Mass</h4>
        <h3 className='text-medium-normal black'>
            Gaining muscle mass can be just as challenging for some as losing weight...
        </h3>
        <div className='read-more-row' onClick={() => handleNavigation('/en/Blog/skrivnost-pridobivanja-misicne-mase')}>
            <p className='preberi-vec-text highlighted-header'>Read More</p>
            <p className='preberi-vec-text arrow-vec highlighted-header'>&gt;</p>
        </div>
    </div>
    <div></div>
</div>

<div className='program-cell opacity-cell'>
    <div>
        <div className='program-img-wrapper'>
            <img src="/images/nutrition.webp" className='program-img' alt='advanced' onClick={() => handleNavigation('/en/Blog/nasveti-za-zdravo-prehrano')} />
        </div>

        <div className='ontopmrgin'></div>
        <div className='highlighted-row'>
            <div className='blog-header-wrapper black highlighted-gray'>
                <p className='text-regular-semibold nomargins'>Weight Loss</p>
            </div>
            <div className='blog-header-wrapper black highlighted-gray'>
                <p className='text-regular-semibold nomargins'>Healthy Eating</p>
            </div>
            <div className='blog-header-wrapper black highlighted-gray'>
                <p className='text-regular-semibold nomargins'>Lifestyle</p>
            </div>
        </div>
        <h4 className='program-header black'>Essential Tips for Healthy Eating</h4>
        <h3 className='text-medium-normal black'>
            Healthy eating is the foundation of overall well-being. It affects everything from energy levels and mood to long-term health and disease prevention...
        </h3>
        <div className='read-more-row' onClick={() => handleNavigation('/en/Blog/nasveti-za-zdravo-prehrano')}>
            <p className='preberi-vec-text highlighted-header'>Read More</p>
            <p className='preberi-vec-text arrow-vec highlighted-header'>&gt;</p>
        </div>
    </div>
    <div></div>
</div>


                        
                    </div>
                </div>

            </div>





            <div className={`shadows-for-transition ${isTransitioning ? 'show-shadow' : ''}`}>

      </div>

        </div>
    )
}

export default BlogHead
