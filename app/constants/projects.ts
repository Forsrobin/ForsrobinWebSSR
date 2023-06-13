import Malvacom from '../assets/projects/malvacom.jpg'
import Calixter from '../assets/projects/calixter.jpg'
import Servicepool from '../assets/projects/servicepool.jpg'
import CapsPiraterna from '../assets/projects/capspirater.png'
import Aviliax from '../assets/projects/aviliax.png'
import Fiskskaldjur from '../assets/projects/fiskskaldjur.jpg'

export const PROJECTS = [
  {
    id: 1,
    name: 'Fiskskaldjur',
    description:
      'Fiskskaldjur.se is an e-commerce and store company, having stores in several locations in Sweden. They specialize in selling fresh quality sea. I heleped developed their order- and webshop- system for smooth order handling, stock status check ups and more.',
    image: Fiskskaldjur,
    url: 'https://fiskskaldjur.se',
    technologies: ['Vue', 'NodeJs', 'Custom CSS', 'Docker', 'Nginx']
  },
  {
    id: 2,
    name: 'Aviliax',
    description: 'Aviliax is a company that specializes in developing web applications and websites.',
    image: Aviliax,
    url: 'https://aviliax.com',
    technologies: ['Sveltekit', 'Nginx', 'Docker']
  },
  {
    id: 3,
    name: 'Caps Piraterna',
    description:
      'Caps Piraterna is a website dedicated to a group of students that like to do stuff together. The premise of the site is to be able to share funny moments, find drinking games you can play with your friends and general information about this group. I developed the website with components including a backend CMS running on Wagtail python, React frontend and dockerization of the whole project.',
    image: CapsPiraterna,
    url: 'https://capspirater.se/',
    technologies: ['React', 'Wagtail', 'Docker', 'Django']
  },
  {
    id: 4,
    name: 'Servicepool',
    description:
      'Servicepool.se is a dedicated company that carries out the work with personal commitment for the best results. Clients contact them to get some work done in the garden, renovations, facade painting and such. They always carry out the work with quality and accuracy and make sure the customer is always in focus',

    image: Servicepool,
    url: 'https://servicepool.se/',
    technologies: ['PHP', 'jQuery', 'CSS', 'Javascript']
  },
  {
    id: 5,
    name: 'Calixter',
    description:
      'Calixter is an e-commerce company that focuses on lighting and design lamps. We believe that it is not just furniture that creates a perfect home, but a combination of the right lighting and stylish designs.',
    image: Calixter,
    url: 'https://calixter.se/',
    technologies: ['CSS', 'jQuery', 'Javascript']
  },
  {
    id: 6,
    name: 'Malvacom',
    description:
      'Malvacom is the small personal consulting firm that delivers applications and server solutions to clients throughout the Nordic region. We have some of Swedens most experienced consultants on our team, and we love difficult problems and challenges! With us, you can get assistance with all aspects of your IT project.',
    image: Malvacom,
    url: 'https://malvacom.se/',
    technologies: ['React', 'Wagtail', 'Docker', 'Django', 'Kubernetes', 'Nginx', 'PostgreSQL']
  }
]
