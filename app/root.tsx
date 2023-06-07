import type { V2_MetaFunction } from '@remix-run/react'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

import styles from './styles/app.css'
import stylesTimeline from 'react-vertical-timeline-component/style.min.css'

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'Forsrobin | Full-Stack' },
    {
      name: 'description',
      content:
        'Versatile full-stack developer with a passion for technology and innovation. Studying civil engineering with a focus on computer security. Expertise in designing robust software solutions, working with hardware, and exploring cutting-edge technologies. Creating impactful solutions that bridge the gap between engineering and technology. Browse portfolio for diverse range of projects. Collaborate on your next venture. Contact now.'
    }
  ]
}

export const links = () => {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: stylesTimeline },
    { rel: 'icon', href: '/logo.png' }
  ]
}

export default function App() {
  return (
    <html lang='en' data-theme='forsrobin'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <meta name='theme-color' content='#488ccb' />

        {/* Discord related displays */}
        <meta property='og:image' content='/logo.png' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='250' />
        <meta property='og:image:height' content='250'></meta>
        <meta property='og:type' content='article'></meta>
        <meta
          property='og:description'
          content='Versatile full-stack developer with a passion for technology and innovation. Studying civil engineering with a focus on computer security. Creating impactful solutions that bridge engineering and technology. Browse portfolio for diverse projects. Collaborate on your next venture. Contact now.'></meta>
        <meta property='og:title' content='Forsrobin | full-stack' />

        {/* Twitter related displays */}
        <meta name='twitter:site' content='@twitter_handle' />
        <meta name='twitter:title' content='Forsrobin | full-stack' />
        <meta
          name='twitter:description'
          content='Versatile full-stack developer with a passion for technology and innovation. Studying civil engineering with a focus on computer security. Creating impactful solutions that bridge engineering and technology. Browse portfolio for diverse projects. Collaborate on your next venture. Contact now.'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image:src' content='/logo.png'></meta>

        <Meta />
        <Links />
      </head>
      <body>
        <input type='checkbox' id='my_modal_8' className='modal-toggle' />
        <div className='modal'>
          <div className='modal-box'>
            <h3 className='text-lg font-bold text-green-700'>Success!</h3>
            <p className='py-4'>The email was sent without any problems!</p>
          </div>
          <label className='modal-backdrop' htmlFor='my_modal_8'>
            Close
          </label>
        </div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
