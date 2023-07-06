import React, { useState } from "react";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <section className="bg-white text-black text-left m-2 w-full rounded-lg p-4 profile">
        {selectedImage && (
          <div>
            <img
              alt="not found"
              width={"250px"}
              src={URL.createObjectURL(selectedImage)}
            />
            <button onClick={() => setSelectedImage(null)}>Remove</button>
          </div>
        )}
        <label htmlFor="files">Select</label>
        <input
          id="files"
          className="hidden"
          type="file"
          name="myImage"
          onChange={(event) => {
            console.log(event.target.files[0]);
            setSelectedImage(event.target.files[0]);
          }}
        />
      </section>
    </>
  );
};

export default Profile;
