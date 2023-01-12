import React from "react";
import "./ProductRating.scss";
import Images from "../../../../components/Images/Images";

const ProductRating = () => {
  return (
    <div>
      <div className="prdct_rtng container mt-5">
        <div className="prdct_rtng_hd h4">Product Ratings</div>
        <div className="prdct_rtng_bx  mx-2 row p-3">
          <div className="prdct_rtng_bx_1 col-4">
            <div className="rtng_bx_1_rtng ">
              <div className="rtng_bx_1_rtng_dtls h3 mx-2">5.0</div>
              <div className="rtng_bx_1_rtng_of mx-2">out of 5</div>
            </div>

            <div className="rtng_bx_1_star">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
            </div>
          </div>
          <div className="prdct_rtng_bx_2 col-8">
            <div className="rtng_optn mx-2">Chat Now</div>
            <div className="rtng_optn mx-2">5 Star(2.1k)</div>
            <div className="rtng_optn mx-2">4 Star(70)</div>
            <div className="rtng_optn mx-2">3 Star(24)</div>
            <div className="rtng_optn mx-2">2 Star(3)</div>
            <div className="rtng_optn mx-2">1 Star(24)</div>
            <div className="rtng_optn mx-2">With Comments(936)</div>
            <div className="rtng_optn mx-2">With Media(638)</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductRating;
