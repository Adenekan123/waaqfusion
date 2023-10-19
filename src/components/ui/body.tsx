import { IHeading } from '@/types'
import React from 'react'

export const Body = ({title,styles,type}:IHeading) => {
  if(type === 0.5) return <p className={`text-sm md:text-md ${styles}`}>{title}</p>
  return (
    <p className={ `text-md md:text-lg ${styles}`}>{title}</p>
  )
}

