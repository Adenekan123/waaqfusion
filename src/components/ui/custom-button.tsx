import { ICustomButton } from '@/types'
import React from 'react'

export const CustomButton = ({title,styles}:ICustomButton) => {
  return (
    <button className={`border-8 border-white rounded-full bg-gradient-to-r from-red-500 to-orange-500 px-8 py-2 text-white ${styles}`} style={{textShadow:'0px 1px 1px rgba(0, 0, 0, 0.5);'}}>
        <span>{title}</span>
    </button>
  )
}

