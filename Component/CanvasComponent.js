// components/CanvasComponent.js
import React, { useEffect, useRef } from 'react';
import dynamic from 'next/dynamic'; // Import dynamic from 'next/dynamic'

const DynamicCanvas = dynamic(() => import('./DynamicCanvas'), {
  ssr: false // This option disables server-side rendering for this component
});

const CanvasComponent = () => {
  return (
    <div>
      <DynamicCanvas />
    </div>
  );
};

export default CanvasComponent;
