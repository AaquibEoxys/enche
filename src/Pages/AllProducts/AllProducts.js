import React, { Suspense } from "react";
import SubHeader from "../../components/subHead/SubHeader";
import "./AllProduct.scss";
import ShippedFrom from "./ShippedFrom";
import BusinessModule from "./BusinessModule";
import PriceRange from "./PriceRange";
import ByCategory from "./ByCategory";
import ByRating from "./ByRating";
import Filterbar from "./Filterbar";
import ProductsCardsAL from "./ProductsCardsAL";

const AllProducts = () => {
  return (
    <>
      <SubHeader />

      <div className="al_prdt">
        <div className="sec_1">
          <div className="icon">icon</div>
          <div className="h4 fw-bold">Search Filter</div>
        </div>
        <div className="sec_2">
          <div className="sidebar">
            <div className="">
              <ShippedFrom />
            </div>
            <div className="">
              <BusinessModule />
            </div>
            <div className="">
              <PriceRange />
            </div>
            <div className="">
              <ByCategory />
            </div>
            <div className="">
              <ByRating />
            </div>
          </div>
          <div className="bodybar">
            <div className="row">
              <Filterbar />
            </div>
            <ProductsCardsAL />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
