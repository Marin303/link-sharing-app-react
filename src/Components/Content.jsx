import React from "react";

const Content = () => {
  return (
    <aside
      className="
        min-h-[600px] min-w-[300px] 
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
        <div className="bg-black rounded-lg">GitHub</div>
        <div className="bg-red-600 rounded-lg">YouTube</div>
        <div className="bg-blue-900 rounded-lg">LinkedIn</div>
        <div className="bg-empty rounded-lg">em</div>
        <div className="bg-empty rounded-lg">em</div>
      </div>
    </aside>
  );
};

export default Content;
