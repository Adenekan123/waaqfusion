"use client"

import { Body, CustomButton, Heading } from "@/components/ui";
import { useForm } from "@/hooks";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
const initialState = {
  email: "",
  password: "",
};
export const SignInForm = () => {
  const [loading, setLoading] = React.useState(false);
  const searchParams = useSearchParams();
  const { state, update } = useForm(initialState);
  const pathname = usePathname()


  const signInWithCredentials = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await signIn("credentials", {
        ...state,
        redirect: true,
        callbackUrl: pathname,
      });
      console.log(response);
      setLoading(false);
    } catch (err: any) {
      console.log(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchParams.get("error")) {
      console.log("here");
      toast.error("Incorrect Email or Password");
    }
  }, [searchParams]);
  return (
    <div className="p-8 rounded-md shadow-2xl shadow-orange-500 text-black bg-orange-50 absolute top-24 -left-3 w-96  before:w-6 before:h-4 before:bg-orange-100 before:absolute before:z-10 triangle-clip-path">
      <div className="flex flex-col gap-8">
        <div>
          <Heading
            type={3}
            title="Sign-In to my account"
            styles="text-center"
          />
          <Body
            type={0.5}
            title="Enter your e-mail and password"
            styles="text-center text-slate-500"
          />
        </div>
        <form onSubmit={signInWithCredentials}>
          <input
            type="text"
            name="email"
            className="block bg-orange-200 px-4 py-5 w-full placeholder:text-orange-500 rounded-md outline-orange-400"
            placeholder="Email"
            onChange={update}
          />
          <input
            name="password"
            type="password"
            className="block bg-orange-200 px-4 py-5 mt-4 w-full placeholder:text-orange-500 rounded-md outline-orange-400"
            placeholder="Password"
            onChange={update}
          />
          <div className="mt-4">
            <CustomButton
              title="Login"
              styles="w-full shadow-lg"
              loading={loading}
              disabled={loading}
              type="submit"
            />
          </div>
        </form>
        <div className="text-center text-slate-500">
          <p className="text-sm">
            Don&apos;t have an account ?{" "}
            <Link href={"/signup"} className="text-orange-400">
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
  );
};
