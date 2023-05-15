import React from "react";
import Lottie from "lottie-react";
import error from "./assets/error-404.json";
import { NavLink } from "react-router-dom";
const Error = () => {
  return (
    <div className=" flex flex-col items-center justify-center">
      <Lottie animationData={error} className="max-w-[500px] " />
      <NavLink to={'/home'}>
        <button className="rounded-md bg-indigo-500 p-2 text-white  transition duration-200 hover:bg-indigo-700">
          Go to Homepage
        </button>
      </NavLink>
    </div>
  );
};

export default Error;
