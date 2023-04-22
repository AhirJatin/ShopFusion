import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../../components/ProductCard";

const All = () => {
  const products = useSelector((state) => state.products);

  const productCards = products.map((product) => (
    <ProductCard
      key={Math.random()}
      id={product.id}
      title={product.title}
      price={product.price}
      image={product.image}
    />
  ));

  return (
    <React.Fragment>
      <div className=" py-10">
        <div className="container mx-auto">
          <div>
            <h2 className=" text-center text-[24px] font-bold sm:text-[32px]">
              All PRODUCTS
            </h2>
            <div className=" mx-auto mt-1 h-[4px] w-[200px] bg-black"></div>
            <div className="mt-10 grid  gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 ">
              {productCards ? productCards : ""}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default All;