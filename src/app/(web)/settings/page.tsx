import { Container, PasswordPreview, Profile } from "@/components";
import React from "react";

const Page = () => {
  return (
    <>
      <div className="bg-blue-500 py-12"></div>

      <Container styles="py-12 min-h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 border">
          <Profile />
          <PasswordPreview />
        </div>
      </Container>
    </>
  );
};

export default Page;
