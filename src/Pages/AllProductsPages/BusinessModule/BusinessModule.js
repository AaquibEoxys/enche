import React from "react";
import "./BusinessModule.scss";

const BusinessModule = () => {
  return (
    <>
      <div className="fw-bold">Business Module</div>
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
      <hr />
    </>
  );
};

export default BusinessModule;
