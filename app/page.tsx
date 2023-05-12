import Image from 'next/image'
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (

    <main className="flex min-h-screen flex-col items-right justify-center p-10">
      <div className="z-10 w-half max-w-5xl items-right justify-center font-Bold text-sm lg:flex ">
        <p className="fixed left-0 top-0 flex w-full justify-center bg-violet-900/30">
          Block Node Chain&nbsp;
          <code className="font-sans font-sans"></code>
          Under Development
        </p>
       <div className='fixed content left-10'>
          <a
          href="https://lfnbnc.gitbook.io/blockchain/"
          className="Border">
            <h1 className={'text-6x1 font-mono text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-100 m-4 rounded-full bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500'}>
               Documentation </h1>
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
      
      <div className='flex justify-center items-center h-screen'>
       
      <video className="video" src={"/vd.mp4"}  width={1000} height={1000} autoPlay loop muted />

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
    
    
  </main>
  )
}



