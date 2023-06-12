import React from 'react';
import { NavLink } from 'react-router-dom';
import LanguageContext from './LanguageContext';

const NavigationBar = () => {
    const { language, toEnglish, toFrench } = React.useContext(LanguageContext);

    return (
        <div class="h-screen fixed top-0 right-0 w-1/5 shadow-gray-400 shadow-sm p-4 text-xl">
            
            
            <div class="box fixed right-0 top-0 mb-4 mt-1 mx-7 grid grid-cols-2 shadow-gray-400 shadow-sm rounded overflow-hidden">
                <div onClick={toEnglish} className={`px-2 flex text-lg ${language === "en" ? "bg-slate-500" : ""}`}>
                    EN
                </div>
                <div onClick={toFrench} className={`px-2 flex text-lg ${language === "fr" ? "bg-slate-500" : ""}`}>
                    FR
                </div>
            </div>

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
        </div>
    );
};

export default NavigationBar;
