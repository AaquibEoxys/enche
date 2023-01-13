import React from "react";
import SubHeader from "../../components/subHead/SubHeader";
import "./Cart.scss";

const Cart = () => {
  return (
    <>
      <SubHeader />
      <div className="container">
        <div className="row ">
          <div className="col-lg-4">
            <input type="checkbox" /> Products
          </div>
          <div>
            <div className="col-lg-2">Unit Price</div>
            <div className="col-lg-2">Quantity</div>
            <div className="col-lg-2">Total Price</div>
            <div className="col-lg-2">Action</div>
          </div>
        </div>

        <div className="row ">
          <div className="col-lg-4">
            <input type="checkbox" /> Products
          </div>
          <div className="col-lg-2">Unit Price</div>
          <div className="col-lg-2">Quantity</div>
          <div className="col-lg-2">Total Price</div>
          <div className="col-lg-2">Action</div>
        </div>
      </div>
    </>
  );
};

export default Cart;
