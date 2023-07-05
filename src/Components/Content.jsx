import React from "react";

const Content = () => {
  const rightArrow = (
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
  );

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
      <div className="mb-4 rounded-full bg-empty w-[100px] h-[100px]">
        Profile Picture
      </div>

      <div className="mb-4 bg-empty rounded-lg p-2">Name</div>
      <div className=" bg-empty rounded-lg p-2">Email</div>
      <div className="w-[200px] mt-4 mb-4 flex flex-col gap-2 text-white rounded-lg">
        <div className="bg-black rounded-lg flex items-center">
          <div className="flex-grow text-left pl-2">
            GitHub
          </div>
          {rightArrow}
        </div>
        <div className="bg-red-600 rounded-lg">YouTube</div>
        <div className="bg-blue-900 rounded-lg">LinkedIn</div>
        <div className="bg-empty rounded-lg">em</div>
        <div className="bg-empty rounded-lg">em</div>
      </div>
    </aside>
  );
};

export default Content;
