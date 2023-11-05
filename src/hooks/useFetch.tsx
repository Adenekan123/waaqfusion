"use client";
import { signOut } from "next-auth/react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";

const fetcher = async function (...args:any) {
  try {
    const res = await fetch(args[0]);
    if (!res.ok) {
      const error: any = new Error(
        "An error occurred while fetching the data."
      );
      // Attach extra info to the error object.
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }
    return await res.json();
  } catch (err:any) {
    return err.message;
  }
};

const useFetch = (url: string):{isLoading:Boolean,error:Error,data:any,mutate:any} => {
  const { isLoading, error, data,mutate } = useSWR(url, fetcher);


  useEffect(()=>{
    if(data === 'fetch failed') toast.warning('Network Failure, Check your internet');
    if(data?.message === 'Unauthorized'){
      signOut();
    } 
  },[data])

  return { isLoading, error, data,mutate };
};

export default useFetch;
