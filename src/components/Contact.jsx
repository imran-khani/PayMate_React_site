import React from "react";
import Lottie from "lottie-react";
import animation from "../assets/business-group-meeting.json";
import TextField from "@mui/material/TextField";

const Contact = () => {
  return (
    <>
      <section class="p-5">
        <div class="mx-auto max-w-6xl">
          <h1 class=" text-center text-4xl font-bold text-gray-800">Contact</h1>
          <div class="mt-8 grid grid-cols-1 gap-8 py-10 md:grid-cols-2 ">
            <div >
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
              <form>
                <div className="flex flex-col md:flex-row gap-5">
                  <TextField
                    id="standard-basic"
                    label="First Name"
                    className="w-2/4"
                    variant="standard"
                  />
                  <TextField
                    id="standard-basic"
                    label="Last Name"
                    variant="standard"
                    className="w-2/4"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
