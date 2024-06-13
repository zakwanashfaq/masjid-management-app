export const metadata = {
  title: 'MasjidAPI sign up',
  description: 'Sign up for an aaccount for MasjidAPI.',
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
