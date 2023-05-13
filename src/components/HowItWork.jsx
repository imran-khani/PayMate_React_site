import React, { useState } from "react";
import workapi from "../Api/WorkApi";
const HowItWork = () => {
  const [workData, setWorkData] = useState(workapi);

  return (
    <div>
      <section className="p-5">
        <div className="mx-auto -mt-12 max-w-6xl rounded  bg-white p-6 shadow-md">
          <h1 className="col mt-5 text-center text-2xl font-bold">
            How Does it Work?
          </h1>
          <div className="grid gap-10 p-10 text-center md:grid-cols-3">
            {workData.map((item, index) => {
              const { logo, title, info } = item;
              return (
                <div key={index} className="mx-auto mt-5 max-w-[250px]">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-indigo-50">
                    {logo}
                  </div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="mt-4 text-gray-500">{info}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWork;
