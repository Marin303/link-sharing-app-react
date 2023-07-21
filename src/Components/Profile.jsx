import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitProfileData } from "./redux/actions"; // Import your Redux action

const Profile = ({ handleFormDataChange }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch(); // Get the dispatch function from React Redux

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setSelectedImage(image);
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      image: selectedImage,
    };
    dispatch(submitProfileData(formData)); // Dispatch the action to update Redux state with the form data
    // handleFormDataChange(formData);
    console.log(formData);
  };

  return (
    <>
      <section className="bg-white text-black text-left m-2 p-4 w-3/4 rounded-lg">
        <h2 className="font-bold text-lg">Profile Details</h2>
        <p>Add your details to create a personal touch to your profile</p>
        <div className="bg-empty mt-2 p-2 rounded-lg flex justify-center items-center">
          <p>Profile Picture</p>
          <div className="border-solid border-2 border-blue-500 w-32 h-32 relative rounded-lg flex justify-center items-center m-2">
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
                onClick={handleImageRemove}
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
          <p>Image must be PNG, JPG, or BMP format</p>
        </div>
        <div className="bg-empty mt-2 p-2 rounded-lg">
          <form onSubmit={handleSubmit}>
            <label htmlFor="firstName">First name*</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />

            <label htmlFor="lastName">Last name*</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-400 p-2 rounded-lg mt-2 text-white"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile;
