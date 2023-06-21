import React from 'react';
import 'tailwindcss/tailwind.css';

const About = () => {
  const frameStyle: React.CSSProperties = {
    bottom: '1rem',
    right: '1rem',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    background: 'linear-gradient(to right, rgba(0, 0, 255, 0.5), rgba(238, 130, 238, 0.5))',
    padding: '1rem',
    borderRadius: '8px',
  };

  return (
  
    <footer className="bg-violet dark:bg-gray-900">
     
      <hr className="my-10 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-7" />
      <div style={frameStyle}>
      <div className="container mx-auto">
        
       
            <h1 className="font-mono flex justify-start">
              <a href="https://github.com/L-F-N-BlockNodeChain" className="mr-4">
                Github
              </a>
            </h1>
            <h3 className="font-mono">
              <a href="https://www.linkedin.com/company/lfnbnc" className="ml-4">
                LinkedIn
              </a>
            </h3>
          <div className="flex justify-center font-mono">© 2023 Block Node Chain™</div>
        </div>
      </div>
    </footer>
  );
};

export default About;
