import { Heading, Modal } from "@/components/ui";
import React from "react";
import { Form } from "./form";
import { RxDotFilled } from "react-icons/rx";
import Link from "next/link";

export const PasswordPreview = () => {
  return (
    <>
      <div className="rounded-lg">
        <div className="bg-blue-500 px-6 py-4  flex justify-between items-center">
          <Heading title="*** Password Settings" type={4} styles="text-white" />
        </div>
        <div className="border p-6">
          <div className="flex justify-between items-center">
            <Heading title="Account Password" type={4} />
            <Link
              href="?modal=reset-password"
              className="rounded-full border border-orange-500 text-orange-500 px-6 py-2"
            >
              Reset
            </Link>
          </div>
          <div className="flex align-baseline gap-x-1 border-b pb-4 mt-4 text-slate-500">
            <RxDotFilled size={24} />
            <RxDotFilled size={24} />
            <RxDotFilled size={24} />
            <RxDotFilled size={24} />
            <RxDotFilled size={24} />
          </div>
        </div>
      </div>

      <Modal matcher="reset-password" title="Rest Password">
        <Form />
      </Modal>
    </>
  );
};
