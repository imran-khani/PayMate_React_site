import React from 'react'
import Lottie from "lottie-react";
import error from "../assets/error-404.json";
const Error = () => {
  return (
    <div>
      <Lottie animationData={error} className="max-w-[500px]" />
    </div>
  )
}

export default Error
