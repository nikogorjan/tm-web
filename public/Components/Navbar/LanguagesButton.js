import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import './Navbar.css';

// LanguagesButton component
const LanguagesButton = (props) => {
  const { languages } = {
    ...LanguagesButtonDefaults,
    ...props,
  };

  // Determine the default language based on the current path
  
  const [selectedLanguage, setSelectedLanguage] = useState(null); // Initialize with null
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    // Ensure window is only accessed in the browser (client-side)
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }
  }, []);

  // Set the default language after currentPath is available
  useEffect(() => {
    if (currentPath) {
      const defaultLanguage = languages.find(
        (lang) =>
          (currentPath.includes('/en') && lang.short === 'EN') ||
          (currentPath.includes('/sl') && lang.short === 'SI')
      );
      setSelectedLanguage(defaultLanguage || languages[0]); // Fallback to the first language if none is found
    }
  }, [currentPath, languages]);

 
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false); // Close dropdown after selection

    // Define the language path
    const newLanguage = language.short === "EN" ? "/en" : "/sl"; // If English, go to "/en", otherwise "/sl"
    
    // Update the URL to reflect the selected language
    const newPath = currentPath.replace(/\/(en|sl)/, newLanguage);
    window.location.replace(newPath); // Update the URL without creating a new history entry
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1020);
    };

    // Set initial screen size
    handleResize();
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative">
      {/* Selected Language Display */}
      <div
        className="language-display"
        onClick={() => setIsDropdownOpen((prev) => !prev)}
      >
        <img
          src={selectedLanguage?.icon?.src}
          alt={selectedLanguage?.icon?.alt}
          className="language-icon"
        />
        <p className="language-short">{selectedLanguage?.short}</p>
      </div>

      {/* Dropdown Menu with Animation */}
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.nav
            animate="open"
            initial="close"
            exit="close"
            variants={{
              open: {
                visibility: "visible",
                opacity: 1,
                y: "-12%",
                x: isMobile ? "-50%" : "-50%", // Adjust based on isMobile
              },
              close: {
                visibility: "hidden",
                opacity: 0,
                y: "25%",
                x: isMobile ? "-50%" : "-50%", // Adjust based on isMobile
              },
            }}
            transition={{ duration: 0.2 }}
            className="dropdown-menu"
          >
            {languages.map((language, index) => (
              <div
                key={index}
                className="dropdown-item"
                onClick={() => handleLanguageChange(language)}
              >
                <img
                  src={language.icon?.src}
                  alt={language.icon?.alt}
                  className="dropdown-item-icon"
                />
                <span className="dropdown-item-title">
                  {language.title}
                </span>
              </div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguagesButton;

// Default Languages
const LanguagesButtonDefaults = {
  languages: [
    {
      url: "#",
      title: "Slovenian",
      short: "SI",
      icon: {
        src: "/Icons/Slovenia.svg",
        alt: "Slovenian flag",
      },
    },
    {
      url: "#",
      title: "English",
      short: "EN",
      icon: {
        src: "/Icons/GB.svg",
        alt: "British flag",
      },
    },
    
  ],
};
