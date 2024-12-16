'use client'

import { ReactLenis } from 'lenis/react';
import { useRef, useEffect } from 'react';

function SmoothScroll({ children }) {
    const lenisRef = useRef(null);

    return (
        <ReactLenis
            ref={lenisRef}
            root
            options={{
                duration: 2, // slower scroll
                easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // custom easing function
                smooth: true, // enable smooth scrolling
                smoothTouch: true, // enable smooth scrolling on touch devices
            }}
        >
            {children}
        </ReactLenis>
    );
}

export default SmoothScroll;