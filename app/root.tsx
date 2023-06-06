import type { V2_MetaFunction } from '@remix-run/react'
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration } from '@remix-run/react'

import styles from './styles/app.css'
import stylesTimeline from 'react-vertical-timeline-component/style.min.css'

export const meta: V2_MetaFunction = () => {
  return [{ title: 'Forsrobin | Engineer' }, { name: 'Forsrobin', content: 'Landing page for Forsrobin!' }]
}

export const links = () => {
  return [
    { rel: 'stylesheet', href: styles },
    { rel: 'stylesheet', href: stylesTimeline }
  ]
}

export default function App() {
  return (
    <html lang='en' data-theme='forsrobin'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}
