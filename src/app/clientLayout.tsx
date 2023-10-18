"use client"

import Script from "next/script"


export  function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
      <Script src="//code.tidio.co/3sz52z4vp7yinaq3bm66lle776cl9rkw.js" strategy="beforeInteractive" />
    </>
  )
}
