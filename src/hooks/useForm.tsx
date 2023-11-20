"use client";
import { redirect as go } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

export const useForm = (
  initialState: any,
  { url = "", redirect = "", method = "POST", staticval = {} } = {}
) => {
  const [state, setState] = useState(initialState);
  const [status, setStatus] = useState({error:'',success:''});
  const [response, setResponse] = useState<any>();
  const [loading, setLoading] = useState(false);

  const update = (e: any) => {
    const { name, value } = e.target as any;
    setState((prev: any) => ({ ...prev, [name]: value }));
  };

  const submit = async (e: any) => {
    e.preventDefault();
    console.log('here')
    setLoading(true);
    try {
      const response =
        method === "GET"
          ? await fetch(url)
          : await fetch(url, {
              cache: "no-cache",
              method,
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ ...staticval, ...state }),
            });
      setLoading(false);
      const result = await response.json();
      if(result === 'fetch failed') return toast.warning('Network Failure, Check your internet');
      if (result.error) throw new Error(result.error);
      if(result === 'fetch failed') throw new Error('Poor Network');
      setResponse(result);
      setStatus({success:result.message,error:''});
      toast.success(result.message);
    } catch (err: any) {
      setLoading(false);
      toast.error(err.message);
      setStatus({success:'',error:err.message});

    }
  };

  useEffect(() => {
    // const timeoutid = setTimeout(() => {
      if (status.success && redirect) go(redirect);
    // }, 500);

    // return () => clearTimeout(timeoutid);
  }, [status,redirect]);
  return { state, update, submit, loading, status,response };
};

