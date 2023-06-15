import React, { useState } from 'react';
import NavigationBar from '../Components/NavigationBar';

import '../Styles/Test.css';

const Box = ({ w = "200", h = "150", x = "0", y = "0", children }) => {
  const [shown, setShow] = useState(false);
  const [clicked, setClicked] = useState(false);

  const act = () => {
    setClicked(true);
    setShow(prevState => !prevState);
  };

  return (
    <div
      onClick={act}
      className={`${
        clicked ? (shown ? "go-out" : "go-in") : ""
      } perspectiveBox z-[-${x}] w-[${w}px] h-[${h}px] absolute flex justify-center items-center top-[${y}px] left-[${x}px] bg-[#0000FF] rounded border-4 border-[#FF00FF] drop-shadow-[0_35px_35px_rgba(255,0,255,0.4)]`}
    >
      {children}
    </div>
  );
};

const Test = () => {
  const [slide, setSlide] = useState(false)

  const handleClick = () => {
    setSlide(!slide);
  };

  return (
    <div className="w-full h-10 relative">
      <NavigationBar/>
      <div class="absolute flex mb-4 mt-1 mx-7 grid grid-cols-2 shadow-gray-400 shadow-sm rounded overflow-hidden">
          <div onClick={handleClick} className={`z-10 px-2 flex text-lg`}>
              EN
          </div>
          <div onClick={handleClick} className={`z-10 px-2 flex text-lg`}>
              FR
          </div>
      </div>

    <Box w="200" h="150" x="300" y="150"> Yo </Box>
    <Box w="200" h="150" x="200" y="150"> Yo </Box>
    <Box w="200" h="150" x="250" y="150"> Yo </Box>
    <Box w="200" h="150" x="150" y="150"> Yo </Box>


    </div>
  );
};

export default Test;