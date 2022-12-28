import React from "react";
import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/search.svg";
import truck from "../../assets/images/truck.svg";
import bell from "../../assets/images/bell.svg";
import heart from "../../assets/images/heart.svg";
import cart from "../../assets/images/cart.svg";

const SubHeader = () => {
  return (
    <>
      <div className="home_page">
        <div className="home_Head">
          <div className="container home_pageSearch">
            <div>
              {/* <SVG path="assets/logo.svg" /> */}
              <img src={logo} alt="" className="search_svg" />
            </div>
            <div className="search_bar">
              <div className="home_search">
                <input
                  type="text"
                  placeholder="Search for products, brand or shop"
                  className="home_inp"
                />
                <div className="inputSearch">
                  <img src={search} alt="" className="search_icon" />
                  <span> SEARCH </span>
                </div>
              </div>
            </div>
            <div className="trac_btn">
              <img src={truck} alt="" className="search_icon" />
              <span> TRACK MY ORDER </span>
            </div>
            <div className="home_icons">
              <img src={bell} alt="" />
              <img src={heart} alt="" />
              <img src={cart} alt="" />
            </div>
          </div>
          <div className="home_news">
            <div> KUDOS </div>
            <div> Newsletter </div>
            <div> Help </div>
            <div> Contact Us </div>
            <div> About Us </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubHeader;
