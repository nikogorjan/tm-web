import React from 'react'
import './FAQ.css'
import HoverButton from '../../../../public/Components/HoverButton/HoverButton'

const FAQ = () => {

    const handleNavigation = (targetUrl) => {
        window.location.href = targetUrl;
    };

    return (
        <div className='faq-main'>
            <div className='faq-wrapper'>
                <div className='faq-left'>
                    <h3 className='heading-desktop-h3 black'>Pogosta vprašanja</h3>
                    <p className='text-medium-normal black marginbotom2'>Imava vse odgovore na tvoja vprašanja. Od nasvetov za trening, prehrano do življenskega sloga.</p>
                    {/*<HoverButton
                            text="Kontakt"
                            onClick={() => handleNavigation('/Plans')}
                        />*/}

                </div>
                <div className='faq-right'>
                    <div className='faq'>
                        <div className='thefqwrapper'>
                            <h2 className='faq-h'>Kaj razlikuje vajine vadbene načrte in življenjsko svetovanje od drugih?</h2>
                            <p className='faq-p'>Najin pristop je globoko personaliziran in celosten. Ne osredotočava se samo na vadbo; vključujeva prehrano, miselnost in prilagoditve življenjskega sloga, da zagotoviva trajnostne rezultate.</p>
                        </div>
                    </div>
                    <div className='faq'>
                        <h2 className='faq-h'>Ali lahko kombiniram spletno in osebno vadbo?</h2>
                        <p className='faq-p'>Seveda! Razumeva, da je življenje lahko nepredvidljivo, zato ponujava prilagodljive možnosti vadbe. Lahko skombiniramo spletno in osebno vadbo, tako da naju preprosto kontaktirajte o svoji izbiri.</p>
                    </div>
                    <div className='faq'>
                        <h2 className='faq-h'>Kako prilagodita vadbene načrte in prehranske nasvete posameznim potrebam?</h2>
                        <p className='faq-p'>Začnemo z natančnim posvetovanjem, da razumeva vašo raven telesne pripravljenosti, življenjski slog, prehranske preference in cilje. To nama pomaga ustvariti vadbeni načrt in prehranske nasvete, ki ne le usklajeni z vašimi cilji, ampak se tudi prilegajo vašemu vsakdanjiku.</p>
                    </div>
                    <div className='faq'>
                        <h2 className='faq-h'>Kaj če še nikoli nisem telovadil? Ali se lahko vseeno prijavim?</h2>
                        <p className='faq-p'>Da, seveda! Najine storitve so primerne za vse ravni telesne pripravljenosti, od popolnih začetnikov do naprednih športnikov. Najini načrti so zasnovani tako, da vas srečajo tam, kjer ste, in vam pomagajo napredovati v udobnem in učinkovitem tempu.</p>
                    </div>
                    <div className='faq'>
                        <h2 className='faq-h'>Kako dolgo traja, da vidim rezultate?</h2>
                        <p className='faq-p'>Rezultati se lahko razlikujejo glede na več dejavnikov, vključno z vašim začetnim stanjem, cilji in kako natančno sledite načrtu. Na splošno stranke začnejo opažati opazne izboljšave v prvih 4-6 tednih.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FAQ
