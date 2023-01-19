import React from "react";
import "./BusinessModule.scss";

const BusinessModule = () => {
  return (
    <div className="main">
      <div className="bm_hdr">Business Module</div>
      <div className="form-check mt-3">
        <input className="form-check-input" type="checkbox" value="" />
        <label className="form-check-label" for="#">
          Default checkbox
        </label>
      </div>
      <div className="form-check mt-3">
        <input className="form-check-input" type="checkbox" value="" />
        <label className="form-check-label" for="#">
          Checked checkbox
        </label>
      </div>
      <div className="form-check mt-3">
        <input className="form-check-input" type="checkbox" value="" />
        <label className="form-check-label" for="#">
          Default checkbox
        </label>
      </div>
      <div className="form-check mt-3">
        <input className="form-check-input" type="checkbox" value="" />
        <label className="form-check-label" for="#">
          Checked checkbox
        </label>
      </div>
      <hr />
    </div>
  );
};

export default BusinessModule;
