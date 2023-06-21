import React from 'react';
import 'tailwindcss/tailwind.css';
import BentoGrid from '../Component/BentoGrid';

const Grid = () => {
  const gridStyle: React.CSSProperties = {
    height: '40cm',
    width: '20cm',
    position: 'static'
  };

  return (
    <div className="container no-padding footer-note">
      <hr className="my-10 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-7" />
      <div className="grid grid-cols-bento grid-rows-bento gap-4 md:w-1/2 mx-auto" style={gridStyle}>
        <BentoGrid>
          <div className="bg-gray-500 hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center text-white">
            Grid-1
          </div>
          <div className="bg-gray-500 hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center text-white">
            Grid-2
          </div>
          <div className="bg-gray-500 hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center text-white">
            Grid-3
          </div>
        </BentoGrid>
      </div>
    </div>
  );
};

export default Grid;
