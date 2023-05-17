import Image from 'next/image'
import React from 'react';
import 'tailwindcss/tailwind.css'
import VideoBackground from '../Component/bvid';



export default function Home() {
  return (

    <main className=" static min-h-screen flex-col items-right justify-center p-10">
      <div className="z-10 w-half max-w-base justify-center font-mono text-base lg:flex ">
        <h1 className="fixed left-0 top-0 shadow hover:shadow-lg flex w-full justify-center bg-violet-900/30">
          Block Node Chain Under Development &#169;
         </h1>
        <div className='fixed content left-10'>
          <a
            href="https://lfnbnc.gitbook.io/blockchain/"
            >
            <h1 className={' m-0  flex top-10 left-11'}>
               Documentation &crarr;</h1>
             </a>
        </div>
        <div className="flex justify-center ">
          <a
            className="fixed flex top-5 right-11"
            href="https://www.linkedin.com/company/lfnbnc"
          >
            {''}
            <Image
              src="/svg.svg"
              alt="logo"
              width={100}
              height={100}
            />
            <div className='fixed flex top-6 right-11'>
      <Image src="/whitesvg.svg" alt="Logo" width={100} height={100} />
      </div>
          </a>
        </div>
      </div>
       
      
      <div className=''>
      <VideoBackground/>
     
    </div>
      

      
      
    <div className="fixed  absolute  right-0 bottom-20 px-8 py-8">
        <div className="grid gap-1 items-start justify-center">
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-700 to-white-100 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <button className="relative px-3 py-1 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
              <span className="flex items-center space-x-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-violet-600 rotate-10">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21" />
                </svg>
                <span className="pr-6 text-white-100 font-mono">PoW x ZkP </span>
              </span>
              <span className="font-mono pl-6 text-blue-400 group-hover:text-gray-100 transition duration-200">Block Node Chain Network &rarr;</span>
            </button>
          </div>
        </div>
      </div>
     
      <div>
        <a
          href="https://github.com/L-F-N-BlockNodeChain"
          className="">
          <h1 className=" fixed absolute flex bottom-12 left-11 text-xm font-mono">
            Block-Node-Chain &crarr;</h1>

        </a>
      </div>
      <h2 className=' fixed  absolute flex bottom-8 left-11 text-xs font-mono'>Github</h2>
   










</main>
  )
}


