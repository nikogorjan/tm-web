'use client'


import React, { useEffect } from 'react'
import Navbar from '../../../../public/Components/Navbar/Navbar.client'
import Hero from './Hero.client'
import Offers from './Offers.client'
import Testimonials from './Testimonials.client'
import Transformations from './Transformations.client'
import FAQ from './FAQ'
import Hook from './Hook'
import Footer from '../../../../public/Components/Footer/Footer'
import Ekipa from './Ekipa'
import ContactMain from './Contact'
import PulsingCircle from '../../../../public/Components/PulsingCircle/PulsingCircle'
import Transformacije from '../About/_components/Transformacije'
import Form from '../../../../public/Components/Form/Form'
import Blog from './Blog'

import { useDispatch } from 'react-redux';
import { setBackgroundColor } from '../../store/colorSlice'; // Update the path as needed
import Loader from '../_components/Loader'
import PulsingCircleSlo from '../../../../public/Components/PulsingCircle/PulsingCircleSlo'


const Holder = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        // Scroll to the top of the page on component mount (page refresh)
        window.scrollTo(0, 0);

        dispatch(setBackgroundColor('black'));

    }, []);


    return (
        <div>
            <Navbar />
            <Loader/>
            <Hero />
            <Testimonials/>
            <FAQ/>
            
            <Ekipa/>
             {/*<Blog/>*/}
            {/*<Transformacije/>*/}
            <Hook/>
            <Footer/>
            {/*<ContactMain/>*/}
            {/*<Transformations/>
            
            <Form/>*/}
            {/*<Footer/>*/}
            <PulsingCircleSlo/>
        </div>
    )
}

export default Holder
