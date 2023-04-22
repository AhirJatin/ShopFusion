import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../../state/actions";

const CardItemCard = ({ id, title, price, image, quantity }) => {
  const cartItem = { id, title, price, image, quantity };
  const product = { id, title, price, image };
  const dispatch = useDispatch();
  const formatTitle = (title) => {
    return title?.length <= 14 ? title : title?.substr(0, 14) + "...";
  };

  const sumPrice = () => {
    return (cartItem.price * cartItem.quantity).toFixed(2);
  };

  return (
    <div className="flex items-center justify-center gap-10">
      <div className="h-[6rem]">
        <img className="h-full w-auto" src={image} alt=""></img>
      </div>
      <div className="flex flex-col items-center justify-between gap-2 text-lg">
        <div className="h-8 overflow-hidden font-bold">
          {formatTitle(title)}
        </div>
        <div>${sumPrice()}</div>
        <div className="flex items-center gap-4">
          <button
            className="rounded-md bg-gray-200 p-2 font-bold text-black transition-all duration-300 hover:bg-black hover:text-white"
            onClick={() => dispatch(removeFromCart(product))}
          >
            <FaMinus />
          </button>
          <div>{cartItem.quantity}</div>
          <button
            className="rounded-md bg-gray-200 p-2 font-bold text-black transition-all duration-300 hover:bg-black hover:text-white"
            onClick={() => dispatch(addToCart(product))}
          >
            {" "}
            <FaPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardItemCard;
