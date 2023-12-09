"use client";

import Link from "next/link";
import React, { useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import { CgLogOut } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { MdSettings } from "react-icons/md";
import { TbShoppingCartCog } from "react-icons/tb";

import { signOut } from "next-auth/react";

export const ProfileDropdown = () => {
  const [hide, setHide] = useState(true);
  return (
    <div className="relative">
      <button
        onClick={() => setHide((prev) => !prev)}
        className="border-8 border-white rounded-full bg-gradient-to-r from-red-500 to-orange-500 text-white px-2 py-2 0px 1px 1px rgba(0, 0, 0, 0.5) inline-flex items-center gap-x-6"
      >
        <FaUserCircle size={22} />
        <span>Adenekan</span>
        <BsCaretDownFill size={16} />
      </button>
      {hide ? null : (
        <div className="pt-6 rounded-md shadow-2xl shadow-orange-500 text-black bg-orange-50 absolute top-24 left-4 before:w-6 before:h-4 before:bg-orange-100 before:absolute before:z-10 triangle-clip-path">
          <div className="flex flex-col">
            {/* <Link
              href={"/profile"}
              className="flex items-center border-b border-slate-300 px-6 py-3 gap-x-4 hover:bg-orange-100"
            >
              <LuUser size={18} />
              <span>My profile</span>
            </Link> */}
            <Link
              href={"/my-orders"}
              className="flex items-center border-b border-slate-300 px-6 py-3 gap-x-4 hover:bg-orange-100"
              onClick={()=>setHide(true)}
            >
              <TbShoppingCartCog size={18} />
              <span>My orders</span>
            </Link>
            <Link
              href={"/settings"}
              className="flex items-center border-b border-slate-300 px-6 py-3 gap-x-4 hover:bg-orange-100" onClick={()=>setHide(true)}
            >
              <MdSettings size={18} />
              <span>Settings</span>
            </Link>
            <Link
              href={"#"}
              onClick={()=>signOut()}
              className="flex items-center border-b border-slate-300 px-6 py-3 gap-x-4 hover:bg-orange-100"
            >
              <CgLogOut size={18} />
              <span>Logout</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
