'use client'


import React, { useEffect } from 'react'

import Footer from "../../../../../public/Components/Footer/Footer";
import Navbar from "../../../../../public/Components/Navbar/Navbar.client";
import PulsingCircle from "../../../../../public/Components/PulsingCircle/PulsingCircle";
import { useDispatch } from 'react-redux';
import { setBackgroundColor } from '../../../store/colorSlice'; // Update the path as needed
import Shadow from '../../Plans/_components/Shadow';
import Sladkorna from './_components/Sladkorna';
import NavbarEng from '../../../../../public/Components/Navbar/NavbarEng.client';
import FooterEng from '../../../../../public/Components/Footer/FooterEng';



export default function Plans() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Scroll to the top of the page on component mount (page refresh)
    window.scrollTo(0, 0);
    dispatch(setBackgroundColor('white'));

}, []);
    return (
      <div>
        <NavbarEng/>
        <Shadow/>
        <Sladkorna/>
        <FooterEng/>
        <PulsingCircle/>
      </div>
    );
  }
  