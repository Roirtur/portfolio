import React, { useContext } from 'react';
import LanguageContext from '../Components/LanguageContext';
import NavigationBar from '../Components/NavigationBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldHalved } from '@fortawesome/free-solid-svg-icons';

const Profil = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div>
        <NavigationBar />
      Profil <FontAwesomeIcon icon={faShieldHalved} />
      {language === 'fr' ? 'Bonjour' : 'Hello'}
    </div>
  );
};

export default Profil;
