import { Brand, MenuIcon } from "../Icons";
import NavigationJson from "../Constant/Navigation.json";
import { useState } from "react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation()
  console.log(location.pathname);


  return (
    <header>
      <nav className="shadow-custom flex fixed  z-50 flex-wrap items-center justify-between w-full py-4 md:py-0 lg:px-44 px-4 text-lg text-gray-700 bg-white ">
        <Link to={"/"}>
          <Brand />
        </Link>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="h-6 w-6 cursor-pointer md:hidden block"
          id="menu-button"
        >
          <MenuIcon />
        </span>

        <div
          id="menu"
          className={`${!showMenu && "hidden"
            } w-full md:flex md:items-center md:w-auto`}
        >
          <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between  md:pt-0">
            {NavigationJson.map((navItem, index) => {
              return (
                <Link onClick={() => { setShowMenu(false) }} className={`md:p-4 py-2 block hover:text-[#4DB648] hover-font-medium ${location.pathname === navItem.nav && 'text-[#4DB648] font-medium'}`} to={navItem.nav} key={`navItem__${index}`}>
                  {navItem.label}
                </Link>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
