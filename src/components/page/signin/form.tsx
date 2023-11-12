import { Body, CustomButton, Heading } from "@/components/ui";
import Link from "next/link";
import React from "react";

export const SignInForm = () => {
  return (
    <div className="p-8 rounded-md shadow-2xl shadow-orange-500 text-black bg-orange-50 absolute top-24 -left-3 w-96  before:w-6 before:h-4 before:bg-orange-100 before:absolute before:z-10 triangle-clip-path">
      <div className="flex flex-col gap-8">
        <div>
          <Heading type={3} title="Sign-In to my account" styles="text-center" />
          <Body
            type={0.5}
            title="Enter your e-mail and password"
            styles="text-center text-slate-500"
          />
        </div>
        <div>
          <input
            type="text"
            className="block bg-orange-200 px-4 py-5 w-full placeholder:text-orange-500 rounded-md outline-orange-400"
            placeholder="Email"
          />
          <input
            type="password"
            className="block bg-orange-200 px-4 py-5 mt-4 w-full placeholder:text-orange-500 rounded-md outline-orange-400"
            placeholder="Password"
          />
          <div className="mt-4">
            <CustomButton title="Login" styles="w-full shadow-lg" />
          </div>
         
        </div>
        <div className="text-center text-slate-500" >
            <p className="text-sm">Don&apos;t have an account ? <Link href={"#"} className="text-orange-400">Sign Up</Link></p>
            <p className="text-sm">Forgot password ? <Link href={"#"} className="text-orange-400">Recover Password</Link></p>
          </div>
      </div>
    </div>
  );
};
