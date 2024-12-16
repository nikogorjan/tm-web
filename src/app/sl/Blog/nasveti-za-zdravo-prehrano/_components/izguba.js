import React from 'react'
import '../page.css'
import { Table } from 'antd';

const columns = [
    {
      title: 'Dan',
      dataIndex: 'dan',
      key: 'dan',
      width: 150,
    },
    {
      title: 'Trening',
      dataIndex: 'trening',
      key: 'trening',
      width: 400,
    },
  ];
  
  const data = [
    { key: 1, dan: 'Dan 1', trening: 'Zgornji del telesa (prsni koš, ramena, triceps)' },
    { key: 2, dan: 'Dan 2', trening: 'Spodnji del telesa' },
    { key: 3, dan: 'Dan 3', trening: 'Počitek ali lahki kardio' },
    { key: 4, dan: 'Dan 4', trening: 'Hrbet in biceps' },
    { key: 5, dan: 'Dan 5', trening: 'Celo telo' },
    { key: 6, dan: 'Dan 6', trening: 'Počitek' },
    { key: 7, dan: 'Dan 7', trening: 'Aktivno okrevanje (raztezanje, lahki kardio)' },
  ];


  const columns1 = [
    {
      title: 'Obrok',
      dataIndex: 'obrok',
      key: 'obrok',
      width: 150,
    },
    {
      title: 'Načrt 1',
      dataIndex: 'plan1',
      key: 'plan1',
      width: 400,
    },
  ];
  
  const data1 = [
    { key: '1', obrok: 'Zajtrk', plan1: 'Umešana jajca s špinačo in polnozrnatim toastom, banano in kozarcem mleka.' },
    { key: '2', obrok: 'Prigrizek', plan1: 'Grški jogurt z medom in granolo.' },
    { key: '3', obrok: 'Kosilo', plan1: 'Piščančje prsi na žaru, kvinoja, brokoli na pari in rezine avokada.' },
    { key: '4', obrok: 'Prigrizek', plan1: 'Arašidovo maslo in rezine jabolk.' },
    { key: '5', obrok: 'Večerja', plan1: 'Pečen losos, sladki krompir in mešana zelenjava.' },
    { key: '6', obrok: 'Prigrizek', plan1: 'Skuta z jagodami.' },
  ];
  
  const columns2 = [
    {
      title: 'Obrok',
      dataIndex: 'obrok',
      key: 'obrok',
      width: 150,
    },
    {
      title: 'Načrt 2',
      dataIndex: 'plan2',
      key: 'plan2',
      width: 400,
    },
  ];
  
  const data2 = [
    { key: '1', obrok: 'Zajtrk', plan2: 'Ovsena kaša z oreški, semeni in svežimi jagodami ter beljakovinski napitek.' },
    { key: '2', obrok: 'Prigrizek', plan2: 'Humus in polnozrnata pita.' },
    { key: '3', obrok: 'Kosilo', plan2: 'Turčija in sendvič s sirom na polnozrnatem kruhu, stranska solata in kos sadja.' },
    { key: '4', obrok: 'Prigrizek', plan2: 'Beljakovinska ploščica in pomaranča.' },
    { key: '5', obrok: 'Večerja', plan2: 'Goveje meso prepražimo z rjavim rižem in mešano zelenjavo.' },
    { key: '6', obrok: 'Prigrizek', plan2: 'Smoothie s špinačo, banano, beljakovinami v prahu in mandljevim mlekom.' },
  ];
  
  

