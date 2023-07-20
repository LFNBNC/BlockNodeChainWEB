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
      }}>
        <source src="/BF.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Bgv;
