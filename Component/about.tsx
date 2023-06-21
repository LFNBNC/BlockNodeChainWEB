import React from 'react';
import 'tailwindcss/tailwind.css';

const About = () => {
  const frameStyle = {
    position: 'static',
    bottom: '1rem',
    right: '1rem',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    background: 'linear-gradient(to right, blue, violet)',
  };

  return (
    <footer className="bg-violet dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="justify-center">
          <div className="flex justify-center">
            <h1 className="font-mono">
              <a href="https://github.com/L-F-N-BlockNodeChain" style={{ marginRight: '2cm' }}>
                Github
              </a>
            </h1>
            <h2></h2>
            <h3 className="font-mono">
              <a href="https://www.linkedin.com/company/lfnbnc" style={{ marginLeft: '2cm' }}>
                LinkedIn
              </a>
            </h3>
          </div>
          <div className="flex justify-center font-mono"></div>
        </div>
      </div>

      <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-7" />

      <div style={frameStyle}>
        <h1 className="text-sm font-mono">© 2023  Block Node Chain™</h1>
      </div>
    </footer>
  );
};

export default About;
