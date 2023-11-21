"use client";
import { CustomButton, Heading } from "@/components/ui";
import { useForm } from "@/hooks";
import useCheckout from "@/hooks/useCheckout";
import React,{useEffect} from "react";
import { CgClose } from "react-icons/cg";

const initial_state = {
  name: "",
  address: "",
  state: "",
  phone: "",
  emmail: "",
};

const CheckoutForm = ({close}:{close:()=>void}) => {
  const { state, update } = useForm(initial_state);
  const { checkout_local, status } = useCheckout();

  useEffect(()=>{
    if(status.success) close();
  },[status.success])
  return (
    <div className="absolute left-0 top-0 w-full h-full bg-slate-50/80 flex items-center p-6">
      <form className="bg-white  rounded-md shadow-lg  w-full relative">
        <div className="absolute top-5 right-5 cursor-pointer" onClick={close}>
          <CgClose size={22} />
        </div>
        <div className="border-b p-4 text-center text-orange-500">
          <Heading title="Enter your details" type={3} />
        </div>
        <div className="px-6 py-6 flex flex-col gap-6">
          <div>
            <input
              type="text"
              name="name"
              id="name"
              value={state?.name}
              onChange={update}
              placeholder="Enter Full Name"
              className="block bg-slate-200 px-4 py-5 w-full  rounded-md outline-orange-400"
            />
          </div>
          <div>
            <input
              type="text"
              name="phone"
              id="phone"
              value={state?.phone}
              onChange={update}
              placeholder="Enter Phone"
              className="block bg-slate-200 px-4 py-5 w-full  rounded-md outline-orange-400"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              id="email"
              value={state?.email}
              onChange={update}
              placeholder="Enter Email"
              className="block bg-slate-200 px-4 py-5 w-full  rounded-md outline-orange-400"
            />
          </div>
          <div>
            <input
              type="address"
              name="address"
              id="address"
              value={state?.address}
              onChange={update}
              placeholder="Enter Address"
              className="block bg-slate-200 px-4 py-5 w-full  rounded-md outline-orange-400"
            />
          </div>
          <div>
            <select
              name="state"
              id="state"
              placeholder="Enter State"
              value={state?.state}
              onChange={update}
              className="block bg-slate-200 px-4 py-5 w-full  rounded-md outline-orange-400"
            >
              <option value={""}>Select state</option>
              <option value={"lagos"}>Lagos</option>
              <option value={"ogun"}>Ogun</option>
            </select>
          </div>
        </div>
        <div className="p-4 border-t text-center">
          <CustomButton
            title="Done"
            styles="shadow-lg font-bold"
            loading={status.loading}
            disabled={status.loading}
            whenClicked={() => checkout_local(state)}
          />
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;
