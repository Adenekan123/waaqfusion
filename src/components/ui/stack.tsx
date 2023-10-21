import { IStack } from "@/types";
import React from "react";

export const Stack = ({ children, direction = "flex-col md:flex-row",gap="gap-12",styles }: IStack) => {
  return <div className={`flex  h-full relative ${gap} ${direction} ${styles}`}>{children}</div>;
};

