import About from '@app/components/About'
import AppDevelopment from '@app/components/AppDevelopment'
import Contact from '@app/components/Contact'
import Experiences from '@app/components/Experiences'
import Hero from '@app/components/Hero'
import Navbar from '@app/components/Navbar'
import Work from '@app/components/Work'

import { useEffect, useState } from 'react'

export default function App() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 640px)')
    setIsMobile(mediaQuery.matches)
    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches)
    }
    mediaQuery.addEventListener('change', handleMediaQueryChange)
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <div className={`z-0 bg-base-100 overflow-hidden`}>
      <div className={`bg-hero-pattern-4 bg-cover bg-no-repeat bg-center `}>
        <Navbar />
        <Hero isMobile={isMobile} />
      </div>
      <About />
      <Work />
      <AppDevelopment />
      <Experiences isMobile={isMobile} />
      <Contact />
    </div>
  )
}
