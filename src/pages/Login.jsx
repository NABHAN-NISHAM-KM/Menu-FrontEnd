import { useState } from "react";
import { MdLocalDining } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { TfiArrowCircleLeft } from "react-icons/tfi";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
  };

  const handleBackButtonClick = () => {
    window.history.back();
  };

  return (
    <div className="flex items-center justify-center h-screen bg-green-400 relative ">
      <div className="flex flex-col items-center justify-center bg-white p-12 w-3/5 rounded-lg shadow-md">
        <div className="flex items-start w-full ">
          <button
            onClick={handleBackButtonClick}
            className="text-gray-500 hover:text-gray-700"
          >
            <TfiArrowCircleLeft className="w-8 h-8" />
          </button>
        </div>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-400 mb-8">
          <MdLocalDining className="text-4xl text-white" />
        </div>
        <h1 className="text-2xl font-semibold mb-8">Sign in to your account</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <div className="relative">
              <FaUser className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="text"
                id="username"
                placeholder="Username"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
                required
                className="p-2 pl-10 shadow-lg rounded-full text-base mb-2 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className="relative">
              <MdPassword className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                className="p-2 pl-10 shadow-lg rounded-full text-base w-full"
              />
            </div>
          </div>
          <div className="flex justify-end mb-5">
            <a href="#" className="text-sm text-green-500 hover:underline">
              Forgot your password?
            </a>
          </div>
          <div className="flex items-center justify-center">
            <button
              type="submit"
              className="flex items-center justify-center bg-green-500 text-white py-2 px-12 rounded-full font-medium hover:bg-green-600 transition duration-200 mb-8"
            >
              Sign in
              <FaArrowRight className="ml-2" />
            </button>
          </div>
        </form>
        <div className="flex flex-col items-center justify-center space-y-2">
          <p className="text-sm text-gray-700">
            Don&apos;t have an account?{" "}
            <a href="/signup" className="text-green-500 hover:underline">
              Sign up
            </a>
          </p>
          <p className="text-sm text-gray-700">
            Get the{" "}
            <a href="#" className="text-green-500 hover:underline">
              App
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
