import React from "react";
import SubHeader from "../../components/subHead/SubHeader";
import "./Checkout.scss";
import Images from "../../components/Images/Images";
import CheckoutCard from "./CheckoutCard";
import PaymentOptionsCard from "./PaymentOptionsCard";

const Checkout = () => {
  return (
    <div className="chk_ot_bdy">
      <SubHeader />
      <div className="container">
        <div className="ck_ot_hd mt-3 mb-2">Check Out</div>
        <div className="add_sec px-3 pt-2 pb-2">
          <div className="add_sec_hd pt-2">
            <div className="add_sec_hd_icon">
              <img src={Images.locationDelivery} />
            </div>
            <div className="add_sec_hd_txt mx-2">Delivery Address</div>
          </div>
          <div className="row">
            <div className="col-2">
              <div className="nm_nmbr">
                <div className="nam">Anish</div>
                <div className="nmbr">(+680)12354678</div>
              </div>
            </div>
            <div className="col-8 add_dtls">
              Address data Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Officiis tenetur omnis libero,
            </div>
            <div className="col-1 dflt_btn">
              <div className="bttn">Default</div>
            </div>
            <div className="col-1 chng_opt">
              <div className="chng">Change</div>
            </div>
          </div>
        </div>
        <CheckoutCard />
        <CheckoutCard />
        <PaymentOptionsCard />
      </div>
    </div>
  );
};

export default Checkout;
