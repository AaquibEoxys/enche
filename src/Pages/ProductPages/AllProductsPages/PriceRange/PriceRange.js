import React from "react";
import "./PriceRange.scss";

const PriceRange = () => {
  return (
    <>
      <div className="row p_rng">
        <div className="p_rng_hd mb-3">Price Range</div>
        <div className="col-sm-6 p_rng_i">
          <input className="form-control" placeholder="RM MIN"></input>
        </div>
        <div className="col-sm-6 p_rng_i">
          <input className="form-control" placeholder="RM MAX"></input>
        </div>
        <div className="col-sm-12 btn-mid mt-3 mb-3">
          <button className="btn-grn btn">Apply</button>
        </div>
        <hr />
      </div>
    </>
  );
};

export default PriceRange;
