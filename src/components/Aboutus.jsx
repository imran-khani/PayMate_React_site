import React from "react";
import loti from "../assets/mobileApp.json";
import Lottie from "lottie-react";

import AboutApi from "../Api/AboutApi";
const Aboutus = () => {
  return (
    <>
      <section className="mt-5 p-5 ">
        <div className="mx-auto max-w-6xl ">
          <div className="grid md:grid-cols-2 ">
            <div className="flex justify-center">
              <Lottie
                animationData={loti}
                loop={true}
                className="max-w-[500px]"
              />
            </div>
            <div className="p-10">
              <p className="py-5 uppercase text-gray-400">
                --Available at Google and IOS Stores ONLY{" "}
              </p>
              <h2 className="mb-3 text-xl font-bold text-gray-800">
                How to Use the App?
              </h2>
              {AboutApi.map((curElem, index) => {
                const { icon, title, para } = curElem;
                return (
                  <div className="py-3" key={index}>
                    <span className="flex gap-3 text-xl">
                      {icon} {title}
                    </span>
                    <p className="paragraph ml-11 mt-2 max-w-[400px]">{para}</p>
                  </div>
                );
              })}
              <button className=" ml-10 mt-3 rounded-md bg-indigo-500 p-2 text-white">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 in aboutus  */}
      <section className=" p-5 ">
        <div className="mx-auto max-w-6xl ">
          <div className="grid md:grid-cols-2 ">
            <div className="p-10">
              <p className="py-5 uppercase text-gray-400">
                --support in any language
              </p>
              <h2 className="mb-3 text-xl font-bold text-gray-800">
                World class support is <br /> available 24/7
              </h2>
              {AboutApi.map((curElem, index) => {
                const { icon, title, para } = curElem;
                return (
                  <div className="py-3" key={index}>
                    <span className="flex gap-3 text-xl">
                      {icon} {title}
                    </span>
                    <p className="paragraph ml-11 mt-2 max-w-[400px]">{para}</p>
                  </div>
                );
              })}
              <button className=" ml-5 mt-3 rounded-md bg-indigo-500 p-2 text-white">
                Learn More
              </button>
            </div>
            <div className="flex justify-center">
              <Lottie
                animationData={loti}
                loop={true}
                className="max-w-[500px]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;


