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
                    <img src="/images/build99.webp" className='blogpost-img' alt='beginner' />

                </div>
                <div className='izguba-content-wrapper'>
                    <div className='blog-header-wrapper'>
                        <h3 className='heading-desktop-h3 black ' >Skrivnost pridobivanja mišične mase</h3>
                    </div>

                    <h3 className='text-medium-normal  black'>Pridobivanje teže in izgradnja mišic je lahko za mnoge ljudi enako zahtevna kot izguba teže. Medtem ko se družba pogosto osredotoča na hujšanje, se tisti, ki se borijo s premajhno telesno težo, soočajo z edinstvenimi ovirami. Cilj tega izčrpnega vodnika je pomagati posameznikom, da učinkovito in trajnostno pridobijo težo in mišice. 
                    </h3>

                    <div className='blog-post-urnik'>
                        <div className='blog-link-wrapper'>
                            <a href="#section1" className='smooth-scroll'>Razumevanje povečanja telesne mase</a>

                        </div>

                        <div className='blog-link-wrapper'>
                            <a href="#section2" className='smooth-scroll'>Bistvena hranila za rast mišic</a>

                        </div>

                        <div className='blog-link-wrapper'>
                            <a href="#section3" className='smooth-scroll'>Učinkovite vadbene rutine</a>

                        </div>

                        <div className='blog-link-wrapper'>
                            <a href="#section4" className='smooth-scroll'>Pomen počitka in okrevanja</a>

                        </div>

                        
                        <div className='blog-link-wrapper'>
                            <a href="#section5" className='smooth-scroll'>Primer obrokov</a>

                        </div>

                        <div className='blog-link-wrapper'>
                            <a href="#section6" className='smooth-scroll'>Dodatki za pridobivanje mišic</a>

                        </div>

                        <div className='blog-link-wrapper'>
                            <a href="#section7" className='smooth-scroll'>Sledenje napredku</a>

                        </div>

                        <div className='blog-link-wrapper'>
                            <a href="#section8" className='smooth-scroll'>Pogoste napake, ki se jim je treba izogniti</a>

                        </div>

                        <div className='blog-link-wrapper'>
                            <a href="#section9" className='smooth-scroll'>Sklep</a>

                        </div>


                    </div>

                    <div id="section1" className='transformed-for-link'></div>
                    <div className='target-section'>
                        <h2 className='heading-desktop-h6 black '>Razumevanje hujšanja</h2>
                        <p className='text-medium-normal  black'>Pri pridobivanju teže ne gre le za uživanje več hrane; Gre za uživanje pravih vrst hrane in hranil, ki podpirajo rast mišic in splošno zdravje. Kalorični presežek je bistvenega pomena za povečanje telesne mase, kar pomeni, da morate zaužiti več kalorij, kot jih vaše telo dnevno porabi. Vendar pa bi morale te kalorije prihajati iz hranljivih virov in ne iz nezdrave hrane.</p>
                        <p className='text-medium-normal  black'>Vaš metabolizem igra pomembno vlogo pri pridobivanju telesne teže. Ljudje s hitrim metabolizmom hitreje kurijo kalorije in bodo morda morali pogosteje jesti, da bi ohranili kalorični presežek. Razumevanje metabolizma vašega telesa pomaga učinkovito prilagoditi načrt prehrane in vadbe. </p>

                    </div>

                    <div id="section2" className='transformed-for-link'>
                    </div>
                    <div className='target-section' >
                        <h2 className='heading-desktop-h6 black '>Bistvena hranila za rast mišic</h2>
                        <p className='text-medium-normal  black'>Rast mišic je močno odvisna od vnosa določenih hranil:</p>
                        <p className='text-medium-normal  black'>Beljakovine so gradniki mišic. Vnos dovolj beljakovin je ključnega pomena za obnovo in rast mišic. Dobri viri vključujejo pusto meso, ribe, jajca, mlečne izdelke, fižol in stročnice.</p>
                        <p className='text-medium-normal  black'>Ogljikovi hidrati zagotavljajo energijo, potrebno za intenzivne vadbe in dnevne aktivnosti. Kompleksni ogljikovi hidrati, kot so cela zrna, sadje in zelenjava, so idealni.</p>
                        <p className='text-medium-normal  black'>Zdrave maščobe so bistvene za proizvodnjo hormonov in splošno zdravje. Vključite vire, kot so avokado, oreški, semena in oljčno olje.</p>
                        <p className='text-medium-normal  black'>Mikrohranila, kot so vitamini (zlasti vitamini skupine B) in minerali (kot sta cink in magnezij), igrajo ključno vlogo pri delovanju mišic in okrevanju. Uživanje raznovrstnega sadja in zelenjave zagotavlja, da dobite ta bistvena hranila. </p>


                    </div>

                    <div id="section3" className='transformed-for-link'>
                    </div>
                    <div className='target-section' >
                        <h2 className='heading-desktop-h6 black '>Učinkovite vadbene rutine</h2>
                        <p className='text-medium-normal  black'>Za izgradnjo mišic se morajo vaši treningi osredotočiti na trening odpornosti. Nekaj ključnih komponent:</p>

                        <div className='target-divider'>
                            <div className='target-left'>
                                <p className='text-medium-normal  black'><span className='boldovanop'>Osnove treninga z utežmi:</span> Začnite z osnovnimi sestavljenimi vajami, ki delajo več mišičnih skupin hkrati. Primeri vključujejo počepe, mrtve dvige, bench.</p>
                                <p className='text-medium-normal  black'><span className='boldovanop'>Progresivna preobremenitev:</span> Postopoma povečajte težo in intenzivnost vadbe, da nenehno izzivate mišice.</p>

                            </div>

                            <div className='target-right marginleft'>
                                <img src="/images/wk.webp" className='blogger-img' alt='beginner' />

                            </div>
                        </div>

                        <p className='text-medium-normal  black'>Primer plana</p>
                        <Table columns={columns} dataSource={data} pagination={false} className='bigtab'/>
                        <p className='text-medium-normal  black'>Pomen vaj celega telesa: Vaje, kot so počepi, mrtvi dvigi in potiski na klopeh, so bistvenega pomena, ker vključujejo več mišičnih skupin, kar vodi k učinkovitejši rasti mišic. </p>


                    </div>

                    <div id="section4" className='transformed-for-link'>
                    </div>
                    <div className='target-section' >
                        <h2 className='heading-desktop-h6 black '>Pomen počitka in okrevanja</h2>
                        <p className='text-medium-normal  black'>Rast mišic se ne zgodi med vadbo, temveč med počitkom. Ustrezni dnevi spanja in počitka so ključnega pomena:</p>

                        <div className='target-divider'>
                            

                            <div className='target-right'>
                                <img src="/images/rest.webp" className='blogger-img' alt='beginner' />

                            </div>

                            <div className='target-left left-toright'>
                                <p className='text-medium-normal  black'><span className='boldovanop'>Spanje:</span> Cilj je 7-9 ur kakovostnega spanja na noč. Med spanjem se vaše telo regenerira in raste.</p>
                                <p className='text-medium-normal  black'><span className='boldovanop'>Dnevi počitka:</span> V svojo tedensko rutino vključite vsaj en ali dva dneva počitka, da si mišice opomorejo.</p>
                                <p className='text-medium-normal  black'><span className='boldovanop'>Aktivno okrevanje:</span> Lahke dejavnosti, kot so joga, raztezanje ali hoja, lahko izboljšajo okrevanje, ne da bi preveč obremenile mišice. </p>

                            </div>
                        </div>

                    </div>

                    <div id="section5" className='transformed-for-link'>
                    </div>
                    <div className='target-section' >
                        <h2 className='heading-desktop-h6 black '>Primer obrokov</h2>
                        <p className='text-medium-normal  black'>Ustvarjanje načrta obrokov, ki zagotavlja kalorični presežek, hkrati pa zagotavlja potrebna hranila, je bistvenega pomena. Tu sta dva primera:</p>
                        <p className='text-medium-normal  black'>Načrt prehrane 1:</p>
                        <Table columns={columns1} dataSource={data1} pagination={false} className='bigtab'/>

                        <p className='text-medium-normal  black'>Načrt prehrane 1:</p>
                        <Table columns={columns2} dataSource={data2} pagination={false} className='bigtab'/>

                    </div>

                    <div id="section6" className='transformed-for-link'>
                    </div>
                    <div className='target-section' >
                        <h2 className='heading-desktop-h6 black '>Dodatki za pridobivanje mišic</h2>
                        <p className='text-medium-normal  black'>Medtem ko bi morala biti cela hrana vaš glavni vir prehrane, vam lahko dodatki pomagajo:</p>
                        <div className='bullet-points-wrapper'>
                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'>Beljakovinski prah: Uporaben za zadovoljevanje dnevnih potreb po beljakovinah, zlasti po vadbi.</p>

                            </div>

                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'>Kreatin: Povečuje moč in mišično maso.</p>

                            </div>

                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'>Aminokisline z razvejano verigo (BCAA): podpirajo okrevanje mišic in zmanjšujejo bolečino.</p>

                            </div>

                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'>Multivitamini: Zagotovite, da boste dobili bistvene vitamine in minerale.</p>

                            </div>
                        </div>
                        <p className='text-medium-normal  black normrennr'>Vedno se posvetujte z zdravstvenim delavcem, preden začnete s katerim koli režimom prehranjevanja. </p>

                    </div>

                    <div id="section7" className='transformed-for-link'>
                    </div>
                    <div className='target-section' >
                        <h2 className='heading-desktop-h6 black '>Sledenje napredku</h2>
                        <p className='text-medium-normal  black'>Če želite zagotoviti, da boste na pravi poti, redno spremljajte svoj napredek:</p>
                        <div className='bullet-points-wrapper'>
                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'>Teža in meritve: tedensko spremljajte meritve teže in telesa.</p>

                            </div>

                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'>Povečanje moči: Zabeležite težine in povečanje moči v telovadnici.</p>

                            </div>

                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'>Fotografije: posnemite fotografije napredka za vizualno sledenje spremembam skozi čas.</p>

                            </div>
                        </div>

                    </div>

                    <div id="section8" className='transformed-for-link'>
                    </div>
                    <div className='target-section' >
                        <h2 className='heading-desktop-h6 black '>Pogoste napake, ki se jim je treba izogniti</h2>
                        <p className='text-medium-normal  black'>Izogibajte se tem pogostim pastem:</p>
                        <div className='bullet-points-wrapper'>
                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'>Pretreniranost: Več ni vedno boljše. Zagotovite si ustrezen počitek med vadbo.</p>

                            </div>

                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'>Zanemarjanje prehrane: Slabe prehrane ne morate nadomesiti s treningom. Osredotočite se na uživanje kakovostne hrane.</p>

                            </div>

                            <div className='bullet-row'>
                                <div className='bullet'></div>
                                <p className='text-medium-normal  black normrennr'>Nedoslednost: doslednost je ključnega pomena. Držite se svojega načrta in bodite potrpežljivi. </p>

                            </div>
                        </div>

                    </div>

                    <div id="section9" className='transformed-for-link'>
                    </div>
                    <div className='target-section' >
                        <h2 className='heading-desktop-h6 black '>Sklep</h2>
                        <p className='text-medium-normal  black'>Pridobivanje teže in izgradnja mišic je potovanje, ki zahteva predanost, doslednost in uravnotežen pristop. Z razumevanjem pomena pravilne prehrane, učinkovitih vadb in ustreznega počitka lahko dosežete svoje cilje izgradnje mišic. Ostanite osredotočeni, spremljajte svoj napredek in ne pozabite, da je za rezultate potreben čas. Z vztrajnostjo boste videli rast in spremembe, za katere trdo delate.</p>
                        

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Izguba
