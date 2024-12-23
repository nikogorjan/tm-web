'use client'


import React, { useEffect } from 'react'

import Footer from "../../../../public/Components/Footer/Footer";
import Navbar from "../../../../public/Components/Navbar/Navbar.client";
import PulsingCircle from "../../../../public/Components/PulsingCircle/PulsingCircle";
import BlogHead from "./_components/BlogHead";
import { useDispatch } from 'react-redux';
import { setBackgroundColor } from '../../store/colorSlice'; // Update the path as needed
import Shadow from '../Plans/_components/Shadow';
import NavbarEng from '../../../../public/Components/Navbar/NavbarEng.client';
import FooterEng from '../../../../public/Components/Footer/FooterEng';
import GoogleAnalytics from '../../../../components/GoogleAnalytics/GoogleAnalytics';

export const metadata = {
  title: "Blog | Tjaša & Marsel Fitness",
  description: "Our blog provides tips on fitness, healthy lifestyle, and motivation.",
};

export default function Plans() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Scroll to the top of the page on component mount (page refresh)
    window.scrollTo(0, 0);
    dispatch(setBackgroundColor('white'));

}, []);
    return (
      <div>
        <GoogleAnalytics/>
        <NavbarEng/>
        <Shadow/>
        <BlogHead/>
        <FooterEng/>
        <PulsingCircle/>
      </div>
    );
  }
  