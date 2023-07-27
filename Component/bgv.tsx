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

      {/* Box with White Border */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        border: '1px solid white',
        padding: '8px',
        borderRadius: '10px',
      }}>
        <div style={{
          fontSize: '3rem',
          color: 'blueviolet',
          fontWeight: 'Mono',
        }}>
          The Block Node Network Run On POC 
         
        </div>
      </div>
    </div>
  );
};

export default Bgv;
