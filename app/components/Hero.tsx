import { motion } from 'framer-motion'
import { useEffect } from 'react'
import ComputersCanvas from './canvas/Computer.client'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Typewriter from 'typewriter-effect/dist/core'
import { ClientOnly } from 'remix-utils'

function Hero({ isMobile }: { isMobile: boolean }) {
  useEffect(() => {
    new Typewriter('#typewriter', {
      strings: ['Welcome', 'Välkommen', '欢迎', 'Velkommen', 'いらっしゃいませ', 'Tervetuloa', 'Willkommen'],
      loop: true,
      delay: 75,
      autoStart: true
    })
  }, [])

  return (
    <section className='relative w-full h-screen mx-auto shadow-2xl'>
      <div className='absolute inset-0 top-[200px] mx-auto px-5 md:px-20 flex flex-row items-start gap-5 z-50`'>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-primary' />
          <div className='w-1 sm:h-80 h-60 bg-gradient-to-b from-primary ' />
        </div>

        <div className='ml-5'>
          <h1 id='typewriter' className={`mt-5 md:mt-2 text-5xl md:text-8xl font-bold text-white`} />
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

      <div className='pt-24 md:py-20 w-full md:w-1/2 h-full items-end justify-end flex ml-auto '>
        <ClientOnly fallback={null}>{() => <ComputersCanvas isMobile={isMobile} />}</ClientOnly>
      </div>

      <div className='absolute md:bottom-10 bottom-20 w-full flex justify-center items-center'>
        <a href='#about'>
          <motion.div
            animate={{
              y: [0, 14, 0]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className='text-1xl md:text-3xl before:content-["╲╱"]'
          />
        </a>
      </div>
    </section>
  )
}

export default Hero
