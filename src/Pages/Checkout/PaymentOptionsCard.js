import React from "react";
import "./PaymentOptionsCard.scss";

const PaymentOptionsCard = () => {
  const data = [
    "cash on delivery",
    "Online Banking",
    "Credit/Debit Card",
    "PayPal",
    "ESA Pay",
    "MayBank2YU",
    "AMOnline",
    "WEBcash",
    "Bank Islam",
    "FPX",
  ];

  return (
    <div className="container pymtoptncrd">
      <div className=" row pymtoptncrd_sec_one">
        <div className="pmnt_mtd col-2">PayMent Method</div>
        <div className="mthd_optn col-10">
          {data?.map((item) => (
            <div className="optn_tb btn mx-2 mt-2 mb-2">{item}</div>
          ))}
        </div>
      </div>
      <div className="ckot_dta justify-content-end">
        <div className="mrcnd_sbttl mt-3 row">
          <div className="mrcnd_sbttl_hdr col-6">Merchandise Subtotal</div>
          <div className="mrcnd_sbttl_amnt col-6">RM 201.77</div>
        </div>
        <div className="shpng_ttl mt-3 row">
          <div className="shpng_ttl_hdr col-6">Shipping Total</div>
          <div className="shpng_ttl_amnt col-6">RM 10.50</div>
        </div>
        <div className="ttlpmnt mt-3 row">
          <div className="ttlpmnt_hdr col-6">Total Payment</div>
          <div className="ttlpmnt_amnt col-6">RM 212.27</div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptionsCard;
