import React from 'react';
import { NavLink } from 'react-router-dom';
import LanguageContext from './LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
    const { language, toEnglish, toFrench } = React.useContext(LanguageContext);

    return (
        <div class="h-screen fixed right-0 w-1/5 shadow-gray-400 shadow-sm p-4 text-xl">
            <div class="relative w-full h-full">
                
                <div class="z-10 absolute right-0 top-0 m-5 mt-1.5 grid grid-cols-2 shadow-gray-400 shadow-sm rounded overflow-hidden">
                    <div onClick={toEnglish} className={`z-10 px-2 flex text-lg`}>
                        <img class="w-8 h-8 object-contain" src="https://img.icons8.com/fluency/48/great-britain-circular.png" alt="great-britain-circular"/>
                    </div>
                    <div onClick={toFrench} className={`z-10 px-2 flex text-lg`}>
                        <img class="w-8 h-8 object-contain" src="https://img.icons8.com/fluency/48/france-circular.png" alt="france-circular"/>
                    </div>
                    <div className={`absolute bg-gray-300 h-full w-1/2 transition-all duration-500 rounded ${language === "en" ? 'left-0' : 'left-1/2'}`}/>
                </div>

                <div class="absolute inset-0 p-5 mt-5">
                    <NavLink to="/">
                        <div class="rounded p-5 my-5 px-15 shadow-gray-400 shadow-sm duration-300 hover:bg-gray-300 hover:shadow-white">
                            {language === "en" ? "Home" : "Accueil"}
                        </div>
                    </NavLink>
                    <NavLink to="/profil">
                        <div class="rounded p-5 my-5 px-15 shadow-gray-400 shadow-sm duration-300 hover:bg-gray-300 hover:shadow-white">
                            Profil{language === "en" ? "e" : ""}
                        </div>
                    </NavLink>
                    <NavLink to="/contact">
                        <div class="rounded p-5 my-5 px-15 shadow-gray-400 shadow-sm duration-300 hover:bg-gray-300 hover:shadow-white">
                            Contact
                        </div>
                    </NavLink>
                    <NavLink to="/portfolio">
                        <div class="rounded p-5 my-5 px-15 shadow-gray-400 shadow-sm duration-300 hover:bg-gray-300 hover:shadow-white">
                            Portfolio
                        </div>
                    </NavLink>
                    <NavLink to="/test">
                        <div class="rounded p-5 my-5 px-15 shadow-gray-400 shadow-sm duration-300 hover:bg-gray-300 hover:shadow-white">
                            Test
                        </div>
                    </NavLink>
                </div>

                <div class="absolute bottom-0 h-auto w-full">
                    <div class="relative flex justify-end">
                        <div class="flex items-center w-full justify-end">
                            <div class="bubble h-10 bounce-animation shadow-gray-400 shadow-sm flex items-center justify-center p-5">
                                <p class="text-base">
                                    {language === "en" ? "Download my CV here!" : "Téléchargez mon CV ici !"}
                                </p>
                            </div>
                        </div>
                        <a href="https://cable.ayra.ch/empty/?id=0" download>
                            <div class="inline-flex items-center justify-center rounded p-5 m-5 shadow-gray-400 shadow-sm duration-300 hover:bg-gray-300 hover:shadow-white">
                                <FontAwesomeIcon icon={faDownload} class="w-6 h-6" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavigationBar;
