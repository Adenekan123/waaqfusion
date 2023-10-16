import { IHeading } from '@/types'
import React from 'react'

export const Heading = ({title,styles,type}:IHeading) => {
  if(type === 3)    return <h2 className={`text-xl md:text-2xl font-bold ${styles}`}>{title}</h2>

  return (
    <h2 className={` text-3xl md:text-4xl font-bold ${styles}`}>{title}</h2>
  )
}

