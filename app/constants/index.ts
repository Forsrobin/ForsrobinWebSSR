import cloud from '../assets/icons/cloud.png'
import coding from '../assets/icons/coding.png'
import cryptography from '../assets/icons/cryptography.png'
import devops from '../assets/icons/devops.png'

import gamenight from '../assets/gamenight.webp'
import workoutgenerator from '../assets/workoutgenerator.png'

import aws from '../assets/technologies/aws.png'
import cpp from '../assets/technologies/cpp.png'
import docker from '../assets/technologies/docker.png'
import nginx from '../assets/technologies/nginx.png'
import python from '../assets/technologies/python.png'
import react from '../assets/technologies/react.png'
import svelte from '../assets/technologies/svelte.png'
import tailwind from '../assets/technologies/tailwind.png'
import typescript from '../assets/technologies/typescript.png'
import vue from '../assets/technologies/vue.png'

// Projects thumbnails
import capspirater from '../assets/projects/capspirater.png'
import aviliax from '../assets/projects/aviliax.png'
import skaldjur from '../assets/projects/skaldjur.png'
import calixter from '../assets/projects/calixter.jpg'
import servicepool from '../assets/projects/servicepool.png'
import opsynk from '../assets/projects/opsynk.png'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
] as const

export const aboutCards = [
  {
    id: '1',
    title: 'Full-stack',
    image: coding,
  },
  {
    id: '2',
    title: 'Cloud',
    image: cloud,
  },
  {
    id: '3',
    title: 'DevOps',
    image: devops,
  },
  {
    id: '4',
    title: 'Security',
    image: cryptography,
  },
] as const

export const mobileProjects = [
  {
    id: '1',
    title: 'GameNight',
    description:
      'GameNight guarantees you will have a memorable night with our selection of game modes and challenges. If you just want to sit down with some friends and play some quiet quizzes or other party games, you can, but if you want to spice up your parties and have a night to remember, you can choose to play one of our many drinking games available.',
    icon: gamenight,
    url: 'https://apps.apple.com/us/app/game-night/id1637950928',
  },
  {
    id: '2',
    title: 'Workout Generator',
    description:
      'Workout Generator is a simple and easy-to-use application that generates a random workout for you. You can choose between different types of workouts and the duration of the workout.',
    icon: workoutgenerator,
    url: 'https://apps.apple.com/us/app/workout-generator/id6504248287',
  },
  {
    id: '3',
    title: 'OpSynk',
    description:
      "Whether you run a business in gardening, cleaning, property maintenance, or any other task-driven industry, OpSynk is the perfect platform to streamline your operations, enhance customer relationships, and maximize productivity. With OpSynk, you can easily manage client information, monitor team performance, and effortlessly create, assign, and schedule tasks. Automate repetitive processes, collaborate in real-time, and make smarter decisions with insightful analytics. OpSynk is a scalable solution, available via both web and mobile, giving you full control over your business – whether you're in the office or out in the field.",
    icon: opsynk,
    url: 'https://apps.apple.com/se/app/opsynk/id6677055606',
  },
] as const

export const technologies = [
  {
    name: 'AWS',
    image: aws,
  },
  {
    name: 'CPP',
    image: cpp,
  },
  {
    name: 'Docker',
    image: docker,
  },
  {
    name: 'Nginx',
    image: nginx,
  },
  {
    name: 'Python',
    image: python,
  },
  {
    name: 'React',
    image: react,
  },
  {
    name: 'Svelte',
    image: svelte,
  },
  {
    name: 'Tailwind',
    image: tailwind,
  },
  {
    name: 'Typescript',
    image: typescript,
  },
  {
    name: 'Vue',
    image: vue,
  },
] as const

export type ProjectType = {
  title: string
  link: string
  thumbnail: string
  description: string
}

export const projects: ProjectType[] = [
  {
    title: 'Capspirater',
    description:
      'Caps Piraterna is a website dedicated to a group of students that like to do stuff together. The premise of the site is to be able to share funny moments, find drinking games you can play with your friends and general information about this group of friends.',
    thumbnail: capspirater,
    link: 'https://capspirater.se/',
  },
  {
    title: 'Aviliax',
    description:
      'Aviliax derive from passion and professionality, creating your ideas with modern technology, up to date security and agile and transparent customer service. Our focus is heavily targeted towards optimizing the workflow and building a stable and secure ground for your future project.',
    thumbnail: aviliax,
    link: 'https://www.aviliax.com',
  },
  {
    title: 'FiskSkaldjur',
    description:
      'We specialize in sorting and selecting the finest and freshest fish and seafood from the Gothenburg Fish Auction, which is transported directly from Gothenburg to Stockholm on our own refrigerated trucks on the same day.',
    thumbnail: skaldjur,
    link: 'https://fiskskaldjur.se/',
  },
  {
    title: 'GameNight',
    description:
      'GameNight guarantees you will have a memorable night with our selection of game modes and challenges. If you just want to sit down with some friends and play some quiet quizzes or other party games, you can, but if you want to spice up your parties and have a night to remember, you can choose to play one of our many drinking games available.',
    thumbnail: gamenight,
    link: 'https://apps.apple.com/us/app/game-night/id1637950928',
  },
  {
    title: 'Workout Generator',
    description:
      'Workout Generator is a simple and easy-to-use application that generates a random workout for you. You can choose between different types of workouts and the duration of the workout.',
    thumbnail: workoutgenerator,
    link: 'https://apps.apple.com/us/app/workout-generator/id6504248287',
  },
  {
    title: 'Calixter',
    description:
      "A brilliant range of unique and luxurious lamps that quickly catches the attention of observers. You'll find everything from table lamps with a minimalist design to ceiling lamps with unique and creative shapes.",
    thumbnail: calixter,
    link: 'https://calixter.se/',
  },
  {
    title: 'Servicepool',
    description:
      'Servicepool was established in 2016 and is owned by Kristoffer & Erik. We are diligent, work efficiently, and take our job very seriously. There is both the option to hire us at a fixed price and an hourly rate. If you are interested, we are happy to assist you with any questions and concerns.',
    thumbnail: servicepool,
    link: 'https://servicepool.se/',
  },
  // {
  //   title: 'Tims Optik',
  //   description: 'We are your local optician who is passionate about providing you with the best solutions for your eyes.',
  //   thumbnail: timsoptik,
  //   link: 'https://timsoptik.se/',
  // },
  {
    title: 'OpSynk',
    description:
      'Whether you run a business in gardening, cleaning, property maintenance, or any other task-driven industry, OpSynk is the perfect platform to streamline your operations, enhance customer relationships, and maximize productivity.',
    thumbnail: opsynk,
    link: 'https://timsoptik.se/',
  },
] as const
