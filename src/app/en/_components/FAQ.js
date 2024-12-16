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
            <h3 className='heading-desktop-h3 black'>Frequently Asked Questions</h3>
            <p className='text-medium-normal black marginbotom2'>
                We have all the answers to your questions, from training advice to nutrition and lifestyle tips.
            </p>
            {/*<HoverButton
                    text="Contact"
                    onClick={() => handleNavigation('/Plans')}
                />*/}
        </div>
        <div className='faq-right'>
            <div className='faq'>
                <div className='thefqwrapper'>
                    <h2 className='faq-h'>What sets your training plans and lifestyle coaching apart from others?</h2>
                    <p className='faq-p'>
                        Our approach is deeply personalized and holistic. We don’t just focus on workouts; we include nutrition, mindset, and lifestyle adjustments to ensure sustainable results.
                    </p>
                </div>
            </div>
            <div className='faq'>
                <h2 className='faq-h'>Can I combine online and in-person training?</h2>
                <p className='faq-p'>
                    Absolutely! We understand that life can be unpredictable, so we offer flexible training options. You can combine online and in-person sessions; just contact us to discuss your preference.
                </p>
            </div>
            <div className='faq'>
                <h2 className='faq-h'>How do you tailor workout plans and nutritional advice to individual needs?</h2>
                <p className='faq-p'>
                    We start with a detailed consultation to understand your fitness level, lifestyle, dietary preferences, and goals. This helps us create workout plans and nutritional advice that align with your goals and fit seamlessly into your daily life.
                </p>
            </div>
            <div className='faq'>
                <h2 className='faq-h'>What if I’ve never exercised before? Can I still sign up?</h2>
                <p className='faq-p'>
                    Yes, absolutely! Our services are suitable for all fitness levels, from complete beginners to advanced athletes. Our plans are designed to meet you where you are and help you progress at a comfortable and effective pace.
                </p>
            </div>
            <div className='faq'>
                <h2 className='faq-h'>How long does it take to see results?</h2>
                <p className='faq-p'>
                    Results can vary depending on several factors, including your starting point, goals, and how closely you follow the plan. Generally, clients begin to notice significant improvements within the first 4-6 weeks.
                </p>
            </div>
        </div>
    </div>
</div>
    )
}

export default FAQ
