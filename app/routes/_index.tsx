import About from '@app/components/About'
import AppDevelopment from '@app/components/AppDevelopment'
import Contact from '@app/components/Contact'
import Experiences from '@app/components/Experiences'
import Hero from '@app/components/Hero'
import Navbar from '@app/components/Navbar'
import Work from '@app/components/Work'
import styles from '../components/About.css'

import type { ActionArgs } from '@remix-run/node'
import type { LinksFunction } from '@remix-run/react/dist/routeModules'

import { json } from '@remix-run/node'
import { useActionData } from '@remix-run/react'
import { useEffect, useState } from 'react'
import { z } from 'zod'
import { zfd } from 'zod-form-data'
import MaxWidth from '@app/components/MaxWidth'
import { Projects } from '@app/components/Projects'

// Custom CSS link for this route
export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: styles,
    },
  ]
}

const schema = zfd.formData({
  email: zfd.text(z.string().email()),
  subject: zfd.text(z.string().min(5)),
  message: zfd.text(z.string().min(10)),
})

export async function action({ request }: ActionArgs) {
  try {
    const nodemailer = require('nodemailer')
    const { email, message, subject } = schema.parse(await request.formData())

    const MAIL_PORT = Number(process.env.MAIL_PORT)
    const MAIL_HOST = String(process.env.MAIL_HOST)
    const MAIL_USER = String(process.env.MAIL_USER)
    const MAIL_PASS = String(process.env.MAIL_PASS)

    const transporter = nodemailer.createTransport({
      host: MAIL_HOST,
      port: Number(MAIL_PORT),
      secure: true,
      tls: {
        ciphers: 'SSLv3',
      },
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
      },
    })

    const options = {
      from: 'dev@aviliax.com',
      to: 'robin@aviliax.com',
      subject: subject,
      text: email + ' sent > \n' + message,
    }

    try {
      const sent = await transporter.sendMail(options)
      if (!sent) {
        return json({ message: 'Email not sent', sent: false })
      }
      return json({ message: 'Email sent', sent: true })
    } catch (error) {
      console.log(error)
      return json({ message: 'Email not sent', sent: false })
    }
  } catch (error) {
    return json({ message: 'Email not sent', sent: false })
  }
}

export default function App() {
  const [isMobile, setIsMobile] = useState(false)
  const actionData = useActionData<typeof action>()

  useEffect(() => {
    if (actionData?.sent) {
      const modal = document.getElementById('my_modal_8') as HTMLInputElement
      modal.checked = true
    }
  }, [actionData])

  // Check if the user is on mobile
  useEffect(() => {
    // Create a condition that targets the viewports you want to check
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    setIsMobile(mediaQuery.matches)

    // Create a function to handle the change
    const handleMediaQueryChange = (event: any) => {
      setIsMobile(event.matches)
    }

    // Add listener
    mediaQuery.addEventListener('change', handleMediaQueryChange, { passive: true })

    // Clean up
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return (
    <main className={`z-0 bg-base-100 overflow-hidden mx-auto`}>
      <div className={`bg-hero-pattern-1 bg-cover bg-no-repeat bg-center shadow-2xl z-20 overflow-hidden`}>
        <Navbar />
        <Hero isMobile={isMobile} />
      </div>
      <MaxWidth>
        <About />
      </MaxWidth>
      <Work />
      <AppDevelopment />
      <Projects />
      <MaxWidth>
        <Experiences isMobile={isMobile} />
        <Contact />
      </MaxWidth>
    </main>
  )
}
