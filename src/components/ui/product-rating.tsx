import React from "react";
import { Heading } from "./heading";
import { AiFillStar } from "react-icons/ai";
import { Body } from "./body";
import { IProductRating } from "@/types";

export const ProductRating = ({ ratings }: {ratings:IProductRating}) => {
  return (
    <div className="flex items-center justify-end gap-x-1 ">
      <AiFillStar className="text-yellow-500" size={16} />
      <Body
        type={1}
        styles="font-semibold"
        title={`${ratings.rating} (${ratings.total_reviews})`}
      />
    </div>
  );
};
