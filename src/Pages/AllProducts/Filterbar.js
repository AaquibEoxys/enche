import React from "react";

const Filterbar = () => {
  return (
    <>
      <div className="flr_bar">
        <div className="flr_bar_1 col-sm-9">
          <div className="col">Sort By</div>
          <div className="col">Relevance</div>
          <div className="col">Latest</div>
          <div className="col">Top Products</div>
          <div className="col">
            <select>
              <option>action</option>
              <option>action01</option>
              <option>action02</option>
            </select>
          </div>
        </div>
        <div className="flr_bar_2 col-sm-3">
          <div className="col">1/12</div>
          <div className="col">
            <button>btn</button>
          </div>
          <div className="col">
            <button>btn</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filterbar;
