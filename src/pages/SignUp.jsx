import { useState } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
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
import { IoFastFoodSharp } from "react-icons/io5";
import { MdOutlineBrunchDining } from "react-icons/md";
import { GiChickenOven } from "react-icons/gi";
import { IoIosCafe } from "react-icons/io";
import { BiSolidDish } from "react-icons/bi";
import { GiFoodTruck } from "react-icons/gi";
import { TfiArrowCircleLeft } from "react-icons/tfi";
import { FaBowlRice } from "react-icons/fa6";
import { PiBowlSteamFill } from "react-icons/pi";
import { FaInfoCircle } from "react-icons/fa";
import "../styles/SignUp.css";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [isUserSignUp, setIsUserSignUp] = useState(true);
  const [restaurantType, setRestaurantType] = useState("");
  const [restaurantName, setRestaurantName] = useState("");
  const [location, setLocation] = useState("");

  const handleUserSignUp = () => {
    setIsUserSignUp(true);
  };

  const handleRestaurantSignUp = () => {
    setIsUserSignUp(false);
  };
  const handleBackButtonClick = () => {
    window.history.back();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Username: ", username);
    console.log("Password: ", password);
    console.log("Email: ", email);
    console.log("Phone Number: ", phonenumber);
    if (!isUserSignUp) {
      console.log("Restaurant Name: ", restaurantName);
      console.log("Location: ", location);
      console.log("Restaurant Type: ", restaurantType);
    }
    console.log(
      isUserSignUp ? "Signing up as User" : "Signing up as Restaurant"
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-400 relative">
      <div className="flex flex-col items-center justify-center bg-white p-6 w-3/5 rounded-lg shadow-md">
        <div className="flex items-start w-full ">
          <button
            onClick={handleBackButtonClick}
            className="text-gray-500 hover:text-gray-700"
          >
            <TfiArrowCircleLeft className="w-8 h-8" />
          </button>
        </div>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-400 mb-2">
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
                    value={restaurantName}
                    onChange={(event) => setRestaurantName(event.target.value)}
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
                    value={location}
                    onChange={(event) => setLocation(event.target.value)}
                    required
                    className="p-2 pl-10 shadow-lg rounded-full text-base w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-4">
                <div className="relative">
                  {restaurantType === "" || restaurantType === "others" ? (
                    <GiShop className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400 text-lg" />
                  ) : null}
                  {restaurantType === "fastfood" && (
                    <IoFastFoodSharp className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400 text-lg" />
                  )}
                  {restaurantType === "casualdining" && (
                    <GiChickenOven className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400 text-lg" />
                  )}
                  {restaurantType === "finedining" && (
                    <MdOutlineBrunchDining className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400 text-lg" />
                  )}
                  {restaurantType === "cafe" && (
                    <IoIosCafe className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400 text-lg" />
                  )}
                  {restaurantType === "buffet" && (
                    <BiSolidDish className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400 text-lg" />
                  )}
                  {restaurantType === "foodtruck" && (
                    <GiFoodTruck className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400 text-lg" />
                  )}
                  {restaurantType === "vegtarian" && (
                    <FaBowlRice className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400 text-lg" />
                  )}
                  {restaurantType === "ethniccuisine" && (
                    <PiBowlSteamFill className="absolute left-3 top-5 transform -translate-y-1/2 text-gray-400 text-lg" />
                  )}
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
                    <option value="vegtarian">Vegtarian</option>
                    <option value="ethniccuisine">Ethnic Cuisine</option>
                    <option value="others">Others</option>
                  </select>
                </div>
                {restaurantType && (
                  <>
                    <FaInfoCircle
                      data-tooltip-id="my-tooltip"
                      data-tooltip-place="bottom-start"
                      data-tooltip-content={
                        restaurantType === "fastfood"
                          ? "Quick, easy meals."
                          : restaurantType === "casualdining"
                          ? "Relaxed atmosphere with moderate pricing."
                          : restaurantType === "finedining"
                          ? "High-end dining with a formal atmosphere."
                          : restaurantType === "cafe"
                          ? "Light meals and coffee."
                          : restaurantType === "buffet"
                          ? "All-you-can-eat with a variety of dishes."
                          : restaurantType === "foodtruck"
                          ? "Mobile kitchen serving street food."
                          : restaurantType === "vegtarian"
                          ? "Plant-based and health-conscious meals.."
                          : restaurantType === "ethniccuisine"
                          ? "Traditional dishes from a specific culture."
                          : restaurantType === "others"
                          ? "Unique or niche dining experiences."
                          : ""
                      }
                      className="absolute ml-60 mt-3 text-gray-400 text-lg cursor-pointer"
                    />
                    <ReactTooltip
                      id="my-tooltip"
                      className="custom-tooltip"
                      noArrow
                      variant="success"
                    />
                  </>
                )}
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
