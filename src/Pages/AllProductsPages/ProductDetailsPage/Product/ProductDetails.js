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

const SingleProducts = () => {
  const newArrival = [
    {
      img: Images.wood,
      label: "Gold-laced Black Leather [Size 22cm]",
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
      <div className="mt-4">
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
  );
};

export default SingleProducts;
