import { IProductCard } from "@/types";
import React from "react";
import { Heading } from "./heading";
import { Body } from "./body";
import { CustomButton } from "./custom-button";
import {AiFillStar} from 'react-icons/ai'

export const ProductCard = ({image,name,tag,price,ratings}:IProductCard) => {
    const {rating,total_reviews} = ratings;
    const {curr,prev,discount} = price;
  return (
    <div className="card relative  border border-orange-100 rounded-3xl overflow-hidden bg-orange-50 h-full">
      <img src={image} alt="mrsk" className="h-72 w-full object-cover" />

      <div className="absolute top-2 right-2 bg-white px-3 py-1 rounded-3xl border border-orange-500 text-orange-500">
       {tag}
      </div>
      <div  className="flex flex-col gap-4 p-6 card-body h-56 justify-between  border">
        <div className="flex justify-between gap-4">
          <Heading
            type={4}
            title={name}
            styles="text-orange-500"
          />
          <div className="flex items-center basis-4/12 mb-auto justify-end gap-x-1 ">
            <AiFillStar className="text-yellow-500" size={16}/>
            <Body title={`${rating} (${total_reviews})`}/>
          </div>
        </div>

        <div className="flex gap-3 items-center leading-none">
            <Body title={`&#8377;${curr.toLocaleString('en')} /-`} styles="font-bold" hasEntity/>
            <Body title={`&#8377;${prev.toLocaleString('en')} /`} type={0.5} hasEntity styles="text-slate-700 relative before:absolute before:top-2/4 before:-translate-y-3/4 before:block before:w-full before:h-px before:bg-slate-700 "/>
            <Body title={`${discount}% off`} type={0.5} styles="text-red-500"/>
        </div>
        <CustomButton title="Enroll Now" styles="w-full font-bold shadow-lg" />
      </div>
    </div>
  );
};
