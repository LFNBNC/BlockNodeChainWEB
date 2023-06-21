import React from 'react';
import 'tailwindcss/tailwind.css';
import BentoGrid from '../Component/BentoGrid'

const Grid = () => {
  const gridStyle = {
    height: '20cm',
    width: '40cm',
  };

  return (
    <div className="container no-padding footer-note">
      <hr className="my-10 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-7" />
      <div className="grid grid-cols-bento grid-rows-bento gap-4" style={gridStyle}>
        <BentoGrid>
          <div className="bg-gray-500 hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center text-white">
            B
          </div>
          <div className="bg-gray-500 hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center text-white">
            N
          </div>
          <div className="bg-gray-500 hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center text-white">
            C
          </div>
        </BentoGrid>
      </div>
    </div>
  );
}

export default Grid;

