import React from "react";
import "./Filterbar.scss";

const Filterbar = () => {
  return (
    <>
      <div className="flr_bar row">
        <div className="flr_bar_1 col-sm-10">
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
        <div className="flr_bar_2 col-sm-2">
          <div className="col">1/12</div>
          <div className="col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-right"
              viewBox="0 0 16 16"
            >
              <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
            </svg>
          </div>
          <div className="col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-caret-right"
              viewBox="0 0 16 16"
            >
              <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Filterbar;
