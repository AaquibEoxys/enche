import React from "react";
import "./Filterbar.scss";

const Filterbar = () => {
  return (
    <div className="flr_bar mb-4 mx-2 row">
      <div className="flr_bar_1 pt-2">
        <div className="col-lg-1 col-xs-12 sortby">Sort By</div>
        <div className="col-lg-1 col-xs-4 relevance">Relevance</div>
        <div className="col-lg-1 col-xs-4 latest">Latest</div>
        <div className="col-lg-2 col-xs-4 topProducts">Top Products</div>
        <div className="col-lg-3 col-xs-12 drp_dwn_dv">
          <select className="drp_dwn">
            <option>Price</option>
            <option>High-to-low</option>
            <option>Low-to-high</option>
          </select>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-2 fl_br_2">
          <div className="">1</div>
          <div className="">/</div>
          <div className="">12</div>
          <div className="np-btn">
            <span className="gtr_slmr_1 mx-2">&#60;</span>
            <span className="gtr_slmr_2 mx-2">&#62;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filterbar;
