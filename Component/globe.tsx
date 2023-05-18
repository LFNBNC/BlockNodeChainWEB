import "./css/globe.css";
import createGlobe from "cobe";
import page from '../app/page';
import { useEffect, useRef } from "react";
const globe = () => {

    
 const canvasRef = useRef();

  useEffect(() => {
    let phi = 0;

const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi: 0,
      theta: 0,
      dark: 3,
      diffuse: 1.2,
      mapSamples: 20000,
      mapBrightness: 10,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
        { location: [38.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 }
      ],
      onRender: (state) => {
        // Called on every animation frame.
        // `state` will be an empty object, return updated params.
        state.phi = phi;
        phi += 0.01;
      }
    });

    return () => {
      globe.destroy();
    };
  }, []);
}
export default globe; 