const Izguba = () => {
    return (
        <div className='izguba-main'>
            <div className='izguba-wrapper'>
                <div className='izguba-img-wrapper'>
                    <img src="/images/nutrition.webp" className='blogpost-img' alt='beginner' />

                </div>
                <div className='izguba-content-wrapper'>
                    <div className='blog-header-wrapper'>
                        <h3 className='heading-desktop-h3 black ' >Bistveni nasveti za zdravo prehrano</h3>
                    </div>

                    <h3 className='text-medium-normal  black'>Zdrava prehrana je temelj splošnega počutja. Vpliva na vse, od ravni energije in razpoloženja do dolgoročnega zdravja in preprečevanja bolezni. Ta vodnik vsebuje praktične nasvete in vpoglede, ki vam bodo v pomoč pri sprejemanju ozaveščenih odločitev in sprejemanju zdravih prehranjevalnih navad za boljše življenje.  
                    </h3>

                    <div className='blog-post-urnik'>
                        <div className='blog-link-wrapper'>
                            <a href="#section1" className='smooth-scroll'>Pomen uravnotežene prehrane</a>

                        </div>

                        <div className='blog-link-wrapper'>
                            <a href="#section2" className='smooth-scroll'>Razumevanje makrohranil</a>

                        </div>

                        <div className='blog-link-wrapper'>
                            <a href="#section3" className='smooth-scroll'>Pomembna mikrohranila</a>

                        </div>

                        <div className='blog-link-wrapper'>
                            <a href="#section4" className='smooth-scroll'>Nasveti za zdrave prehranjevalne navade</a>

                        </div>

                        
                        <div className='blog-link-wrapper'>
                            <a href="#section5" className='smooth-scroll'>Načrtovanje in priprava obrokov</a>

                        </div>

                        <div className='blog-link-wrapper'>
                            <a href="#section6" className='smooth-scroll'>Pametni prigrizki</a>

                        </div>

                        <div className='blog-link-wrapper'>
                            <a href="#section7" className='smooth-scroll'>Nasveti za hidracijo</a>

                        </div>

                        

                        <div className='blog-link-wrapper'>
                            <a href="#section9" className='smooth-scroll'>Sklep</a>

                        </div>


                    </div>

                    <div id="section1" className='transformed-for-link'></div>
                    <div className='target-section'>
                        <h2 className='heading-desktop-h6 black '>Pomen uravnotežene prehrane</h2>
                        <p className='text-medium-normal  black'>Uravnotežena prehrana zagotavlja telesu bistvena hranila, ki jih potrebuje za pravilno delovanje. Vključujte različna živila v pravem razmerju za ohranjanje zdravja, podporo rasti in zagotavljanje energije.</p>
                        <div className='bullet-points-wrapper'>
                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'>Prednosti uravnotežene prehrane: 
                                Izboljša raven energije, podpira imunsko funkcijo, povečuje duševno jasnost in zmanjšuje tveganje za kronične bolezni.</p>

                            </div>

                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'>Primeri uravnoteženih obrokov: Vključite mešanico pustih beljakovin, celih zrn, zdravih maščob in veliko sadja in zelenjave. </p>

                            </div>

                            
                        </div>
                    </div>

                    <div id="section2" className='transformed-for-link'>
                    </div>
                    <div className='target-section' >
                        <h2 className='heading-desktop-h6 black '>Razumevanje makrohranil</h2>
                        <p className='text-medium-normal  black'>Makrohranila so primarni gradniki vaše prehrane in so sestavljena iz beljakovin, ogljikovih hidratov in maščob:</p>
                        <div className='bullet-points-wrapper'>
                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'>Beljakovine: bistvenega pomena za obnovo mišic, imunsko funkcijo in proizvodnjo hormonov. Viri vključujejo meso, ribe, jajca, fižol in oreške.</p>

                            </div>

                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'>Ogljikovi hidrati: glavni vir energije v telesu. Osredotočite se na kompleksne ogljikove hidrate, kot so cela zrna, sadje in zelenjava.</p>

                            </div>

                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'>Maščobe: potrebne za zdravje možganov, proizvodnjo hormonov in energijo. Vključite zdrave maščobe iz avokada, oreščkov, semen in oljčnega olja. </p>

                            </div>
                        </div>
                    </div>

                    <div id="section3" className='transformed-for-link'>
                    </div>
                    <div className='target-section' >
                        <h2 className='heading-desktop-h6 black '>Pomembna mikrohranila</h2>
                        <p className='text-medium-normal  black'>Mikrohranila, vključno z vitamini in minerali, so ključnega pomena za splošno zdravje, čeprav so potrebna v manjših količinah:</p>

                        <div className='target-divider'>
                            <div className='target-left'>
                                <p className='text-medium-normal  black'><span className='boldovanop'>Vitamini:</span> pomembni za proizvodnjo energije, imunsko funkcijo in strjevanje krvi. Zagotovite različne barvite sadje in zelenjavo v vaši prehrani.</p>
                                <p className='text-medium-normal  black'><span className='boldovanop'>Minerali:</span> bistvenega pomena za zdravje kosti, ravnovesje tekočin in krčenje mišic. Vključite vire, kot so mlečni izdelki, listnata zelenjava, oreški in semena. </p>

                            </div>

                            <div className='target-right marginleft'>
                                <img src="/images/banana.webp" className='blogger-img' alt='beginner' />

                            </div>
                        </div>

                        

                    </div>

                    <div id="section4" className='transformed-for-link'>
                    </div>
                    <div className='target-section' >
                        <h2 className='heading-desktop-h6 black '>Nasveti za zdrave prehranjevalne navade</h2>
                        <p className='text-medium-normal  black'>Sprejemanje zdravih prehranjevalnih navad vam lahko pomaga ohranjati uravnoteženo prehrano in izboljšati splošno zdravje:</p>

                        <div className='target-divider'>
                            

                            <div className='target-right'>
                                <img src="/images/he.webp" className='blogger-img' alt='beginner' />

                            </div>

                            <div className='target-left left-toright'>
                                <p className='text-medium-normal  black'><span className='boldovanop'>Redni obroki:</span> Uživanje hrane v rednih časovnih presledkih pomaga ohranjati raven energije in preprečuje prenajedanje.</p>
                                <p className='text-medium-normal  black'><span className='boldovanop'>Pozorno prehranjevanje:</span> Bodite pozorni na znake lakote in jejte počasi, da se izognete prenajedanju.</p>
                                <p className='text-medium-normal  black'><span className='boldovanop'>Izogibanje motnjam:</span>  izklopite zaslone in se osredotočite na obrok, da uživate v hrani in prepoznate, kdaj ste siti. </p>

                            </div>
                        </div>

                    </div>

                    <div id="section5" className='transformed-for-link'>
                    </div>
                    <div className='target-section' >
                        <h2 className='heading-desktop-h6 black '>Načrtovanje in priprava obrokov</h2>
                        <p className='text-medium-normal  black'>Načrtovanje in priprava obrokov vnaprej vam lahko pomaga, da se držite zdrave prehrane:</p>
                        <p className='text-medium-normal  black'>Prednosti načrtovanja obrokov: Prihrani čas, zmanjša stres in zagotovi uravnotežene obroke.</p>
                        <p className='text-medium-normal  black'>Učinkoviti nasveti za pripravo obrokov: Načrtujte obroke za teden, sestavite nakupovalni seznam in vnaprej pripravite sestavine</p>


                    </div>

                    <div id="section6" className='transformed-for-link'>
                    </div>
                    <div className='target-section' >
                        <h2 className='heading-desktop-h6 black '>Pametni prigrizki</h2>
                        <p className='text-medium-normal  black'>Zdravi prigrizki lahko ohranijo stabilno raven energije in preprečijo prenajedanje ob obrokih:</p>
                        <div className='bullet-points-wrapper'>
                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'>Ideje za zdrave prigrizke: sveže sadje, jogurt z oreški, zelenjavne palice s humusom in polnozrnati krekerji s sirom.</p>

                            </div>

                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'>Nadzor porcije: Vnaprej si pripravite porcijo, da se izognete prenajedanju in izberete možnosti, bogate s hranili. </p>

                            </div>

                            
                        </div>

                    </div>

                    <div id="section7" className='transformed-for-link'>
                    </div>
                    <div className='target-section' >
                        <h2 className='heading-desktop-h6 black '>Nasveti za hidracijo</h2>
                        <p className='text-medium-normal  black'>Ostati hidriran je bistvenega pomena za ohranjanje zdravja in dobrega počutja:</p>
                        <p className='text-medium-normal  black'>Voda je ključnega pomena za prebavo, regulacijo temperature in mazanje sklepov.</p>
                        <p className='text-medium-normal  black'>Pred vsakim obrokom popijte kozarec vode, nosite steklenico vode in jejte živila, bogata z vodo, kot so kumare in lubenica. </p>


                    </div>

                    

                    <div id="section9" className='transformed-for-link'>
                    </div>
                    <div className='target-section' >
                        <h2 className='heading-desktop-h6 black '>Sklep</h2>
                        <p className='text-medium-normal  black'>Zdrava prehrana je vseživljenjska zaveza, ki lahko bistveno izboljša kakovost vašega življenja. Z razumevanjem pomena uravnotežene prehrane, ozaveščene izbire hrane in sprejemanjem zdravih prehranjevalnih navad lahko nahranite svoje telo in podprete splošno zdravje. Začnite z majhnimi spremembami že danes in postopoma gradite trajnosten, hranljiv življenjski slog.</p>
                        

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Izguba
