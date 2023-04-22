import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <React.Fragment>
      <div className=" bg-black py-10 text-white">
        <div className="container mx-auto">
          <div className=" mx-auto max-w-[600px] text-center">
            <h2 className=" text-[24px] font-bold sm:text-[32px]">
              NEWSLETTER
            </h2>
            <div className=" mt-5 ">
              <input
                type="text"
                className="rounded-sm  py-2 pl-2"
                placeholder="Email Address"
              />
              <button className=" ml-1 bg-white px-2 py-2 text-black sm:ml-2 sm:px-5">
                Subscribe
              </button>
            </div>
          </div>
          <div className=" py-10">
            <ul className=" mx-auto flex max-w-[350px] flex-wrap gap-5 font-bold">
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
              >
                About
              </Link>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
              >
                Store Locations
              </Link>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
              >
                FAQs
              </Link>
              <Link
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                to="/"
              >
                Contact Us
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Footer;
