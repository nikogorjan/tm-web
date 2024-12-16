import React, { useEffect, useState } from 'react';
import './Shadow.css';

const Shadow = () => {
  const [isClosed, setIsClosed] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClosed(true);
      
      // Set visibility to hidden after the opacity transition
      const visibilityTimer = setTimeout(() => {
        setIsHidden(true);
      }, 300); // This should match the duration of your CSS opacity transition

      return () => clearTimeout(visibilityTimer);
    }, 300);

    return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
  }, []);

  return (
    <div 
      className={`open-shadow-main ${isClosed ? 'close-shadow' : ''}`} 
      style={{ visibility: isHidden ? 'hidden' : 'visible' }}
    >
      {/* Content inside the shadow if any */}
    </div>
  );
}

export default Shadow;