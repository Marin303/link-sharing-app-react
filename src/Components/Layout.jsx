import React, { useState } from "react";
import Nav from "./Nav";
import Content from "./Content";
import CustomLinks from "./CustomLinks";

const Layout = () => {
  const [link, setLink] = useState("");
  const [platform, setPlatform] = useState("");

  const handleFormChange = (updatedLink, updatedPlatform) => {
    console.log('Link:', updatedLink)
    console.log('Platform:', updatedPlatform)
    setLink(updatedLink);
    setPlatform(updatedPlatform);
    
  };
  
  return (
    <div className="bg-blue-200 text-center min-h-screen">
      <Nav />
      <div className="flex justify-between">
        <Content link={link} platform={platform} />
        <CustomLinks onFormChange={handleFormChange} />
      </div>
    </div>
  );
};

export default Layout;
