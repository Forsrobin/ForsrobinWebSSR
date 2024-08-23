import { motion, useScroll, useTransform } from 'framer-motion'
import { Suspense, useEffect } from 'react'
import ComputersCanvas from './canvas/Computer.client'

// @ts-ignore
import Typewriter from 'typewriter-effect/dist/core'
import { ClientOnly } from 'remix-utils'
import MaxWidth from './MaxWidth'
import { webglAvailable } from '@app/utils/cn'

function Hero({ isMobile }: { isMobile: boolean }) {
  const { scrollYProgress } = useScroll()
  let y = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  useEffect(() => {
    new Typewriter('#typewriter', {
      strings: ['Welcome', 'Välkommen', '欢迎', 'Velkommen', 'Tervetuloa', 'Willkommen'],
      loop: true,
      delay: 75,
      autoStart: true,
    })
  }, [])

  return (
    <MaxWidth styles='mx-auto flex flex-col md:flex-row  w-full h-screen relative'>
      <motion.div style={{ y }} className='pt-52 md:pt-0 px-5 md:px-20 flex w-full md:w-1/2 md:items-center flex-row gap-5`'>
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
              I am a full-stack developer with a foundation in civil <br className='sm:block hidden' />
              engineering and a strong passion for computer security,
              <br className='sm:block hidden' />
              hardware, and emerging technologies. Take a look <br className='sm:block hidden' />
              at my portfolio to discover a variety of projects <br className='sm:block hidden' />
              and let's team up for your upcoming venture.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Circular gradient that covers half the screen */}
      <div className='absolute -bottom-0 -right-[50%] origin-bottom-left w-[1920px] h-[1920px] bg-gradient-radial from-primary/20 via-transparent to-transparent' />
      <div className='absolute -top-0 -left-[30%] origin-bottom-left w-[1920px] h-[1920px] bg-gradient-radial from-[#2c0c57]/40 via-transparent to-transparent' />

      {/* If it is not mobile */}
      {/* <motion.aside style={{ y }} className='hidden md:flex cursor-pointer mb-20 md:py-20 w-full md:w-1/2 h-full items-end '>
        <ClientOnly>
          {() =>           
            webglAvailable() ? (
              <Suspense fallback={null}>
                <ComputersCanvas isMobile={isMobile} />
              </Suspense>
            ) : null
          }
        </ClientOnly>
      </motion.aside> */}

      <div className='absolute md:bottom-10 bottom-[150px] w-full flex justify-center items-center'>
        <span>
          <motion.div
            animate={{
              y: [0, 14, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            onClick={() => {
              const element = document.getElementById('about')
              if (element) {
                const topPos = element.offsetTop - 20
                window.scrollTo({ behavior: 'smooth', top: topPos })
              }
            }}
            className='text-3xl md:text-3xl font-bold  before:content-["╲╱"] cursor-pointer'
          />
        </span>
      </div>
    </MaxWidth>
  )
}

export default Hero
