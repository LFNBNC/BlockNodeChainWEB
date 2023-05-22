import Image from 'next/image'
import Link from 'next/link';
import React from 'react';
import 'tailwindcss/tailwind.css'
import VideoBackground from '../Component/bvid';
import network from '@/app/network/Page';

export default function Home() {
  return (

    <main className=" static min-h-screen flex-col items-right justify-center p-10">
      <div className="z-10 w-half max-w-base justify-center font-mono text-base lg:flex ">

        <div className='fixed content left-10'>
          <a
            href="https://lfnbnc.gitbook.io/blockchain/"
            >
            <h1 className={' text-xl m-0  flex top-10 left-11 bg-gradient-to-r from-violet-400 via-white-900 to-blue-400 bg-clip-text text-transparent'}>
               Documentation &crarr;</h1>
               <Image src="/git.svg" alt="Logo" width={15} height={20} />

             </a>
        </div>
        <div className="flex justify-center ">
          <a
            className="fixed flex top-6 right-10 "
            href="https://www.linkedin.com/company/lfnbnc"
          >
            {''}
            <Image
              src="/svg.svg"
              alt="logo"
              width={70}
              height={70}
            />
            <div className='fixed flex top-5 right-10'>
      <Image src="/whitesvg.svg" alt="Logo" width={70} height={70} />
      </div>
          </a>
        </div>
      </div>
       
      
      <div className=''>
      <VideoBackground/>
     
    </div>
      
     
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 sm:bottom-20 sm:w-1/2">
        <div className="grid gap-1 items-start justify-center">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-700 to-white-100 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt animate-pulse" style={{ animationDuration: '4s' }}></div>
            <Link href="/network">
              <button className="relative px-2 py-2 bg-black rounded-lg leading-none flex items-center ">
              <div className="relative w-8 h-8 animate-ping" style={{ animationDuration: '2s' }}>
  <Image
    src="/whitesvg.svg"
    alt="Logo"
    width={70}
    height={70}
    className="absolute top-0 left-0"
  />
  <Image
    src="/svg.svg"
    alt="Logo"
    width={70}
    height={70}
    className="absolute top-1 left-0"
  />
</div>
                <h1 className="font-mono text-base pl-6 text-violet-400 group-hover:text-gray-100 transition duration-500">
                  Block Node Chain Network &rarr;
                </h1>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div>
  <a href="https://github.com/L-F-N-BlockNodeChain" className="">
    <h1 className="fixed bottom-12 left-11 text-xs font-mono">
      Block-Node-Chain &crarr;
    </h1>
  </a>
</div>

<h2 className="fixed bottom-8 left-11 text-xs font-mono">Github</h2>
<div className="fixed bottom-8 left-24">
  <img src="/github.svg" alt="Logo" width="15" height="15" />
</div>

</main>
  )
}


