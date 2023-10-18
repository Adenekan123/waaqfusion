import React, { ReactNode } from "react";
import ClientLayout from "./clientLayout";

const Layout = ({ children }: { children: ReactNode }) => {
  return <ClientLayout>{children}</ClientLayout>;
};

export default Layout;
