"use client";
import { useForm } from "@/hooks";
import { IPartner, IVisitor } from "@/types";
import { data } from "autoprefixer";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
const initial_state = {
  firstname: "",
  lastname: "",
  phone: "",
  email: "",
};
export const Form = ({details,mutate}:{details:IPartner,mutate:any}) => {
  const router = useRouter();
  const { state, update, loading, submit,response } = useForm(details, {
    url: "/api/profile/user",method:"PATCH"
  });
  useEffect(()=>{
    if(response?.profile){
      mutate();
      router.back();
    } 
  },[response,router,mutate])
  return (
    <form onSubmit={submit}>
      <div className="px-6 py-6 flex flex-col gap-6">
        <div>
          <label className="mb-2 block" htmlFor="firsname">
            First Name
          </label>
          <input
            type="text"
            name="firstname"
            id="firstname"
            value={state?.firstname}
            onChange={update}
            placeholder="Enter first name"
            className="block bg-slate-200 px-4 py-5 w-full  rounded-md outline-orange-400"
          />
        </div>
        <div>
          <label className="mb-2 block" htmlFor="lastbane">
            Last Name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            value={state?.lastname}
            onChange={update}
            placeholder="Enter Last name"
            className="block bg-slate-200 px-4 py-5 w-full  rounded-md outline-orange-400"
          />
        </div>
        <div>
          <label className="mb-2 block" htmlFor="email">
            Email ID
          </label>
          <input
            type="text"
            name="email"
            id="email"
            value={state?.email}
            readOnly
            placeholder="Enter Last name"
            className="block bg-slate-200 px-4 py-5 w-full  rounded-md outline-orange-400"
          />
        </div>
        <div>
          <label className="mb-2 block" htmlFor="email">
            Phone
          </label>
          <input
            type="text"
            name="phone"
            id="phone"
            value={state?.phone}
            readOnly
            placeholder="Enter Last name"
            className="block bg-slate-200 px-4 py-5 w-full  rounded-md outline-orange-400"
          />
        </div>
        <div className="text-center flex justify-center">
          <button
            disabled={loading}
            type="submit"
            className={`text-sm md:text-lg bg-green-500 text-green-100 px-4 py-1 md:py-2 rounded-full font-semibold capitalize md:w-56 mx-auto ${loading ? " opacity-75" : ""}`}
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
