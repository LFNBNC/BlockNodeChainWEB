import React from 'react'

interface linksProps{

}


const links = () => {
  
  
return (
    <div className="absolute bottom-0 left-0 right-0 text-center">
    <div>
      <a href="https://github.com/L-F-N-BlockNodeChain" className="text-xs font-mono">
        Block-Node-Chain &crarr;
      </a>
    </div>
    <h2 className="text-xs font-mono">Github</h2>
    <div className="mt-1">
      <img src="/github.svg" alt="Logo" width="15" height="15" className="inline-block ml-1" />
    </div>
  </div>

  )
}
export default links;