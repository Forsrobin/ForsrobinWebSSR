import type { PROJECTS } from '@app/constants/projects'
import { motion } from 'framer-motion'
import React, { useState } from 'react'

interface Props {
  project: (typeof PROJECTS)[0]
}

const DisplayCard: React.FC<Props> = ({ project }) => {
  const [openBox, setOpenBox] = useState<boolean>(true)

  const applyBlur = () => {
    setOpenBox(!openBox)
  }

  const variants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: 500 }
  }

  return (
    <div onClick={applyBlur} className='h-96 flex items-center relative justify-center aspect-video bg-primary rounded-xl overflow-hidden mr-4'>
      <img
        className='transition-all bg-center'
        src={project.image}
        alt={project.name}
        draggable={false}
      />
      <motion.div
        className='absolute w-full  h-full flex flex-col px-10 justify-center items-center bg-black bg-opacity-75 break-words'
        initial='closed'
        animate={openBox ? 'open' : 'closed'}
        variants={variants}
        transition={{ duration: 0.5, easings: 'easeInOut' }}>
        <h1 className='text-2xl text-white text-center font-bold mb-4'>{project.name}</h1>
        <p className='text-white text-center text-sm whitespace-break-spaces'>{project.description}</p>
      </motion.div>
    </div>
  )
}

export default DisplayCard
