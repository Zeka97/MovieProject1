import React from "react";
import Header from "../Header/Header";

const Layout = ({ children }: any) => {
  return (
    <div className="bg-[#141414] flex justify-center min-h-screen">
      <div className="flex flex-col lg:max-w-[1500px] w-[1500px]">
        <Header />
        {children}
      </div>
    </div>
  );
};

export default Layout;
