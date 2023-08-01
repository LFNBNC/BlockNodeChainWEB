import React from 'react';

const Bgv = () => {
  return (
    <div style={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      overflow: 'hidden'
    }}>
      {/* Bento Grids */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '200px 1fr 150px',
        gridTemplateRows: '150px 1fr 200px',
        gap: '20px',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 1,
      }}>
        <div style={{ background: 'rgba(123, 104, 238, 0.5)' }}>Block Node Chain</div>
        <div style={{ background: 'blue' }}>t1</div>
        <div style={{ background: 'purple' }}>t2</div>
        <div style={{ background: 'yellow' }}>t3</div>
        <div style={{ background: 'orange' }}>t5</div>
        <div style={{ background: 'red' }}>t6</div>
        <div style={{ background: 'green' }}>t7</div>
        <div style={{ background: 'pink' }}>t8</div>
        <div style={{ background: 'teal' }}>t9</div>
      </div>

      {/* Text above the video */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        textAlign: 'center',
        zIndex: 2,
        color: 'white',
      }}>
        <h1 style={{ fontSize: '3rem', color: 'white' }}></h1>
        <p style={{ fontSize: '1.5rem', color: 'white' }}></p>
      </div>

      {/* Video */}
      <video autoPlay muted loop style={{
        objectFit: 'cover',
        width: '100%',
        height: '100%',
        opacity: 0.1,
        filter: 'blur(0px)',
      }}>
        <source src="/BF.mp4" type="video/mp4" />
      </video>

      
    </div>
  );
};

export default Bgv;
