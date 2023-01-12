import React from "react";
import Images from "../../../components/Images/Images";
import "./Navbar.scss";

const Navbar = () => {
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
                {/* <div> Select Your Role </div> */}
                <div className="role_option">
                  {/* Select Your Role */}
                  <div className="dashboard_role">
                    <div>
                      <div className="role_div">Buyer</div>
                    </div>
                    <div>
                      <div className="role_div">Merchant</div>
                      <div className="role_div">enchepreneur</div>
                      <div className="role_div">encheffiliate</div>
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
