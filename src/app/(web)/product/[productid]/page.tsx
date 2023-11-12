import { ProductDetail } from '@/components';
import React from 'react';


const Page = ({params}:{params:{productid:string}}) => {
  
  return (
    <ProductDetail productid={params.productid as string}/>
  )
}

export default Page