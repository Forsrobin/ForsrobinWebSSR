import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import { navLinks } from '../constants'
import { useEffect, useState } from 'react'

// Create a type of all the title values in navLinks
type NavLinkId = (typeof navLinks)[number]['id']

function Navbar() {
  const [active, setActive] = useState<NavLinkId | ''>('')
  const [scrolled, setScrolled] = useState<boolean>(false)

  const updateScrolled = () => {
    const scrollTop = window.scrollY
    if (scrollTop > 100) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      updateScrolled()
    }


    updateScrolled()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className='drawer'>
      <input id='my-drawer' type='checkbox' className='drawer-toggle' />
      <div className='drawer-content flex flex-col'>
        <nav className={`${scrolled ? 'bg-base-300 shadow-xl' : ''} transition-all md:px-20 p-2 w-full flex items-center py-5 fixed top-0 z-20`}>
          <div className='w-full flex justify-between items-center mx-auto'>
            <Link
              to='/'
              className='flex items-center flex-row gap-2'
              onClick={() => {
                setActive('')
                scrollTo(0, 0)
              }}>
              <img src={Logo} alt='logo' className='text-primary w-12 h-12 ' />
              <p className='text-white text-[18px] font-bold cursor-pointer flex'>
                Forsrobin&nbsp;<span className='md:block hidden'>| Fullstack</span>
              </p>
            </Link>
            <aside className='hidden md:inline-block'>
              <ul className='tabs'>
                {navLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={'#' + link.id}
                      className={`${active === link.id ? 'text-white' : ''} tab text-base-content`}
                      onClick={() => {
                        setActive(link.id)
                      }}>
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
          <div className='flex-none md:hidden'>
            <label htmlFor='my-drawer' className='btn btn-square btn-ghost'>
              <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' className='inline-block w-6 h-6 stroke-current'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
            </label>
          </div>
        </nav>
      </div>
      <div className='drawer-side z-20'>
        <label htmlFor='my-drawer' className='drawer-overlay'></label>
        <ul className='menu p-4 w-80 h-full bg-base-100'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a
                href={'#' + link.id}
                className={`${active === link.id ? 'text-white' : 'text-base-content'} text-xl py-10`}
                onClick={() => {
                  setActive(link.id)
                  const drawer = document.getElementById('my-drawer') as HTMLInputElement
                  if (drawer) {
                    drawer.checked = false
                  }
                }}>
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
