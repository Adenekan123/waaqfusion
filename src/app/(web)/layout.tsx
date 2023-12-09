"use client";
import { Footer, Header } from "@/components";
import { CartProvider } from "@/contexts/cartProvider";
import { SessionProvider } from "next-auth/react";
import React, { ReactNode } from "react";

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

    </>
  );
};

export default Layout;
