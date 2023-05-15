import React, { useEffect } from "react";
import Lottie from "lottie-react";
import errorAnim from "./assets/error-404.json";
import { NavLink } from "react-router-dom";

const Error = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Redirect to homepage after 15 seconds
      window.location.href = "/home";
    }, 15000); // 1 minute = 60000 milliseconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <Lottie animationData={errorAnim} className="max-w-[500px]" />
      <NavLink to="/home">
        <button className="rounded-md bg-indigo-500 p-2 text-white transition duration-200 hover:bg-indigo-700">
          Go to Homepage
        </button>
      </NavLink>
    </div>
  );
};

export default Error;
