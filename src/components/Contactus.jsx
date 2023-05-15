import React from "react";
import Lottie from "lottie-react";
import animation from "../assets/business-group-meeting.json";
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from "@mui/material";

const Contact = () => {
  return (
    <>
      <section class="p-5">
        <div class="mx-auto max-w-6xl">
          <h1 class=" text-center text-4xl font-bold text-gray-800">
            Contact us
          </h1>
          <div class="mt-8 grid grid-cols-1 gap-8 py-10 md:grid-cols-2 ">
            <div>
              <h2 className="mb-3 text-xl font-bold">
                Connect with our Sale Team
              </h2>
              <p className="paragraph max-w-sm ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Distinctio at quia velit obcaecati beatae praesentium maiores ea
                odit nobis repellendus!
              </p>
              <Lottie
                animationData={animation}
                className="relative -left-12 -top-10 w-3/4 "
              />
            </div>
            <div>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="flex flex-col items-center gap-5 md:flex-row">
                  <TextField
                    id="standard-basic"
                    label="First Name"
                    className="w-full md:w-2/4"
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="Last Name"
                    variant="standard"
                    className="w-full md:w-2/4"
                  />
                </div>
                <div className="mb-5 mt-5 flex flex-col items-center gap-5 md:flex-row">
                  <TextField
                    id="standard-basic"
                    label="Phone Number"
                    className="w-full md:w-2/4"
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="Your Email"
                    variant="standard"
                    className="w-full md:w-2/4"
                  />
                </div>
                <TextField
                  id="standard-basic"
                  label="Add Address"
                  variant="standard"
                  className="mt-10 w-full"
                />
                <TextareaAutosize
                  id="standard-basic"
                  label="Enter Your Message"
                  variant="standard"
                  placeholder="Enter Your Message"
                  className="mt-10 w-full border-2 border-gray-200 p-5 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-200  "
                />
                {/* checkbox for agreement */}
                <div className="mt-5 flex items-center ">
                  <input
                    type="checkbox"
                    className="h-4 w-4 cursor-pointer"
                    id="agreement"
                  />
                  <label htmlFor="agreement" className="ml-3 cursor-pointer">
                    I agree to the terms and conditions and privacy policy of
                    the website.
                  </label>
                </div>
                <button className="mt-10 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
