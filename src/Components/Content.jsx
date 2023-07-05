import React from "react";

const Content = ({ link, platform }) => {
  const renderValues = () => {
    if (platform === "github" && link.includes("https://github.com/")) {
      return (
        <div className="bg-black rounded-lg p-1 h-6">GitHub</div>
      );
    } else if (platform === "youtube" && link.includes("https://youtube.com/")) {
      return (
        <div className="bg-red-600 rounded-lg p-1 h-6">YouTube</div>
      );
    } else if (platform === "linkedin" && link.includes("https://linkedin.com/")) {
      return (
        <div className="bg-blue-900 rounded-lg p-1 h-6">LinkedIn</div>
      );
    } else if (platform === "facebook" && link.includes("https://facebook.com/")) {
      return (
        <div className="bg-yellow-500 rounded-lg p-1 h-6">Facebook</div>
      );
    } else if (platform === "twitter" && link.includes("https://twitter.com/")) {
      return (
        <div className="bg-blue-400 rounded-lg p-1 h-6">Twitter</div>
      );
    } else {
      return (
        <div className="bg-empty rounded-lg p-1 h-6">{platform}</div>
      );
    }
  };

/*   const rightArrow = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-4 inline-block pr-2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
      />
    </svg>
  ); */

  return (
    <aside
      className="
        max-h-[600px]
        min-h-[600px]
        min-w-[300px] 
        bg-iphone-image 
        bg-no-repeat 
        bg-center 
        bg-cover 
        relative 
        flex flex-col 
        justify-center 
        items-center
        bg-white
        rounded-lg
        m-2"
    >
      <div className="mb-3 rounded-full bg-empty w-[100px] h-[100px]">
        Profile Picture
      </div>

      <div className="mb-4 bg-empty rounded-lg p-1">Name</div>
      <div className=" bg-empty rounded-lg p-1">Email</div>
      <div className="w-[200px] mt-2 mb-4 flex flex-col gap-2 text-white rounded-lg">
        {renderValues()}
        <div className=" bg-empty rounded-lg p-1 h-6"></div>
        <div className=" bg-empty rounded-lg p-1 h-6"></div>
        <div className=" bg-empty rounded-lg p-1 h-6"></div>
        <div className=" bg-empty rounded-lg p-1 h-6"></div>
        <div className=" bg-empty rounded-lg p-1 h-6"></div>
      </div>
    </aside>
  );
};

export default Content;
