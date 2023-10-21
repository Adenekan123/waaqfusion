import { Stack } from "@/components/ui";
import { INav, INavigation } from "@/types";
import { nanoid } from "nanoid";
import Link from "next/link";
import React, { useState } from "react";
import { PiPlus } from "react-icons/pi";

export const Navigation = ({ title, url, list, close }: INavigation) => {
  const [state, setState] = useState(false);

  if (!list)
    return (
      <Link href={url} onClick={close}>
        {title}
      </Link>
    );
  return (
    <div>
      <Link href={state ? url : "#"} onClick={() => setState((prev) => !prev)}>
        <span className="flex justify-between items-center capitalize">
          <span>{title}</span>
          <PiPlus />
        </span>
      </Link>
      <Stack
        direction="flex-col"
        gap="gap-4"
        styles={`pl-3 ${
          state ? "max-h-96" : "max-h-0"
        } overflow-hidden transition-all duration-500 ease-in-out text-slate-500 relative top-2`}
      >
        {list.map((item, i) => (
          <Navigation key={item.url + i + "suburl"} {...item} close={close} />
        ))}
      </Stack>
    </div>
  );
};
