import React, { useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // close nav when the screen is resized above 768px
  window.addEventListener("resize", () => {
    window.innerWidth > 768 ? setIsOpen(false) : null;
  });

  return (
    <nav className="border-gray-200  bg-cyan-50">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between p-4">
        <span className="self-center whitespace-nowrap text-2xl font-semibold ">
          PayMate
        </span>

        <button
          onClick={toggleMenu}
          type="button"
          className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none md:hidden"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className={`h-6 w-6 ${isOpen ? "hidden" : ""} `}
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className={`h-6 w-6 ${isOpen ? "" : "hidden"} `}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${isOpen ? "" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="mt-4 flex flex-col items-center gap-1 rounded-lg border border-gray-100  p-3 font-medium   md:mt-0 md:flex-row md:space-x-8 md:border-0  md:p-0 ">
            <li>
              <NavLink
                to="/home"
                className="block rounded bg-indigo-700 py-2 pl-3 pr-4  md:bg-transparent md:p-0 md:text-blue-700 "
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/service"
                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100  dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block rounded py-2 pl-3 pr-4 text-gray-900   md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block rounded py-2 pl-3 pr-4 text-gray-900   md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
              >
                Contact
              </NavLink>
            </li>
            <button className="rounded-full border border-transparent bg-indigo-500 px-4 py-2 font-bold text-white transition-all duration-300 hover:border-indigo-500 hover:bg-transparent hover:text-indigo-500">
              Sign in
            </button>
            <button className="rounded-full border border-transparent bg-transparent px-4 py-2 font-bold text-indigo-500 transition-all duration-300 hover:bg-indigo-500 hover:text-white ">
              Sign up
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
