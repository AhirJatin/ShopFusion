import React from "react";
import { Link } from "react-router-dom";

const SummerSale = () => {
  return (
    <React.Fragment>
      <div className=" bg-black py-10 text-white">
        <div className=" container mx-auto">
          <div className=" bg-summerSaleBg bg-cover bg-center bg-no-repeat px-5 py-5">
            <h2 className="  text-[32px] font-bold">
              SUMMER SALE <span className=" text-black">30% OFF</span>
            </h2>
            <p className="mb-20 max-w-[300px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil
              corporis itaque quisquam sunt officia dignissimos aperiam ipsa cum
              eius quam!
            </p>
            <button className=" border-2 border-black px-4 py-2 text-center font-bold">
              <Link onClick={() => window.scrollTo(0, 0)} to="/categories">
                SHOW MORE
              </Link>
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SummerSale;
