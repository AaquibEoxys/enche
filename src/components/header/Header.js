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
  const [drop, setDrop] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState({
    logo: Images.usa,
    language: "MYR",
  });
  const [selectedLang, setSelectedLang] = useState({
    logo: Images.langLogo,
    language: "Select Langauge",
  });
  const currencyList = [
    {
      name: "TRY",
      img: Images.turkey,
    },
    {
      name: "IDR",
      img: Images.indonesia,
    },
    {
      name: "VND",
      img: Images.vi,
    },
    {
      name: "MYR",
      img: Images.usa,
    },
  ];
  const langaugeList = [
    { name: "Malay", img: Images.usa },
    { name: "Turkey", img: Images.turkey },
    { name: "English", img: Images.US },
    { name: "Indonesia", img: Images.indonesia },
    { name: "Vietnamese", img: Images.vi },
  ];

  $(document).mouseup(function (e) {
    if (
      $(e.target).closest("#menu_barContract, #language, #currency").length ===
      0
    ) {
      setMenu(false);
      setDrop(false);
    }
  });

  return (
    <>
      <div className="navbar_ui col-lg-12 col-md-12">
        <div className="container" style={{ height: "100%" }}>
          <div className="navbar_align">
            <Link to="/" className="navigation_link">
              <div> DOWNLOAD ENCHE APPS </div>
            </Link>
            <div className="nav_right">
              <div
                value={value?.currency}
                name="currency"
                onChange={(e) => setValue({ [e.target.name]: e.target.value })}
                className="curreny_option navigation_link lang_drop"
              >
                <div className="nav_lang_div" id="currency">
                  <div className="nav_lang_img">
                    <img src={selectedCurrency?.logo} alt="" />
                  </div>
                  <div className="nav_lang_lebel">
                    {selectedCurrency?.language} &nbsp;
                    <i className="fa fa-chevron-down"></i>
                  </div>
                  <div id="menu_barContract" className="curr_option">
                    {currencyList.map((item, key) => (
                      <div
                        className="option_with_flag"
                        onClick={(e) => {
                          setSelectedCurrency({
                            logo: item.img,
                            language: item.name,
                          });
                        }}
                        key={key}
                      >
                        <div className="country_flag">
                          <img src={item.img} alt="" />
                        </div>
                        <div className="country_langaue">{item.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div
                className="curreny_option navigation_link lang_drop"
                name="level"
                onChange={(e) => setValue({ [e.target.name]: e.target.value })}
              >
                <div className="nav_lang_div">
                  <div className="nav_lang_img">
                    <img src={selectedLang?.logo} alt="" />
                  </div>
                  <div
                    className="nav_lang_lebel"
                    // id="language"
                    // onClick={() => setDrop(!drop)}
                  >
                    {selectedLang?.language}&nbsp;
                    <i className="fa fa-chevron-down"></i>
                  </div>
                  <div id="menu_barContract" className="drop_down">
                    {langaugeList.map((item, key) => (
                      <div
                        className="option_with_flag"
                        onClick={(e) => {
                          setSelectedLang({
                            logo: item.img,
                            language: item.name,
                          });
                        }}
                        key={key}
                      >
                        <div className="country_flag">
                          <img src={item.img} alt="" />
                        </div>
                        <div className="country_langaue">{item.name}</div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* {drop ? ( */}
                {/* ) : null} */}
              </div>
              <select
                className="curreny_option navigation_link"
                name="level"
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
              <div className="nav_sign">
                <Link to="/signup" className="navigation_link nav_signIn">
                  <span>Sign Up</span>
                </Link>
                <Link to="/signin" className="navigation_link">
                  <span> Login </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="resp_navbar">
            <div className="">
              <img src={Images.menu} alt="" onClick={() => setMenu(true)} />
            </div>
            <div className="homepage_logo">
              <Link to="/">
                <img src={Images.homeLogo2} alt="" />
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
                  <div className="menu_category">
                    Select Category
                    <span className="cross_icon">
                      <img
                        src={Images.cross}
                        alt=""
                        onClick={() => setMenu(false)}
                      />
                    </span>
                  </div>
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
              <>
                <div id="menu_barContract" className="search_menu">
                  <div className="menu_search_list">
                    <div className="menu_category">
                      <select className="curreny_option" name="level">
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
                    <div className="menu_search_div">
                      <input
                        type="text"
                        placeholder="Search for products"
                        className="menu_inp"
                      />
                    </div>
                    <div className="cross_icon">
                      <img
                        src={Images.cross}
                        alt=""
                        onClick={() => setSearchTab(false)}
                      />
                    </div>
                  </div>
                </div>
                <div className="search_back"></div>
              </>
            ) : null}
          </div>
          <div className="fixed_navbar">
            <div className="container">
              <div className="fixed_list">
                <div className="icon_align">
                  <div className="fixed_icon">
                    <img src={Images.home} alt="" />
                  </div>
                  <Link to="/" className="fixed_icon_lebel">
                    <div className="icon_lebel">Home</div>
                  </Link>
                </div>
                <div className="icon_align">
                  <div className="fixed_icon">
                    <img src={Images.heart2} alt="" />
                  </div>
                  <Link className="fixed_icon_lebel">
                    <div className="icon_lebel">Wishlist</div>
                  </Link>
                </div>
                <div className="icon_align">
                  <div className="fixed_icon">
                    <img src={Images.shopping} alt="" />
                  </div>
                  <Link className="fixed_icon_lebel">
                    <div className="icon_lebel">Cart</div>
                  </Link>
                </div>
                <div className="icon_align">
                  <div className="fixed_icon">
                    <img src={Images.profile} alt="" />
                  </div>
                  <Link to="/signup" className="fixed_icon_lebel">
                    <div className="icon_lebel">Account</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
