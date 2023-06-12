import React, { useContext } from 'react';
import LanguageContext, { LanguageProvider } from '../Components/LanguageContext';
import NavigationBar from '../Components/NavigationBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';

const Profil = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
      Profil <FontAwesomeIcon icon={faShieldHalved} />
      {language === 'fr' ? 'Bonjour' : 'Hello'}
    </div>
  );
};

const ProfilPage = () => {
  return (
    <LanguageProvider>
      <NavigationBar />
      <Profil />
    </LanguageProvider>
  );
};

export default ProfilPage;
