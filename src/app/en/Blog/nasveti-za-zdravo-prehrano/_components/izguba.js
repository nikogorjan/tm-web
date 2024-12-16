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
    <h3 className='heading-desktop-h3 black'>Essential Tips for Healthy Eating</h3>
</div>

<h3 className='text-medium-normal black'>
    Healthy eating is the foundation of overall well-being. It impacts everything from energy levels and mood to long-term health and disease prevention. This guide provides practical tips and insights to help you make informed choices and adopt healthy eating habits for a better life.
</h3>

<div className='blog-post-urnik'>
    <div className='blog-link-wrapper'>
        <a href="#section1" className='smooth-scroll'>The Importance of a Balanced Diet</a>
    </div>

    <div className='blog-link-wrapper'>
        <a href="#section2" className='smooth-scroll'>Understanding Macronutrients</a>
    </div>

    <div className='blog-link-wrapper'>
        <a href="#section3" className='smooth-scroll'>Essential Micronutrients</a>
    </div>

    <div className='blog-link-wrapper'>
        <a href="#section4" className='smooth-scroll'>Tips for Healthy Eating Habits</a>
    </div>

    <div className='blog-link-wrapper'>
        <a href="#section5" className='smooth-scroll'>Meal Planning and Preparation</a>
    </div>

    <div className='blog-link-wrapper'>
        <a href="#section6" className='smooth-scroll'>Smart Snacking</a>
    </div>

    <div className='blog-link-wrapper'>
        <a href="#section7" className='smooth-scroll'>Hydration Tips</a>
    </div>

    <div className='blog-link-wrapper'>
        <a href="#section9" className='smooth-scroll'>Conclusion</a>
    </div>
</div>

                    <div id="section1" className='transformed-for-link'></div>
                    <div className='target-section'>
    <h2 className='heading-desktop-h6 black'>The Importance of a Balanced Diet</h2>
    <p className='text-medium-normal black'>
        A balanced diet provides the body with the essential nutrients it needs to function properly. It includes a variety of foods in the right proportions to maintain health, support growth, and provide energy.
    </p>
    <div className='bullet-points-wrapper'>
        <div className='bullet-row'>
            <div className='bullet'></div>
            <p className='text-medium-normal black normrennr'>
                Benefits of a balanced diet: Improves energy levels, supports immune function, enhances mental clarity, and reduces the risk of chronic diseases.
            </p>
        </div>
        <div className='bullet-row'>
            <div className='bullet'></div>
            <p className='text-medium-normal black normrennr'>
                Examples of balanced meals: Include a mix of lean proteins, whole grains, healthy fats, and plenty of fruits and vegetables.
            </p>
        </div>
    </div>
</div>

                    <div id="section2" className='transformed-for-link'>
                    </div>
                    <div className='target-section'>
    <h2 className='heading-desktop-h6 black'>Understanding Macronutrients</h2>
    <p className='text-medium-normal black'>
        Macronutrients are the primary building blocks of your diet and consist of proteins, carbohydrates, and fats:
    </p>
    <div className='bullet-points-wrapper'>
        <div className='bullet-row'>
            <div className='bullet'></div>
            <p className='text-medium-normal black normrennr'>
                Proteins: Essential for muscle repair, immune function, and hormone production. Sources include meat, fish, eggs, beans, and nuts.
            </p>
        </div>
        <div className='bullet-row'>
            <div className='bullet'></div>
            <p className='text-medium-normal black normrennr'>
                Carbohydrates: The body’s primary source of energy. Focus on complex carbohydrates such as whole grains, fruits, and vegetables.
            </p>
        </div>
        <div className='bullet-row'>
            <div className='bullet'></div>
            <p className='text-medium-normal black normrennr'>
                Fats: Necessary for brain health, hormone production, and energy. Include healthy fats from avocados, nuts, seeds, and olive oil.
            </p>
        </div>
    </div>
