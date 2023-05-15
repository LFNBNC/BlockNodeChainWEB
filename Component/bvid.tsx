import React from 'react';

const VideoBackground = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <video autoPlay muted loop style={{ objectFit: 'cover', width: '100%', height: '100%' }}>
        <source src="/vd.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoBackground;

