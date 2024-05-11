'use client';

import '../../scss/custom.scss';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Login</title>
        <meta name="description" content="Islamic Center of Newfoundland" />
      </head>
      <body>
           <div id="root">{children}</div>        
      </body>
    </>
  )
}