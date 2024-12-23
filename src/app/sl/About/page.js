'use client'


import React, { useEffect } from 'react'

import Footer from "../../../../public/Components/Footer/Footer";
import Navbar from "../../../../public/Components/Navbar/Navbar.client";
import PulsingCircle from "../../../../public/Components/PulsingCircle/PulsingCircle";
import ContactMain from "../_components/Contact";
import FAQ from "../_components/FAQ";
import Hook from "../_components/Hook";
import Transformations from "../_components/Transformations.client";
import AboutHead from "./_components/AboutHead";
import AboutHook from "./_components/AboutHook";
import AboutVideo from "./_components/AboutVideo";
import Animated from "./_components/Animated";
import Humble from "./_components/Humble";
import Mission from "./_components/Mission";
import Offers from "./_components/Offers.client";
import Opis from "./_components/Opis";
import Portfolio from "./_components/Portfolio";
import Story from "./_components/Story";
import Transformacije from "./_components/Transformacije";
import { useDispatch } from 'react-redux';
import { setBackgroundColor } from '../../store/colorSlice'; // Update the path as needed
import Shadow from '../Plans/_components/Shadow';
import PulsingCircleSlo from '../../../../public/Components/PulsingCircle/PulsingCircleSlo';
import GoogleAnalytics from '../../../../components/GoogleAnalytics/GoogleAnalytics';

export const metadata = {
  title: "O Nama | Tjaša & Marsel Fitness",
  description: "Sva Tjaša in Marsel, osebna trenerja s strastjo do fitnesa in zdravega življenjskega sloga.",
};

export default function About() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Scroll to the top of the page on component mount (page refresh)
    window.scrollTo(0, 0);
    dispatch(setBackgroundColor('black'));

}, []);
    return (
      <div>
        <GoogleAnalytics/>
        <Navbar/>
        <Shadow/>
        {/*<AboutHead/>*/}
        <AboutVideo/>
        <Humble/>
        <Portfolio/>
        <Mission/>
        <Transformacije/>
        <AboutHook/>
        <Footer/>
        {/*<Story/>
        <Transformacije/>
        <Hook/>
        <ContactMain/>
        <Opis/>
        <Animated/>
        <Transformations/>
        <FAQ/>
        <Offers/>
        <Footer/>*/}
        <PulsingCircleSlo/>
      </div>
    );
  }
  