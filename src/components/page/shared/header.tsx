"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Search } from "./search";
import { FaCartShopping } from "react-icons/fa6";
import { HiMenu } from "react-icons/hi";
import { CustomButton } from "../../ui/custom-button";
import Image from "next/image";
import { Container, Stack } from "../../ui";
import { navigations } from "../../../../static";
import { Navigation } from "./navigation";
import { nanoid } from "nanoid";
import { IoClose } from "react-icons/io5";

const MobileMenu = () => {
  const [state,setState] = useState(false)
  return (
    <Container styles="block lg:hidden z-10 bg-transparent absolute top-0 left-0 w-full">
      <nav className="flex items-center justify-between py-3 ">
        <Link href={"#"} className="logo text-3xl">
          <Image
            src={"/images/logo.png"}
            alt="logo"
            height={200}
            width={200}
            className=" brightness-0 invert"
          />
        </Link>
        <CustomButton title={!state ? <HiMenu size={24} /> : <IoClose size={24}/>} whenClicked={()=>setState(prev=>!prev)} />
      </nav>
      <div className={`menu absolute top-20 left-0 w-full  ${state? 'max-h-[700px]' : 'max-h-0'} overflow-hidden transition-all duration-150 ease-linear`}>
        <Stack
          direction="flex-col"
          gap="gap-4"
          styles="bg-orange-50 px-6 py-4 text-lg font-semibold rounded-xl transition-all w-[93%] mx-auto capitalize shadow-xl border-orange-500"
        >
          {navigations.map((navigation) => (
            <Navigation key={nanoid(4)} {...navigation} close={()=>setState(false)} />
          ))}
        </Stack>
      </div>
    </Container>
  );
};

export const Header = () => {
  return (
    <>
      <div className="w-full py-4 z-10 text-white font-bold hidden lg:block absolute top-0 left-0">
        <Container>
          <div className="flex justify-between items-center">
            <nav className="flex items-center gap-16">
              <Link href={"/"} className="logo text-3xl">
                <Image
                  src={"/images/logo.png"}
                  alt="logo"
                  height={220}
                  width={220}
                  className=" brightness-0 invert"
                />
              </Link>
              <div className="ml-8 flex gap-8">
                <Link href={"/"}>Home</Link>
                <Link href={"/about-us"}>About</Link>
                <Link href={"/shop"}>Shop</Link>
                <Link href={"/solutions"}>Solutions</Link>
              </div>
            </nav>
            <nav className="flex items-center gap-8">
              <Search />
              <Link href={"#"} className="text-white">
                <FaCartShopping size={20} />
              </Link>
              <CustomButton title="Sign In" />
            </nav>
          </div>
        </Container>
      </div>

      <MobileMenu />
    </>
  );
};
