import React from "react";
import ProductShow from "../ProductSec1/ProductShow";
import Images from "../../../../components/Images/Images";
import "./ProductDetails.scss";

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
      <div className="">
        <ProductShow newArrival={newArrival} />
      </div>
    </div>
  );
};

export default SingleProducts;
