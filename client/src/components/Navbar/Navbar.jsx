import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "./logo.png";

const navItems = [
  "home",
  "speakers",
  "schedule",
  "location",
  "blog",
  "contact",
];

const HamOpen = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="white"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const HamClose = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="white"
    className="w-10 h-10"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
    />
  </svg>
);

function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    // navbar component
    <nav className="w-full bg-custom-dark flex flex-row justify-between z-50 fixed">
      {/* logo  */}
      <div className="logo px-4 py-4 flex justify-center items-center w-1/2 h-1/2 xs:px-8 xs:py-8 ">
        <a href="#">
          <img className="cursor-pointer" src={logo} alt="Renaissance Logo" />
        </a>
      </div>

      {/* Navigation Menu  */}
      <div className="container hidden md:flex justify-end px-12">
        <ul className="text-custom-nav text-xs flex flex-row justify-center items-center">
          {navItems.map((item) => (
            <a
              href="#"
              className="mx-2 px-1 lg:mx-4 lg:px-2 relative before:content-[''] before:absolute before:bg-custom-accent before:h-[3px] before:w-0 before:left-0 before:bottom-[-8px] before:transition-[0.3s] before:duration-300 hover:before:w-full hover:text-custom-secondary"
            >
              <li className="font-light cursor-pointer" key={`link-${item}`}>
                {item.toUpperCase()}
                {/* <div />
            <Link to={`${item}`} smooth={true} duration={500}>
              {item}
            </Link> */}
              </li>
            </a>
          ))}
          <a
            href="#"
            className="mx-4 px-6 py-4 bg-custom-secondary text-custom-dark font-bold hover:bg-custom-accent md:hidden lg:flex"
          >
            <li className="cursor-pointer">CONFIRM YOUR SEAT</li>
          </a>
        </ul>
      </div>

      {/* Hamburger Navigation Menu  */}
      <div className="md:hidden relative flex justify-center items-center cursor-pointer">
        <div className="flex" onClick={() => setToggle(true)}>
          {HamOpen}
        </div>
        {toggle && (
          <div>
            {/* extra transparent div */}
            <div
              className="md:hidden fixed top-0 left-0 right-0 w-screen h-screen flex bg-transparent z-40"
              onClick={() => setToggle(false)}
            ></div>
            <motion.div
              className="md:hidden fixed top-0 left-0 right-0 p-1 w-screen flex justify-end items-end flex-col bg-custom-dark opacity-90 shadow-lg py-10 z-50"
              animate={{ y: [-500, 0] }}
              transition={{
                type: "spring",
                bounce: 0.25,
                damping: 9,
                mass: 0.5,
              }}
            >
              <div className="flex p-3" onClick={() => setToggle(false)}>
                {HamClose}
              </div>

              {/* logo */}
              <div className="logo m-0 p-1 mb-10 w-full flex justify-center items-center">
                <img
                  className="cursor-pointer w-1/2 "
                  src={logo}
                  alt="Renaissance Logo"
                />
              </div>

              {/* Nav-items  */}
              <ul className="m-0 p-0 h-full w-full text-custom-nav text-xs flex flex-col justify-start items-center">
                {navItems.map((item) => (
                  <li
                    className="mx-10 my-3 cursor-pointer"
                    key={`link-${item}`}
                  >
                    <a
                      href="#"
                      className="text-sm xs:text-base font-light text-custom-light"
                    >
                      {item.toUpperCase()}
                    </a>
                  </li>
                ))}

                <li className="mx-10 my-10 p-4 cursor-pointer bg-custom-secondary">
                  <a
                    href="#"
                    className="xs:text-xl text-base font-bold text-custom-accent"
                  >
                    CONFIRM YOUR SEAT
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        )}
        ;
      </div>
    </nav>
  );
}
export default Navbar;
