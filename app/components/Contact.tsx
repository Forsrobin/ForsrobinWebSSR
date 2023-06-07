import { Form } from '@remix-run/react'
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

function Contact() {
  return (
    <section id='contact' className='bg-base-100 py-20 px-10 md:px-40'>
      <div className='flex w-full md:flex-row flex-col'>
        <div className='py-8 lg:py-16 w-full md:w-1/2'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-white'>Contact me via mail</h2>
          <p className='mb-8 lg:mb-16 font-light text-center text-base-200 sm:text-xl'>
            Want to come work with me? Fill in the form and I'll get back to you as soon as possible!
          </p>
          <Form method='post' className='space-y-8'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm font-medium text-base-content'>
                Your email
              </label>
              <input
                type='email'
                name='email'
                id='email'
                className='shadow-sm text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light'
                placeholder='example@mail.com'
                required
              />
            </div>
            <div>
              <label htmlFor='subject' className='block mb-2 text-sm font-medium text-base-content'>
                Subject
              </label>
              <input
                type='text'
                minLength={5}
                id='subject'
                name='subject'
                className='block p-3 w-full text-sm  rounded-lg border shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 shadow-sm-light'
                placeholder='Let me know how what you want'
                required
              />
            </div>
            <div className='sm:col-span-2'>
              <label htmlFor='message' className='block mb-2 text-sm font-medium text-base-content'>
                Your message
              </label>
              <textarea
                id='message'
                name='message'
                minLength={10}
                className='block p-2.5 w-full text-sm rounded-lg shadow-sm border  focus:ring-primary-500 focus:border-primary-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500'
                placeholder='Leave a comment...'></textarea>
            </div>
            <button type='submit' className='btn btn-primary'>
              Send message
            </button>
          </Form>
        </div>
        <div className='divider divider-vertical md:divider-horizontal md:px-10'>OR</div>
        <div className='py-8 lg:py-16 px-4 w-full md:w-1/2'>
          <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-white'>Social medias</h2>
          <p className='mb-8 lg:mb-16 font-light text-center text-base-200 sm:text-xl'>
            Want to checkk out my social medias? Click on the icons below!
          </p>
          <div className='text-9xl flex flex-col md:flex-row justify-center md:justify-between flex-wrap gap-10'>
            <a
              href='https://twitter.com/Forsrobin_'
              rel='noreferrer'
              target='_blank'
              className='hover:text-[#1DA1F2] mx-auto transition-all hover:scale-105'>
              <FaTwitter />
            </a>
            <a
              href='https://www.youtube.com/@robinfors2178'
              rel='noreferrer'
              target='_blank'
              className='hover:text-[#FF0000] transition-all mx-auto hover:scale-105'>
              <FaYoutube />
            </a>

            <a
              href='https://www.linkedin.com/in/robin-fors-1048991a4/'
              target='_blank'
              rel='noreferrer'
              className='hover:text-[#0077b5] transition-all mx-auto hover:scale-'>
              <FaLinkedin />
            </a>

            <a
              href='https://github.com/Forsrobin'
              target='_blank'
              rel='noreferrer'
              className='hover:text-[white] transition-all mx-auto hover:scale-105 '>
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
