import React from "react";

const Content = ({ forms, profileData }) => {
  const platformColors = {
    github: "bg-black",
    youtube: "bg-red-600",
    linkedin: "bg-blue-900",
    facebook: "bg-yellow-500",
    twitter: "bg-blue-400",
  };

  const renderValues = () => {
    const valueDivs = forms
    .map((form, index) => {
      const { platform, link } = form;
      const backgroundColor = platformColors[platform] || "";

      return (
        <div
          key={index}
          className={`rounded-lg p-1 h-6 flex items-center justify-center 
            ${backgroundColor}
            `}
        >
          <a href={link} className="text-white" target="_blank" rel="noreferrer">{platform}</a>
        </div>
      );
    });

    const emptyDivs = Array.from(
      { length: 5 - valueDivs.length },
      (_, index) => (
        <div
          key={`empty-${index}`}
          className="bg-empty rounded-lg p-1 h-6"
        ></div>
      )
    );

    return [...valueDivs, ...emptyDivs];
  };

  return (
    <aside
      className="
    max-h-[600px] min-h-[600px] min-w-[300px] 
    bg-iphone-image 
    bg-no-repeat 
    bg-center 
    bg-cover 
    relative flex flex-col justify-center items-center 
    bg-white rounded-lg m-2 links
    "
    >
      <div className="mb-3 rounded-full bg-empty w-[100px] h-[100px]">
        {profileData?.image && (
          <img
            className="rounded-full w-full h-full"
            alt="Profile Pic"
            src={URL.createObjectURL(profileData?.image)}
          />
        )}
      </div>
        <div className="mb-4 bg-empty rounded-lg p-1 min-w-[50%] min-h-[24px] break-words">
          {profileData?.firstName} {profileData?.lastName}
        </div>
        <div className=" bg-empty rounded-lg p-1 min-w-[50%] min-h-[24px] break-words">
          {profileData?.email}
        </div>
      <div className="w-[200px] mt-2 mb-4 flex flex-col gap-2 text-white rounded-lg">
        {renderValues()}
      </div>
    </aside>
  );
};

export default Content;
