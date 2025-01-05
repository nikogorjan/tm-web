'use client';

import React, { useState, useEffect, useRef } from 'react';
import './PulsingCircle.css';
import { useSelector, useDispatch } from 'react-redux';
import { stopLenis, startLenis } from '../../../src/app/store/lenisSlice';
import CustomDropdown from './CustomDropdown';
import Select from 'react-select';
import countryList from 'react-select-country-list'

const services = [
    {
        serviceName: 'Spletno trenerstvo',
        serviceOptions: ['1 mesec', '3 mesece']
    },
    {
        serviceName: 'Ure treninga',
        serviceOptions: ['counter']
    },
    {
        serviceName: 'Trening ena na ena',
        serviceOptions: [
            '10 treningov v živo s planom prehrane in individualnim planom treninga',
        ]
    },
    {
        serviceName: 'Trening v paru',
        serviceOptions: [
            '8 treningov v živo in plan prehrane',
            '8 treningov v živo brez plana prehrane'
        ]
    },
    {
        serviceName: 'Video svetovanje',

        serviceOptions: ['counter']
    }
];

const trainers = ['Tjaša Vrečič', 'Marsel Kolarič'];
const goals = ['Pridobivanje mišične mase', 'Hujšanje', 'Kondicija', 'Pridobivanje moči', 'Nadgradnja mentalitete', 'Svetovanje o poškodbi ali bolezni'];


