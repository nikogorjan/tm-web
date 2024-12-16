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
    { key: 1, dan: 'Day 1', trening: 'Upper body (chest, shoulders, triceps)' },
    { key: 2, dan: 'Day 2', trening: 'Lower body' },
    { key: 3, dan: 'Day 3', trening: 'Rest or light cardio' },
    { key: 4, dan: 'Day 4', trening: 'Back and biceps' },
    { key: 5, dan: 'Day 5', trening: 'Full body' },
    { key: 6, dan: 'Day 6', trening: 'Rest' },
    { key: 7, dan: 'Day 7', trening: 'Active recovery (stretching, light cardio)' },
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
    { key: '1', obrok: 'Breakfast', plan1: 'Scrambled eggs with spinach and whole grain toast, a banana, and a glass of milk.' },
    { key: '2', obrok: 'Snack', plan1: 'Greek yogurt with honey and granola.' },
    { key: '3', obrok: 'Lunch', plan1: 'Grilled chicken breast, quinoa, steamed broccoli, and avocado slices.' },
    { key: '4', obrok: 'Snack', plan1: 'Peanut butter and apple slices.' },
    { key: '5', obrok: 'Dinner', plan1: 'Baked salmon, sweet potato, and mixed vegetables.' },
    { key: '6', obrok: 'Snack', plan1: 'Cottage cheese with strawberries.' },
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
    { key: '1', obrok: 'Breakfast', plan2: 'Oatmeal with nuts, seeds, and fresh berries, and a protein shake.' },
    { key: '2', obrok: 'Snack', plan2: 'Hummus and whole wheat pita.' },
    { key: '3', obrok: 'Lunch', plan2: 'Turkey and cheese sandwich on whole grain bread, side salad, and a piece of fruit.' },
    { key: '4', obrok: 'Snack', plan2: 'Protein bar and an orange.' },
    { key: '5', obrok: 'Dinner', plan2: 'Beef stir-fried with brown rice and mixed vegetables.' },
    { key: '6', obrok: 'Snack', plan2: 'Smoothie with spinach, banana, protein powder, and almond milk.' },
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
    <h3 className='heading-desktop-h3 black'>The Secret to Gaining Muscle Mass</h3>
</div>

<h3 className='text-medium-normal black'>
    Gaining weight and building muscle can be just as challenging for many people as losing weight. While society often focuses on weight loss, those struggling with being underweight face unique obstacles. The goal of this comprehensive guide is to help individuals effectively and sustainably gain weight and muscle.
</h3>

<div className='blog-post-urnik'>
    <div className='blog-link-wrapper'>
        <a href="#section1" className='smooth-scroll'>Understanding Weight Gain</a>
    </div>

    <div className='blog-link-wrapper'>
        <a href="#section2" className='smooth-scroll'>Essential Nutrients for Muscle Growth</a>
    </div>

    <div className='blog-link-wrapper'>
        <a href="#section3" className='smooth-scroll'>Effective Workout Routines</a>
    </div>

    <div className='blog-link-wrapper'>
        <a href="#section4" className='smooth-scroll'>The Importance of Rest and Recovery</a>
    </div>

    <div className='blog-link-wrapper'>
        <a href="#section5" className='smooth-scroll'>Meal Examples</a>
    </div>

    <div className='blog-link-wrapper'>
        <a href="#section6" className='smooth-scroll'>Supplements for Muscle Gain</a>
    </div>

    <div className='blog-link-wrapper'>
        <a href="#section7" className='smooth-scroll'>Tracking Progress</a>
    </div>

    <div className='blog-link-wrapper'>
        <a href="#section8" className='smooth-scroll'>Common Mistakes to Avoid</a>
    </div>

    <div className='blog-link-wrapper'>
        <a href="#section9" className='smooth-scroll'>Conclusion</a>
    </div>
</div>

                    <div id="section1" className='transformed-for-link'></div>
                    <div className='target-section'>
    <h2 className='heading-desktop-h6 black'>Understanding Weight Gain</h2>
    <p className='text-medium-normal black'>
        Gaining weight is not just about eating more food; it’s about eating the right kinds of food and nutrients that support muscle growth and overall health. A caloric surplus is essential for weight gain, meaning you need to consume more calories than your body burns daily. However, these calories should come from nutritious sources, not unhealthy food.
    </p>
    <p className='text-medium-normal black'>
        Your metabolism plays an important role in gaining weight. People with a fast metabolism burn calories more quickly and may need to eat more frequently to maintain a caloric surplus. Understanding your body’s metabolism helps effectively adjust your diet and exercise plan.
    </p>
