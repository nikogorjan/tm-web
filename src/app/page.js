'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './globals.css'

export default function Home() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      setProgress(0);
    };

    const checkLocale = async () => {
      // Update the progress immediately
      updateProgress();

      // Wait for 1 second while the progress bar is loading
      await new Promise(resolve => setTimeout(resolve, 100));

      // Example logic to determine the user's location
      const isInSlovenia = await isUserInSlovenia();

      if (isInSlovenia) {
        router.replace('/sl');
      } else {
        router.replace('/sl'); // or '/en' based on your actual use case
      }
    };

    // Call the checkLocale function immediately after mounting
    checkLocale();

    return () => {};
  }, [router]);

  return (
    <div className='first-loading-main'>
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
}

// Example logic to determine if the user is in Slovenia
const isUserInSlovenia = async () => {
  const acceptLanguage = navigator.language || navigator.userLanguage;
  return acceptLanguage.startsWith('sl');
};