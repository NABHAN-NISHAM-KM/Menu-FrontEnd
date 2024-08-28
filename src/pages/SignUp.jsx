import { useState } from "react";
import { MdLocalDining } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { MdPassword } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RxMobile } from "react-icons/rx";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdDinnerDining } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { GiShop } from "react-icons/gi";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [isUserSignUp, setIsUserSignUp] = useState(true);
  const [restaurantType, setRestaurantType] = useState("");

  const handleUserSignUp = () => {
    setIsUserSignUp(true);
  };

  const handleRestaurantSignUp = () => {
    setIsUserSignUp(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Email:", email);
    console.log("Phone Number:", phonenumber);
    console.log(
      isUserSignUp ? "Signing up as User" : "Signing up as Restaurant"
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-full bg-green-400 relative">
      <div className="flex flex-col items-center justify-center bg-white p-12 w-3/5 rounded-lg shadow-md">
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-400 mb-8">
          <MdLocalDining className="text-4xl text-white" />
        </div>
        <h1 className="text-2xl font-semibold mb-8">
          {isUserSignUp ? "Create User Account" : "Create Restaurant Account"}
        </h1>

        <div className="flex items-center justify-around mb-6">
          <button
            onClick={handleUserSignUp}
            className={`px-6 py-2 rounded-full font-medium ${
              isUserSignUp
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            User
          </button>
          <button
            onClick={handleRestaurantSignUp}
            className={`ml-2 px-4 py-2 rounded-full font-medium ${
              !isUserSignUp
                ? "bg-green-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Restaurant
          </button>
        </div>

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
                className="p-2 pl-10 shadow-lg rounded-full text-base mb-2 w-full"
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
                className="p-2 pl-10 shadow-lg rounded-full text-base w-full"
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
                className="p-2 pl-10 shadow-lg rounded-full text-base mb-2 w-full"
              />
            </div>
          </div>
          <div className="flex flex-col mb-2">
            <div className="relative">
              <RxMobile className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400 text-lg" />
              <input
                type="number"
                id="phonenumber"
                placeholder="Mobile"
                value={phonenumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
                required
                className="p-2 pl-10 shadow-lg rounded-full text-base mb-2 w-full"
              />
            </div>
          </div>
          {!isUserSignUp && (
            <>
              <div className="flex flex-col mb-4">
                <div className="relative">
                  <MdDinnerDining className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400 text-lg" />
                  <input
                    type="text"
                    id="restaurantname"
                    placeholder="Restaurant Name"
                    required
                    className="p-2 pl-10 shadow-lg rounded-full text-base w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <div className="relative">
                  <FaLocationDot className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400 text-lg" />
                  <input
                    type="text"
                    id="location"
                    placeholder="Location"
                    required
                    className="p-2 pl-10 shadow-lg rounded-full text-base w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <div className="relative">
                  <GiShop className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400 text-lg" />
                  <select
                    id="restaurantType"
                    value={restaurantType}
                    onChange={(event) => setRestaurantType(event.target.value)}
                    required
                    className="appearance-auto p-2 pl-10 pr-4 shadow-lg rounded-full text-base w-full text-gray-500"
                  >
                    <option value="" disabled>
                      Restaurant Type
                    </option>
                    <option value="fastfood">Fast Food</option>
                    <option value="casualdining">Casual Dining</option>
                    <option value="finedining">Fine Dining</option>
                    <option value="cafe">Cafe</option>
                    <option value="buffet">Buffet</option>
                    <option value="foodtruck">Food Truck</option>
                    <option value="others">Others</option>
                  </select>
                </div>
              </div>
            </>
          )}
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
            Already have an{" "}
            <a href="/login" className="text-green-500 hover:underline">
              Account
            </a>
          </p>
          {isUserSignUp && (
            <div className="flex flex-col items-center">
              <p className="text-sm text-gray-700 mb-2">
                Or create account using social media{" "}
              </p>
              <div className="flex">
                <IoLogoFacebook className="text-4xl text-blue-700 mr-2" />
                <FaTwitter className="text-4xl text-blue-400 mr-2" />
                <FcGoogle className="text-4xl text-red-600" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
