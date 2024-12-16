import React from 'react'
import './Contact.css'

const ContactMain = () => {
    return (
        <div className='contact-main'>
            <div className='contact-wrapper'>
                <div className='contact-headers'>
                    <div className='blog-header-wrapper'>
                    <p className='text-regular-semibold  black section-indicator alignself text-regular-semibold ' >Kontakt</p>
                    </div>
                    <div className='blog-header-wrapper'>
                        <h3 className='heading-desktop-h3  ' >Kontaktne informacije</h3>
                    </div>

                    <div className='blog-header-wrapper'>
                        <h3 className='text-medium-normal  '>Stopimo v stik</h3>
                    </div>
                </div>

                <div className='contact-row'>
                    <div className='contact-row-left'>
                        <div className='contact-item-holder'>
                            <img src="/images/envelope.svg" className='relume-icon' alt='heros' />
                            <h4 className='program-header '>E-naslov</h4>
                            <h3 className='text-medium-normal ' >Napišite nam sporočilo</h3>
                            <h3 className='text-medium-normal  underline' >test@gmail.com</h3>

                        </div>

                        <div className='contact-item-holder'>
                            <img src="/images/phone.svg" className='relume-icon' alt='heros' />
                            <h4 className='program-header '>Telefon</h4>
                            <h3 className='text-medium-normal ' >Pokličite naju</h3>
                            <h3 className='text-medium-normal  underline' >+386 31 444 444</h3>

                        </div>

                        <div className='contact-item-holder'>
                            <img src="/images/map.svg" className='relume-icon' alt='heros' />
                            <h4 className='program-header '>Lokacija</h4>
                            <h3 className='text-medium-normal ' >Obiščite naju</h3>
                            <h3 className='text-medium-normal  underline' >Lendavska ulica 29d, 9000 Murska Sobota</h3>

                        </div>
                    </div>

                    <div className='contact-row-right'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2737.98581636698!2d16.16694617744098!3d46.66654115241726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476f3f01279068cf%3A0x60854bbee2cbd3b2!2sclever%20fit%20Murska%20Sobota!5e0!3m2!1ssl!2ssi!4v1719001009694!5m2!1ssl!2ssi"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className='themap'
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMain
