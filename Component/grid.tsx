import React from 'react';
import 'tailwindcss/tailwind.css';
import BentoGrid from '../Component/BentoGrid';

const Grid = () => {
  const gridStyle: React.CSSProperties = {
    height: '40cm',
  
    position: 'static',
    background: 'linear-gradient(to bottom, rgba(0, 0, 40, 0.2), rgba(0, 0, 80, 0.3))',
  };

  return (
    <div className="container no-padding footer-note">
      <hr className="my-10 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-7" />
      <div className="grid grid-cols-bento grid-rows-bento gap-4 md:w-1/2 mx-auto" style={gridStyle}>
        <BentoGrid>
          <div className="bg-white hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center text-gray-800 rounded-lg p-4">
            Grid-1
          </div>
          <div className="bg-white hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center text-gray-800 rounded-lg p-4">
            Grid-2
          </div>
          <div className="bg-white hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center text-gray-800 rounded-lg p-4">
            Grid-3
          </div>
        </BentoGrid>
      </div>
    </div>
  );
};

export default Grid;


