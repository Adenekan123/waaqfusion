"use client";
import { Footer, Header } from "@/components";
import { CartProvider } from "@/contexts/cartProvider";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <SessionProvider>
        <CartProvider>
          
          <Header />
          {children}
        </CartProvider>
      </SessionProvider>
      <Footer />

      <ToastContainer />
    </>
  );
};

export default Layout;
