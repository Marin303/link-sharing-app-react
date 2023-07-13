import React, { useState } from "react";
import Nav from "./Nav";
import Content from "./Content";
import CustomLinks from "./CustomLinks";
import Profile from "./Profile";
import Preview from "../Pages/Preview";

const Layout = () => {
  const [forms, setForms] = useState([]);
  const [active, setActive] = useState("links");
  const [profileData, setProfileData] = useState(null);

  const handleFormChange = (updatedForms) => {
    setForms(updatedForms);
  };

  const handleSectionChange = (section) => {
    setActive(section);
  };

  const handleFormDataChange = (data) => {
    setProfileData(data);
  };
  
  return (
    <div className="bg-blue-200 text-center min-h-screen">
      <Nav activeSection={active} onSectionChange={handleSectionChange} />
      <div className="flex flex-wrap justify-center">
        <Content forms={forms} profileData={profileData} />
        {active === "links" ? (
          <CustomLinks onFormChange={handleFormChange} />
        ) : active === "profile" ? (
          <Profile handleFormDataChange={handleFormDataChange} />
        ) : null}
      </div>
      {active === "preview" ? (
      <Preview forms={forms} />
      ): null}
    </div>
  );
};

export default Layout;
