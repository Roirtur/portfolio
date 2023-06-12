import React, { useState } from 'react';
import NavigationBar from '../Components/NavigationBar';

const Test = () => {
  const [slide, setSlide] = useState(false);

  const handleClick = () => {
    setSlide(!slide);
  };

  return (
    <div className="w-full h-10 relative">
      <NavigationBar/>
      <div className={`h-full absolute inset-0 bg-gray-400 transition-all duration-500 w-1/2 ${slide ? 'left-0' : 'left-1/2'}`}/>
      <div className="h-full flex items-center justify-center cursor-pointer" onClick={handleClick}>
      Click me!
      </div>
      <div class="box fixed mb-4 mt-1 mx-7 grid grid-cols-2 shadow-gray-400 shadow-sm rounded overflow-hidden">
          <div onClick={handleClick} className={`z-10 px-2 flex text-lg`}>
              EN
          </div>
          <div onClick={handleClick} className={`z-10 px-2 flex text-lg`}>
              FR
          </div>
          <div className={`absolute bg-gray-400 h-full w-1/2 transition-all duration-500 rounded ${slide ? 'left-0' : 'left-1/2'}`}/>
      </div>
    </div>
    
  );
};

export default Test;