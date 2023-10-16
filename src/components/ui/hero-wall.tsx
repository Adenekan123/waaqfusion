import { IHeroWall } from '@/types'
import React from 'react'

export const HeroWall = ({children,styles}:IHeroWall) => {
  return (
    <div className={`w-full bg-[url('/images/bg_img.png')] bg-red-600 relative ${styles}`}>
      <div className="overlay absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-600/80 to-orange-500 -z-0"></div>
      {children}
    </div>
  )
}

