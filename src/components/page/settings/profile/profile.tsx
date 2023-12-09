"use client";

import { Heading, Modal } from "@/components/ui";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { Form } from "./form";
import Link from "next/link";
import { useFetch } from "@/hooks";
import { signOut } from "next-auth/react";

export const Profile = () => {
const {data,isLoading,mutate} = useFetch("/api/profile/user");
console.log(data);
  return (
    <>
      <div className="rounded-lg">
        <div className="bg-blue-500 px-6 py-4 flex justify-between items-center">
          <Heading title="Current user Details" type={4} styles="text-white" />
          <Link
            href={"?modal=edit-profile"}
            className="inline-flex items-center gap-2 font-semibold text-white md:text-lg"
          >
            <FaEdit />
            Edit
          </Link>
        </div>
        <div className="border pt-6">
          <table className="w-full">
            <tbody>
              <tr>
                <th className="px-6 py-2" align="left">
                  First name
                </th>
                <td className="px-6 py-2" align="right">
                  {data?.firstname}
                </td>
              </tr>
              <tr>
                <th className="px-6 py-2" align="left">
                  Last name
                </th>
                <td className="px-6 py-2" align="right">
                  {data?.lastname}
                </td>
              </tr>
              <tr>
                <th className="px-6 py-2" align="left">
                  Email ID
                </th>
                <td className="px-6 py-2" align="right">
                  {data?.email}
                </td>
              </tr>
              <tr>
                <th className="px-6 py-2" align="left">
                  Phone
                </th>
                <td className="px-6 py-2" align="right">
                  {data?.phone}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="p-6 text-center border-t">
            <button onClick={()=> signOut()} className=" text-sm md:text-lg bg-red-500 text-red-100 px-4 py-1 md:py-2 rounded-full font-semibold capitalize md:w-56">
              Logout
            </button>
          </div>
        </div>
      </div>

      <Modal matcher="edit-profile" title="Personal Details">
        {data ? <Form details={...data} mutate={mutate} /> : null}
      </Modal>
    </>
  );
};
