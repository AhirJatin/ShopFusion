import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../state/actions/products";
import ProductCard from "../../components/ProductCard";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    loadProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadProducts = async () => {
    dispatch(setProducts(await fetchProducts()));
  };

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    // console.log(data);
    return data;
  };

  const filteredProducts = products.filter(
    (product) =>
      product.id === 2 ||
      product.id === 7 ||
      product.id === 9 ||
      product.id === 19
  );
  const productCards = filteredProducts.map((product) => (
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
              POPULAR PRODUCTS
            </h2>
            <div className=" mx-auto mt-1 h-[4px] w-[200px] bg-black"></div>
            <div className=" mt-10 grid  gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-5 ">
              {productCards ? productCards : ""}
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

export default PopularProducts;
