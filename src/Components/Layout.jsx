import React, { useState } from "react";
import Nav from "./Nav";
import Content from "./Content";
import CustomLinks from "./CustomLinks";
import Profile from "./Profile";

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

  const isActiveLinks = active === "links" 
  const isActiveProfile = active === "profile" 
  
  return (
    <div className="bg-blue-200 text-center min-h-screen">
      <Nav onSectionChange={handleSectionChange} />
      <div className="flex flex-wrap justify-center">
        <Content forms={forms} profileData={profileData} />
        {isActiveLinks && (
          <CustomLinks onFormChange={handleFormChange} />
        )}
         {isActiveProfile &&  (
          <Profile handleFormDataChange={handleFormDataChange} />
        )}
      </div>
    </div>
  );
};

export default Layout;
