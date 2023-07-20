import React from "react";
import { connect, useDispatch } from "react-redux";
import {
  updateFirstName,
  updateLastName,
  updateEmail,
  updateImage,
} from "../redux/actions";

const Profile = ({ firstName, lastName, email, image }) => {

  const dispatch = useDispatch()
  
  const handleImageChange = (event) => {
    const image = event.target.files[0];
    dispatch(updateImage(image));
  };

  const handleImageRemove = () => {
    dispatch(updateImage(null));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      firstName,
      lastName,
      email,
      image,
    };
    
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
            {image && (
              <img
                className="rounded-lg absolute w-full h-full"
                alt="not found"
                src={URL.createObjectURL(image)}
              />
            )}
            <label
              htmlFor="files"
              className="bg-black text-white rounded-lg p-1 absolute cursor-pointer opacity-75"
            >
              {image ? "Change Image" : "Select Image"}
            </label>
            {image && (
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
              onChange={(e) => dispatch(updateFirstName(e.target.value))}
              required
            />

            <label htmlFor="lastName">Last name*</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={(e) => dispatch(updateLastName(e.target.value))}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => dispatch(updateEmail(e.target.value))}
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

const mapStateToProps = (state) => {
  const { firstName, lastName, email, image } = state.profileData;
  return {
    firstName,
    lastName,
    email,
    image,
  };
};

const mapDispatchToProps = {
  updateFirstName,
  updateLastName,
  updateEmail,
  updateImage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
