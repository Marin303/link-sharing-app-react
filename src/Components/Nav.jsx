import React from "react";

const Nav = () => {
  return (
    <div className="bg-white flex items-center justify-between p-3">
      <div className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
          />
        </svg>
        <h1 className="">Link sharing App</h1>
      </div>
      <div>
        <button className="btn-default">Links</button>
        <button className="btn-default ml-2">Profile Details</button>
      </div>
      <button className="btn-preview">Preview</button>
    </div>
  );
};

export default Nav;
