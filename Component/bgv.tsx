
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
        opacity: 0.1,
        filter: 'blur(0px)',
      }}>
        <source src="/BF.mp4" type="video/mp4" />
      </video>

      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: '3rem',
        color: 'red',
        fontWeight: 'bold',
      }}>
        BentoGrid
      </div>
    </div>
  );
};

export default Bgv;
