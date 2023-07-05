import React, { useState } from "react";
import Nav from "./Nav";
import Content from "./Content";
import CustomLinks from "./CustomLinks";

const Layout = () => {
  const [forms, setForms] = useState([{ platform: "", link: "" }]);

  const handleFormChange = (updatedForms) => {
    setForms(updatedForms);
  };

  return (
    <div className="bg-blue-200 text-center min-h-screen">
      <Nav />
      <div className="flex justify-between">
        <Content forms={forms} />
        <CustomLinks onFormChange={handleFormChange} />
      </div>
    </div>
  );
};

export default Layout;
