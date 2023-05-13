import React from "react";
import loti from "../assets/payment_animation.json";
import Lottie from "lottie-react";

const Header = () => {
  return (
    <>
      <section className="bg-cyan-50 p-5">
        <div className="mx-auto max-w-6xl">
          <div className=" grid grid-cols-1 items-center py-10 md:grid-cols-2 md:py-10">
            <div className="px-5 py-16 ">
              <h2 className="text-4xl font-bold text-gray-800">
                Online <span className="text-indigo-600">Payment</span> Made
                <br />
                Easy For You.
              </h2>
              <p className="paragraph mt-5 max-w-[400px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                tenetur vitae ea, sunt laboriosam accusamus. Ex tenetur
                voluptates ipsa maiores excepturi tempora
              </p>

              <h3 className="mt-10 text-xl  text-gray-800">Get Early Access</h3>

              <div className="mt-3">
                <input
                  type="text"
                  className="h-12 w-72 rounded-md rounded-r-none border border-gray-200 px-3  py-2  focus:outline-none"
                  placeholder="Enter your email"
                />
                <button className="  w-42 inline-block h-12 rounded rounded-l-none bg-indigo-500 px-4 py-2 text-white hover:bg-blue-600">
                  Get it now
                </button>
              </div>
            </div>

            <div className="block">
              <Lottie animationData={loti} loop={true} className="max-w-lg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
