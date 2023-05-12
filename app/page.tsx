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
       
       
       
 <div className="fixed bottom-0 left-0 flex h-70 w-full items-end justify-bottom bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="fixed bottom-1 top-7 right-10"
            href="https://www.linkedin.com/company/lfnbnc"
          >
            {''}
            <Image
              src="/Main.png"
              alt="logo"
              width={40}
              height={40}
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



