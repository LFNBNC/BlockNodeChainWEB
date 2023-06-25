import React from 'react';
import 'tailwindcss/tailwind.css';
import BentoGrid from '../Component/BentoGrid';

const Grid = () => {
  const gridContainerStyle = 'grid-cols-3 gap-4 md:w-1/2 mx-auto';
  const gridItemStyle = 'bg-white hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center text-gray-800 rounded-lg p-4';
  const gridContainerBgStyle = 'bg-gradient-to-b from-blue-100 to-blue-300';
  const boxShadowStyle = 'shadow-md';
  const gridStyle: React.CSSProperties = {
    height: '30cm',
    borderRadius: '10px',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  };

  return (
    <div className={`container no-padding footer-note ${gridContainerBgStyle}`}>
      <hr className="my-10 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-7" />
      <div className={`grid ${gridContainerStyle} ${boxShadowStyle}`} style={gridStyle}>
        <BentoGrid>
          <div className={gridItemStyle}>Hello</div>
          <div className={gridItemStyle}>Hello</div>
          <div className={gridItemStyle}>Hello</div>
        </BentoGrid>
      </div>
    </div>
  );
};

export default Grid;


