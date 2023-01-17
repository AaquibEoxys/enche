import React, { useState } from "react";
import "./ProductShow.scss";
import Images from "../../../../components/Images/Images";

const ProductShow = (props) => {
  const [Quantity, setQuantity] = useState(0);
  const add = () => {
    setQuantity((count) => count + 1);
  };
  const remove = () => {
    if (Quantity > 0) {
      setQuantity((count) => count - 1);
    }
  };
  return (
    <div className="container">
      <div className="prdc_sec mt-3 ml-5 mr-5 row">
        <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12 img_part">
          <div>
            <img src={props.newArrival[0].img} alt="" />
          </div>
          <div className="smpl_imgs">
            <img src={props.newArrival[0].img} />
            <img src={props.newArrival[0].img} />
            <img src={props.newArrival[0].img} />
            <img src={props.newArrival[0].img} />
            <img src={props.newArrival[0].img} />
          </div>
        </div>

        <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12 dtls_part">
          <div className="h3 fw-bold mt-5 mx-3">
            {props.newArrival[0].label}
          </div>

          <div className="rating-sec mt-3">
            <div className="rt_sec_p  ml-3 mx-3">
              <div className="rating-text green h4">5.0</div>
              <div className="rating-star green mx-2">
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
              </div>
            </div>
            <div className="rt_sec_p  mx-3">
              <div className="h4">14</div>
              <div className="h4">Ratings</div>
            </div>
            <div className="rt_sec_p  mx-3">
              <div className="h4">|</div>
            </div>
            <div className="rt_sec_p ">
              <div className="h4">15</div>
              <div className="h4">Sold</div>
            </div>
          </div>
          <div className="discnt row mt-3">
            <div className="discntprsnt fw-bold col-4">-15 Off</div>
            <div className="discntamnt col-8">
              <span className="fw-bold">RM 20.00</span> on{" "}
              <span className="fw-bold">12Dec</span>,12am-2am
            </div>
          </div>
          <div className="price_sec m-2">
            <div className="prc_dsc mx-5">
              <span className="h2 lnthr_txt">RM 25.00</span>
            </div>
            <div className="price display-4 fw-bold green">RM 20.00</div>
          </div>
          <div className="shipping_dtls_sec mt-5 mx-5">
            <div className="shipping_sec row">
              <div className="sps_s_txt fw-bold col mx-3">Shipping</div>
              <div className="sps_s_icon col mx-3">
                <img src={Images.shippingIcon} />
              </div>
            </div>
            <div className="spng_al">
              <div className="spng_to row">
                <div className="shipin col-6">Shipping To</div>
                <div className="spng_drpdn col mx-3">
                  <select>
                    <option>abc</option>
                  </select>
                </div>
              </div>
              <div className="spng_frm row mt-3">
                <div className="shipin col-6">ShippingFees</div>
                <div className="spng_drpdn col mx-3">
                  <select>
                    <option>abc</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="clr_chs row mt-5">
            <div className="col-2 clr_hd">Color</div>
            <div className="col-2 clr_opt mx-2">Gold</div>
            <div className="col-2 clr_opt mx-2">Gray</div>
            <div className="col-2 clr_opt mx-2">Red</div>
            <div className="col-2 clr_opt mx-2">Black</div>
          </div>
          <div className="qntty_sec row mt-5">
            <div className="qntty_sec_hd  col-2">Quantity</div>
            <div className="qntty_sec_cntr col-2">
              {
                <div className="add_qntty">
                  <button onClick={remove}>-</button>
                  <button disable>{Quantity}</button>
                  <button onClick={add}>+</button>
                </div>
              }
            </div>
            <div className="avlablty col-2 mx-3">
              <div className="avl_qty">816 Available</div>
            </div>
          </div>
          <div className="add_sec_bynw mt-5 mb-5 row">
            <div className="buttn col-3">
              <div className="img_cart m-1 mx-2">
                <img src={Images.cart_1} alt="" />
              </div>
              <div className="cart_msg">Add To Cart</div>
            </div>
            <div className="btnn_bynw col-2 mx-3">BuyNow</div>
            <div className="btnn_bynw col-2 mx-1">RFQ</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductShow;
