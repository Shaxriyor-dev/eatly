import * as React from "react";
import Logo from "../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <header>
        <div className="flex items-center gap-14 justify-between p-8 px-24 ">
          <div className="flex items-center gap-40">
            <a
              href="/"
              className="flex items-center gap-5 text-[21px] font-[600] text-[#6C5FBC] font-[poppins]"
            >
              <img src={Logo} alt="" />
              eatly
            </a>
            <ul className="flex align-middle-center gap-16">
              <NavLink
                className={({isActive})=>isActive ? 'text-blue-500 text-[17.83px] duration-300' : 'text-[17.83px] text-[#606060] hover:text-blue-500 duration-300'}
                to="/menu"
              >
                Menu
              </NavLink>
              <NavLink
                className={({isActive})=>isActive ? 'text-blue-500 text-[17.83px] duration-300' : 'text-[17.83px] text-[#606060] hover:text-blue-500 duration-300'}
                to="/blog"
              >
                Blog
              </NavLink>
              <NavLink
                className={({isActive})=>isActive ? 'text-blue-500 text-[17.83px] duration-300' : 'text-[17.83px] text-[#606060] hover:text-blue-500 duration-300'}
                to="/pricing"
              >
                Pricing
              </NavLink>
              <NavLink
                className={({isActive})=>isActive ? 'text-blue-500 text-[17.83px] duration-300' : 'text-[17.83px] text-[#606060] hover:text-blue-500 duration-300'}
                to="/contact"
              >
                Contact
              </NavLink>
            </ul>
          </div>

          <div className="flex items-center gap-15">
            <Link className="text-[18px] text-[#606060] font-[700] font-[poppins]" to="/login">Login</Link>
            <Link to="/sinup" className="bg-[#6C5FBC] h-15 w-37 rounded-2xl text-cyan-50 text-lg font-medium flex justify-center items-center">
              Sign up
            </Link>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="bg-[#CBCBCB] w-[182vh] h-[1.5px] "></div>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
