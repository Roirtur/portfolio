import React , { useContext } from 'react';
import LanguageContext from '../Components/LanguageContext';
import NavigationBar from '../Components/NavigationBar';


const Home = () => {
    const { language } = useContext(LanguageContext);
    return (
        <div class="container flex flex-col w-screen h-screen bg-[#F7F5F6]">
            <NavigationBar class="z-10"/>
            <div class="slide-right-animation bg-[#1E2022] w-5/6 mt-[4%] rounded-r-lg">
                <div class="pl-[5%]">
                    <span class="Monoton text-[250px] text-[#C9D6DF]">{language === "en" ? "W" : "B"}</span><span className={`${language === "en" ? '-m-9' : ''} AlfaSlabOne text-[#C9D6DF] text-[150px]`}>{language === "en" ? "elcome" : "ienvenue"}</span>
                </div>
            </div>

            <div class="flex justify-end my-7 slide-left-animation">
                <div class="bg-[#C9D6DF] w-3/4 mt-10 rounded-l-lg p-6">
                    <span class="AlfaSlabOne text-[#1E2022] text-[70px]"> Arthur Macdonald </span>
                </div>
            </div>

            <div class="flex items-center my-10 slide-right-animation-2">
                <div class="text-center bg-[#52616B] w-3/4 mt-7 rounded-r-lg p-6">
                    <span class="AlfaSlabOne text-[#F0F5F9] text-[30px]"> 
                        {language === "en" ? (
                            <>
                                <span>A </span>
                                <span class="Glitch">bug </span>
                                <span>? You mean a feature!</span>
                            </>
                            ) : (
                            <>
                                <span>Un </span>
                                <span class="Glitch">bug </span>
                                <span>? Vous voulez dire une fonctionalité!</span>
                            </>
                        )}
                    </span>
                </div>
            </div>

        </div>
    );
};

export default Home;