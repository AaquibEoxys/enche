import React from "react";
import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/search.svg";
import truck from "../../assets/images/truck.svg";
import bell from "../../assets/images/bell.svg";
import heart from "../../assets/images/heart.svg";
import cart from "../../assets/images/cart.svg";
import "./subHeader.scss";
import { Link } from "react-router-dom";

const SubHeader = () => {
  const langaugeList = [
    { name: "English" },
    { name: "Hindi" },
    { name: "Arabic" },
    { name: "French" },
  ];
  return (
    <>
      <div className="home_page">
        <div className="home_Head">
          <div className="container">
            <div className="home_pageSearch">
              <div>
                <Link to="/">
                  <img src={logo} alt="" className="search_svg" />
                </Link>
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
              <div className="trac_btn" title="track my order">
                <img src={truck} alt="" className="search_icon" />
                <span> TRACK MY ORDER </span>
              </div>
              <div className="home_icons">
                <img src={bell} alt="" />
                <img src={heart} alt="" />
                <img src={cart} alt="" />
              </div>
            </div>
          </div>
          <div className="home_news">
            <div> KUDOS </div>
            <div> Newsletter </div>
            <div> Help </div>
            <div> Contact Us </div>
            <div> About Us </div>
          </div>
          <div className="responsive_lang">
            <select
              className="curreny_option navigation_link"
              name="level"
              // value={data.level}
            >
              <option defaultValue="English" hidden>
                English
              </option>
              {langaugeList.map((item, key) => (
                <option value={item.name} className="curencyOption" key={key}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubHeader;
