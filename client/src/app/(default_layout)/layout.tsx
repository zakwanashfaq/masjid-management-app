'use client';

import Footer from "src/components/footer"
import Navbar from "src/components/navbar"
import '../../scss/custom.scss';
import logo from '../../assets/icnl-logo-no-bg.jpg'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" href={logo.src} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>ICNL</title>
        <meta name="description" content="Islamic Center of Newfoundland" />
      </head>
      <body>
        <div className='p-0 m-0' style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
          <Navbar />
          <div className='container-xl flex-grow-1'>
           <div id="root">{children}</div>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  )
}