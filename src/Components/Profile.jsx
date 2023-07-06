import React, { useState } from "react";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  return (
    <>
      <section className="bg-white text-black text-left m-2 w-full rounded-lg p-4 profile">
        <div className="border-solid border-2 border-blue-500 w-32 h-32 relative rounded-lg flex justify-center items-center">
          {selectedImage && (
            <img
              className="rounded-lg absolute w-full h-full"
              alt="not found"
              src={URL.createObjectURL(selectedImage)}
            />
          )}
          <label
            htmlFor="files"
            className="bg-black text-white rounded-lg p-1 absolute cursor-pointer opacity-75"
          >
            {selectedImage ? "Change Image" : "Select Image"}
          </label>
          {selectedImage && (
            <button
              onClick={() => setSelectedImage(null)}
              className="bg-red-500 text-white p-0.5 rounded-lg absolute bottom-2 right-2"
            >
              Remove
            </button>
          )}
          <input
            id="files"
            className="hidden"
            type="file"
            name="myImage"
            onChange={handleImageChange}
          />
        </div>
      </section>
    </>
  );
};

export default Profile;
