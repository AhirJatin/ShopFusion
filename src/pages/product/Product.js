import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../state/actions";

const Product = () => {
  const { id } = useParams();
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const filteredProduct = products.filter(
    (product) => product.id.toString() === id
  );
  // console.log(filteredProduct);

  return (
    <div className=" py-10 text-black">
      <div className="container mx-auto">
        <div className=" flex flex-col items-center justify-center gap-5 sm:flex-row sm:gap-20">
          <div>
            <img
              className=" max-w-[200px] md:max-w-[250px] lg:max-w-[300px]"
              src={filteredProduct[0].image}
              alt=""
            />
          </div>
          <div className="">
            <h2 className=" mb-1 max-w-[400px] text-[20px] font-bold md:text-[22px]">
              {filteredProduct[0].title}
            </h2>
            <p className=" mb-4 text-[20px] font-bold text-red-700">
              $ {filteredProduct[0].price}
            </p>
            <p className="mb-5 max-w-[400px] text-[16px] md:text-[18px]">
              {filteredProduct[0].description}
            </p>
            <button
              className="flex items-center justify-center bg-black px-5 py-2 font-bold text-white hover:bg-slate-800"
              onClick={() => dispatch(addToCart(filteredProduct))}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
