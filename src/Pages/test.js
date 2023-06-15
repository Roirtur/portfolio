import React, { useState } from 'react';
import NavigationBar from '../Components/NavigationBar';

import '../Styles/Test.css';

const Box = ({ w = "200", h = "150", x = "0", y = "0", children , onClick, isShown}) => {
  const [shown, setShow] = useState(false);
  const [clicked, setClicked] = useState(false);

  const act = () => {
    setClicked(true);
    onClick();
    setShow(prevState => !prevState);
  };

  return (
    <div
      onClick={act}
      className={`${
        clicked ? ((isShown && shown) ? "go-out" : "go-in") : ""
      } perspectiveBox z-[-${x}] w-[${w}px] h-[${h}px] absolute flex justify-center items-center top-[${y}px] left-[${x}px] bg-[#0000FF] rounded border-4 border-[#FF00FF] drop-shadow-[0_35px_35px_rgba(255,0,255,0.4)]`}
    >
      {children}
    </div>
  );
};

const Test = () => {
  const [shownBoxId, setShownBoxId] = useState(null);

  const handleClick = (boxId) => {
    if (shownBoxId !== boxId) {
      setShownBoxId(boxId);
    }
    console.log(shownBoxId);
  };

  return (
    <div className="w-full h-10 relative">
      <NavigationBar/>


      <Box w="200" h="150" x="300" y="150" onClick={() => handleClick('box1')} isShown={shownBoxId === 'box1'}> Yo </Box>
      <Box w="200" h="150" x="200" y="150" onClick={() => handleClick('box2')} isShown={shownBoxId === 'box2'}> Yo </Box>
      <Box w="200" h="150" x="250" y="150" onClick={() => handleClick('box3')} isShown={shownBoxId === 'box3'}> Yo </Box>
      <Box w="200" h="150" x="150" y="150" onClick={() => handleClick('box4')} isShown={shownBoxId === 'box4'}> Yo </Box>


    </div>
  );
};

export default Test;