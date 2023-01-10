import React from "react";
import "./MyAccount.scss";
import Images from "../../../../../../components/Images/Images";
import { Link } from "react-router-dom";

const MyAccount = () => {
  return (
    <>
      <div className="my_account">
        <div>
          <div className="profile_head">Profile</div>
          <div className="">Manage and protect your account</div>
          <hr />
          <div className="row mt-4">
            <div className="col-8">
              <div className="row">
                <div className="row user_details">
                  <div className="col-lg-3">
                    <div className="form_style">Username</div>
                  </div>
                  <div className="col-lg-9 user_details_bold">bluepuff666</div>
                </div>
                <div className="row user_details">
                  <div className="col-lg-3">
                    <div className="form_style">Name</div>
                  </div>
                  <div className="col-lg-9 user_details_bold">
                    <input type="text" className="user_inp" />
                  </div>
                </div>
                <div className="row user_details">
                  <div className="col-lg-3">
                    <div className="form_style">Email</div>
                  </div>
                  <div className="col-lg-9 user_email">
                    da******@hotmail.com <Link> Change </Link>
                  </div>
                </div>
                <div className="row user_details">
                  <div className="col-lg-3">
                    <div className="form_style">Phone Number</div>
                  </div>
                  <div className="col-lg-9 user_email">
                    ********46 <Link> Change </Link>
                  </div>
                </div>
                <div className="row user_details">
                  <div className="col-lg-3">
                    <div className="form_style">Gender</div>
                  </div>
                  <div className="col-lg-9 user_radio">
                    <div className="radio_gap">
                      <input type="radio" />
                      <span>Male</span>
                    </div>
                    <div className="radio_gap">
                      <input type="radio" />
                      <span>Female</span>
                    </div>
                    <div className="radio_gap">
                      <input type="radio" />
                      <span>Other</span>
                    </div>
                  </div>
                </div>
                <div className="row user_details">
                  <div className="col-lg-3">
                    <div className="form_style">Date of birth</div>
                  </div>
                  <div className="col-lg-9 user_details_bold">
                    <input type="date" />
                  </div>
                </div>
                <div className="row user_details">
                  <div className="col-lg-3"></div>
                  <div className="col-lg-9 details_btn">
                    <button>Publish</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4">
              {/* <div className="profile_divider"> </div> */}
              <div className="profile_img_select">
                <div className="profile_img">
                  <img src={Images.test} alt="" />
                </div>
                <button className="upload_btn"> Select Image </button>
                <div>
                  <div className="img_description"> File size maximum 1 MB</div>
                  <div className="img_description">
                    File extension: .JPEG, .PNG
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyAccount;