const PulsingCircleSlo = () => {
    const [isActive, setIsActive] = useState(false);
    const [selectedService, setSelectedService] = useState(null);
    const [selectedOption, setSelectedOption] = useState(""); // For dropdown
    const [counter, setCounter] = useState(0); // For counter
    const [hoverStyle, setHoverStyle] = useState({});
    const lenisRef = useRef(null); // Create a ref for Lenis
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [selectedTrainer, setSelectedTrainer] = useState(''); // For trainer dropdown
    const [selectedGoal, setSelectedGoal] = useState(''); // For goal dropdown
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [message, setMessage] = useState('');

    // Handler functions to update state
    const handleNameChange = (e) => setName(e.target.value);
    const handleEmailChange = (e) => setEmail(e.target.value);
    const handlePhoneChange = (e) => setPhone(e.target.value);
    const handleCountryChange = (selectedOption) => {
        setSelectedCountry(selectedOption);
    };

    const options = countryList().getData();


    const handleTrainerSelect = (option) => {
        setSelectedTrainer(option);
    };

    const handleGoalSelect = (option) => {
        setSelectedGoal(option);
    };


    // Function to toggle the menu
    const toggleMenu = () => {
        setIsActive(!isActive);
    };

    // Function to handle service selection
    const handleServiceClick = (service) => {
        setSelectedService(service);
        setSelectedOption(""); // Reset selected option
        setCounter(0); // Reset counter
    };

    // Function to handle mouse hover
    const handleMouseEnter = (e) => {
        const rect = e.target.getBoundingClientRect();
        const hoverX = e.clientX - rect.left;
        const hoverY = e.clientY - rect.top;
        setHoverStyle({
            top: hoverY,
            left: hoverX,
        });
    };

    // Function to handle dropdown option selection
    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    // Function to increment counter
    const incrementCounter = () => {
        setCounter(counter + 1);
    };

    // Function to decrement counter
    const decrementCounter = () => {
        setCounter(counter > 0 ? counter - 1 : 0);
    };


    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        // Prepare the data
        const formData = {
            name,
            email,
            phone,
            selectedService: selectedService?.serviceName || '',
            selectedOption: selectedOption || '',
            counter: selectedService?.serviceOptions.includes('counter') ? counter.toString() : null, // Include counter if applicable
            selectedTrainer: selectedTrainer || '',
            selectedGoal: selectedGoal || '',
            selectedCountry: selectedCountry || null,
            message,
        };

        console.log('Submitting form data:', formData); // Debugging line


        try {
            const response = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                alert('Sporočilo poslano uspešno!');
                // Optionally reset the form
                setName('');
                setEmail('');
                setPhone('');
                setSelectedService(null);
                setSelectedOption('');
                setSelectedTrainer('');
                setSelectedGoal('');
                setSelectedCountry(null);
                setMessage('');
                setCounter(0);
                setIsActive(false); // Close the form
                setCounter(0);
            } else {
                alert(`Error: ${result.message}`);
            }
        } catch (error) {
            console.error('Prišlo je do težave:', error);
            alert('Prišlo je do težave, prosimo poskusite znova ali napišite sporočilo na: info@tmlifestylecoaching.com');
        }
    };


    return (
        <div className={`menu2 ${isActive ? 'active' : ''}`}>
            <div className={`pulsing-circle-main ${isActive ? 'active' : ''}`}>
                <div className={`container ${isActive ? 'active' : ''}`}>
                    {!isActive && (
                        <span className='pulse-button' onClick={toggleMenu}>Prijava</span>
                    )}
                </div>
            </div>

            <div className='signup-menu'>
                <div className={`navigations2 ${isActive ? 'show-navs2' : ''}`}>
                    <div className='navigations2-first-row'>
                        {isActive && (
                            <button className="nav-tgl1" type="button" aria-label="toggle menu" onClick={toggleMenu}>
                                <span aria-hidden="true"></span>
                            </button>
                        )}
                    </div>

                    <div className='red-form-wrapper'>
                        <h2 className='red-form-header'>Pridružite se nama na treningu!</h2>
                        <h2 className='red-form-header3'>Storitev</h2>

                        <div className='red-form-services-row'>
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className={`service-item ${selectedService?.serviceName === service.serviceName ? 'selected-service' : ''}`}
                                    onClick={() => handleServiceClick(service)}
                                    onMouseEnter={handleMouseEnter}
                                >
                                    <span className='service-name'>{service.serviceName}</span>
                                    <div
                                        className="hover-circle"
                                        style={{
                                            top: `${hoverStyle.top}px`,
                                            left: `${hoverStyle.left}px`,
                                        }}
                                    ></div>
                                </div>
                            ))}
                        </div>

                        <div className='services-options-drop-down'>
                            {selectedService && (
                                selectedService.serviceOptions.length > 0 && selectedService.serviceOptions[0] === 'counter' ? (
                                    <div className='st-row'>
                                        <h2 className='red-form-header3 st-ur'>Število ur:</h2>
                                        <div className='counter-container'>
                                            <button onClick={decrementCounter}>-</button>
                                            <span>{counter}</span>
                                            <button onClick={incrementCounter}>+</button>
                                        </div>
                                    </div>
                                ) : (
                                    <CustomDropdown
                                        options={selectedService ? selectedService.serviceOptions : []}
                                        onOptionSelect={handleOptionClick}
                                        selectedOption={selectedOption}
                                        placeholder="Izberi"  // Custom placeholder for trainer selection

                                    />
                                )
                            )}
                        </div>


                        <h2 className='red-form-header3 section-margin'>Podatki</h2>
                        <div className='user-data-container'>
                            <div className='user-data-row'>
                                <input
                                    type="text"
                                    placeholder="Ime"
                                    className="custom-input izberi-option"
                                    value={name}
                                    onChange={handleNameChange}
                                />
                                <input
                                    type="text"
                                    placeholder="Email"
                                    className="custom-input izberi-option"
                                    value={email}
                                    onChange={handleEmailChange}
                                />
                            </div>
                            <div className='user-data-row notwide'>
                                <input
                                    type="text"
                                    placeholder="Telefon"
                                    className="custom-input izberi-option flex11"
                                    value={phone}
                                    onChange={handlePhoneChange}
                                />

                            </div>
                        </div>

                        <h2 className='red-form-header3 section-margin'>Način treninga</h2>
                        <div className='user-data-container'></div>

                        <div className='nacin-treninga-holder'>
                            <div className='nacin-treninga-holder'>
                                <div className='user-data-row ga'>
                                    <CustomDropdown
                                        options={trainers}
                                        onOptionSelect={handleTrainerSelect}
                                        selectedOption={selectedTrainer}
                                        placeholder="Izberi trenerja"  // Custom placeholder for trainer selection
                                    />
                                    <CustomDropdown
                                        options={goals}
                                        onOptionSelect={handleGoalSelect}
                                        selectedOption={selectedGoal}
                                        placeholder="Izberi svoj cilj"  // Custom placeholder for goal selection
                                    />
                                </div>
                            </div>
                        </div>



                        <h2 className='red-form-header3 section-margin'>Dodatno</h2>
                        <div className='user-data-container'></div>

                        <div className='bigtext-container'>
                            <textarea
                                className="big-text-box"
                                placeholder="Sporočilo"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                        </div>


                        <button type="submit" className="service-item big-send-button" onMouseEnter={handleMouseEnter} onClick={handleSubmit}>
                            <span className='service-name'>Pošlji</span>
                            <div
                                className="hover-circle send-button-circle"
                                style={{
                                    top: `${hoverStyle.top}px`,
                                    left: `${hoverStyle.left}px`,
                                }}
                            ></div>
                        </button>

                        <div className='end'></div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PulsingCircleSlo;