</div>

                    <div id="section3" className='transformed-for-link'>
                    </div>
                    <div className='target-section'>
    <h2 className='heading-desktop-h6 black'>Essential Micronutrients</h2>
    <p className='text-medium-normal black'>
        Micronutrients, including vitamins and minerals, are vital for overall health, even though they are required in smaller amounts:
    </p>

    <div className='target-divider'>
        <div className='target-left'>
            <p className='text-medium-normal black'>
                <span className='boldovanop'>Vitamins:</span> Crucial for energy production, immune function, and blood clotting. Ensure a variety of colorful fruits and vegetables in your diet.
            </p>
            <p className='text-medium-normal black'>
                <span className='boldovanop'>Minerals:</span> Essential for bone health, fluid balance, and muscle contraction. Include sources such as dairy products, leafy greens, nuts, and seeds.
            </p>
        </div>

        <div className='target-right marginleft'>
            <img src="/images/banana.webp" className='blogger-img' alt='beginner' />
        </div>
    </div>
</div>

                    <div id="section4" className='transformed-for-link'>
                    </div>
                    <div className='target-section'>
    <h2 className='heading-desktop-h6 black'>Tips for Healthy Eating Habits</h2>
    <p className='text-medium-normal black'>
        Adopting healthy eating habits can help you maintain a balanced diet and improve overall health:
    </p>

    <div className='target-divider'>
        <div className='target-right'>
            <img src="/images/he.webp" className='blogger-img' alt='beginner' />
        </div>

        <div className='target-left left-toright'>
            <p className='text-medium-normal black'>
                <span className='boldovanop'>Regular meals:</span> Eating at consistent intervals helps maintain energy levels and prevents overeating.
            </p>
            <p className='text-medium-normal black'>
                <span className='boldovanop'>Mindful eating:</span> Pay attention to hunger cues and eat slowly to avoid overeating.
            </p>
            <p className='text-medium-normal black'>
                <span className='boldovanop'>Avoiding distractions:</span> Turn off screens and focus on your meal to enjoy your food and recognize when you are full.
            </p>
        </div>
    </div>
</div>

                    <div id="section5" className='transformed-for-link'>
                    </div>
                    <div className='target-section'>
    <h2 className='heading-desktop-h6 black'>Meal Planning and Preparation</h2>
    <p className='text-medium-normal black'>
        Planning and preparing meals in advance can help you stick to a healthy diet:
    </p>
    <p className='text-medium-normal black'>
        Benefits of meal planning: Saves time, reduces stress, and ensures balanced meals.
    </p>
    <p className='text-medium-normal black'>
        Effective meal prep tips: Plan meals for the week, create a shopping list, and prepare ingredients in advance.
    </p>
</div>

                    <div id="section6" className='transformed-for-link'>
                    </div>
                    <div className='target-section'>
    <h2 className='heading-desktop-h6 black'>Smart Snacking</h2>
    <p className='text-medium-normal black'>
        Healthy snacks can help maintain stable energy levels and prevent overeating at meals:
    </p>
    <div className='bullet-points-wrapper'>
        <div className='bullet-row'>
            <div className='bullet'></div>
            <p className='text-medium-normal black normrennr'>
                Healthy snack ideas: Fresh fruit, yogurt with nuts, veggie sticks with hummus, and whole grain crackers with cheese.
            </p>
        </div>
        <div className='bullet-row'>
            <div className='bullet'></div>
            <p className='text-medium-normal black normrennr'>
                Portion control: Prepare snacks in advance to avoid overeating and choose nutrient-dense options.
            </p>
        </div>
    </div>
</div>

                    <div id="section7" className='transformed-for-link'>
                    </div>
                    <div className='target-section'>
    <h2 className='heading-desktop-h6 black'>Hydration Tips</h2>
    <p className='text-medium-normal black'>
        Staying hydrated is essential for maintaining health and well-being:
    </p>
    <p className='text-medium-normal black'>
        Water is crucial for digestion, temperature regulation, and joint lubrication.
    </p>
    <p className='text-medium-normal black'>
        Drink a glass of water before each meal, carry a water bottle with you, and eat water-rich foods like cucumbers and watermelon.
    </p>
</div>

                    

                    <div id="section9" className='transformed-for-link'>
                    </div>
                    <div className='target-section'>
    <h2 className='heading-desktop-h6 black'>Conclusion</h2>
    <p className='text-medium-normal black'>
        Healthy eating is a lifelong commitment that can significantly improve the quality of your life. By understanding the importance of a balanced diet, making mindful food choices, and adopting healthy eating habits, you can nourish your body and support overall health. Start with small changes today and gradually build a sustainable, nutritious lifestyle.
    </p>
</div>

                </div>

            </div>
        </div>
    )
}

export default Izguba
