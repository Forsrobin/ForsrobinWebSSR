import { ProjectType, projects } from '@app/constants'
import { cn } from '@app/utils/cn'
import React, { useEffect, useState } from 'react'

export const InfiniteMovingCards = ({
  items,
  direction = 'left',
  speed = 'fast',
  pauseOnHover = true,
  className,
}: {
  items: ProjectType[]
  direction?: 'left' | 'right'
  speed?: 'fast' | 'normal' | 'slow'
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  useEffect(() => {
    addAnimation()
  }, [])
  const [start, setStart] = useState(false)
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === 'left') {
        containerRef.current.style.setProperty('--animation-direction', 'forwards')
      } else {
        containerRef.current.style.setProperty('--animation-direction', 'reverse')
      }
    }
  }
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === 'fast') {
        containerRef.current.style.setProperty('--animation-duration', '20s')
      } else if (speed === 'normal') {
        containerRef.current.style.setProperty('--animation-duration', '40s')
      } else {
        containerRef.current.style.setProperty('--animation-duration', '80s')
      }
    }
  }
  return (
    <div
      ref={containerRef}
      className={cn(
        'scroller relative z-20  max-w-full overflow-hidden  [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]',
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          ' flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap',
          start && 'animate-scroll ',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
      >
        {items.map((item, idx) => (
          <li
            className='w-[350px] max-w-full relative rounded-2xl border border-b-0 flex-shrink-0 border-slate-700 px-8 py-6 md:w-[450px]'
            style={{
              background: 'linear-gradient(180deg, var(--slate-800), var(--slate-900)',
            }}
            key={item.title}
          >
            <blockquote className='relative h-full '>
              <div
                aria-hidden='true'
                className='user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]'
              ></div>
              <div className='mb-10 flex flex-col  gap-4 h-full'>
                <div className='flex gap-4 items-center justify-start'>
                  <a href={item.link} target='_blank' rel='noreferrer'>
                    <img src={item.thumbnail} alt={item.title} className='rounded-lg max-h-16' />
                  </a>
                  <h2 className=' text-xl leading-[1.6] text-white font-normal'>{item.title}</h2>
                </div>
                <span className='relative z-20 text-sm leading-[1.6] grow-1 text-gray-400 font-normal'>{item.description}</span>
                <div className='grow justify-end items-end flex'>
                  <a href={item.link} target='_blank' rel='noreferrer' className='btn btn-primary w-full grow'>
                    Visit
                  </a>
                </div>
              </div>
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const Projects = () => {
  return (
    <section id='projects' className='px-10 md:px-40 pt-20'>
      <div className='flex flex-col items-center justify-center'>
        <h2 className='text-white text-6xl my-4 font-bold uppercase mb-5'>Projects</h2>
        <p className='text-gray-500 text-center'>Why not check out some of my previous projects I have worked on!</p>
      </div>
      <div className='mt-5  w-full'>
        <InfiniteMovingCards speed={"slow"} pauseOnHover={false} items={projects} />
      </div>
    </section>
  )
}
