import React from "react";
import { Header } from "../ui/Components/Navigation/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default layout;
