import React from 'react'
import Marquee from './Marquee'
import { ClientOnly } from 'remix-utils'

function PreviouseProjects() {
  return (
    <div className='p-10 md:p-40 w-full flex flex-col justify-center items-center'>
      <h2 className='text-5xl text-white mb-16 font-bold'>Previouse Projects</h2>
      <ClientOnly>{() => <Marquee />}</ClientOnly>
    </div>
  )
}

export default PreviouseProjects
