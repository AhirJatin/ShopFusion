import React from "react";
import { Link } from "react-router-dom";

const TopCategories = () => {
  return (
    <React.Fragment>
      <div className=" py-10">
        <div className="container mx-auto">
          <div>
            <h2 className=" text-center text-[24px] font-bold sm:text-[32px]">
              TOP CATEGORIES
            </h2>
            <div className=" mx-auto mt-1 h-[4px] max-w-[200px] bg-black"></div>
            <div className=" mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/categories/mens"
                className=" bg-mensBg bg-cover bg-center bg-no-repeat px-5 py-32"
              >
                <div className=" mx-auto mb-1 h-[4px] max-w-[200px] bg-[#BFA37E]"></div>
                <div className=" bg-black/40 text-center text-[22px] font-bold text-white">
                  MEN'S CLOTHING
                </div>
                <div className=" mx-auto mt-1 h-[4px] max-w-[200px] bg-[#BFA37E]"></div>
              </Link>

              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/categories/womens"
                className=" bg-womensBg bg-cover bg-center bg-no-repeat px-5 py-32"
              >
                <div className=" mx-auto  mb-1 h-[4px] max-w-[200px] bg-[#BFA37E]"></div>
                <div className=" bg-black/40 text-center  text-[22px] font-bold text-white">
                  WOMEN'S CLOTHING
                </div>
                <div className=" mx-auto mt-1 h-[4px] max-w-[200px] bg-[#BFA37E]"></div>
              </Link>

              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/categories/electronics"
                className="bg-electronicsBg bg-cover bg-center bg-no-repeat px-5 py-32"
              >
                <div className=" mx-auto  mb-1 h-[4px] max-w-[200px] bg-[#BFA37E]"></div>
                <div className=" bg-black/40 text-center  text-[22px] font-bold text-white">
                  ELECTRONICS
                </div>
                <div className=" mx-auto mt-1 h-[4px] max-w-[200px] bg-[#BFA37E]"></div>
              </Link>

              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="/categories/jewellery"
                className="bg-jewelleryBg bg-cover bg-center bg-no-repeat px-5 py-32"
              >
                <div className=" mx-auto  mb-1 h-[4px] max-w-[200px] bg-[#BFA37E]"></div>
                <div className=" bg-black/40 text-center  text-[22px] font-bold text-white">
                  JEWELLERY
                </div>
                <div className=" mx-auto mt-1 h-[4px] max-w-[200px] bg-[#BFA37E]"></div>
              </Link>
            </div>
            <div className=" mx-auto mt-10 max-w-[150px] border-2 border-black px-4 py-2 text-center font-bold">
              <Link onClick={() => window.scrollTo(0, 0)} to="/categories">
                SHOW MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TopCategories;
