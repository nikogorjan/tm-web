'use client'


import React, { useEffect } from 'react'

import Footer from "../../../../../public/Components/Footer/Footer";
import Navbar from "../../../../../public/Components/Navbar/Navbar.client";
import PulsingCircle from "../../../../../public/Components/PulsingCircle/PulsingCircle";
import Izguba from "./_components/izguba";
import { useDispatch } from 'react-redux';
import { setBackgroundColor } from '../../../store/colorSlice'; // Update the path as needed
import Shadow from '../../Plans/_components/Shadow';
import PulsingCircleSlo from '../../../../../public/Components/PulsingCircle/PulsingCircleSlo';



export default function Plans() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Ensure window is only accessed in the browser (client-side)
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
    dispatch(setBackgroundColor('white'));

  }, [dispatch]);

    return (
      <div>
        <Navbar/>
        <Shadow/>
        <Izguba/>
        <Footer/>
        <PulsingCircleSlo/>
      </div>
    );
  }
  