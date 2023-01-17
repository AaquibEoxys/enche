import React from "react";
import "./CheckoutCard.scss";
import Images from "../../components/Images/Images";
const CheckoutCard = () => {
  return (
    <div className="chk_crd">
      <div className="container  mt-3">
        <div className="row chk_ot_crd pt-5">
          <div className="col-8">
            <div className="chk_ot_hd mx-2">Product Order</div>
          </div>
          <div className="col-1">Unit Price</div>
          <div className="col-1">Amount</div>
          <div className="col-2">Item Subtotal</div>
        </div>
        <div className="row crd_sec_2 px-5 pt-3">
          <div className="col-2 shp_onln">Shopmart online</div>
          <div className="lne">|</div>
          <div className="col-2 ct_nw">
            <div className="ct_nw_icon">
              <img src={Images.cht_nw} />
            </div>
            <div className="ct_nw_txt">chat now</div>
          </div>
        </div>
      </div>
      <div className="crd_itm_dtl row mx-2 mt-3">
        <div className="col-6">
          <div className="itm_dtl_img ">
            <img src={Images.carWash} />
          </div>
          <div className="itm_dtl_nam mx-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div className="col-2 vrtsn_n_d">
          <div className="vrtsn_nm">Variation:</div>
          <div className="vrtsn_dta">Light Blue</div>
        </div>
        <div className="col-1 vrt_u_p">RM 1.87</div>
        <div className="col-1 vrt_amnt">1</div>
        <div className="col-2 itm_sbttl">RM 1.87</div>
      </div>
      <div className="vcher_brdr mt-5">
        <div className="voucher mx-2">
          <div className="shp_vchr col-8">
            <div>Shop Voucher</div>
          </div>
          <div className="slct_vchr col-4">
            <div>Select Voucher</div>
          </div>
        </div>
      </div>
      <div className="row msg_shp mt-5 mx-2 mb-3">
        <div className="col-1 msg_hder">Message</div>
        <div className="col-4 msg_input">
          <input
            type="text"
            placeholder="(Optional Leave A message to the seller)"
          />
        </div>
        <div className="col-2 shpng_optn">Shipping Option:</div>
        <div className="col-2 stnd_dlvry">
          <div className="stnd_dlvry_hd">Standard Delivery</div>
          <div className="stnd_dlvry_txt">Received By 12-18 Dec</div>
        </div>
        <div className="col-2 chng">CHANGE</div>
        <div className="col-1 lst_prc">RM4.90</div>
      </div>
      <div className="fnl_ordr_dtls">
        <div className="ordr_ttl"></div>
        <div className="ttl_prc"></div>
      </div>
    </div>
  );
};

export default CheckoutCard;
