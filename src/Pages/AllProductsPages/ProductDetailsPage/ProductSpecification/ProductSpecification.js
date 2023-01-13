import React from "react";
import { Container } from "react-bootstrap";
import "./ProductSpecification.scss";
const ProductSpecification = () => {
  return (
    <div className="container prdc_spc_des mt-5 ">
      <div className="prdc_spctn">
        <div className="prdc_spctn_hd pt-4 pb-3">Product Specifications</div>
        <div className="prdc_spctn_bd row pb-2">
          <div className="prdc_spctn_b_h col-2 ">Category</div>
          <div className="prdc_spctn_b_bdy col-10">
            <div className="txt-clr">enche</div>
            <div className="mx-2"> &#62;</div>
            <div className="mx-2 txt-clr">Products</div>
            <div className="mx-2"> &#62;</div>
            <div className="mx-2 txt-clr">Category</div>
            <div className="mx-2"> &#62;</div>
            <div className="mx-2 txt-clr">Asian Craft</div>
            <div className="mx-2"> &#62;</div>
            <div className="mx-2">"Search Result"</div>
          </div>
        </div>
        <div className="prdc_spctn_bd row pb-2">
          <div className="prdc_spctn_b_h col-2 ">Stock</div>
          <div className="prdc_spctn_b_bdy col-10 ">
            <span className="stck_data">816</span>
          </div>
        </div>
        <div className="prdc_spctn_bd row pb-2">
          <div className="prdc_spctn_b_h col-2 ">Ship From</div>
          <div className="prdc_spctn_b_bdy col-10 ">
            <span className="shp_cntry">Indonesia</span>
          </div>
        </div>
      </div>
      <div className="prdc_desptn pb-3 ">
        <div className="prdc_desptn_hd h4 mb-4 mt-4">Product Description</div>
        <div className="prdc_desptn_bd mx-2 mt-2">
          <div className="p_d_bdy_hd">Size </div>
          <div className="p_d_bdy_dt">19/22 cm</div>
        </div>
        <div className="prdc_desptn_bd mx-2 mt-2">
          <div className=" p_d_bdy_hd">Color </div>
          <div className="  p_d_bdy_dt">Black</div>
        </div>
        <div className="prdc_desptn_bd_tbl row mx-2 mt-2 mb-2">
          <div className="prdc_desptn_bd_tbl1 col-6">Size</div>
          <div className="prdc_desptn_bd_tbl2 col-6"> 19/22 cm</div>
        </div>
      </div>
    </div>
  );
};

export default ProductSpecification;
