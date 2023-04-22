import React from "react";
import { Link } from "react-router-dom";
import mensImg from "../../assets/images/mens.jpg";
import womensImg from "../../assets/images/womens.jpg";
import jewelleryImg from "../../assets/images/jewellery.jpg";
import electronicsImg from "../../assets/images/electronics.jpg";

const HeroBanner = () => {
  return (
    <React.Fragment>
      <div className=" py-10 text-white lg:px-20">
        <div className="container mx-auto">
          <div className=" grid grid-cols-2 place-items-center  justify-items-center gap-3 sm:grid-cols-4  sm:grid-rows-2">
            <div className=" group relative sm:col-span-2 sm:row-span-2 sm:row-start-1 sm:shadow-2xl">
              <Link onClick={() => window.scrollTo(0, 0)} to="/categories/mens">
                <img
                  className=" md:max-w-[300px] lg:max-w-[400px]"
                  src={mensImg}
                  alt=""
                />
                <p className=" absolute bottom-5 left-5 bg-black/40 px-1 text-[22px] font-bold ">
                  Men's clothing
                </p>
                <div className=" absolute left-0 top-0 h-full w-full  bg-opacity-25 transition-all duration-700  group-hover:bg-black/30 "></div>
              </Link>
            </div>
            <div className="group relative max-h-[292px] overflow-hidden shadow-2xl  sm:row-span-2 sm:row-start-1 sm:max-h-full ">
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/categories/womens"
              >
                <img className="" src={womensImg} alt="" />
                <p className=" absolute bottom-5 left-5 bg-black/40 px-1 text-[22px] font-bold ">
                  Women's clothing
                </p>
                <div className=" absolute left-0 top-0 h-full w-full  bg-opacity-25 transition-all duration-700  group-hover:bg-black/30 "></div>
              </Link>
            </div>
            <div className="group relative shadow-2xl sm:row-start-1">
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/categories/electronics"
              >
                <img
                  className=" md:max-w-[150px] lg:max-w-[200px]"
                  src={electronicsImg}
                  alt=""
                />
                <p className="absolute bottom-5 left-5 bg-black/40 px-1 text-[22px] font-bold ">
                  Electronics
                </p>
                <div className=" absolute left-0 top-0 h-full w-full  bg-opacity-25 transition-all duration-700  group-hover:bg-black/30 "></div>
              </Link>
            </div>
            <div className="group relative shadow-2xl sm:row-start-2">
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/categories/jewellery"
              >
                <img
                  className=" md:max-w-[150px] lg:max-w-[200px]"
                  src={jewelleryImg}
                  alt=""
                />
                <p className="absolute bottom-5 left-5 bg-black/40 px-1 text-[22px] font-bold ">
                  Jewellery
                </p>
                <div className=" absolute left-0 top-0 h-full w-full  bg-opacity-25 transition-all duration-700  group-hover:bg-black/30 "></div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeroBanner;
