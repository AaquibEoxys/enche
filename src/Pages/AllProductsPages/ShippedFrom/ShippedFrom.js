import React from "react";
import "./ShippedFrom.scss";

const ShippedFrom = () => {
  return (
    <div className="main">
      <div className="fw-bold">Shipped From</div>
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" for="flexCheckDefault">
          Default checkbox
        </label>
      </div>
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
        />
        <label className="form-check-label" for="flexCheckChecked">
          Checked checkbox
        </label>
      </div>
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label className="form-check-label" for="flexCheckDefault">
          Default checkbox
        </label>
      </div>
      <div className="form-check mt-3">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
        />
        <label className="form-check-label" for="flexCheckChecked">
          Checked checkbox
        </label>
      </div>
      <div className="more mt-3 mb-3">
        <select>
          <option>More</option>
        </select>
      </div>
      <hr />
    </div>
  );
};

export default ShippedFrom;
