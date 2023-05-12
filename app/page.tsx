import Image from 'next/image'
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-right justify-center p-10">
      <div className="z-10 w-half max-w-base   justify-center font-mono text-base lg:flex ">
        <p className="fixed left-0 top-0 shadow hover:shadow-lg flex w-full justify-center bg-violet-900/30">
          Block Node Chain Under Development
        </p>
       <div className='fixed content left-10'>
          <a
          href="https://lfnbnc.gitbook.io/blockchain/"
          className="Border">
            <h1 className={' l-10 p-1 text-indigo-400 group-hover:text-gray-100 transition duration-200'}>
               Documentation &crarr;</h1>
           </a>
          </div>
       
       
 <div className="justify-end  ">
          <a
            className="fixed flex justify-end top-10 right-11"
            href="https://www.linkedin.com/company/lfnbnc"
          >
            {''}
            <Image
              src="/Main.png"
              alt="logo"
              width={50}
              height={50}
             />
          </a>
        </div>
      </div>
      
      <div className='relative flex items-center justify-center h-screen mb-12 overflow-hidden'>
       
      <video className="absolute z-5 w-200 min-w-half min-h-half max-w-none"
      src={"/vd.mp4"}  
      width={1000} 
      height={1000} 
      autoPlay
      loop
      muted
      />

      </div>
      
      
      <div>
        <a
          href="https://github.com/L-F-N-BlockNodeChain"
          className="">
          <h1 className= "flex justify-center text-0x0 font-mono">
          Block-Node-Chain</h1>
          
        </a>
      </div>
      <h2 className='flex justify-center text-0x0 font-mono'>Github</h2>

      <div className="px-6 py-32">
  <div className="grid gap-7 items-start justify-center">
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-700 to-white-100 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
        <span className="flex items-center space-x-5">
         
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-violet-600 rotate-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11.412 15.655L9.75 21.75l3.745-4.012M9.257 13.5H3.75l2.659-2.849m2.048-2.194L14.25 2.25 12 10.5h8.25l-4.707 5.043M8.457 8.457L3 3m5.457 5.457l7.086 7.086m0 0L21 21" />
</svg>
          <span className="pr-6 text-white-100 font-mono">PoW x ZkP </span>
        </span>
        <span className="font-mono pl-6 text-blue-400 group-hover:text-gray-100 transition duration-200">Block Explorer &rarr;</span>
      </button>
    </div>
  </div>
</div>
    
    
  </main>
  )
}


