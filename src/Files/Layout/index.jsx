import React from "react";
import Header from "./header";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex items-start justify-center">
      <div className="flex flex-col justify-start w-full h-screen">
        <Header />
        {children}
      </div>
    </div>
  );
};
export default Layout;
