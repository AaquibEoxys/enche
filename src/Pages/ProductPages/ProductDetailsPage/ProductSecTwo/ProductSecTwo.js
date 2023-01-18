import React from "react";
import "./ProductSecTwo.scss";
import Image from "../../../../components/Images/Images";

const ProductSecTwo = () => {
  return (
    <div className="container mt-4">
      <div className="row sec_two p-2">
        <div className="sect_logo col-2">
          <img src={Image.encheEllipse} />
        </div>
        <div className="sect_cht_vs col-3">
          <div className="sect_cht_vs_s1">
            <div className="sect_cht_vs_s1_cn">enche.com</div>
            <div className="sect_cht_vs_s1_msg">Active 15 Minutes Ago</div>
            <div className="btn_sec row">
              <div className="btn_cht col-6 mt-2">
                <div className="btn_ct_sh p-1">
                  <div className="chat_icon mx-1">
                    <img src={Image.chatNow} />
                  </div>
                  <div className="chat_msg">Chat Now</div>
                </div>
              </div>
              <div className="btn_vshp col-6 mt-2 ">
                <div className="btn_ct_sh p-1">
                  <div className="vshp_icon mx-1 ">
                    <img src={Image.viewShop} />
                  </div>
                  <div className="vshp_msg">Shop Now</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sect_rat_prdc sect_2 col-2">
          <div className="rtng sect_dta">
            <div className="dt_hd">Rating</div>
            <div className="dt_vlu">148.3k</div>
          </div>
          <div className="prdct sect_dta">
            <div className="dt_hd">Products</div>
            <div className="dt_vlu">1.4k</div>
          </div>
        </div>
        <div className="resr_rest  sect_2 col-3">
          <div className="rsprt sect_dta">
            <div className="dt_hd">Response Rate</div>
            <div className="dt_vlu">95%</div>
          </div>
          <div className="rsptm sect_dta">
            <div className="dt_hd">Response Time</div>
            <div className="dt_vlu">within hours</div>
          </div>
        </div>
        <div className="jnd_flr  sect_2 col-2">
          <div className="jnd sect_dta">
            <div className="dt_hd">Joined</div>
            <div className="dt_vlu">6 years ago</div>
          </div>
          <div className="flwr sect_dta">
            <div className="dt_hd">Follower</div>
            <div className="dt_vlu">25.8k</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSecTwo;
