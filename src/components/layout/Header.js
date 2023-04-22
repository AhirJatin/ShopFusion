import React from "react";
import { Link, NavLink } from "react-router-dom";
import LogoImg from "../../assets/images/shopfusion-low-resolution-color-logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { openCart } from "../../state/actions";

const Header = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const sumQuantity = () => {
    return cart.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0);
  };

  return (
    <React.Fragment>
      <div className="py-5 shadow-xl">
        <div className="container mx-auto">
          <div className="flex items-center justify-between ">
            <div className="">
              <Link to="/">
                <img
                  className=" max-w-[120px] rounded-sm sm:max-w-[150px]"
                  src={LogoImg}
                  alt="Shop Fusion Logo"
                />
              </Link>
            </div>
            <div className=" flex items-center justify-between gap-8">
              <NavLink
                actveclass="active"
                to="categories"
                className=" font-bold"
              >
                CATEGORIES
              </NavLink>
              <div
                className="relative cursor-pointer transition-all duration-300 hover:scale-110 active:scale-105 "
                onClick={() => dispatch(openCart())}
              >
                <button className=" flex items-center justify-center rounded-full bg-white p-2 text-[20px] font-bold">
                  <FaShoppingCart />
                </button>
                {sumQuantity() > 0 ? (
                  <div className="absolute right-3 top-5 flex h-6 w-6 items-center justify-center rounded-full bg-red-400 text-lg font-bold">
                    {sumQuantity()}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Header;

// import React from "react";
// import { FaShoppingCart } from "react-icons/fa";
// import { useDispatch, useSelector } from "react-redux";
// import { openCart } from "../../state/actions";
// const Header = () => {
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   const sumQuantity = () => {
//     return cart.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0);
//   };

//   return (
//     <header className="bg-black px-4">
//       <div className="mx-auto my-0 flex w-full max-w-[140rem] flex-col items-center justify-between p-4 md:flex-row">
//         <h1 className="min-w-min text-2xl font-bold text-[#46ffd3]">
//           Redux-Shop
//         </h1>
//         <nav className="flex w-full items-center justify-end text-lg">
//           <div
//             className="relative cursor-pointer hover:scale-110 active:scale-105"
//             onClick={() => dispatch(openCart())}
//           >
//             <button className=" flex items-center justify-center rounded-full bg-white p-2 font-bold">
//               <FaShoppingCart />
//             </button>
//             {sumQuantity() > 0 ? (
//               <div className="absolute right-5 top-5 flex h-6 w-6 items-center justify-center rounded-full bg-red-400 text-lg font-bold">
//                 {sumQuantity()}
//               </div>
//             ) : (
//               ""
//             )}
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
