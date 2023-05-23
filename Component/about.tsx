import React from 'react';
import 'tailwindcss/tailwind.css';

const About = () => {
  return (
    <footer className="bg-violet dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="justify-center">
          
        
 
 
 
  <div className="flex justify-center">
    <h1 className="font-mono">
      <a href="https://github.com/L-F-N-BlockNodeChain">Github</a>
     </h1>
     <h2>
     ~/\~
     </h2>
     <h3 className='font-mono'>
     <a href="https://www.linkedin.com/company/lfnbnc">Linkedln</a>
     </h3>
  </div>
  <div className="flex justify-center font-mono">
    
   </div>
</div>
 </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="font-mono text-sm text-gray-500 sm:text-center dark:text-gray-400 flex justify-center">© 2023  Block Node Chain™</span>
          <span className="font-mono text-sm text-gray-500 sm:text-center dark:text-gray-400 flex justify-center">   All Rights Reserved</span>
      </div>
      
</footer>
   
  );
};

export default About;
