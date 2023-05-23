import React from 'react';

const VideoBackground = () => {
    return (
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: -1  }}>
        <video  autoPlay muted loop style={{ objectFit: 'cover', width: '100%', height: '100%'  }}>
          <source src="/vd.mp4" type="video/mp4" />
        </video>
      </div>
    );
  };
export default VideoBackground;

