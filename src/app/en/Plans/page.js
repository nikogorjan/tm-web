'use client'


import React, { useEffect } from 'react'

import Footer from "../../../../public/Components/Footer/Footer";
import Navbar from "../../../../public/Components/Navbar/Navbar.client";
import PulsingCircle from "../../../../public/Components/PulsingCircle/PulsingCircle";
import MarselHook from "./_components/MarselHook";
import Portfolio from "../About/_components/Portfolio";
import FAQ from "../_components/FAQ";
import Testimonials from "../_components/Testimonials.client";
import Transformations from "../_components/Transformations.client";
import MotivationalVideo from "./_components/MotivationalVideo";
import Offers from "./_components/Offers.client";
import OnlineHook from "./_components/OnlineHook";
import Prices from "./_components/Prices";
import Private from "./_components/Private";
import Svetovanje from "./_components/Svetovanje";
import Trainerize from "./_components/Trainerize";
import Transformacije from "../About/_components/Transformacije";
import './page.css'
import { useDispatch } from 'react-redux';
import { setBackgroundColor } from '../../store/colorSlice'; // Update the path as needed
import Shadow from './_components/Shadow';
import NavbarEng from '../../../../public/Components/Navbar/NavbarEng.client';
import FooterEng from '../../../../public/Components/Footer/FooterEng';

export default function Plans() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Scroll to the top of the page on component mount (page refresh)
    window.scrollTo(0, 0);
    dispatch(setBackgroundColor('white'));

}, []);

    return (
      <div className="bodyed">
        <NavbarEng/>
        <Shadow/>
        <MotivationalVideo/>
        <OnlineHook/>
        <Prices/>
        <Transformacije/>
        <Testimonials/>
         <FAQ/>
         <Svetovanje/>
         <FooterEng/>
       {/*<Trainerize/>
        <Offers/>
        <Private/>
        <Testimonials/>
        <Transformations/>
        <Footer/>*/}
        <PulsingCircle/>
      </div>
    );
  }
  