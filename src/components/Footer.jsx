import React from "react";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <section className="bg-indigo-500 p-2 ">
        <div className="mx-auto max-w-6xl py-10">
          <div className="grid grid-cols-2 gap-5 text-center md:grid-cols-3 lg:grid-cols-4">
            <div>
              <h2 className="text-xl font-bold text-white">Company</h2>
              <ul className="mt-4 ">
                <li className="py-2">
                  <a href="#" className="text-gray-200 hover:text-white">
                    About Our Company
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="text-gray-200 hover:text-white">
                    Our Mission Statement
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="text-gray-200 hover:text-white">
                    Meet Our Team
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="text-gray-200 hover:text-white">
                    Contact Us Today
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Services</h2>
              <ul className="mt-4 ">
                <li className="py-2">
                  <a href="#" className="text-gray-200 hover:text-white">
                    Our Offerings
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="text-gray-200 hover:text-white">
                    Our Pricing
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="text-gray-200 hover:text-white">
                    Frequently Asked Questions
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="text-gray-200 hover:text-white">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Connect</h2>
              <ul className="mt-4 ">
                <li className="py-2">
                  <a href="#" className="text-gray-200 hover:text-white">
                    Join Our Newsletter
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="text-gray-200 hover:text-white">
                    Follow Us on Social Media
                  </a>
                </li>
                <li className="py-2">
                  <a href="#" className="text-gray-200 hover:text-white">
                    Customer Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Follow Us</h2>
              <div className="mt-5 flex text-center  gap-5 ">
                <div className="flex flex-col gap-5 text-center md:flex-row">
                  <BsFacebook className="cursor-pointer text-2xl text-white hover:scale-x-110 hover:text-blue-600 " />
                  <BsInstagram className="cursor-pointer text-2xl text-white hover:scale-x-110 hover:text-pink-400 " />{" "}
                </div>

                <div className="flex flex-col gap-5 md:flex-row">
                  <BsTwitter className="cursor-pointer text-2xl text-white hover:scale-x-110 hover:text-blue-400 " />
                  <BsYoutube className="cursor-pointer text-2xl text-white hover:scale-x-110   hover:text-red-500 " />
                </div>
              </div>
            </div>
          </div>
        </div>
        <span className="text-white ">copyright @imran</span>
      </section>
    </>
  );
};

export default Footer;
