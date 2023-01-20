import React from "react";
import ProductShow from "../ProductSec1/ProductShow";
import ProductSecTwo from "../ProductSecTwo/ProductSecTwo";
import TopPicks from "../TopPicks/TopPicks";
import ProductSpecification from "../ProductSpecification/ProductSpecification";
import ProductRating from "../ProductRating/ProductRating";
import Images from "../../../../components/Images/Images";
import "./ProductDetails.scss";
import Comments from "../Comments/Comments";
import MayAlsoLike from "../MayAlsoLike/MayAlsoLike";
import SubHeader from "../../../../components/subHead/SubHeader";

const SingleProducts = () => {
  const newArrival = [
    {
      img: Images.wood,
      label: "Designer Dark Brown Oak Wooden Chair",
      seller: "Indonesia Seller",
      rating: 3,
      xprice: "N.P : RM 25.99",
      price: "RM 20.00",
    },
    {
      img: Images.wood,
      label: "Designer Dark Brown Oak Wooden Chair",
      seller: "Indonesia Seller",
      rating: 3,
      xprice: "N.P : RM 25.99",
      price: "RM 20.00",
    },
    {
      img: Images.wood,
      label: "Designer Dark Brown Oak Wooden Chair",
      seller: "Indonesia Seller",
      rating: 5,
      xprice: "N.P : RM 25.99",
      price: "RM 20.00",
    },
    {
      img: Images.wood,
      label: "Designer Dark Brown Oak Wooden Chair",
      seller: "Indonesia Seller",
      rating: 5,
      xprice: "N.P : RM 25.99",
      price: "RM 20.00",
    },
  ];
  return (
    <div className="prdc_dtls">
      <SubHeader />
      <div className="container">
        {/* <div className="sngl_prdc_dta mt-3">
          <div className="mx-2 sp_txt">Enche</div>
          <div className="mx-2 sp_symb"> &#62;</div>
          <div className="mx-2 sp_txt">Products</div>
          <div className="mx-2 sp_symb"> &#62;</div>
          <div className="mx-2 sp_txt">Category</div>
          <div className="mx-2 sp_symb"> &#62;</div>
          <div className="mx-2 sp_txt">Asian Craft</div>
          <div className="mx-2 sp_symb"> &#62;</div>
          <div className="mx-2 sp_txt">{newArrival[0].label}</div>
        </div> */}
        <div>
          <ProductShow newArrival={newArrival} />
        </div>
        <div>
          <ProductSecTwo />
        </div>
        <div>
          <TopPicks />
        </div>
        <div>
          <ProductSpecification />
        </div>
        <div>
          <ProductRating />
        </div>
        <div>
          <Comments />
        </div>
        <div>
          <MayAlsoLike />
        </div>
      </div>
      {/* <div className="mt-4">
        <ProductShow newArrival={newArrival} />
      </div>
      <div>
        <ProductSecTwo />
      </div>
      <div>
        <TopPicks />
      </div>
      <div>
        <ProductSpecification />
      </div>
      <div>
        <ProductRating />
      </div>
      <div>
        <Comments />
      </div>
      <div>
        <MayAlsoLike />
      </div> */}
    </div>
  );
};

export default SingleProducts;
