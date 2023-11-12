import { Body, Container, CustomButton, Heading } from "@/components/ui";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const SignUpForm = () => {
  return (
    <div className="bg-[url('/images/female-teacher-helping-kids-in-robotics-lab.jpg')] bg-cover bg-center min-h-screen flex flex-col ">
      <div className="overlay bg-gradient-to-r from-orange-800/70 to-orange-600/40 absolute top-0 left-0 w-full h-full"></div>
      <nav className="flex items-center gap-16 p-3 md:px-36 py-3">
          <Link href={"/"} className="logo text-3xl">
            <Image
              src={"/images/logo.png"}
              alt="logo"
              height={220}
              width={220}
              className=" brightness-0 invert"
            />
          </Link>
      </nav>
      <div className="flex items-center justify-around p-6 md:p-0 my-auto">
        <div className="text-white relative z-10 w-5/12 hidden md:block">
          <Heading
            title="Design + Collaboration, all in Mockplus
"
            styles="mb-3"
          />
          <Body title="A virtual center for designers, devs, PMs, and all design parties to perform their duties in unison. At least 200% faster with Mockplus." />
        </div>
        <div className="p-8 rounded-md shadow-2xl shadow-orange-500 text-black bg-orange-50  md:w-3/12 relative z-10">
          <div className="flex flex-col gap-8">
            <div>
              <Heading
                type={3}
                title="Create your account"
                styles="text-center"
              />
              <Body
                type={0.5}
                title="Enter your e-mail and password"
                styles="text-center text-slate-500"
              />
            </div>
            <div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <input
                  type="text"
                  className="block bg-orange-200 p-3 md:px-4 md:py-5 w-full placeholder:text-orange-500 rounded-md outline-orange-400"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="block bg-orange-200 p-3 md:px-4 md:py-5 w-full placeholder:text-orange-500 rounded-md outline-orange-400"
                  placeholder="Last Name"
                />
              </div>
              <select
                name=""
                id=""
                className="block bg-orange-200 p-3 md:px-4 md:py-5 mt-4 w-full text-orange-500 rounded-md outline-orange-400"
              >
                <option value="0">State of Residence</option>
                <option value="0">Nigeria</option>
              </select>
              <input
                type="text"
                className="block mt-4 bg-orange-200 p-3 md:px-4 md:py-5 w-full placeholder:text-orange-500 rounded-md outline-orange-400"
                placeholder="Address"
              />
              <div className="grid grid-cols-2 gap-4 mt-4">
                <input
                  type="email"
                  className="block bg-orange-200 p-3 md:px-4 md:py-5 w-full placeholder:text-orange-500 rounded-md outline-orange-400"
                  placeholder="E-mail"
                />
                <input
                  type="text"
                  className="block bg-orange-200 p-3 md:px-4 md:py-5 w-full placeholder:text-orange-500 rounded-md outline-orange-400"
                  placeholder="Phone"
                />

                <input
                  type="password"
                  className="block bg-orange-200 p-3 md:px-4 md:py-5 w-full placeholder:text-orange-500 rounded-md outline-orange-400"
                  placeholder="Choose password"
                />
                <input
                  type="password"
                  className="block bg-orange-200 p-3 md:px-4 md:py-5 w-full placeholder:text-orange-500 rounded-md outline-orange-400"
                  placeholder="Confirm password"
                />
              </div>

              <div className="mt-4">
                <CustomButton title="Sign Up" styles="w-full shadow-lg" />
              </div>
            </div>
            <div className="text-center text-slate-500">
              <p className="text-sm">
                Don&apos;t have an account ?{" "}
                <Link href={"#"} className="text-orange-400">
                  Sign Up
                </Link>
              </p>
              <p className="text-sm">
                Forgot password ?{" "}
                <Link href={"#"} className="text-orange-400">
                  Recover Password
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
