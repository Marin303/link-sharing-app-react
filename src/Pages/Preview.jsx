import React from "react";
import { Link } from "react-router-dom";
import Content from "../Components/Content";

const Preview = () => {
  
  return (
    <>
      <div className="bg-blue-400 h-96 p-2 rounded-b-lg">
        <div className="w-full flex justify-between p-2 bg-white rounded-lg">
          <Link to="/" className="btn-preview">
            Back to Editor
          </Link>
          <button className="btn-default">Share Link</button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Content />
        </div>
      </div>
    </>
  );
};

export default Preview;
