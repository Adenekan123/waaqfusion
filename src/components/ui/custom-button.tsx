import { ICustomButton } from '@/types'
import React from 'react'

export const CustomButton = ({whenClicked,title,styles,gradient="from-red-500 to-orange-500",outlined=false}:ICustomButton) => {
  return (
    <button onClick={whenClicked} className={`border-8 border-white rounded-full ${outlined? 'border':"" } bg-gradient-to-r ${!outlined ? gradient + " text-white":""} px-8 py-2  ${styles}`} style={{textShadow:'0px 1px 1px rgba(0, 0, 0, 0.5);'}}>
        <span>{title}</span>
    </button>
  )
}