</div>

                    <div id="section2" className='transformed-for-link'>
                    </div>
                    <div className='target-section'>
    <h2 className='heading-desktop-h6 black'>Essential Nutrients for Muscle Growth</h2>
    <p className='text-medium-normal black'>
        Muscle growth is heavily dependent on the intake of specific nutrients:
    </p>
    <p className='text-medium-normal black'>
        Proteins are the building blocks of muscles. Consuming enough protein is crucial for muscle repair and growth. Good sources include lean meats, fish, eggs, dairy products, beans, and legumes.
    </p>
    <p className='text-medium-normal black'>
        Carbohydrates provide the energy needed for intense workouts and daily activities. Complex carbohydrates, such as whole grains, fruits, and vegetables, are ideal.
    </p>
    <p className='text-medium-normal black'>
        Healthy fats are essential for hormone production and overall health. Include sources such as avocado, nuts, seeds, and olive oil.
    </p>
    <p className='text-medium-normal black'>
        Micronutrients, such as vitamins (especially B vitamins) and minerals (such as zinc and magnesium), play a crucial role in muscle function and recovery. Eating a variety of fruits and vegetables ensures you get these essential nutrients.
    </p>
</div>

                    <div id="section3" className='transformed-for-link'>
                    </div>
                    <div className='target-section'>
    <h2 className='heading-desktop-h6 black'>Effective Workout Routines</h2>
    <p className='text-medium-normal black'>
        To build muscle, your workouts should focus on resistance training. Here are some key components:
    </p>

    <div className='target-divider'>
        <div className='target-left'>
            <p className='text-medium-normal black'>
                <span className='boldovanop'>Basics of weight training:</span> Start with basic compound exercises that target multiple muscle groups at once. Examples include squats, deadlifts, and bench presses.
            </p>
            <p className='text-medium-normal black'>
                <span className='boldovanop'>Progressive overload:</span> Gradually increase the weight and intensity of your workouts to continuously challenge your muscles.
            </p>
        </div>

        <div className='target-right marginleft'>
            <img src="/images/wk.webp" className='blogger-img' alt='beginner' />
        </div>
    </div>

    <p className='text-medium-normal black'>Sample Plan</p>
    <Table columns={columns} dataSource={data} pagination={false} className='bigtab'/>
    <p className='text-medium-normal black'>
        <span className='boldovanop'>The importance of full-body exercises:</span> Exercises such as squats, deadlifts, and bench presses are essential because they engage multiple muscle groups, leading to more efficient muscle growth.
    </p>
</div>

                    <div id="section4" className='transformed-for-link'>
                    </div>
                    <div className='target-section'>
    <h2 className='heading-desktop-h6 black'>The Importance of Rest and Recovery</h2>
    <p className='text-medium-normal black'>
        Muscle growth doesn't happen during exercise, but rather during rest. Proper sleep and rest days are crucial:
    </p>

    <div className='target-divider'>
        <div className='target-right'>
            <img src="/images/rest.webp" className='blogger-img' alt='beginner' />
        </div>

        <div className='target-left left-toright'>
            <p className='text-medium-normal black'>
                <span className='boldovanop'>Sleep:</span> The goal is 7-9 hours of quality sleep per night. During sleep, your body regenerates and grows.
            </p>
            <p className='text-medium-normal black'>
                <span className='boldovanop'>Rest days:</span> Include at least one or two rest days in your weekly routine to allow your muscles to recover.
            </p>
            <p className='text-medium-normal black'>
                <span className='boldovanop'>Active recovery:</span> Light activities such as yoga, stretching, or walking can enhance recovery without overloading the muscles.
            </p>
        </div>
    </div>
