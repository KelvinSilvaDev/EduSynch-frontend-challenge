import { ReactNode, useState } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface Props {
  children?: ReactNode;
}

export const Layout = ({ children, ...props }: Props) => {
  return (
    <>
      <Header />
      <main
        {...props}
        className="flex-col align-middle items-center justify-center h-[100vh] overflow-y-scroll overflow-x-hidden"
      >
        {children}
        <Footer />
      </main>
    </>
  );
};
