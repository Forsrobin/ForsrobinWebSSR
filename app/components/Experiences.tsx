import { useEffect } from 'react'
import { technologies } from '../constants'
import OrbsCanvas from './canvas/Orbs.client'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Typewriter from 'typewriter-effect/dist/core'

import type { Variants } from 'framer-motion'
import { motion } from 'framer-motion'
import { ClientOnly } from 'remix-utils'

function Experiences({ isMobile }: { isMobile: boolean }) {
  const getAllNamesFromTechnologies = () => {
    const names = []
    for (const technology of technologies) {
      names.push(technology.name)
    }
    return names
  }

  useEffect(() => {
    new Typewriter('#technologiesTypewriter', {
      strings: getAllNamesFromTechnologies(),
      loop: true,
      delay: 75,
      autoStart: true
    })
  }, [])

  const cardVariants: Variants = {
    offscreen: {
      display: 'none'
    },
    onscreen: {
      display: 'flex'
    }
  }

  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, margin: '0px 400px' }}
      className='bg-base-100 px-10 md:px-40 pt-20 md:pt-44 md:pb-20 flex flex-col md:flex-row items-center'>
      <div className='grow flex bg-red-200'>
        <div className='bg-base-100'>
          <h1 className={`mt-5 md:mt-2 text-1xl md:text-2xl font-medium text-base-content`}>I can help you with</h1>
          <h1 id='technologiesTypewriter' className={`mt-5 mb-8 md:mt-2 text-6xl font-bold text-primary`}></h1>
          <p className={`text-lg mt-4 text-base-content`}>
            With a degree in computer security and extensive experience in the field,
            I am well-equipped to assist you with your upcoming project. As a full-stack developer I bring a diverse
            skill set, a broad range of technologies, expertise, and a strong passion for 
            learning the newest. Feel free to explore my portfolio, and let's work together on your project.
          </p>
          <div className='mt-10 md:mt-5 flex flex-wrap gap-2 max-w-lg w-full '>
            <div className='badge bg-transparent badge-outline outline-white'>Backend</div>
            <div className='badge bg-transparent badge-outline outline-white'>Frontend</div>
            <div className='badge bg-transparent badge-outline outline-white'>DevOps</div>
            <div className='badge bg-transparent badge-outline outline-white'>Networking</div>
            <div className='badge bg-transparent badge-outline outline-white'>Azure</div>
            <div className='badge bg-transparent badge-outline outline-white'>Kubernetes</div>
            <div className='badge bg-transparent badge-outline outline-white'>CMake</div>
            <div className='badge bg-transparent badge-outline outline-white'>Scrum</div>
            <div className='badge bg-transparent badge-outline outline-white'>Agile planning</div>
            <div className='badge bg-transparent badge-outline outline-white'>Apache2</div>
            <div className='badge bg-transparent badge-outline outline-white'>Ghidra</div>
            <div className='badge bg-transparent badge-outline outline-white'>IDA pro</div>
            {technologies.map((item, index) => (
              <div key={index} className='badge bg-transparent badge-outline outline-white'>
                {item.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PLanet center */}
      <motion.div variants={cardVariants} className='px-40 pt-24 md:pt-0 ml-0 md:ml-20'>
        <div className='w-48 md:w-64 h-48 md:h-64 relative shadow-2xl bg-portait bg-cover z-10 flex items-center justify-center transition-all'>
          {/* Loop through all orbitItems and space them evenly around the planet */}
          {technologies.map((item, index) => (
            <div
              key={index}
              className='absolute w-8 h-8 md:w-14 md:h-14'
              style={{
                transform: `rotate(${index * (360 / technologies.length)}deg) translateX(${isMobile ? '130px' : '200px'}) rotate(-${index * (360 / technologies.length)
                  }deg)`
              }}>
              <ClientOnly fallback={null}>{() => <OrbsCanvas image={item.image} />}</ClientOnly>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Experiences
