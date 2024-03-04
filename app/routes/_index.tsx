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
    const { email, message, subject } = schema.parse(await request.formData())

    const templateParams = {
      from_email: email,
      from_subject: subject,
      message: message,
      reply_to: email,
    }

    const EMAIL_CLIENT = String(process.env.EMAIL_CLIENT)
    const EMAIL_TEMPLATE = String(process.env.EMAIL_TEMPLATE)
    const EMAIL_PRIVATE_KEY = String(process.env.EMAIL_PRIVATE_KEY)
    const EMAIL_PUBLIC_KEY = String(process.env.EMAIL_PUBLIC_KEY)

    var data = {
      service_id: EMAIL_CLIENT,
      template_id: EMAIL_TEMPLATE,
      user_id: EMAIL_PUBLIC_KEY,
      template_params: templateParams,
      accessToken: EMAIL_PRIVATE_KEY,
    }

    const axios = require('axios')
    try {
      await axios.post('https://api.emailjs.com/api/v1.0/email/send', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      return json({ message: 'Email sent', sent: true })
    } catch (error) {
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
