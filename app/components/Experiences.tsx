import { useEffect } from 'react'
import { technologies } from '../constants'
import OrbsCanvas from './canvas/Orbs.client'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Typewriter from 'typewriter-effect/dist/core'
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

  return (
    <div className='bg-base-100 px-10 md:px-40 pt-20 md:pt-44 md:pb-20 flex flex-col md:flex-row items-center'>
      <div className='grow flex bg-red-200'>
        <div className='bg-base-100'>
          <h1 className={`mt-5 md:mt-2 text-1xl md:text-2xl font-medium text-base-content`}>I can help you with</h1>
          <h1 id='technologiesTypewriter' className={`mt-5 mb-8 md:mt-2 text-6xl font-bold text-primary`}></h1>
          <p className={`text-lg mt-4 text-base-content`}>
            Experienced in the field, I can help with your next project. With a wide range of technology expertise and a passion for learning, I'm a
            full-stack developer with a civil engineering background and keen interest in computer security, hardware, and emerging technologies.
            Explore my portfolio and let's collaborate on your next venture.
          </p>
        </div>
      </div>

      {/* PLanet center */}
      <div className='px-40 pt-24 md:pt-0 ml-0 md:ml-20'>
        <div className='w-48 md:w-64 h-48 md:h-64 relative shadow-2xl bg-portait bg-cover z-10 flex items-center justify-center transition-all'>
          {/* Loop through all orbitItems and space them evenly around the planet */}
          {technologies.map((item, index) => (
            <div
              key={index}
              className='absolute w-8 h-8 md:w-14 md:h-14'
              style={{
                transform: `rotate(${index * (360 / technologies.length)}deg) translateX(${isMobile ? '130px' : '200px'}) rotate(-${
                  index * (360 / technologies.length)
                }deg)`
              }}>
              <ClientOnly fallback={null}>{() => <OrbsCanvas image={item.image} />}</ClientOnly>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experiences
