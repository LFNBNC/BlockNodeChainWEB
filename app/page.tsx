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
       <div className='flex-col justfiy-start'>
          <a
          href="https://lfnbnc.gitbook.io/blockchain/"
          className="Border">
            <h1 className={'text-2x1 font-mono'}> Documentation </h1>
           </a>
          </div>
       
       
 <div className=" flex w-full items-end justify-end ">
          <a
            className=" top-10 right-11"
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
      
      
      <div className="link">
        <a
          href="https://github.com/L-F-N-BlockNodeChain"
          className="Border">
          <h1 className={` text-0x0 font-bold `}>
            {' '}
          Block Node Chain</h1>
        </a>
      </div>
    
    
    
  </main>
  )
}



