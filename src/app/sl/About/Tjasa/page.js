
'use client'


import React, { useEffect } from 'react'
import Navbar from "../../../../../public/Components/Navbar/Navbar.client";
import PulsingCircle from "../../../../../public/Components/PulsingCircle/PulsingCircle";
import TjasaHead from "./_components/TjasaHead";
import TjasaHook from "./_components/TjasaHook";
import { useDispatch } from 'react-redux';
import { setBackgroundColor } from '../../../store/colorSlice'; // Update the path as needed
import Footer from '../../../../../public/Components/Footer/Footer';
import Shadow from '../../Plans/_components/Shadow';
import PulsingCircleSlo from '../../../../../public/Components/PulsingCircle/PulsingCircleSlo';



export default function About() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Scroll to the top of the page on component mount (page refresh)
    window.scrollTo(0, 0);
    dispatch(setBackgroundColor('black'));

}, []);

    return (
      <div>
        <Navbar/>
        <Shadow/>
        <TjasaHead/>
        <TjasaHook/>
        <Footer/>
        <PulsingCircleSlo/>
      </div>
    );
  }
  