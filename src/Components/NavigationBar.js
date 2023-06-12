import React from 'react';
import { NavLink } from 'react-router-dom';
import LanguageContext from './LanguageContext';

const NavigationBar = () => {
    const { language, toEnglish, toFrench } = React.useContext(LanguageContext);

    return (
        <div class="h-screen fixed top-0 right-0 w-1/5 shadow-gray-400 shadow-sm p-4 text-xl">
            
            
            <div class="z-10 fixed right-0 top-0 m-5 mb-4 mt-3 mx-7 grid grid-cols-2 shadow-gray-400 shadow-sm rounded overflow-hidden">
                <div onClick={toEnglish} className={`z-10 px-2 flex text-lg`}>
                    <img class="w-8 h-8 object-contain" src="https://img.icons8.com/fluency/48/great-britain-circular.png" alt="great-britain-circular"/>
                </div>
                <div onClick={toFrench} className={`z-10 px-2 flex text-lg`}>
                    <img class="w-8 h-8 object-contain" src="https://img.icons8.com/fluency/48/france-circular.png" alt="france-circular"/>
                </div>
                <div className={`absolute bg-gray-400 h-full w-1/2 transition-all duration-500 rounded ${language === "en" ? 'left-0' : 'left-1/2'}`}/>
            </div>

            <div class="absolute inset-0 p-5 mt-5">
                <NavLink to="/">
                    <div class="rounded p-5 my-5 px-15 shadow-gray-400 shadow-sm">
                        Home
                    </div>
                </NavLink>
                <NavLink to="/profil">
                    <div class="rounded p-5 my-5 px-15 shadow-gray-400 shadow-sm">
                        Profil
                    </div>
                </NavLink>
                <NavLink to="/test">
                    <div class="rounded p-5 my-5 px-15 shadow-gray-400 shadow-sm">
                        Test
                    </div>
                </NavLink>
            </div>
        </div>
    );
};

export default NavigationBar;
