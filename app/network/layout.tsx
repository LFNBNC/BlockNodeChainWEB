import React from 'react'

export default function Networklayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
   <>
     <nav> Network</nav>
     <main>
        {children}
     </main>
   
   </>
  )
}
