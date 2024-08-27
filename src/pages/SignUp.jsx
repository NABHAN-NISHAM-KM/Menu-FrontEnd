import React, { useState } from 'react'
import { MdLocalDining } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RxMobile } from "react-icons/rx";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";




const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Email:", email);
    console.log("Phone Number:", phonenumber);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-400 relative ">
      <div className="flex flex-col items-center justify-center bg-white p-12 w-3/5 rounded-lg shadow-md">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-400 mb-8">
          <MdLocalDining className="text-4xl text-white" />
        </div>
        <h1 className="text-2xl font-semibold mb-8">Create account</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-2">
            <div className="relative">
              <FaUser className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
                className="p-2 pl-10 border border-gray-300 rounded-full text-base mb-2 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <div className="relative">
              <MdPassword className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="p-2 pl-10 border border-gray-300 rounded-full text-base w-full"
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className="relative">
              <MdEmail className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                className="p-2 pl-10 border border-gray-300 rounded-full text-base mb-2 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col mb-4">
            <div className="relative">
              <RxMobile className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="number"
                id="phonenumber"
                placeholder="Mobile"
                value={phonenumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                required
                className="p-2 pl-10 border border-gray-300 rounded-full text-base mb-2 w-full"
              />
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="flex items-center justify-center bg-green-500 text-white py-2 px-12 rounded-full font-medium hover:bg-green-600 transition duration-200 mb-4"
            >
              Sign Up
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-sm text-gray-700">
            Already have an {" "}
            <a href="/login" className="text-green-500 hover:underline">
              account
            </a>
          </p>
          <p className="text-sm text-gray-700">
            Or create account using social media {" "}
            <div className='flex items-center justify-around py-3'>
              <IoLogoFacebook className="text-4xl text-blue-700" />
              <FaTwitter className="text-4xl text-blue-400" />
              <FcGoogle className="text-4xl text-red-600" />
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp
