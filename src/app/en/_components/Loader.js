'use client'

import React, { useEffect, useState } from 'react';
import './Loader.css';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false); // State to track if loading is done

  useEffect(() => {
    const duration = 3000; // Total duration of the animation (3 seconds)
    const steps = 100; // Number of steps from 0 to 100
    const intervalTime = duration / steps; // Time per step

    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          clearInterval(interval);
          setIsDone(true); // Set isDone to true when loading completes
          return 100;
        }
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`loader-main ${isDone ? 'done-loading' : ''}`}>
      <div className='loading-container'>
        <div className='loading-bar'>
          <div className='loaded-bar' style={{ width: `${progress}%` }}></div>
        </div>
        <div className='loading-par-row'>
          <p className='loading-text'>Loading...</p>
          <div className='loading-text'>{progress}%</div>
        </div>
      </div>
    </div>
  );
};

export default Loader;