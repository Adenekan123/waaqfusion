import { IBody } from "@/types";
import React from "react";

export const Body = ({ title, styles, type, hasEntity }: IBody) => {
  if (hasEntity) {
    if (type === 0.5)
      return (
        <p
          dangerouslySetInnerHTML={{ __html: title }}
          className={`text-sm md:text-md ${styles}`}
        />
      );
    else
      return (
        <p
          dangerouslySetInnerHTML={{ __html: title }}
          className={`text-md md:text-lg ${styles}`}
        />
      );
  }
  if (type === 0.5)
    return <p className={`text-sm md:text-md ${styles}`}>{title}</p>;
  return <p className={`text-md md:text-lg ${styles}`}>{title}</p>;
};
