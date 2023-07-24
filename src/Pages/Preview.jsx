import React from "react";
import { Link } from "react-router-dom";
import Content from "../Components/Content";
import GoBackIcon from "../Icons/GoBack";
import ShareIcon from "../Icons/Share";
import { useSelector } from "react-redux";

const Preview = () => {
  const forms = useSelector(state => state.forms);
  const profileData = useSelector(state => state.profileData);
  const imageFile = useSelector(state => state.profileData.imageFile);
  
  const uploadData = async () => {
    try {
      const formData = new FormData();
      formData.append('image', imageFile);
    
      // Excluding the base64 image from profileData
      const { image, ...restProfileData } = profileData;
    
      formData.append('profileData', JSON.stringify(restProfileData));
      formData.append('forms', JSON.stringify(forms));
    
      const response = await fetch(process.env.REACT_APP_API_KEY, {
          method: 'POST',
          body: formData,
      });
      
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
    
      /* const data = await response.json();
      console.log(data); */
      
    } catch(error) {
        console.error('Error:', error);
    }
  }

  return (
    <div className="bg-blue-400 h-96 p-2 rounded-b-lg text-center">
      <div className="w-full flex justify-between p-2 bg-white rounded-lg">
        <Link to="/" className="btn-preview flex">
          <GoBackIcon />
          <span className="hidden sm:block ml-2">Back to Editor</span>
        </Link>
        <button 
          className="btn-default flex"
          onClick={uploadData}
        >
          <ShareIcon />
          <span className="hidden sm:block ml-2">Share Link</span>
        </button>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Content forms={forms} />
      </div>
    </div>
  );
};

export default Preview;
