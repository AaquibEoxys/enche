import React, { useState } from "react";
import Images from "../../../components/Images/Images";
import "./Navbar.scss";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState('buyer')
  return (
    <>
      <div className="container">
        <div className="row">
          {/* <Col> */}
          <div className="dashboard_header_align">
            <div className="">
              <div className="dashbaord_home_logo">
                <img src={Images?.logo} alt="logo" />
              </div>
            </div>
            <div className="dashboard_user ">
              <div className="dashboard_user_icon ">
                <div className="user_icon">
                  <img src={Images.user2} alt="" />
                </div>
                <div> Anisah </div>
                <div> | </div>
              </div>
              <div>
                <div className="select_role"> Select Your Role </div>
                <div className="role_option">
                  <div className={`dashboard_role ${menuActive == 'buyer' ?  'active' : ''}`}>
                    <div>
                      <div  className="role_div transeparent" onClick={()=>setMenuActive('buyer')}>Buyer</div>
                    </div>
                    <div className="dashboard_role_option">
                      <div  className={`role_div ${menuActive == 'merchant' ?  'active' : ''}`} onClick={()=>setMenuActive('merchant')}>Merchant</div>
                      <div className={`role_div ${menuActive == 'enchepreneur' ?  'active' : ''}`} onClick={()=>setMenuActive('enchepreneur')}>enchepreneur</div>
                      <div className={`role_div ${menuActive == 'encheffiliate' ?  'active' : ''}`} onClick={()=>setMenuActive('encheffiliate')}>encheffiliate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </Col> */}
        </div>
      </div>
    </>
  );
};


export default Navbar;
