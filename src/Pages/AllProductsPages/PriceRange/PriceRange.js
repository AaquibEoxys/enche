import React from "react";
import "./PriceRange.scss";

const PriceRange = () => {
  return (
    <>
      <div className="row">
        <div className="fw-bold mb-3">Price Range</div>
        <div className="col-sm-6">
          <input
            class="form-control"
            type="number"
            placeholder="RM MIN"
          ></input>
        </div>
        <div className="col-sm-6">
          <input
            class="form-control"
            type="number"
            placeholder="RM MAX"
          ></input>
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
