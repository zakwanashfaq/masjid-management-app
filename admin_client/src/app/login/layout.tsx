export const metadata = {
  title: 'MasjidAPI Login',
  description: 'Log into MasjidAPI admin dashboard.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
