import React from 'react'
import '../../page.css'


const Potovanje = () => {
    return (
        <div className='izguba-main'>
            <div className='izguba-wrapper'>
                <div className='izguba-img-wrapper'>
                    <img src="/images/b2.webp" className='blogpost-img' alt='beginner' />

                </div>


                <div className='izguba-content-wrapper'>
                    <div className='blog-header-wrapper'>
                        <h3 className='heading-desktop-h3 black ' >Moje potovanje od poškodbe do bodybuildinga!</h3>
                    </div>

                    <h3 className='text-medium-normal  black'>
                    Žal smo ljudje pogosto taki, da spremenimo svoj način življenja šele takrat, ko smo prisiljeni to narediti zaradi različnih razlogov – bodisi zaradi poškodb, operacij ali slabih prehranjevalnih navad.
                    </h3>


                    <div className='target-divider'>
                            <div className='target-left'>
                                <p className='text-medium-normal  black'> Sama sem bila na isti poti, ko sem zaradi nepravilne vadbe doživela poškodbo in pridobila hernijo v ledvenem predelu L5-S1.</p>
                                <p className='text-medium-normal  black'> Takrat sem se posvetila anatomiji telesa in pravilni vadbi. 
                                Z mojo pomočjo in strokovnim svetovanjem želim pomagati posameznikom in s tem tudi preprečiti poškodbe in vas naučiti pravilne izvedbe vaj. Hkrati pa ljudem vrniti upanje in dokazati, da kljub poškodbam lahko dosežete vse. </p>

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
