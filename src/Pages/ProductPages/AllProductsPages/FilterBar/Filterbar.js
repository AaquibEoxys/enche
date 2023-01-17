import React from "react";
import "./Filterbar.scss";

const Filterbar = () => {
  return (
    <div className="flr_bar mb-4 mx-2 row">
      <div className="flr_bar_1 col-lg-10  col-sm-10 col-xs-6 pt-2">
        <div className="col-1 sortby">Sort By</div>
        <div className="col-2 relevance">Relevance</div>
        <div className="col-2 latest">Latest</div>
        <div className="col-2 topProducts">Top Products</div>
        <div className="col-3 drp_dwn_dv">
          <select className="drp_dwn">
            <option>action</option>
            <option>action01</option>
            <option>action02</option>
          </select>
        </div>
      </div>
      <div className="flr_bar_2 col-lg-2 col-sm-2 col-xs-6 pt-2">
        <div className="col mt-2 fl_br_2">
          <div className="">1</div>
          <div className="">/</div>
          <div className="">12</div>
        </div>
        <div className="col np-btn">
          <span className="gtr_slmr mr-3">&#60;</span>
        </div>
        <div className="col np-btn">
          <span className="gtr_slmr">&#62;</span>
        </div>
      </div>
    </div>
  );
};

export default Filterbar;
