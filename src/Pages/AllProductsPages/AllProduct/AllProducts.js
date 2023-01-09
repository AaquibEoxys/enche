import React, { Suspense } from "react";
import SubHeader from "../../../components/subHead/SubHeader";
import "./AllProduct.scss";
import ShippedFrom from "../ShippedFrom/ShippedFrom";
import BusinessModule from "../BusinessModule/BusinessModule";
import PriceRange from "../PriceRange/PriceRange";
import ByCategory from "../ByCategory/ByCategory";
import ByRating from "../ByRating/ByRating";
import Filterbar from "../FilterBar/Filterbar";
import ProductsCardsAL from "../ProductsCardsAL/ProductsCardsAL";
import Images from "../../../components/Images/Images";

const AllProducts = () => {
  return (
    <>
      <SubHeader />

      <div className="al_prdt">
        <div className="sec_1">
          <div className="icon mx-2">
            <img src={Images.searchResult} alt="" srcset="" />
          </div>
          <div className="h5 fw-bold">
            <img src={Images.searchResult} alt="" srcset="" />
          </div>
        </div>
        <div className="sec_2">
          <div className="sidebar">
            <div className="mx-3">
              <ShippedFrom />
            </div>
            <div className="mx-3">
              <BusinessModule />
            </div>
            <div className="mx-3">
              <PriceRange />
            </div>
            <div className="mx-3">
              <ByCategory />
            </div>
            <div className="mx-3">
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
