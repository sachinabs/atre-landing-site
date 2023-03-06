import React from "react";
import { LinkedIn, Twitter, Facebook, Instagram } from "../Icons";
import NavigationJson from "../Constant/Navigation.json";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#081709] dark:bg-gray-900 mt-20 md:px-20">
      <div className="grid grid-cols-1 gap-10 px-6 py-8 md:grid-cols-[repeat(auto-fit,_16.666666%)] lg:grid-cols-4 justify-center">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="mb-6 text-sm font-semibold text-white uppercase">
            About
          </h2>
          <span className="text-white">
            At Atre, the focus is to advance health responsibly through the use of cutting-edge technology. We believe that by leveraging the power of robotics, ML, and AI, we can improve patient outcomes and support the medical professionals who care for them.
          </span>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
            Quick Links
          </h2>
          <ul className="text-white grid grid-cols-2 md:grid-cols-1">
            {NavigationJson.map((navItem, index) => {
              return (
                <Link className="  block hover:text-[#a0f09c]" to={navItem.nav} key={`navItem__${index}`}>
                  {navItem.label}
                </Link>
              );
            })}
            <a className="hover:text-[#a0f09c]" href="">Terms & Service</a>
            <a className="hover:text-[#a0f09c]" href="">Privacy Policy</a>
            <a className="hover:text-[#a0f09c]" href="">Cookie Policy</a>
          </ul>
        </div>

        <div>
          <h2 className="mb-6 text-sm font-semibold text-white uppercase dark:text-gray-400">
            Follow Us
          </h2>
          <ul className="flex gap-4">
            <li className="mb-4">
              <span className="text-white">
                <LinkedIn />
              </span>
            </li>
            <li className="mb-4">
              <Instagram />
            </li>
          </ul>
        </div>
        <div className="">
          <h2 className="mb-6 text-sm font-semibold text-white uppercase ">
            Copyright © 2023 All rights reserved by Atre Health Tech
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
