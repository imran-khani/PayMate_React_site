import React, { useState } from "react";
import Service from "../Api/ServicesApi";
import animation2 from "../assets/support.json";
const Services = () => {
  const [data, setData] = useState(Service);
  return (
    <>
      <section className="p-5">
        <div className="mx-auto max-w-6xl py-10">
          <h1 className="col mt-5 text-center text-2xl font-bold">
            How to send money?
          </h1>

          <div className="grid gap-10 p-10 text-center md:grid-cols-2 lg:grid-cols-3">
            {data.map((item) => {
              const { id, logo, title, para } = item;
              return (
                <div
                  key={id}
                  className="flex transform cursor-pointer flex-col items-center rounded-md p-10 shadow-md shadow-gray-200 transition duration-75 ease-in-out hover:scale-110"
                >
                  <div className="mb-5 flex h-16 w-16  items-center justify-center rounded-full bg-indigo-50">
                    {logo}
                  </div>
                  <h3 className="mb-2 text-xl font-bold ">{title}</h3>
                  <p className="mb-3 text-gray-400">{para}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
