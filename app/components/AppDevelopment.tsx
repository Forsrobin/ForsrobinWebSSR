import PhoneOne from '@app/assets/phone-1.webp'
import PhoneTwo from '@app/assets/phone-2.webp'
import { mobileProjects } from '../constants'
import MaxWidth from './MaxWidth'

function AppDevelopment() {
  return (
    <div id='experience' className='w-full bg-white'>
      <MaxWidth styles='bg-white flex flex-col px-10 md:px-40 lg:flex-row grow p-20 pb-10 relative'>
        <div className='flex flex-col'>
          <h6 className='text-base-content text-lg uppercase'>ios / android</h6>
          <h2 className='text-base-200 text-3xl md:text-6xl my-4 font-bold uppercase mb-5'>App development</h2>
          <div className='w-full md:w-3/5'>
            <p className='text-gray text-base md:text-lg font-light'>
              With ample experience in React Native, I excel in deploying iOS and Android apps with in-app purchases, login systems, and more. My
              expertise extends to creating seamless user experiences and ensuring compatibility across multiple devices. I bring a wealth of
              knowledge and a proven track record in developing complex mobile applications
            </p>
          </div>
          <div className='hidden md:flex  flex-col flex-wrap my-10 mx-auto md:mx-0 gap-10 '>
            {mobileProjects.map((project, index) => (
              <a
                key={index}
                rel='noreferrer'
                className='w-32 h-32 hover:scale-105 transition-all shadow-2xl rounded-3xl'
                href={project.url}
                target='_blank'>
                <img src={project.icon} alt={project.title} className='rounded-3xl' />
              </a>
            ))}
          </div>
        </div>

        {/* Web design */}
        <div className='absolute hidden transition-all md:block lg:block w-96 right-0 mt-10 md:mt-40 md:-right-40 lg:mt-28 lg:-right-10 xl:-right-0 xl:mt-5'>
          <img
            width={836}
            height={478}
            className='absolute aspect-video w-96 right-0 transition ease-in-out transform hover:-translate-y-10 motion-reduce:transition-none motion-reduce:hover:transform-none '
            src={PhoneOne}
            alt='Designed by mockup.store at freepik.com, iphone'
          />
          <img
            width={836}
            height={478}
            className='absolute w-96 aspect-video -right-72 top-0 '
            src={PhoneOne}
            alt='Designed by mockup.store at freepik.com'
          />
          <img
            width={836}
            height={478}
            className='absolute w-96 -right-36 top-40 transition ease-in-out transform hover:-translate-y-10 motion-reduce:transition-none motion-reduce:hover:transform-none'
            src={PhoneTwo}
            alt='Designed by mockup.store at freepik.com'
          />
          <img
            width={836}
            height={478}
            className='absolute aspect-video w-96 right-32 top-40 transition ease-in-out transform hover:-translate-y-10 motion-reduce:transition-none motion-reduce:hover:transform-none'
            src={PhoneTwo}
            alt='Designed by mockup.store at freepik.com'
          />
        </div>

        {/* Mobile design */}
        <div className='flex md:hidden lg:hidden w-full mt-10 justify-center'>
          <img
            width={836}
            height={478}
            className='w-96 aspect-video right-0 transition ease-in-out transform hover:-translate-y-5 motion-reduce:transition-none motion-reduce:hover:transform-none '
            src={PhoneOne}
            alt='Designed by mockup.store at freepik.com'
          />
        </div>
      </MaxWidth>
    </div>
  )
}

export default AppDevelopment
