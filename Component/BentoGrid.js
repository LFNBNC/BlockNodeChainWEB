import React from 'react'

const BentoGrid = ({ children }) => {
  return (
    <div className="grid grid-cols-bento grid-rows-bento gap-4">
      {children}
    </div>
  )
}

export default BentoGrid
