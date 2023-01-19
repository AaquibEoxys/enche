import React from "react";
import "./Filterbar.scss";

const Filterbar = () => {
  return (
    <div className="flr_bar mb-4 mx-2 row">
      <div className="flr_bar_1">
        <div className=" sortby">Sort By</div>
        <div className="relevance">Relevance</div>
        <div className="latest">Latest</div>
        <div className=" topProducts">Top Products</div>
        <div className="drp_dwn_dv">
          <select className="drp_dwn">
            <option>Price</option>
            <option>High-to-low</option>
            <option>Low-to-high</option>
          </select>
        </div>
        <div className=""></div>
        <div className="fl_br_2">
          <div className="pagination_top"> <span> 1 </span>/12 </div>
          <div className="np-btn">
            <span className="gtr_slmr_1">&#60;</span>
            <span className="gtr_slmr_2">&#62;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filterbar;
