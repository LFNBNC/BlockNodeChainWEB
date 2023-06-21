import React from 'react';
import 'tailwindcss/tailwind.css';

const About = () => {
  const frameStyle: React.CSSProperties = {
    background: 'linear-gradient(to right, rgba(0, 0, 255, 0.5), rgba(238, 130, 238, 0.5))',
    padding: '1rem',
  };

  const textStyle: React.CSSProperties = {
    fontFamily: 'monospace',
    fontSize: '14px',
    color: 'white',
  };

  const copyrightStyle: React.CSSProperties = {
    ...textStyle,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    background: 'linear-gradient(to right, rgba(0, 0, 255, 0.5), rgba(238, 130, 238, 0.5))',
    padding: '1rem',
  };

  return (
    <footer className="bg-violet dark:bg-gray-900">
      <hr className="my-10 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-7" />
      <div className="container mx-auto">
        <div style={frameStyle}>
          <div className="">
            <h1 className="font-mono">
              <a href="https://github.com/L-F-N-BlockNodeChain" className="mr-1" style={textStyle}>
                Github
              </a>
            </h1>
            <h3 className="font-mono">
              <a href="https://www.linkedin.com/company/lfnbnc" className="ml-1" style={textStyle}>
                LinkedIn
              </a>
            </h3>
          </div>
        </div>
        <div style={copyrightStyle}>© 2023 Block Node Chain™</div>
      </div>
    </footer>
  );
};

export default About;
