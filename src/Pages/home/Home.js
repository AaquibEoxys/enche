import React from "react";

import Images from "../../components/Images/Images";
import SubHeader from "../../components/subHead/SubHeader";
import "./home.scss";

const Home = () => {
  return (
    <>
      <SubHeader />
      <div className="home_banner">
        <div className="container">
          <div className="banner_back row">
            <div className="d-flex">
              <div className="col-lg-2">bjkkb</div>
              <div className="col-lg-10">
                <img src={Images?.banners} alt="" className="banner_img" />
              </div>
            </div>
            <div>
              <div className="stores_title"> Stores For You </div>
              <div className="stores_cart">
                <div className="stores_cart_align">
                  <img src={Images?.charity} alt="" />
                  <span> Charity Cart</span>
                </div>
                <div className="stores_cart_align">
                  <img src={Images?.enchepre} alt="" />
                  <span> enchepreneur </span>
                </div>
                <div className="stores_cart_align">
                  <img src={Images?.encheff} alt="" />
                  <span> encheffiliate</span>
                </div>
                <div className="stores_cart_align">
                  <img src={Images?.b2b} alt="" />
                  <span> B2B </span>
                </div>
                <div className="stores_cart_align">
                  <img src={Images?.fluencer} alt="" />
                  <span> enchefluencer </span>
                </div>
                <div className="stores_cart_align">
                  <img src={Images?.b2c} alt="" />
                  <span> B2C </span>
                </div>
                <div className="stores_cart_align">
                  <img src={Images?.C2C} alt="" />
                  <span> C2C </span>
                </div>
                <div className="stores_cart_align">
                  <img src={Images?.Dropship} alt="" />
                  <span> Dropship </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="charity_cart">
          <div className="container">
            <div className="explore_head"> Explore our </div>
            <div className="explore_subhead"> Charity Cart </div>
            <div className="exp_imgs"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
