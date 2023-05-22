import React from 'react'
import Image from 'next/image'


const logos = () => {
  return (
    <div className="flex justify-center">
    <a className="fixed flex top-6 right-10" href="https://www.linkedin.com/company/lfnbnc">
      <Image src="/svg.svg" alt="logo" width={70} height={70} />
      <div className="fixed flex top-5 right-10">
        <Image src="/whitesvg.svg" alt="Logo" width={70} height={70} />
      </div>
    </a>
  </div>



  )
}
export default logos;