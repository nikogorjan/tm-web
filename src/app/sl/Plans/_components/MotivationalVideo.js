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
          <img src="/images/ser1.webp" className='ser-img' alt='heros' />

          </div>
          <div className='mot-left'>
          <div className='center-headers'>
          <div className='header-wrapperr'>
            <p className='text-regular-semibold  black  section-indicator lighter'>Storitve</p>
          </div>
          <div className='header-wrapperr'>
            <h3 className='heading-desktop-h3 black' >Doseži zadane cilje, tukaj sva da vam pomagava!</h3>
          </div>

          <div className='header-wrapperr'>
            <h3 className='text-medium-normal black' >Ponujava nabor spletnih programov, treninge 1 na 1 in preobrazbo življenskega sloga.</h3>
          </div>
        </div>


        <div className='services-offered-row'>
          <div className='sefvice-celll'>
            <img src="/images/male-female.svg" className="relume-icon" alt="heros" />
            <h6 className="heading-desktop-h6 black ">1 na 1 coaching</h6>
            <p className="text-medium-normal black">Imava omejeno število mest za treninge 1 na 1. Če želiš polno fitnes izkušnjo naju kontaktiraj.</p>
          </div>
          <div className='sefvice-celll'>
            <img src="/images/globe.svg" className="relume-icon" alt="heros" />
            <h6 className="heading-desktop-h6 black ">Spletni programi</h6>
            <p className="text-medium-normal black">Ponujava nabor spletnih programov, ki ti omogočajo, da se povežeš z nama na daljavo. Pri programu imaš lahko zraven še jedilnik katerega si lahko prilagajaš.</p>
          </div>
          <div className='sefvice-celll'>
            <img src="/images/user-plus.svg" className="relume-icon" alt="heros" />
            <h6 className="heading-desktop-h6 black ">Sprememba življenskega sloga</h6>
            <p className="text-medium-normal black">Ko se enkrat povežeš z nama v živo ali prek spleta, si zadava cilj, da ti pomagava doseči najboljšo verzijo samega sebe.</p>
          </div>
        </div>
          </div>
          <div className='mot-right desktop'>
          <img src="/images/ser1.webp" className='ser-img' alt='heros' />

          </div>
        </div>


        

        


      </div>
    </div>
  )
}

export default MotivationalVideo
