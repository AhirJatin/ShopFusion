import React from "react";
import HeroBanner from "./HeroBanner";
import PopularProducts from "./PopularProducts";
import SummerSale from "./SummerSale";
import TopCategories from "./TopCategories";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroBanner />
      <PopularProducts />
      <SummerSale />
      <TopCategories />
    </React.Fragment>
  );
};

export default HomePage;
