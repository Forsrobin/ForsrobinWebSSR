import { motion } from 'framer-motion'
import { useEffect } from 'react'
import ComputersCanvas from './canvas/Computer.client'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Typewriter from 'typewriter-effect/dist/core'
import { ClientOnly } from 'remix-utils'
import MaxWidth from './MaxWidth'

function Hero({ isMobile }: { isMobile: boolean }) {
  useEffect(() => {
    new Typewriter('#typewriter', {
      strings: ['Welcome', 'Välkommen', '欢迎', 'Velkommen', 'Tervetuloa', 'Willkommen'],
      loop: true,
      delay: 75,
      autoStart: true
    })
  }, [])

  return (
    <section className='shadow-2xl'>
      <MaxWidth styles='mx-auto flex flex-col md:flex-row w-full h-screen relative'>
        <div className='pt-40 md:pt-0 px-5 md:px-20 flex w-full md:w-1/2 md:items-center flex-row gap-5`'>
          <div className='flex flex-row justify-center'>
            {/* Side graphic */}
            <div className='flex flex-col justify-start items-center mt-2'>
              <div className='w-5 h-5 rounded-full bg-primary' />
              <div className='w-1 sm:h-80 h-60 bg-gradient-to-b from-primary ' />
            </div>
            {/* The Hero text */}
            <div className='ml-5 select-none '>
              <h1 id='typewriter' className={`text-3xl md:text-3xl lg:text-4xl xl:text-8xl font-bold text-white`} />
              <h1 className={`mt-5 md:mt-2 text-5xl md:text-8xl font-bold text-white`}>
                I'm <span className='text-primary'>Robin</span>
              </h1>
              <p className={`text-lg mt-4 text-base-content`}>
                I'm a full-stack developer with a background in <br className='sm:block hidden' />
                civil engineering and a keen interest in computer
                <br className='sm:block hidden' />
                security, hardware, and emerging technologies. <br className='sm:block hidden' />
                Browse my portfolio to explore my diverse projects <br className='sm:block hidden' />
                and let's collaborate on your next venture.
              </p>
            </div>
          </div>
        </div>

        {/* If it is not mobile */}
        <aside className=' mb-20 md:py-20 w-full md:w-1/2 h-full items-end flex '>
          <ClientOnly fallback={null}>{() => <ComputersCanvas isMobile={isMobile} />}</ClientOnly>
        </aside>

        <div className='absolute md:bottom-10 bottom-[10vh] w-full flex justify-center items-center'>
          <span>
            <motion.div
              animate={{
                y: [0, 14, 0]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              onClick={() => {
                const element = document.getElementById('about')
                if (element) {
                  const topPos = element.offsetTop - 20
                  window.scrollTo({ behavior: 'smooth', top: topPos })
                }
              }}
              className='text-1xl md:text-3xl before:content-["╲╱"] cursor-pointer'
            />
          </span>
        </div>
      </MaxWidth>
    </section>
  )
}

export default Hero
