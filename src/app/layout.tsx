import './globals.css';
import Script from 'next/script'



export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-Nunito">{children}</body>
      <Script src="//code.tidio.co/3sz52z4vp7yinaq3bm66lle776cl9rkw.js" async></Script>
    </html>
  )
}
