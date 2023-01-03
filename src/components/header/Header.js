import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.scss";
import "../../assets/css/style.css";
import Images from "../Images/Images";
import $ from "jquery";

const Header = () => {
  const [value, setValue] = useState({ currency: "usd" });
  const [menu, setMenu] = useState(false);
  const [searchTab, setSearchTab] = useState(false);

  const currencyList = [
    {
      value: "USD",
    },
    {
      value: "INR",
    },
    {
      value: "DHR",
    },
    {
      value: "KD",
    },
  ];
  const langaugeList = [
    { name: "English" },
    { name: "Hindi" },
    { name: "Arabic" },
    { name: "French" },
  ];

  $(document).mouseup(function (e) {
    if ($(e.target).closest("#menu_barContract").length === 0) {
      setMenu(false);
    }
  });

  return (
    <>
      <div className="navbar_ui col-lg-12 col-md-12">
        <div className="container">
          <div className="navbar_align">
            <Link to="/" className="navigation_link">
              <div> DOWNLOAD ENCHE APPS </div>
            </Link>
            <div className="nav_right">
              <select
                value={value?.currency}
                name="currency"
                onChange={(e) => setValue({ [e.target.name]: e.target.value })}
                className="curreny_option navigation_link"
              >
                {currencyList?.map((item, key) => (
                  <option
                    value={item?.value}
                    key={key}
                    className="curencyOption"
                  >
                    {item.value}
                  </option>
                ))}
              </select>
              <select
                className="curreny_option navigation_link"
                name="level"
                onChange={(e) => setValue({ [e.target.name]: e.target.value })}
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
              <select
                className="curreny_option navigation_link"
                name="level"
                // value={data.level}
                onChange={(e) => setValue({ [e.target.name]: e.target.value })}
              >
                <option defaultValue="Join As" hidden>
                  Join As
                </option>
                <option value="abc" className="curencyOption">
                  Buyer
                </option>
                <option value="abc" className="curencyOption">
                  Seller
                </option>
              </select>
              <Link to="/signup" className="navigation_link nav_signIn">
                <span>Sign Up</span>
              </Link>
              <Link to="/signin" className="navigation_link">
                Login
              </Link>
            </div>
          </div>
          <div className="resp_navbar">
            <div className="">
              <img src={Images.menu} alt="" onClick={() => setMenu(true)} />
            </div>
            <div className="homepage_logo">
              <Link to="/">
                <img src={Images.logo} alt="" />
              </Link>
            </div>
            <div className="search_icon">
              <img
                src={Images.search}
                alt=""
                onClick={() => setSearchTab(true)}
              />
            </div>
            {menu ? (
              <div id="menu_barContract" className="toggle_menu">
                <div className="menu_category_list">
                  <div className="menu_category"> Select Category</div>
                  <span className="list_category"> Fashion </span>
                  <span className="list_category">Beauty & Personal Care</span>
                  <span className="list_category"> Mommy & Babies </span>
                  <span className="list_category"> Home Appliance </span>
                  <span className="list_category"> Health & Wellness </span>
                  <span className="list_category"> Pets </span>
                  <span className="list_category"> Service </span>
                  <span className="list_category">
                    Tool & Home Improvenment
                  </span>
                  <span className="list_category"> Sports and Hobbies </span>
                  <span className="list_category"> Automotive </span>
                  <span className="list_category">Electronics Accessories</span>
                  <span className="list_category"> Muslim Fashion </span>
                  <span className="list_category"> Agriculture </span>
                </div>
              </div>
            ) : null}
            {searchTab ? (
              <div className="search_back">
                <div id="menu_barContract" className="search_menu">
                  <div className="menu_search_list">
                    <div className="menu_category">
                      <select
                        className="curreny_option"
                        name="level"
                      >
                        <option defaultValue="All" hidden>
                          All
                        </option>
                        <option value="abc" className="curencyOption">
                          Buyer
                        </option>
                        <option value="abc" className="curencyOption">
                          Seller
                        </option>
                      </select>
                    </div>
                    <div className="menu_search_div"> <input type="text" placeholder="Search for products" className="menu_inp" /> </div>
                    <div className="cross_icon"> <img src={Images.cross} alt="" onClick={() => setSearchTab(false)} /> </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
