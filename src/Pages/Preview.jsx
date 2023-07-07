import React from "react";
import { Link } from "react-router-dom";
import Content from "../Components/Content";

const Preview = ({ forms, profileData }) => {
  return (
    <>
      <div className="bg-blue-400 h-96 p-2 rounded-b-lg">
        <div className="w-full flex justify-between p-2 bg-white rounded-lg">
          <Link to="/" className="btn-preview">
            Back to Editor
          </Link>
          <button className="btn-default">Share Link</button>
        </div>
        {forms && forms.length > 0 ? (
          <Content forms={forms} profileData={profileData} />
        ) : (
          <p>No forms available.</p>
        )}
      </div>
    </>
  );
};

export default Preview;

