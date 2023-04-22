import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CardItemCard from "./CartItemCard";
import { closeCart } from "../../state/actions";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  // console.log(cart);
  const isCartOpen = useSelector((state) => state.isCartOpen);
  const dispatch = useDispatch();

  const sumTotal = () => {
    return cart
      .reduce(
        (total, cartItem) => total + cartItem[0].price * cartItem.quantity,
        0
      )
      .toFixed(2);
  };

  const cartItems = cart.map((cartItem) => (
    <CardItemCard
      key={Math.random()}
      id={cartItem[0].id}
      title={cartItem[0].title}
      price={cartItem[0].price}
      image={cartItem[0].image}
      quantity={cartItem.quantity}
    ></CardItemCard>
  ));

  if (isCartOpen) {
    return (
      <>
        <div
          className="fixed right-0 top-0 z-50 flex h-full w-full flex-col items-center gap-3 bg-white p-6 text-xl md:w-[30rem]"
          isOpen={isCartOpen}
        >
          <div className="mb-6 text-xl font-bold">Your shopping cart</div>
          <div className="flex w-full flex-col gap-8 overflow-auto">
            {cartItems}
          </div>
          <div className="font-bold">Total: ${sumTotal()}</div>
          <button className=" rounded-md bg-[#46FFD3] px-5 py-2 font-bold transition-all duration-300 hover:bg-[#6bac9d] ">
            Checkout
          </button>
          <button
            className=" rounded-md bg-red-500 px-5 py-2 font-bold transition-all duration-300 hover:bg-red-700 "
            onClick={() => dispatch(closeCart())}
          >
            Close
          </button>
        </div>

        <div
          className="fixed top-0 h-full w-full bg-black opacity-60"
          onClick={() => dispatch(closeCart())}
        />
      </>
    );
  }
  return <></>;
};

export default Cart;
