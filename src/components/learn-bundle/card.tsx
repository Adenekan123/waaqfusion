import React from "react";
import { Body, Heading } from "../ui";

export const Card = ({ image,heading, title }: { image: string; heading:string; title: string }) => {
  return (
    <div className="card rounded-3xl overflow-hidden shadow-md">
      <img
        src={image}
        alt="robotics"
        className=" max-h-48 h-48 w-full object-cover"
      />
      <div className="p-6 bg-white">
        <Heading type={4} title={heading} />
        <Body title={title} styles="text-grey-500" />
      </div>
    </div>
  );
};

