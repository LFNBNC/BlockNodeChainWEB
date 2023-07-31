import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import VideoBackground from '../Component/bvid';
import About from  '@/Component/about';
import Grid from '@/Component/grid';
import Bgv from '@/Component/bgv';




const Home: React.FC = () => {
  return (
    <div>
    <div>
    <div className="min-h-screen flex flex-col items-center justify-center p-10">
      <div className="max-w-base w-full lg:flex justify-center">
        <div className="fixed content left-10">
         
        </div>
      </div>

      {/* For the logos */}
      <div>
      </div>

      {/* For the video */}
      <div>
        
        <VideoBackground />
      </div>

    {/* For the Network button */}
    <div>
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 sm:bottom-20 sm:w-1/2">
              <div className="grid gap-1 items-start justify-center">
                <div className="relative group">
                  <div
                    className="absolute -inset-0.5 bg-gradient-to-r from-blue-700 to-white-100 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt animate-pulse"
                    style={{ animationDuration: '4s' }}
                  ></div>
                  <Link href="/network">
                    <button className="relative px-2 py-2 bg-black rounded-lg leading-none flex items-center">
                      <div className="relative w-9 h-9 animate-pulse" style={{ animationDuration: '2s' }}>
                        <Image src="/whitesvg.svg" alt="Logo" width={70} height={70} className="absolute top-0 left-0" />
                        <Image src="/svg.svg" alt="Logo" width={70} height={70} className="absolute top-1 left-0" />
                      </div>
                      <h1 className="font-mono text-base pl-6 text-violet-400 group-hover:text-gray-100 transition duration-500">
                        Block Node Chain Network &rarr;
                      </h1>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
        {/* For the Grids */}
      <Grid/>
      
      <Bgv/>
      

      {/* For the bottom links */}
      <About />
    </div>
 

  );
};

export default Home;
