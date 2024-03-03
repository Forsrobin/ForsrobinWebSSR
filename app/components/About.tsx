import Tilt from 'react-parallax-tilt'
import { aboutCards } from '../constants'

function About() {
  return (
    <section id='about' className='px-10 md:px-40 pt-20'>
      <h6 className='text-base-content text-lg uppercase'>Introduction</h6>
      <h2 className='text-white text-6xl my-4 font-bold uppercase mb-5 md:mb-10'>About me</h2>
      <div className='md:w-3/4'>
        <p className='text-gray text-base md:text-lg font-light'>
          Welcome to my portfolio website! I'm a versatile full-stack developer with a strong passion for new 
          technologies and innovation. Currently, I am pursuing a degree in civil engineering with a focus on computer 
          security, which has equipped me with a unique skill set for my projects. Whether it's crafting UX designs for 
          websites, working with hardware, or refining and optimizing code, I excel at finding innovative solutions. 
          Explore my portfolio to discover my past projects, and don't hesitate 
          to reach out if you're interested in discussing potential collaborations.
        </p>
      </div>
      <div
        className='mt-16 flex flex-col md:flex-row items-center gap-5 md:gap-10 justify-between flex-wrap
      '>
        {aboutCards.map((card) => (
          <div key={card.id} className='mx-auto'>
            <Tilt
              className={
                'parallax-effect-glare-scale w-full md:w-60 h-24 md:h-60 bg-base-200 rounded-2xl bg-gradient-to-br from-primary via-purple-950 to-secondary p-1 shadow-xl'
              }
              perspective={500}
              scale={1.02}>
              <div className='h-full w-full bg-base-100 rounded-2xl parallax-effect-glare-scale'>
                <div className={'inner-element flex flex-row md:flex-col justify-between mx-16 md:mx-0 md:justify-evenly h-full items-center '}>
                  <img src={card.image} alt={card.title} className='w-1/5 md:w-2/5' />
                  <h1 className='text-white text-xl font-bold'>{card.title}</h1>
                </div>
              </div>
            </Tilt>
          </div>
        ))}
      </div>
    </section>
  )
}

export default About
