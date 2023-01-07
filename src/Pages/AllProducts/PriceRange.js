import React from "react";
import "./AllProduct.scss";

const PriceRange = () => {
  return (
    <>
      <div className="row">
        <div className="col-sm">
          <input
            class="form-control"
            type="number"
            placeholder="RM MIN"
          ></input>
        </div>
        <div className="col-sm">
          <input
            class="form-control"
            type="number"
            placeholder="RM MAX"
          ></input>
        </div>
        <div className="col-xs">
          <button className="btn green-btn">Apply</button>
        </div>
      </div>
    </>
  );
};

export default PriceRange;
