import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, title, price, image, category }) => {
  return (
    <Link
      onClick={() => window.scrollTo(0, 0)}
      to={`/categories/product/${id}`}
    >
      <div className="mx-auto flex h-full max-w-[400px] flex-col rounded-md border-2 border-gray-500 transition-all  duration-300 hover:shadow-2xl">
        <div className=" mx-auto h-60 p-5 md:p-8 lg:p-10">
          <img className="h-full" src={image} alt={title} />
        </div>
        <div className="flex h-full flex-col justify-between p-4">
          <div className="font-bold">{title}</div>
          <div>${price.toFixed(2)}</div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