</div>

                    <div id="section5" className='transformed-for-link'>
                    </div>
                    <div className='target-section'>
    <h2 className='heading-desktop-h6 black'>Meal Examples</h2>
    <p className='text-medium-normal black'>
        Creating a meal plan that ensures a caloric surplus while providing the necessary nutrients is essential. Here are two examples:
    </p>
    <p className='text-medium-normal black'>Meal Plan 1:</p>
    <Table columns={columns1} dataSource={data1} pagination={false} className='bigtab' />

    <p className='text-medium-normal black'>Meal Plan 2:</p>
    <Table columns={columns2} dataSource={data2} pagination={false} className='bigtab' />
</div>

                    <div id="section6" className='transformed-for-link'>
                    </div>
                    <div className='target-section'>
    <h2 className='heading-desktop-h6 black'>Supplements for Muscle Gain</h2>
    <p className='text-medium-normal black'>
        While whole foods should be your primary source of nutrition, supplements can be helpful:
    </p>
    <div className='bullet-points-wrapper'>
        <div className='bullet-row'>
            <div className='bullet'></div>
            <p className='text-medium-normal black normrennr'>Protein powder: Useful for meeting daily protein needs, especially post-workout.</p>
        </div>

        <div className='bullet-row'>
            <div className='bullet'></div>
            <p className='text-medium-normal black normrennr'>Creatine: Increases strength and muscle mass.</p>
        </div>

        <div className='bullet-row'>
            <div className='bullet'></div>
            <p className='text-medium-normal black normrennr'>Branched-Chain Amino Acids (BCAA): Support muscle recovery and reduce soreness.</p>
        </div>

        <div className='bullet-row'>
            <div className='bullet'></div>
            <p className='text-medium-normal black normrennr'>Multivitamins: Ensure you get essential vitamins and minerals.</p>
        </div>
    </div>
    <p className='text-medium-normal black normrennr'>
        Always consult with a healthcare professional before starting any supplementation regimen.
    </p>
</div>

                    <div id="section7" className='transformed-for-link'>
                    </div>
                    <div className='target-section'>
    <h2 className='heading-desktop-h6 black'>Tracking Progress</h2>
    <p className='text-medium-normal black'>
        To ensure you're on the right track, regularly monitor your progress:
    </p>
    <div className='bullet-points-wrapper'>
        <div className='bullet-row'>
            <div className='bullet'></div>
            <p className='text-medium-normal black normrennr'>Weight and measurements: Track your weight and body measurements weekly.</p>
        </div>

        <div className='bullet-row'>
            <div className='bullet'></div>
            <p className='text-medium-normal black normrennr'>Strength gains: Record weights and strength improvements in the gym.</p>
        </div>

        <div className='bullet-row'>
            <div className='bullet'></div>
            <p className='text-medium-normal black normrennr'>Photos: Take progress photos to visually track changes over time.</p>
        </div>
    </div>
</div>

                    <div id="section8" className='transformed-for-link'>
                    </div>
                    <div className='target-section'>
    <h2 className='heading-desktop-h6 black'>Common Mistakes to Avoid</h2>
    <p className='text-medium-normal black'>
        Avoid these common pitfalls:
    </p>
    <div className='bullet-points-wrapper'>
        <div className='bullet-row'>
            <div className='bullet'></div>
            <p className='text-medium-normal black normrennr'>Overtraining: More is not always better. Ensure you get proper rest between workouts.</p>
        </div>

        <div className='bullet-row'>
            <div className='bullet'></div>
            <p className='text-medium-normal black normrennr'>Neglecting nutrition: You can't make up for poor nutrition with exercise. Focus on eating quality food.</p>
        </div>

        <div className='bullet-row'>
            <div className='bullet'></div>
            <p className='text-medium-normal black normrennr'>Inconsistency: Consistency is key. Stick to your plan and be patient.</p>
        </div>
    </div>
</div>

                    <div id="section9" className='transformed-for-link'>
                    </div>
                    <div className='target-section'>
    <h2 className='heading-desktop-h6 black'>Conclusion</h2>
    <p className='text-medium-normal black'>
        Gaining weight and building muscle is a journey that requires dedication, consistency, and a balanced approach. By understanding the importance of proper nutrition, effective workouts, and adequate rest, you can achieve your muscle-building goals. Stay focused, track your progress, and remember that results take time. With perseverance, you will see the growth and changes you’ve been working hard for.
    </p>
</div>

                </div>

            </div>
        </div>
    )
}

export default Izguba
