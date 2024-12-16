import React from 'react';
import './MotivationalVideo.css';

const MotivationalVideo = () => {
  return (
    <div className='motivationn-main'>
      {/*<video className='motivation-video' autoPlay loop muted playsInline>
        <source src="/Videos/zacni.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>*/}
      <div className='motivation-wrapper'>
    <div className='mot-row'>
        <div className='mot-right mobile mrganbott'>
            <img src="/images/ser1.webp" className='ser-img' alt='heroes' />
        </div>
        <div className='mot-left'>
            <div className='center-headers'>
                <div className='header-wrapperr'>
                    <p className='text-regular-semibold black section-indicator lighter'>Services</p>
                </div>
                <div className='header-wrapperr'>
                    <h3 className='heading-desktop-h3 black'>Achieve Your Goals, We Are Here to Help!</h3>
                </div>
                <div className='header-wrapperr'>
                    <h3 className='text-medium-normal black'>We offer a range of online programs, one-on-one training, and lifestyle transformations.</h3>
                </div>
            </div>

            <div className='services-offered-row'>
                <div className='sefvice-celll'>
                    <img src="/images/male-female.svg" className="relume-icon" alt="heroes" />
                    <h6 className="heading-desktop-h6 black">1-on-1 Coaching</h6>
                    <p className="text-medium-normal black">We have a limited number of slots for one-on-one training. If you want the full fitness experience, contact us.</p>
                </div>
                <div className='sefvice-celll'>
                    <img src="/images/globe.svg" className="relume-icon" alt="heroes" />
                    <h6 className="heading-desktop-h6 black">Online Programs</h6>
                    <p className="text-medium-normal black">We offer a range of online programs that allow you to connect with us remotely. These programs can also include customizable meal plans.</p>
                </div>
                <div className='sefvice-celll'>
                    <img src="/images/user-plus.svg" className="relume-icon" alt="heroes" />
                    <h6 className="heading-desktop-h6 black">Lifestyle Transformation</h6>
                    <p className="text-medium-normal black">Once you connect with us in person or online, we set a goal to help you become the best version of yourself.</p>
                </div>
            </div>
        </div>
        <div className='mot-right desktop'>
            <img src="/images/ser1.webp" className='ser-img' alt='heroes' />
        </div>
    </div>
</div>
    </div>
  )
}

export default MotivationalVideo
