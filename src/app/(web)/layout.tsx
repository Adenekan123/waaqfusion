"use client";
import { Footer, Header } from "@/components";
import React, { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ToastContainer/>
    </>
  );
};

export default Layout;
