'use client'


import React, { useEffect } from 'react'

import Navbar from "../../../../public/Components/Navbar/Navbar.client";
import PulsingCircle from "../../../../public/Components/PulsingCircle/PulsingCircle";
import FAQ from "../_components/FAQ";
import Testimonials from "../_components/Testimonials.client";
import ClientHook from "./_components/ClientHook";
import ClientsVideo from "./_components/ClientsVideo";
import Enaena from "./_components/Enaena";
import { useDispatch } from 'react-redux';

import { setBackgroundColor } from '../../store/colorSlice'; // Update the path as needed
import Footer from '../../../../public/Components/Footer/Footer';
import Shadow from '../Plans/_components/Shadow';
import NavbarEng from '../../../../public/Components/Navbar/NavbarEng.client';
import FooterEng from '../../../../public/Components/Footer/FooterEng';
import GoogleAnalytics from '../../../../components/GoogleAnalytics/GoogleAnalytics';



export default function Plans() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Scroll to the top of the page on component mount (page refresh)
    window.scrollTo(0, 0);
    dispatch(setBackgroundColor('black'));

}, []);

    return (
      <div className="bodyed">
        <GoogleAnalytics/>
        <NavbarEng/>
        <Shadow/>
        <ClientsVideo/>
        <Enaena/>
        <Testimonials/>
        <FAQ/>
        <ClientHook/>
        <FooterEng/>
        <PulsingCircle/>
      </div>
    );
  }
  