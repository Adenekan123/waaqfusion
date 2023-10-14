import { IHeading } from '@/types'
import React from 'react'

export const Body = ({title,styles}:IHeading) => {
  return (
    <p className={`text-lg ${styles}`}>{title}</p>
  )
}

