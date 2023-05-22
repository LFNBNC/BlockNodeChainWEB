import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import 'tailwindcss/tailwind.css';
import VideoBackground from '../Component/bvid';
import network from '@/network/Page';
import Links from '@/Component/links';
import Networkbutt from '@/Component/networkbutt';
import Logos from '@/Component/logos';





const Home: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10">
      <div className="max-w-base w-full lg:flex justify-center">
        <div className="fixed content left-10">
          <a href="https://lfnbnc.gitbook.io/blockchain/">
            <h1 className="fixed text-ls m-0 flex top-10 left-11 bg-gradient-to-r from-violet-400 via-white-900 to-blue-400 bg-clip-text text-transparent">
              Documentation &crarr;
            </h1>
            <div className='fixed m-5 flex top-10 left-20'>
              <Image src="/git.svg" alt="Logo" width={15} height={20} />
            </div>
          </a>
        </div>
      </div>

      {/*For the logos */}
      <div>
        <Logos />
      </div>


      {/*For the video  */}
      <div>
        <VideoBackground />
      </div>

      {/*For the Network button */}
      <div>
        <Networkbutt />
      </div>

      {/*For the bottom links */}
      <div>
        <Links />
      </div>

    </main>
  );
};

export default Home;
