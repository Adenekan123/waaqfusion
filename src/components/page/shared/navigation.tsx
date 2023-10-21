import { Stack } from "@/components/ui";
import { INav, INavigation } from "@/types";
import { nanoid } from "nanoid";
import Link from "next/link";
import React, { useState } from "react";
import { PiPlus } from "react-icons/pi";

export const Navigation = ({ title, url, list,close }: INavigation) => {
  const [state, setState] = useState(false);

  if (!list)
    return (
      <Link href={url} onClick={close}>
        {title}
      </Link>
    );
  return (
    <>
      <Link
        href={state ? url : "#"}
        className="flex justify-between items-center capitalize"
        onClick={() => setState((prev) => !prev)}
      >
        <span>{title}</span>
        <PiPlus />
      </Link>
      <Stack
        direction="flex-col"
        gap="gap-6"
        styles={`pl-3 ${
          state ? "max-h-96" : "max-h-0"
        } overflow-hidden transition-all duration-500 ease-in-out text-slate-500`}
      >
        {list.map((item) => (
          <Navigation key={nanoid(6)} {...item} close={close}  />
        ))}
      </Stack>
    </>
  );
};
