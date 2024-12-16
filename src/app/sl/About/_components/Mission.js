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
                        <h3 className='heading-desktop-h3 black' >Sva zagovornika raznolike prehrane in se trudiva razbijati mite, ki krožijo v svetu fitnesa!</h3>
                    </div>

                    <div className='header-wrapper'>
                        <h3 className='text-medium-normal black' >Verjameva, da za doseganje napredka ni nujno potrebna stroga dieta, kjer bi jedli le riž in piščanca. Ključ do uspeha je v uravnoteženem prehranjevanju in doseganju dnevnega vnosa hranil, ki ustrezajo tvojim ciljem.</h3>
                    </div>

                    <div className='missions-row'>
                        <div className='left-row'>
                            <div className='left-row-cell'>
                                <div className='left-row-cell-wrapper' >
                                    <img src="/images/cookie.svg" className='relume-icon' alt='heros' />
                                    <h6 className='heading-desktop-h6 black'>Individualni pristop k prehrani</h6>
                                    <p className='text-regular-normal black'>Vsak posameznik je drugačen, zato za vsako stranko oblikujeva prilagojen prehranski načrt. Pomembno je, da se prehrana ujema z življenjskim slogom in osebnimi cilji.</p>
                                </div>
                            </div>

                            <div className='left-row-cell'>
                                <div className='left-row-cell-wrapper' >
                                    <img src="/images/trip.svg" className='relume-icon' alt='heros' />
                                    <h6 className='heading-desktop-h6 black'>Izkušnje, ki štejejo</h6>
                                    <p className='text-regular-normal black'>Na najini poti osebnega trenerstva in svetovanja sva pomagala številnim ljudem z različnimi cilji in izzivi. S tem sva pridobila bogate izkušnje, ki jih zdaj deliva s svojimi strankami, da bi jim pomagala doseči njihove sanje.</p>
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
