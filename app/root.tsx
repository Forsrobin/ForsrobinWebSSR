import type { V2_MetaFunction } from '@remix-run/react'
import type { LinksFunction } from '@remix-run/react/dist/routeModules'

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

export const links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: stylesTimeline },
    { rel: 'icon', href: '/favicon.ico' }
  ]
}

export default function App() {
  return (
    <html lang='en' data-theme='forsrobin'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <meta name='apple-mobile-web-app-capable' content='black-translucent'></meta>
        <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent'></meta>
        <meta name='apple-mobile-web-app-title' content='Forsrobin'></meta>
        <meta name='application-name' content='Forsrobin'></meta>
        <meta name='msapplication-TileColor' content='#488ccb'></meta>
        <meta name='viewport' content='initial-scale=1, viewport-fit=cover'></meta>

        <link rel='manifest' href='/site.webmanifest' />

        {/* Apple related */}
        <link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
        <link rel='apple-touch-icon' sizes='57x57' href='/apple-touch-icon-57x57.png' />
        <link rel='apple-touch-icon' sizes='72x72' href='/apple-touch-icon-72x72.png' />
        <link rel='apple-touch-icon' sizes='76x76' href='/apple-touch-icon-76x76.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='/apple-touch-icon-114x114.png' />
        <link rel='apple-touch-icon' sizes='120x120' href='/apple-touch-icon-120x120.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='/apple-touch-icon-144x144.png' />
        <link rel='apple-touch-icon' sizes='152x152' href='/apple-touch-icon-152x152.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon-180x180.png' />
        <link rel='apple-touch-icon' sizes='60x60' href='/apple-touch-icon-ipad-76x76.png' />
        <link rel='apple-touch-icon' sizes='114x114' href='/apple-touch-icon-iphone-retina-120x120.png' />
        <link rel='apple-touch-icon' sizes='144x144' href='/apple-touch-icon-ipad-retina-152x152.png'></link>

        <meta name='mobile-web-app-capable' content='yes'></meta>

        {/* Discord related displays */}
        <meta property='og:image' content='http://www.forsrobin.se/logo.png' />
        <meta property='og:image:url' content='http://www.forsrobin.se/logo.png' />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:alt' content='Forsrobin | full-stack' />
        <meta property='og:image:secure_url' content='https://www.forsrobin.se/logo.png' />
        <meta property='og:image:width' content='296' />
        <meta property='og:image:height' content='296' />
        <meta property='og:type' content='article'></meta>
        <meta
          property='og:description'
          content='Versatile full-stack developer with a passion for technology and innovation. Studying civil engineering with a focus on computer security. Creating impactful solutions that bridge engineering and technology. Browse portfolio for diverse projects. Collaborate on your next venture. Contact now.'></meta>
        <meta property='og:title' content='Forsrobin | full-stack' />

        {/* Twitter related displays */}
        <meta name='twitter:site' content='@forsrobin' />
        <meta name='twitter:title' content='Forsrobin | full-stack' />
        <meta
          name='twitter:description'
          content='Versatile full-stack developer with a passion for technology and innovation. Studying civil engineering with a focus on computer security. Creating impactful solutions that bridge engineering and technology. Browse portfolio for diverse projects. Collaborate on your next venture. Contact now.'
        />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image:src' content='https://www.forsrobin.se/logo.png'></meta>

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
