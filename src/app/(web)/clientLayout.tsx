"use client";

import { ReactNode, useEffect } from "react";
const ClientLayout = ({ children }: { children: ReactNode }) => {
    
  useEffect(() => {
    if ((window as any).tidioChatApi) {
      (window as any).tidioChatApi.on("ready", () =>
        (window as any).tidioChatApi.hide()
      );
      (window as any).tidioChatApi.on("close", () =>
        (window as any).tidioChatApi.hide()
      );
    }
  }, []);

  return <> {children}</>;
};

export default ClientLayout;
