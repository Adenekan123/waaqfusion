import { IHeading } from '@/types'
import React from 'react'

export const Heading = ({title,styles}:IHeading) => {
  return (
    <h2 className={` text-3xl md:text-4xl font-bold ${styles}`}>{title}</h2>
  )
}

