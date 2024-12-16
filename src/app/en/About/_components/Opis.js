import React from 'react'
import './Opis.css'

const Opis = () => {
    return (
        <div className='opis-main'>
            <div className='opis-wrapper'>
                <div className='opis-left'>
                    <img
                        src="/images/couplered.png"
                        alt="A couple"
                        className='couplewebred-img'
                    />
                </div>
                <div className='opis-right'>
                    <div className='opis-content-wrapper'>
                        <h1 className='about-mainheader'>Kdo sva?</h1>
                        <p className='about-mainparagraph'>Sva izjemno usklajen par, deliva si strast do zdravega načina življenja in telesne pripravljenosti, s skupnimi močmi ponujava kompletno fitnes izkušnjo. Skupaj združujeva znanje, izkušnje in motivacijo, da vam pomagava doseči vaše cilje, ne glede na to, ali gre za izboljšanje telesne pripravljenosti, spremembo prehranskih navad ali splošno izboljšanje kakovosti življenja.</p>

                    </div>
                </div>
            </div>

            <div className='cilj-wrapper'>
                <div className='cilj-content-wrapper'>
                    <h1 className='about-mainheader'>Najin cilj</h1>
                    <p className='about-mainparagraph'>Najin glavni cilj je navdihniti posameznike vseh starosti in sposobnosti, da sprejmejo zdrav način življenja in se zavežejo k trajnostni telesni pripravljenosti. Osredotočava se na gradnjo močnih temeljev zdravja skozi uravnoteženo prehrano, redno telesno aktivnost in mentalno dobrobit.</p>

                </div>
            </div>

            <div className='slike-wrapper'>
                <div className='coach-cell'>
                    <div className='coach-cell-content-wrapper'>

                        <div className='imag-wrapper'>
                            <img
                                src="/images/couplew.png"
                                alt="A couple"
                                className='couplesingle-img'
                            />
                            <div className='imgs-shadow'>

                            </div>
                        </div>


                        <p className='coach-name'>
                            Tjaša Vrečič
                        </p>

                        <p className='moto-paragraph'>Verjamem, da je ključ do uspeha v ravnovesju. Moje vodilo je, da zdravo telo in um omogočata doseganje sanj na vseh področjih življenja.</p>

                        <div className='socials-row'>
                            <div className='icon-wrapper'>
                                <img
                                    src="/images/facebook2.svg"
                                    alt="A social"
                                    className='social-img'
                                />
                            </div>

                            <div className='icon-wrapper'>
                                <img
                                    src="/images/instagram.svg"
                                    alt="A social"
                                    className='social-img'
                                />
                            </div>

                            <div className='icon-wrapper'>
                                <img
                                    src="/images/phone.svg"
                                    alt="A social"
                                    className='social-img'
                                />
                            </div>

                            <div className='icon-wrapper'>
                                <img
                                    src="/images/envelope.svg"
                                    alt="A social"
                                    className='social-img'
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='coach-cell'>
                    <div className='coach-cell-content-wrapper'>
                        <div className='imag-wrapper'>
                            <img
                                src="/images/couplemm.png"
                                alt="A couple"
                                className='couplesingle-img'
                            />
                            <div className='imgs-shadow'>

                            </div>
                        </div>
                        <p className='coach-name'>
                            Marsel Kolarič
                        </p>
                        <p className='moto-paragraph'>Moč je več kot le fizična sposobnost; je odsev volje do življenja. Moj moto je, da z vsakim novim izzivom rastemo močnejši, tako telesno kot duhovno.</p>

                        <div className='socials-row'>
                            <div className='icon-wrapper'>
                                <img
                                    src="/images/facebook2.svg"
                                    alt="A social"
                                    className='social-img'
                                />
                            </div>

                            <div className='icon-wrapper'>
                                <img
                                    src="/images/instagram.svg"
                                    alt="A social"
                                    className='social-img'
                                />
                            </div>

                            <div className='icon-wrapper'>
                                <img
                                    src="/images/phone.svg"
                                    alt="A social"
                                    className='social-img'
                                />
                            </div>

                            <div className='icon-wrapper'>
                                <img
                                    src="/images/envelope.svg"
                                    alt="A social"
                                    className='social-img'
                                />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Opis
