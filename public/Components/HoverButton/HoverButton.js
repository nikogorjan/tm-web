'use client'

import React, { useState } from 'react';
import './HoverButton.css';

const HoverButton = ({ text, onClick }) => {
    const [hoverStyle, setHoverStyle] = useState({ top: 0, left: 0 });

    const handleMouseEnter = (e) => {
        const rect = e.target.getBoundingClientRect();
        const hoverX = e.clientX - rect.left;
        const hoverY = e.clientY - rect.top;
        setHoverStyle({
            top: hoverY,
            left: hoverX,
        });
    };

    return (
        <div
            className="hover-buttonr"
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
        >
            <span className="hover-button-textr">{text}</span>
            <div
                className="hover-circler"
                style={{
                    top: `${hoverStyle.top}px`,
                    left: `${hoverStyle.left}px`,
                }}
            ></div>
        </div>
    );
};

export default HoverButton;