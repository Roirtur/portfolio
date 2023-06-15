import React from 'react';
import { NavLink } from 'react-router-dom';
import LanguageContext from './LanguageContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const CategoriesBox = ({ to, children }) => {
    return (
      <NavLink to={to}>
        <div className="h-[10%] min-h-[30px] min-w-[120px] flex items-center bg-[#1E2022] text-[#F0F5F9] rounded my-5 px-15 shadow-gray-400 shadow-sm duration-300 hover:bg-[#52616B] hover:shadow-[#52616B] hover:drop-shadow-lg">
          <p className="text-sm p-2 md:text-base md:p-5 lg:text-lg xl:text-xl relative">
            {children}
          </p>
        </div>
      </NavLink>
    );
  };

const NavigationBar = () => {
    const { language, toEnglish, toFrench } = React.useContext(LanguageContext);

    return (
        <div class="z-9 font-sans bg-[#F0F5F9] h-screen fixed right-0 w-1/5 shadow-gray-400 shadow-sm p-0 xl:p-4">
            <div class="relative w-full h-full">
                
                <div class="h-[4%] w-[30%] bg-[#1E2022] min-h-[30px] z-10 absolute right-0 top-0 mr-5 grid grid-cols-2 shadow-gray-400 shadow-sm rounded-full overflow-hidden">
                    <div onClick={toEnglish} className={`items-center justify-center z-10 pr-[20%] pl-[10%] flex`}>
                        <img class="pl-[4%] h-[90%] absolute" src="https://img.icons8.com/fluency/48/great-britain-circular.png" alt="great-britain-circular"/>
                    </div>
                    <div onClick={toFrench} className={`items-center justify-center z-10 pl-[20%] pr-[10%] flex`}>
                        <img class="pr-[4%] h-[90%] absolute" src="https://img.icons8.com/fluency/48/france-circular.png" alt="france-circular"/>
                    </div>
                    <div className={`absolute bg-[#F0F5F9] border-2 border-[#52616B] w-[50%] h-full transition-all duration-500 rounded-full ${language === "en" ? 'left-0' : 'left-[50%]'}`}/>
                </div>

                <div>
                    <div class="absolute inset-0 p-5 mt-5">
                        <CategoriesBox to="/">{language === "en" ? "Home" : "Accueil"}</CategoriesBox>
                        <CategoriesBox to="/profil">{language === "en" ? "Who am I ?" : "Qui suis-je ?"}</CategoriesBox>
                        <CategoriesBox to="/skills">{language === "en" ? "Skillset" : "Compétences"}</CategoriesBox>    
                        <CategoriesBox to="/portfolio">Portfolio</CategoriesBox>
                        <CategoriesBox to="/situation">{language === "en" ? "Job situation" : "Situation professionnelle"}</CategoriesBox>
                        <CategoriesBox to="/contact">{language === "en" ? "Contact me" : "Me contacter"}</CategoriesBox>
                        <CategoriesBox to="/test">Test</CategoriesBox>
                    </div>
                </div>
                
                <div class="absolute bottom-0 h-auto w-full">
                    <div class="relative flex justify-end">
                        <div class="flex items-center w-full justify-end">
                            <div class="bg-[#1E2022] text-[#F0F5F9] bubble h-10 bounce-animation shadow-gray-400 shadow-sm flex items-center justify-center p-5">
                                <p className="text-center text-xs md:text-sm lg:text-base relative">
                                    {language === "en" ? "Download my CV here!" : "Téléchargez mon CV ici !"}
                                </p>
                            </div>
                        </div>
                        <a href="https://cable.ayra.ch/empty/?id=0" download>
                            <div class="bg-[#1E2022] text-[#F0F5F9] inline-flex items-center justify-center rounded p-5 m-5 shadow-gray-400 shadow-sm duration-300 hover:bg-[#52616B] hover:shadow-[#52616B] hover:drop-shadow-lg">
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
