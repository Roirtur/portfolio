import React, { createContext, useState } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Set the default language

  const toggleLanguage = () => {
    setLanguage(prevLanguage => (prevLanguage === 'en' ? 'fr' : 'en')); // Toggle between English ('en') and French ('fr')
  };

  const toEnglish = () => {
    setLanguage(prevLanguage => "en");
  };

  const toFrench = () => {
    setLanguage(prevLanguage => "fr");
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, toEnglish, toFrench }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContext;
