import { useWindowSize } from '@react-hook/window-size'
import type { MotionValue, PanInfo } from 'framer-motion'
import { motion, useSpring, useTransform } from 'framer-motion'
import type { ReactNode } from 'react'
import React, { FC, useEffect, useRef } from 'react'
import { useRafLoop } from 'react-use'
import DisplayCard from './Boxes/DisplayCard'
import { PROJECTS } from '@app/constants/projects'

const _ = {
  content: 'Around the world, around the world.',
  speed: 0.5,
  threshold: 0.014,
  wheelFactor: 1.8,
  dragFactor: 1.2
}

const MarqueeItem = ({ content, speed }: { content: ReactNode; speed: MotionValue<any> }) => {
  const item = useRef<HTMLDivElement>(null)
  const rect = useRef<any>({ width: 0, height: 0, x: 0, y: 0, top: 0, right: 0, bottom: 0, left: 0, toJSON: () => {} })
  const x = useRef(0)

  const [width, height] = useWindowSize()

  const setX = () => {
    if (!item.current || !rect.current) return
    const xPercentage = (x.current / rect.current.width) * 100
    if (xPercentage < -100) x.current = 0
    if (xPercentage > 0) x.current = -rect.current.width
    item.current.style.transform = `translate3d(${xPercentage}%, 0, 0)`
  }

  useEffect(() => {
    if (rect && rect.current) {
      rect.current = item.current?.getBoundingClientRect()
    }
  }, [width, height])

  const buffer = useRef(0)
  const loop = (e: any) => {
    x.current -= speed.get()
    setX()

    const delta = (e - buffer.current) / 1000
    const c = Math.max(1 / 60 / delta, 1)
    buffer.current = e
    x.current -= speed.get() / c
    setX()
  }

  useRafLoop(loop, true)

  return (
    <div className='text-6xl whitespace-nowrap select-none' ref={item}>
      {content}
    </div>
  )
}

const InteractiveMarquee = ({ children, inverted }: { children: ReactNode; inverted?: boolean }) => {
  const marquee = useRef<HTMLDivElement>(null)
  const slowDown = useRef(false)

  const x = useRef(0)
  const w = useRef(window.innerWidth).current
  const speed = useSpring(inverted ? -1 * _.speed : _.speed, {
    damping: 40,
    stiffness: 90,
    mass: 5
  })

  const onDragStart = () => {
    slowDown.current = true
    marquee?.current?.classList.add('drag')
    speed.set(0)
  }

  const onDrag = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    speed.set(_.dragFactor * -info.delta.x)
  }

  const onDragEnd = () => {
    slowDown.current = false
    marquee?.current?.classList.remove('drag')
    x.current = inverted ? -1 * _.speed : _.speed
  }

  const loop = () => {
    if (slowDown.current || Math.abs(x.current) < _.threshold) return
    x.current *= inverted ? -0.66 : 0.66
    if (x.current < 0) {
      x.current = Math.min(x.current, 0)
    } else {
      x.current = Math.max(x.current, 0)
    }
    speed.set((inverted ? -1 * _.speed : _.speed) + x.current)
  }

  useRafLoop(loop, true)

  return (
    <motion.div
      className='flex h-full w-full items-center cursor-grab overflow-hidden rounded-xl'
      ref={marquee}
      drag='x'
      dragConstraints={{ left: 0, right: 0 }}
      onDragStart={onDragStart}
      onDrag={onDrag}
      onDragEnd={onDragEnd}
      dragElastic={0.000001}>
      <MarqueeItem content={children} speed={speed} />
      <MarqueeItem content={children} speed={speed} />
    </motion.div>
  )
}

function Marquee() {


  
  return (
    // Skew the div so it look 3d

    <div className='w-[800px] rounded-xl overflow-hidden'>
      <InteractiveMarquee>
        <div className='flex flex-row text-white rounded-xl'>
          {PROJECTS.map((project) => {
            return <DisplayCard key={project.id} project={project} />
          })}
        </div>
      </InteractiveMarquee>
    </div>
  )
}

export default Marquee
