import cloud from '../assets/icons/cloud.png'
import coding from '../assets/icons/coding.png'
import cryptography from '../assets/icons/cryptography.png'
import devops from '../assets/icons/devops.png'

import gamenight from '../assets/gamenight.webp'

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

export const navLinks = [
  {
    id: 'about',
    title: 'About'
  },
  {
    id: 'work',
    title: 'Work'
  },
  {
    id: 'experience',
    title: 'Experience'
  },
  {
    id: 'contact',
    title: 'Contact'
  }
] as const

export const aboutCards = [
  {
    id: '1',
    title: 'Frontend',
    image: coding
  },
  {
    id: '2',
    title: 'Cloud',
    image: cloud
  },
  {
    id: '3',
    title: 'DevOps',
    image: devops
  },
  {
    id: '4',
    title: 'Cryptographer',
    image: cryptography
  }
] as const

export const mobileProjects = [
  {
    id: '1',
    title: 'GameNight',
    description:
      'GameNight guarantees you will have a memorable night with our selection of game modes and challenges. If you just want to sit down with some friends and play some quiet quizzes or other party games, you can, but if you want to spice up your parties and have a night to remember, you can choose to play one of our many drinking games available.',
    icon: gamenight,
    url: 'https://apps.apple.com/us/app/game-night/id1637950928'
  }
] as const

export const technologies = [
  {
    name: 'AWS',
    image: aws
  },
  {
    name: 'CPP',
    image: cpp
  },
  {
    name: 'Docker',
    image: docker
  },
  {
    name: 'Nginx',
    image: nginx
  },
  {
    name: 'Python',
    image: python
  },
  {
    name: 'React',
    image: react
  },
  {
    name: 'Svelte',
    image: svelte
  },
  {
    name: 'Tailwind',
    image: tailwind
  },
  {
    name: 'Typescript',
    image: typescript
  },
  {
    name: 'Vue',
    image: vue
  }
] as const
