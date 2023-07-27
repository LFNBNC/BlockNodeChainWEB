import React from 'react';

const Bgv = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden'
    }}>
      <video autoPlay muted loop style={{
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        opacity: 0.1, // Set the desired opacity value here (0.0 to 1.0)
        filter: 'blur(0px)', // Set the desired blur radius here 
      }}>
        <source src="/BF.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Bgv;
