"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Search } from "./search";
import { FaCartShopping } from "react-icons/fa6";
import { HiMenu, HiOutlineExternalLink } from "react-icons/hi";
import { CustomButton } from "../../ui/custom-button";
import Image from "next/image";
import { Container, Stack } from "../../ui";
import { navigations } from "../../../../static";
import { Navigation } from "./navigation";
import { nanoid } from "nanoid";
import { IoClose } from "react-icons/io5";
import { BsCaretDownFill } from "react-icons/bs";

const MobileMenu = () => {
  const [state, setState] = useState(false);
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
        <CustomButton
          title={!state ? <HiMenu size={24} /> : <IoClose size={24} />}
          whenClicked={() => setState((prev) => !prev)}
        />
      </nav>
      <div
        className={`menu absolute top-20 left-0 w-full   ${
          state ? "max-h-[700px]" : "max-h-0"
        } overflow-hidden transition-all duration-150 ease-linear`}
      >
        <Stack
          direction="flex-col"
          gap="gap-5"
          styles="bg-orange-50 px-6 py-6 text-lg font-semibold rounded-xl transition-all w-[93%] mx-auto capitalize shadow-2xl border-orange-500"
        >
          {navigations.map((navigation, i) => (
            <Navigation
              key={navigation.url + i + "url"}
              {...navigation}
              close={() => setState(false)}
            />
          ))}
        </Stack>
      </div>
    </Container>
  );
};

const DesktopMenu = () => {
  const [dropdown, setDropdown] = useState({ shop: false, solutions: false });
  return (
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
              <div className="relative z-10">
                <Link
                  href={"#"}
                  // href={dropShop ? "shop":'#'}
                  className="flex justify-between items-center gap-x-2 relative z-10"
                  onClick={() =>
                    setDropdown((prev) => ({
                      solutions: false,
                      shop: !prev.shop,
                    }))
                  }
                >
                  <span>Shop</span>
                  <BsCaretDownFill />
                </Link>
                <div
                  className={`bg-orange-50 text-slate-500 overflow-hidden shadow-2xl text-md absolute top-8 min-w-max rounded-lg -left-3/4 ${
                    dropdown.shop
                      ? "translate-y-0 visible"
                      : "-translate-y-2 invisible "
                  } transition-transform `}
                >
                  <Link
                    href={"/shop"}
                    className="flex gap-3 items-center hover:bg-orange-100 py-3 px-6"
                  >
                    <HiOutlineExternalLink
                      size={18}
                      className="text-orange-500"
                    />
                    Kits
                  </Link>
                  <Link
                    href={"/shop"}
                    className="flex gap-3 items-center hover:bg-orange-100  px-6 py-3"
                  >
                    <HiOutlineExternalLink
                      size={18}
                      className="text-orange-500"
                    />
                    Courses
                  </Link>
                  <Link
                    href={"/shop"}
                    className="flex gap-3 items-center hover:bg-orange-100 py-3 px-6"
                  >
                    <HiOutlineExternalLink
                      size={18}
                      className="text-orange-500"
                    />
                    Accessories
                  </Link>
                </div>
              </div>
              <div className="relative z-10">
                <Link
                  href={"#"}
                  // href={dropShop ? "shop":'#'}
                  className="flex justify-between items-center gap-x-2 relative z-10"
                  onClick={() =>
                    setDropdown((prev) => ({
                      shop: false,
                      solutions: !prev.solutions,
                    }))
                  }
                >
                  <span>Solutions</span>
                  <BsCaretDownFill />
                </Link>
                <div
                  className={`bg-orange-50 text-slate-500 overflow-hidden shadow-2xl text-md absolute top-8 min-w-max rounded-lg -left-3/4 ${
                    dropdown.solutions
                      ? "translate-y-0 visible"
                      : "-translate-y-2 invisible "
                  } transition-transform `}
                >
                  <Link
                    href={"/shop"}
                    className="flex gap-3 items-center hover:bg-orange-100 py-3 px-6"
                  >
                    <HiOutlineExternalLink
                      size={18}
                      className="text-orange-500"
                    />
                    Schools
                  </Link>
                  <Link
                    href={"/shop"}
                    className="flex gap-3 items-center hover:bg-orange-100 py-3 px-6"
                  >
                    <HiOutlineExternalLink
                      size={18}
                      className="text-orange-500"
                    />
                    Partners
                  </Link>
                  <Link
                    href={"/shop"}
                    className="flex gap-3 items-center hover:bg-orange-100 py-3 px-6"
                  >
                    <HiOutlineExternalLink
                      size={18}
                      className="text-orange-500"
                    />
                    Lab
                  </Link>
                  <Link
                    href={"/shop"}
                    className="flex gap-3 items-center hover:bg-orange-100 py-3 px-6"
                  >
                    <HiOutlineExternalLink
                      size={18}
                      className="text-orange-500"
                    />
                    Robotics classroom bundle
                  </Link>
                </div>
              </div>{" "}
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
  );
};

export const Header = () => {
  return (
    <>
      <DesktopMenu />
      <MobileMenu />
    </>
  );
};
