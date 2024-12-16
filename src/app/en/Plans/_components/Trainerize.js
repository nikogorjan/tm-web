import React from 'react'
import './Trainerize.css'

const Trainerize = () => {
    return (
        <div className='trainerize-main'>
            <div className='trainerize-header-wrapper'>
                <h1 className='trianerize-header'>ZAČNEŠ LAHKO TAKOJ</h1>
                <p className='trainerize-paragraph'>Prilagojeni spletni programi za vsakogar. Raznoliki, zdravi in okusni obroki.</p>
            </div>

            <div className='trainerize-row'>
                <div className='trainerize-left'>
                    <img src="/images/trainerize.png" className='trainerizr-img' alt='trainerize' />

                </div>

                <div className='trainerize-right'>
                    <div>
                        <h1 className='trainerize-mainheader'>Aplikacija Trainerize</h1>
                        <p className='trainerize-mainparagraph'>Trainerize je inovativna aplikacija, namenjena tako osebnim trenerjem kot njihovim strankam, ki preoblikuje način, kako ljudje dosegajo svoje fitnes in zdravstvene cilje. Aplikacija omogoča trenerjem, da ustvarijo prilagojene vadbenih načrtov, spremljajo napredek svojih strank in jih motivirajo na daljavo.  Stranke lahko dostopajo do svojih vadbenih načrtov, sledijo svojim obrokom, beležijo svoj napredek in se neposredno povezujejo s svojimi trenerji preko mobilne naprave</p>
                        <a href="#" className="animated-button1">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            NAVODILA
                        </a>
                    </div>

                </div>

                
            </div>
        </div>
    )
}

export default Trainerize
