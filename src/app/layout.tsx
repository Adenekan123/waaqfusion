import { ToastContainer } from "react-toastify";
import { ClientLayout } from "./clientLayout";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-Nunito">
        {<ClientLayout>{children}</ClientLayout>} <ToastContainer />
      </body>
    </html>
  );
}
