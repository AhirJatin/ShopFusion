import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto mt-10 flex flex-wrap justify-center gap-2 sm:gap-5">
        <NavLink
          className=" border-2 border-gray-300 px-2 py-1 transition-all duration-300 hover:border-black"
          activeclass="active"
          to="/categories/all"
        >
          All
        </NavLink>
        <NavLink
          className=" border-2 border-gray-300 px-2 py-1 transition-all duration-300 hover:border-black"
          activeclass="active"
          to="/categories/mens"
        >
          Men's Clothing
        </NavLink>
        <NavLink
          className=" border-2 border-gray-300 px-2 py-1 transition-all duration-300 hover:border-black"
          activeclass="active"
          to="/categories/womens"
        >
          Women's Clothing
        </NavLink>
        <NavLink
          className=" border-2 border-gray-300 px-2 py-1 transition-all duration-300 hover:border-black"
          activeclass="active"
          to="/categories/electronics"
        >
          Electronics
        </NavLink>
        <NavLink
          className=" border-2 border-gray-300 px-2 py-1 transition-all duration-300 hover:border-black"
          activeclass="active"
          to="/categories/jewellery"
        >
          Jewellery
        </NavLink>
      </div>
      <Outlet />
    </React.Fragment>
  );
};

export default Layout;
