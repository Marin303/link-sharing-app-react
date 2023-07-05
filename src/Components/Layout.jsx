import React from "react";
import Nav from "./Nav";
import Content from "./Content";
import CustomLinks from "./CustomLinks";

const Layout = () => {
  return (
    <div className="bg-blue-200 text-center min-h-screen">
      <Nav />
      <div className="flex justify-between ">
        <Content />
        <CustomLinks />
      </div>
    </div>
  );
};

export default Layout;
