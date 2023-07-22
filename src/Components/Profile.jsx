import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  updateFirstName,
  updateLastName,
  updateEmail,
  updateImage,
} from "../redux/actions";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errorAlert, setErrorAlert] = useState("");

  const dispatch = useDispatch();

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setSelectedImage(image);
  };

  const handleImageRemove = () => {
    setSelectedImage(null);
  };

  const isEmailValid = (email) => {
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    return emailPattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      image: selectedImage,
    };

    let error = "";

  switch (true) {
    case !firstName || !lastName || !email || !selectedImage:
      error = "Please fill out all required fields.";
      break;
    case !isEmailValid(email):
      error = "Please enter a valid email address.";
      break;
    default:
      dispatch(updateFirstName(formData.firstName));
      dispatch(updateLastName(formData.lastName));
      dispatch(updateEmail(formData.email));
      dispatch(updateImage(formData.image));
  }

  setErrorAlert(error);
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
              name="image"
              onChange={handleImageChange}
            />
          </div>
          <p>Image must be PNG, JPG, or BMP format</p>
        </div>
        <div className="bg-empty mt-2 p-2 rounded-lg">
          <form>
            <label htmlFor="firstName">First name*</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <label htmlFor="lastName">Last name*</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
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
            { errorAlert && 
            <p className="text-red-500">
              {errorAlert}
            </p>
            }
          </form>
        </div>
      </section>
    </>
  );
};

export default Profile;
