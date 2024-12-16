import React, { useState } from 'react';
import './CustomDropdown.css';

const CustomDropdown = ({ options, onOptionSelect, selectedOption, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleOptionClick = (option) => {
        onOptionSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="custom-dropdown">
            <div className="custom-dropdown-selected" onClick={toggleDropdown}>
                {selectedOption || <p className='izberi-option'>{placeholder}</p>}
                <svg
                    version="1.2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                    width="24"
                    height="24"
                    className="dropdown-arrow"
                >
                    <path
                        id="fill"
                        className="s0"
                        d="m42.2 12l-18.5 25-18.4-25z"
                        style={{ opacity: 0.5, fill: '#ffffff' }}
                    />
                    <path
                        id="border"
                        fillRule="evenodd"
                        className="s1"
                        d="m44 12.1q0 0.6-0.4 1l-18 26q-0.2 0.4-0.7 0.7-0.4 0.2-0.9 0.2-0.5 0-0.9-0.2-0.5-0.3-0.7-0.7l-18-26q-0.4-0.4-0.4-1 0-0.5 0.2-1 0.3-0.5 0.8-0.8 0.4-0.3 1-0.3h36q0.6 0 1 0.3 0.5 0.3 0.8 0.8 0.2 0.5 0.2 1zm-5.8 1.9h-28.4l14.2 20.5z"
                        style={{ opacity: 0.5, fill: '#ffffff' }}
                    />
                </svg>
            </div>
            {isOpen && (
                <ul className="custom-dropdown-options">
                    {options.map((option, index) => (
                        <li
                            key={index}
                            className="custom-dropdown-option"
                            onClick={() => handleOptionClick(option)}
                        >
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CustomDropdown;