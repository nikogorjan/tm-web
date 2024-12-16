import React from 'react'
import './Private.css'

const Private = () => {
    return (
        <div className='private-main'>
            <div className='private-row'>

                <div className='private-left'>
                    <img
                        src="/images/private1.png"
                        alt="A social"
                        className='private-img'
                    />

                    <div className='private-content-wrapper'>
                        <h2 className='private-header'>PRIVATNI PROGRAM</h2>
                        <p className='private-paragraph'>Poleg spletnega trenerstva seveda ponujava tudi vodenje treninga v živo. Za več informacij naju kontaktirajte.</p>
                        <a href="#" className="animated-button1">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            KONTAKT
                        </a>
                    
                    </div>

                </div>

                <div className='private-right'>
                <img
                        src="/images/private2.png"
                        alt="A social"
                        className='private-img'
                    />
                </div>

            </div>
        </div>
    )
}

export default Private
