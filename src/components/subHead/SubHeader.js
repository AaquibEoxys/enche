import React, { useState } from "react";
import logo from "../../assets/images/logo.svg";
import search from "../../assets/images/search.svg";
import truck from "../../assets/images/truck.svg";
import bell from "../../assets/images/bell.svg";
import heart from "../../assets/images/heart.svg";
import cart from "../../assets/images/cart.svg";
import Images from "../Images/Images";
import "./subHeader.scss";
import { Link } from "react-router-dom";
import $ from "jquery";

const SubHeader = () => {
  const [drop, setDrop] = useState(false);
  const [curr, setCurr] = useState(false);
  const [selectedLang, setSelectedLang] = useState({
    // logo: Images.langLogo,
    language: "Select Langauge",
  });
  const [value, setValue] = useState({ currency: "usd" });
  const [selectedCurrency, setSelectedCurrency] = useState({
    logo: Images.usa,
    language: "MYR",
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
      setDrop(false);
      setCurr(false);
    }
  });

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
                <div className="subhead_icon">
                  <img src={bell} alt="" />
                  <div className="notification">2</div>
                </div>
                <div className="subhead_icon">
                  <img src={heart} alt="" />
                  <div className="notification">3</div>
                </div>
                <div className="subhead_icon">
                  <img src={cart} alt="" />
                  <div className="notification">5</div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="news_contain">
              <div className="search_svg"></div>
              <div className="search_bar">
                <div className="home_search">
                  <div> KUDOS </div>
                  <div> Newsletter </div>
                  <div> Help </div>
                  <div> Contact Us </div>
                  <div> About Us </div>
                </div>
              </div>
              <div className="trac_btn" title="track my order"></div>
              <div className="home_icons"></div>
            </div>
          </div>
          <div className="home_news">
            <div> KUDOS </div>
            <div> Newsletter </div>
            <div> Help </div>
            <div> Contact Us </div>
            <div> About Us </div>
            <div className="header_resp_lang" name="level">
              <div className="nav_lang_div">
                <div className="nav_lang_img">
                  <img src={selectedLang?.logo} alt="" />
                </div>
                <div className="nav_lang_lebel" onClick={() => setDrop(!drop)}>
                  {selectedLang?.language}&nbsp;
                  <i className="fa fa-chevron-down"></i>
                </div>
                {drop ? (
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
                        <div className="resp_lang_option">
                          <div className="country_flag">
                            <img src={item.img} alt="" />
                          </div>
                          <div className="country_langaue">{item.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
            <div
              value={value?.currency}
              name="currency"
              onChange={(e) => setValue({ [e.target.name]: e.target.value })}
              onClick={() => setCurr(!curr)}
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
                {curr ? (
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
                ) : null}
              </div>
            </div>
          </div>
          <div className="responsive_lang"></div>
        </div>
      </div>
    </>
  );
};

export default SubHeader;
